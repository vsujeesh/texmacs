<TeXmacs|1.0.4.6>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|svmono|1.0>

      <\src-purpose>
        The Springer-Verlag Monograph style.
      </src-purpose>

      <\src-copyright|2005>
        Joris van der Hoeven
      </src-copyright>

      <\src-license>
        This <TeXmacs> style file falls under the <hlink|GNU general public
        license|$TEXMACS_PATH/LICENSE> and comes WITHOUT ANY WARRANTY
        WHATSOEVER. If you do not have a copy of the license, then write to
        the Free Software Foundation, Inc., 59 Temple Place - Suite 330,
        Boston, MA 02111-1307, USA.
      </src-license>
    </src-title>
  </active*>

  <use-package|std|env-base|env-math|env-float|header-book|title-base|section-book|std-latex>

  <assign|env-theorem-dtd|1.0>

  <active*|<\src-comment>
    TeX-like style parameters.
  </src-comment>>

  <assign|tex-odd-side-margin|<macro|63pt>>

  <assign|tex-even-side-margin|<macro|63pt>>

  <assign|tex-text-width|<macro|28pc>>

  \;

  <assign|tex-voffset|<macro|0pt>>

  <assign|tex-top-margin|<macro|0cm>>

  <assign|*tex-head-height|<macro|12pt>>

  <assign|tex-head-sep|<macro|12pt>>

  <assign|*tex-top-skip|<macro|10pt>>

  <assign|tex-text-height|<macro|540pt>>

  <assign|*tex-foot-height-heuristic|<macro|1em>>

  <assign|*tex-foot-skip|<macro|30pt>>

  \;

  <assign|tex-footnote-sep|<macro|7.7pt>>

  <assign|*tex-footnote-tm-barlen|<macro|0.4par>>

  <assign|*tex-column-sep|<macro|1.5cc>>

  <assign|*tex-float-sep|<macro|<tmlen|10pt|12pt|14pt>>>

  <assign|tex-margin-par-width|<macro|90pt>>

  <assign|*tex-margin-par-sep|<macro|10pt>>

  <active*|<\src-comment>
    Global layout.
  </src-comment>>

  <assign|font-base-size|10>

  <assign|par-first|15pt>

  <assign|par-line-sep|<macro|<tex-len|0pt|1pt|0pt>>>

  <active*|<src-short-comment|hfuzz and arraycolsep?>>

  \;

  <assign|*tex-jot|<macro|2pt>>

  <assign|*tex-above-display-skip|<macro|<tex-len|3mm|6pt|4pt>>>

  <assign|*tex-below-display-skip|<macro|<tex-len|3mm|6pt|4pt>>>

  <assign|*tex-above-display-short-skip|<macro|<tex-len|1mm|6pt|0pt>>>

  <assign|*tex-below-display-short-skip|<macro|<tex-len|2mm|4pt|4pt>>>

  <active*|<\src-comment>
    Sizes.
  </src-comment>>

  <assign|tiny|<macro|x|<with|font-base-size|5|par-sep|1pt|<arg|x>>>>

  <assign|very-small|<macro|x|<with|font-base-size|7|par-sep|1pt|<arg|x>>>>

  <assign|smaller|<macro|x|<small|<arg|x>>>>

  <assign|small|<macro|x|<style-with|src-compact|none|<with|font-base-size|9|par-sep|2pt|tex-above-display-skip|<macro|<tex-len|8.5pt|3pt|4pt>>|tex-below-display-skip|<macro|<tex-len|8.5pt|3pt|4pt>>|tex-above-display-short-skip|<macro|<tex-len|0pt|2pt|0pt>>|tex-below-display-short-skip|<macro|<tex-len|4pt|2pt|2pt>>|<arg|x>>>>>

  <assign|normal-size|<macro|x|<style-with|src-compact|none|<with|font-base-size|10|par-sep|0.2em|tex-above-display-skip|<macro|<macro|0.75fn>>|tex-below-display-skip|<macro|<macro|0.75fn>>|tex-above-display-short-skip|<macro|<macro|0.15fn>>|tex-below-display-short-skip|<macro|<macro|0.15fn>>|<arg|x>>>>>

  <assign|large|<macro|x|<with|font-base-size|12|par-sep|2pt|<arg|x>>>>

  <assign|larger|<macro|x|<with|font-base-size|14|par-sep|<minus|<tmlen|16dd>|<tmlen|14pt>>|<arg|x>>>>

  <assign|very-large|<macro|x|<with|font-base-size|17|par-sep|<minus|<tmlen|17dd>|<tmlen|17pt>>|<arg|x>>>>

  <assign|huge|<macro|x|<with|font-base-size|20|par-sep|5pt|<arg|x>>>>

  <assign|really-huge|<macro|x|<with|font-base-size|25|par-sep|5pt|<arg|x>>>>

  <active*|<\src-comment>
    Sectional macros.
  </src-comment>>

  <assign|part-size|<macro|x|<larger|<arg|x>>>>

  <assign|part-style|<macro|x|<with|font-series|bold|math-font-series|bold|<arg|x>>>>

  <assign|chap-size|<macro|x|<larger|<arg|x>>>>

  <assign|chap-style|<macro|x|<with|font-series|bold|math-font-series|bold|<arg|x>>>>

  <assign|sec-size|<macro|x|<large|<arg|x>>>>

  <assign|sec-style|<macro|x|<with|font-series|bold|math-font-series|bold|<arg|x>>>>

  <assign|subsec-size|<macro|x|<normal-size|<arg|x>>>>

  <assign|subsec-style|<macro|x|<with|font-series|bold|math-font-series|bold|<arg|x>>>>

  <assign|enrich-paragraph-long|true>

  \;

  <assign|part-number-title|<macro|num|title|<style-with|src-compact|none|<new-dpage*><blanc-page><no-indent><new-line><no-indent><wide-std-underlined|<chap-style|<chap-size|<htab|0mm><part-text><arg|num>>>><vspace|106pt><new-line><no-indent><part-style|<part-size|<htab|0mm><arg|title>>><vspace|10pt><no-page-break><no-indent*><right-flush>>>>

  <assign|part-title|<macro|title|<part-number-title||<arg|title>>>>

  <assign|part-numbered-title|<macro|title|<part-number-title|
  <the-part>|<arg|title>>>>

  \;

  <assign|chapter-number-title|<macro|num|title|<style-with|src-compact|none|<new-dpage*><no-indent><new-line><no-indent><wide-std-underlined|<chap-style|<chap-size|<arg|num>>>><vspace|10pt><new-line><no-indent><chap-style|<chap-size|<arg|title>>><vspace|106pt><no-page-break><no-indent*><right-flush>>>>

  <assign|chapter-title|<macro|title|<chapter-number-title||<arg|title>>>>

  <assign|chapter-numbered-title|<macro|title|<chapter-number-title|<the-chapter>|<arg|title>>>>

  <assign|appendic-numbered-title|<macro|title|<style-with|src-compact|none|<chapter-number-title|<appendix-text>
  <the-appendix>|<arg|title>>>>>

  \;

  <assign|section-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|<tex-len|24pt|4pt|4pt>><sec-style|<sec-size|<arg|name>>><vspace|<tex-len|12pt|4pt|4pt>>>>>>>

  <assign|subsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|<tex-len|17pt|4pt|4pt>><subsec-style|<subsec-size|<arg|name>>><vspace|<tex-len|10pt|4pt|4pt>>>>>>>

  <assign|subsubsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|<tex-len|17pt|4pt|4pt>><subsec-style|<normal-size|<arg|name>>><vspace|<tex-len|10pt|4pt|4pt>>>>>>>

  <assign|paragraph-title|<macro|name|<style-with|src-compact|none|<sectional-normal-italic|<style-with|src-compact|none|<vspace*|<tex-len|10pt|4pt|4pt>><normal-size|<arg|name>><vspace|<tex-len|10pt|4pt|4pt>>>>>>>

  <assign|subparagraph-title|<macro|name|<style-with|src-compact|none|<sectional-short-italic|<style-with|src-compact|none|<vspace*|<tex-len|5.388pt|4pt|4pt>><normal-size|<arg|name>><space|5pt>>>>>>

  <active*|<\src-comment>
    Section and environment numbering.
  </src-comment>>

  <assign|between-number-space|<macro|5pt>>

  <assign|sectional-sep|<macro|<space|<between-number-space>>>>

  <assign|*part-sep|<macro|<macro|7pt>>>

  <assign|paragraph-display-numbers|<macro|true>>

  <assign|subparagraph-display-numbers|<macro|true>>

  <active*|<\src-comment>
    Theorem-like environemments rendering.
  </src-comment>>

  <group-common-counter|theorem-env>

  <assign|theorem-sep|<macro|. >>

  \;

  <assign|new-theorem-bold-italic|<style-with|src-compact|none|<macro|env|name|<new-env|<arg|env>|<arg|name>|theorem-env|render-theorem-bold-italic>>>>

  <assign|new-theorem-bold-upright|<style-with|src-compact|none|<macro|env|name|<new-env|<arg|env>|<arg|name>|theorem-env|render-theorem-bold-upright>>>>

  <assign|new-theorem-italic-upright|<style-with|src-compact|none|<macro|env|name|<new-env|<arg|env>|<arg|name>|theorem-env|render-theorem-italic-upright>>>>

  \;

  <assign|render-theorem-generic|<macro|which|body|<padded-normal|1fn|1fn|<\surround|<arg|><arg|which><arg|>|>
    <arg|body>
  </surround>>>>

  <assign|render-theorem-bold-italic|<\macro|which|body>
    <\render-theorem-generic|<with|font-series|bold|<arg|which><theorem-sep>>>
      <\with|font-shape|italic>
        <arg|body>
      </with>
    </render-theorem-generic>
  </macro>>

  <assign|render-theorem-bold-upright|<\macro|which|body>
    <\render-theorem-generic|<with|font-series|bold|<arg|which><theorem-sep>>>
      <arg|body>
    </render-theorem-generic>
  </macro>>

  <assign|render-theorem-italic-upright|<\macro|which|body>
    <\render-theorem-generic|<with|font-shape|italic|<arg|which><theorem-sep>>>
      <arg|body>
    </render-theorem-generic>
  </macro>>

  <active*|<\src-comment>
    Theorem-like environments.
  </src-comment>>

  <new-theorem-bold-italic|theorem|Theorem>

  <new-theorem-bold-italic|corollary|Corollary>

  <new-theorem-bold-italic|definition|Definition>

  <new-theorem-bold-italic|lemma|Lemma>

  <new-theorem-bold-italic|proposition|Proposition>

  \;

  <new-theorem-bold-upright|exercise|Exercise>

  <new-theorem-bold-upright|problem|Problem>

  <new-theorem-bold-upright|solution|Solution>

  \;

  <new-theorem-italic-upright|math-case|Case>

  <new-theorem-italic-upright|conjecture|Conjecture>

  <new-theorem-italic-upright|example|Example>

  <new-theorem-italic-upright|note|Note>

  <new-theorem-italic-upright|property|Property>

  <new-theorem-italic-upright|question|Question>

  <new-theorem-italic-upright|remark|Remark>

  \;

  <active*|<src-short-comment|<TeXmacs> environments>>

  <new-theorem-bold-italic|axiom|Axiom>

  <new-theorem-bold-italic|notation|Notation>

  <new-theorem-bold-upright|warning|Warning>

  <\active*>
    <\src-comment>
      Title and author information.
    </src-comment>
  </active*>

  The title page and author information should be typeset manually.

  <\active*>
    <\src-comment>
      Headers.
    </src-comment>
  </active*>

  <assign|header-title|<macro|name|<blanc-page>>>

  <assign|header-author|<macro|name|>>

  <assign|header-primary|<macro|name|nr|what|<style-with|src-compact|none|<blanc-page><assign|page-even-header|<small|<style-with|src-compact|none|<no-indent><quote|<page-the-page>><space|2.5cc><arg|nr><space|<between-number-space>><arg|name>>>>>>>

  <assign|header-secondary|<macro|name|nr|what|<assign|page-odd-header|<small|<style-with|src-compact|none|<no-indent><htab|0mm><arg|nr><space|<between-number-space>><arg|name><space|2.5cc><quote|<page-the-page>>>>>>>

  <\active*>
    <\src-comment>
      List environments.
    </src-comment>
  </active*>

  <assign|simple-item|<macro|x|<style-with|src-compact|none|<with|par-first|-15pt|<yes-indent>><resize|<arg|x>|||15pt|>>>>

  <assign|aligned-item|<macro|x|<style-with|src-compact|none|<with|par-first|-15pt|<yes-indent>><resize|<arg|x>
  |r-15pt||r+0pt|>>>>

  <assign|compact-item|<macro|x|<style-with|src-compact|none|<with|par-first|-15pt|<yes-indent>><resize|<arg|x>|||r]15pt|>>>>

  \;

  <assign|list-level|0>

  <assign|render-list|<\macro|body>
    <\padded-normal|<if|<equal|<value|list-level>|0>|0.5fn|0fn>|<if|<equal|<value|list-level>|0>|0.5fn|0fn>>
      <\indent-left|15pt>
        <\surround|<no-page-break*>|<no-indent*>>
          <\with|list-level|<plus|<mod|<value|list-level>|3>|1>>
            <arg|body>
          </with>
        </surround>
      </indent-left>
    </padded-normal>
  </macro>>

  \;

  <new-list|itemize-1|<value|simple-item>|<macro|x|<active*|<with|mode|math|<group|\<bullet\>>>>>>

  <new-list|itemize-2|<value|simple-item>|<macro|x|<active*|<with|mode|math|<group|->>>>>

  <new-list|itemize-3|<value|simple-item>|<macro|x|.>>

  <new-list|itemize-minus|<value|simple-item>|<macro|x|<active*|<with|mode|math|<group|->>>>>

  <new-list|itemize-dot|<value|simple-item>|<macro|x|<active*|<with|mode|math|\<bullet\>>>>>

  <new-list|itemize-arrow|<value|simple-item>|<macro|x|<active*|<with|mode|math|<group|\<rightarrow\>>>>>>

  \;

  <new-list|enumerate-1|<value|aligned-dot-item>|<value|identity>>

  <new-list|enumerate-2|<value|aligned-bracket-item>|<macro|x|<number|<arg|x>|alpha>>>

  <new-list|enumerate-3|<value|aligned-dot-item>|<macro|x|<number|<arg|x>|roman>>>

  \;

  <assign|compact-dash-item|<macro|x|<compact-item|<arg|x> <emdash> >>>

  <assign|long-compact-space-item|<macro|x|<item-long|<compact-space-item|<arg|x>>>>>

  <new-list|description-compact|<value|compact-space-item>|<macro|x|<active*|<with|mode|math|<with|math-font-series|bold|<group|\<ast\>>>>>>>

  <new-list|description-aligned|<value|aligned-item>|<macro|x|<active*|<with|mode|math|<with|math-font-series|bold|<group|\<ast\>>>>>>>

  <new-list|description-dash|<value|compact-dash-item>|<macro|x|<active*|<with|mode|math|<with|math-font-series|bold|<group|\<ast\>>>>>>>

  <new-list|description-long|<value|long-compact-space-item>|<macro|x|<active*|<with|mode|math|<with|math-font-series|bold|<group|\<ast\>>>>>>>

  <new-list|description|<value|compact-space-item>|<macro|x|<active*|<with|mode|math|<with|math-font-series|bold|<group|\<ast\>>>>>>>

  <active*|<\src-comment>
    Tables of contents.
  </src-comment>>

  <assign|chapter-toc-width|20pt>

  <assign|section-toc-width|22.5pt>

  <assign|subsection-toc-width|30.5pt>

  <assign|subsubsection-toc-width|38pt>

  <assign|paragraph-toc-width|45pt>

  <assign|subparagraph-toc-width|53pt>

  <assign|section-toc-indent|<value|chapter-toc-width>>

  <assign|subsection-toc-indent|<plus|<value|section-toc-indent>|<value|section-toc-width>>>

  <assign|subsubsection-toc-indent|<plus|<value|subsection-toc-indent>|<value|subsection-toc-width>>>

  <assign|paragraph-toc-indent|<plus|<value|subsubsection-toc-indent>|<value|subsubsection-toc-width>>>

  <assign|subparagraph-toc-indent|<plus|<value|paragraph-toc-indent>|<value|paragraph-toc-width>>>

  <assign|subsubparagraph-toc-indent|<plus|<value|subparagraph-toc-indent>|<value|subparagraph-toc-width>>>

  \;

  <assign|toc-title|<macro|env|title|<style-with|src-compact|none|<if|<compound|<unquote|<merge|<arg|env>|-numbered>>>|<style-with|src-compact|none|<if|<equal|<arg|env>|part>|<style-with|src-compact|none|<part-text>
  <compound|<unquote|<merge|the-|<arg|env>>>><space|7pt><arg|title>>|<style-with|src-compact|none|<style-with|src-compact|none|<resize|<compound|<unquote|<merge|the-|<arg|env>>>>|||<value|<unquote|<merge|<arg|env>|-toc-width>>>||>><arg|title>>>>|<arg|title>>>>>

  \;

  <assign|toc-small-1|<macro|what|>>

  <assign|toc-small-2|<macro|what|>>

  <assign|render-table-of-contents|<\macro|name|body>
    <with|chapter-toc|<macro|name|>|<principal-section*|<arg|name>>>

    <with|par-first|0fn|par-par-sep|0fn|<arg|body>>
  </macro>>

  \;

  <assign|toc-strong-1|<macro|left|right|<quasiquote|<surround|<vspace*|2em>|<vspace|5pt>|<wide-bothlined|1ln|1ln|3sep|3sep|<with|font-series|bold|math-font-series|bold|<style-with|src-compact|none|<unquote|<arg|left>>>>>>>>>

  <assign|toc-strong-2|<macro|left|right|<style-with|src-compact|none|<vspace*|1em><with|font-series|bold|math-font-series|bold|<arg|left>><toc-dots><no-break><arg|right>>>>

  <assign|toc-1|<macro|left|right|<style-with|src-compact|none|<with|par-left|<value|subsection-toc-indent>|par-first|<minus|<value|section-toc-width>>|<arg|left><toc-dots><no-break><arg|right>>>>>

  <assign|toc-2|<macro|left|right|<style-with|src-compact|none|<with|par-left|<value|subsubsection-toc-indent>|par-first|<minus|<value|subsection-toc-width>>|<arg|left><toc-dots><no-break><arg|right>>>>>

  <assign|toc-3|<macro|left|right|<style-with|src-compact|none|<with|par-left|<value|paragraph-toc-indent>|par-first|<minus|<value|subsubsection-toc-width>>|<arg|left><toc-dots><no-break><arg|right>>>>>

  <assign|toc-4|<macro|left|right|<style-with|src-compact|none|<with|par-left|<value|subparagraph-toc-indent>|par-first|<minus|<value|paragraph-toc-width>>|<arg|left><toc-dots><no-break><arg|right>>>>>

  <assign|toc-5|<macro|left|right|<style-with|src-compact|none|<with|par-left|<value|subsubparagraph-toc-indent>|par-first|<minus|<value|subparagraph-toc-width>>|<arg|left><toc-dots><no-break><arg|right>>>>>

  \;
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
    <associate|sfactor|6>
  </collection>
</initial>