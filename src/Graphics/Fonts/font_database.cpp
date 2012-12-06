
/******************************************************************************
* MODULE     : font_database.cpp
* DESCRIPTION: Database with the available fonts
* COPYRIGHT  : (C) 2012  Joris van der Hoeven
*******************************************************************************
* This software falls under the GNU general public license version 3 or later.
* It comes WITHOUT ANY WARRANTY WHATSOEVER. For details, see the file LICENSE
* in the root directory or <http://www.gnu.org/licenses/gpl-3.0.html>.
******************************************************************************/

#include "font.hpp"
#include "iterator.hpp"
#include "file.hpp"
#include "convert.hpp"
#include "merge_sort.hpp"
#include "Freetype/tt_file.hpp"

/******************************************************************************
* Global management of the font database
******************************************************************************/

static bool fonts_loaded= false;
hashmap<tree,tree> font_table (UNINIT);

#ifndef QTTEXMACS

void
font_database_build (url u) {
  (void) u;
}

#endif

void
font_database_load () {
  if (fonts_loaded) return;
  fonts_loaded= true;
  url home ("$TEXMACS_HOME_PATH");
  url def ("$TEXMACS_PATH");
  url u= (home | def) * url ("fonts/font-database.scm");
  u= resolve (u);
  if (!is_none (u)) {
    string s;
    if (!load_string (u, s, false)) {
      tree t= block_to_scheme_tree (s);
      for (int i=0; i<N(t); i++)
        if (is_func (t[i], TUPLE, 2))
          font_table (t[i][0])= t[i][1];
    }
  }
}

struct font_less_eq_operator {
  static bool leq (scheme_tree t1, scheme_tree t2) {
    if (is_atomic (t1) && is_atomic (t2))
      return t1->label <= t2->label;
    if (is_atomic (t1)) return true;
    if (is_atomic (t2)) return false;
    if (N(t1) < N(t2)) return true;
    if (N(t2) > N(t1)) return false;
    for (int i=0; i<N(t1); i++) {
      if (leq (t1[i], t2[i]) && t1[i] != t2[i]) return true;
      if (leq (t2[i], t1[i]) && t2[i] != t1[i]) return false;
    }
    return true;
  }
};

void
font_database_save () {
  array<scheme_tree> r;
  iterator<tree> it= iterate (font_table);
  while (it->busy ()) {
    tree key= it->next ();
    r << tuple (key, font_table [key]);
  }
  merge_sort_leq<scheme_tree,font_less_eq_operator> (r);
  string s= scheme_tree_to_block (tree (TUPLE, r));
  save_string ("$TEXMACS_HOME_PATH/fonts/font-database.scm", s);
}

/******************************************************************************
* Only keep existing files in database
******************************************************************************/

static hashmap<tree,tree> new_font_table (UNINIT);
static hashmap<tree,tree> back_font_table (UNINIT);

void
build_back_table () {
  iterator<tree> it= iterate (font_table);
  while (it->busy ()) {
    tree key= it->next ();
    if (is_func (key, TUPLE, 2) && is_tuple (font_table [key])) {
      tree im= font_table [key];
      for (int i=0; i<N(im); i++) {
        tree loc = im[i];
        tree names (TUPLE);
        if (back_font_table->contains (loc))
          names= back_font_table [loc];
        names << key;
        back_font_table (loc)= names;
      }
    }
  }  
}

void
font_database_collect (url u) {
  if (is_or (u)) {
    font_database_collect (u[1]);
    font_database_collect (u[2]);
  }
  else if (is_directory (u)) {
    bool err;
    array<string> a= read_directory (u, err);
    for (int i=0; i<N(a); i++)
      if (!starts (a[i], "."))
        if (ends (a[i], ".ttf") ||
            ends (a[i], ".ttc") ||
            ends (a[i], ".otf"))
          if (back_font_table->contains (a[i])) {
            tree keys= back_font_table [a[i]];
            for (int j=0; j<N(keys); j++) {
              tree key= keys[j];
              tree im (TUPLE);
              if (new_font_table->contains (key))
                im= new_font_table [key];
              im << a[i];
              new_font_table (key)= im;
            }
          }
  }
}

void
font_database_filter () {
  new_font_table = hashmap<tree,tree> (UNINIT);
  back_font_table= hashmap<tree,tree> (UNINIT);
  build_back_table ();
  url u= tt_font_path ();
  font_database_collect (u);
  font_table= new_font_table;
  new_font_table = hashmap<tree,tree> (UNINIT);
  back_font_table= hashmap<tree,tree> (UNINIT);
}

/******************************************************************************
* Querying the database
******************************************************************************/

array<string>
font_database_families () {
  hashmap<string,bool> families;
  iterator<tree> it= iterate (font_table);
  while (it->busy ()) {
    tree key= it->next ();
    if (is_func (key, TUPLE, 2))
      families (key[0]->label)= true;
  }
  array<string> r;
  iterator<string> it2= iterate (families);
  while (it2->busy ())
    r << it2->next ();
  merge_sort (r);
  return r;
}

array<string>
font_database_styles (string family) {
  array<string> r;
  iterator<tree> it= iterate (font_table);
  while (it->busy ()) {
    tree key= it->next ();
    if (is_func (key, TUPLE, 2) && key[0]->label == family)
      r << key[1]->label;
  }
  merge_sort (r);
  return r;
}

array<string>
font_database_search (string family, string style) {
  array<string> r;
  tree key= tuple (family, style);
  if (font_table->contains (key)) {
    tree im= font_table [key];
    for (int i=0; i<N(im); i++)
      r << im[i]->label;
  }
  return r;
}

array<string>
font_database_search (string fam, string var, string series, string shape) {
  string family= fam;
  (void) var;
  string style = "Normal";
  if (series == "bold") {
    style= "Bold";
    if (shape == "italic") style= "Bold Italic";
  }
  else {
    if (shape == "italic") style= "Italic";
  }
  return font_database_search (family, style);
}
