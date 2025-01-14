// This file is copied from prettier@1.17.1
/**
 * Copyright © James Long and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function(r, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((r.prettierPlugins = r.prettierPlugins || {}),
      (r.prettierPlugins.markdown = e()));
})(globalThis, function() {
  "use strict";
  function r(e) {
    return (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(r) {
            return typeof r;
          }
        : function(r) {
            return r &&
              "function" == typeof Symbol &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          })(e);
  }
  function e(r, e) {
    return (
      t(r) ||
      (function(r, e) {
        var t = [],
          u = !0,
          n = !1,
          a = void 0;
        try {
          for (
            var o, i = r[Symbol.iterator]();
            !(u = (o = i.next()).done) &&
            (t.push(o.value), !e || t.length !== e);
            u = !0
          );
        } catch (r) {
          (n = !0), (a = r);
        } finally {
          try {
            u || null == i.return || i.return();
          } finally {
            if (n) throw a;
          }
        }
        return t;
      })(r, e) ||
      u()
    );
  }
  function t(r) {
    if (Array.isArray(r)) return r;
  }
  function u() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  var n = function() {
      for (var r = {}, e = 0; e < arguments.length; e++) {
        var t = arguments[e];
        for (var u in t) a.call(t, u) && (r[u] = t[u]);
      }
      return r;
    },
    a = Object.prototype.hasOwnProperty;
  function o(r, e) {
    return r((e = { exports: {} }), e.exports), e.exports;
  }
  var i = {},
    c = Object.freeze({ default: i }),
    l = o(function(r) {
      "function" == typeof Object.create
        ? (r.exports = function(r, e) {
            (r.super_ = e),
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }));
          })
        : (r.exports = function(r, e) {
            r.super_ = e;
            var t = function() {};
            (t.prototype = e.prototype),
              (r.prototype = new t()),
              (r.prototype.constructor = r);
          });
    }),
    s = (c && i) || c,
    f = o(function(r) {
      try {
        var e = s;
        if ("function" != typeof e.inherits) throw "";
        r.exports = e.inherits;
      } catch (e) {
        r.exports = l;
      }
    }),
    p = function(e) {
      var t, u, a;
      for (u in (f(i, e), f(o, i), (t = i.prototype)))
        (a = t[u]) &&
          "object" === r(a) &&
          (t[u] = "concat" in a ? a.concat() : n(a));
      return i;
      function o(r) {
        return e.apply(this, r);
      }
      function i() {
        return this instanceof i ? e.apply(this, arguments) : new o(arguments);
      }
    };
  var D = function(r, e, t) {
    return function() {
      var u = t || this,
        n = u[r];
      return (
        (u[r] = !e),
        function() {
          u[r] = n;
        }
      );
    };
  };
  var d = function(r) {
    var e = (function(r) {
      var e = [],
        t = r.indexOf("\n");
      for (; -1 !== t; ) e.push(t + 1), (t = r.indexOf("\n", t + 1));
      return e.push(r.length + 1), e;
    })(String(r));
    return {
      toPosition: (function(r) {
        return function(e) {
          var t = -1,
            u = r.length;
          if (e < 0) return {};
          for (; ++t < u; )
            if (r[t] > e)
              return {
                line: t + 1,
                column: e - (r[t - 1] || 0) + 1,
                offset: e
              };
          return {};
        };
      })(e),
      toOffset: (function(r) {
        return function(e) {
          var t = e && e.line,
            u = e && e.column;
          if (!isNaN(t) && !isNaN(u) && t - 1 in r)
            return (r[t - 2] || 0) + u - 1 || 0;
          return -1;
        };
      })(e)
    };
  };
  var h = function(r, e) {
    return function(t) {
      var u,
        n = 0,
        a = t.indexOf("\\"),
        o = r[e],
        i = [];
      for (; -1 !== a; )
        i.push(t.slice(n, a)),
          (n = a + 1),
          ((u = t.charAt(n)) && -1 !== o.indexOf(u)) || i.push("\\"),
          (a = t.indexOf("\\", n));
      return i.push(t.slice(n)), i.join("");
    };
  };
  var g = {
      AEli: "Æ",
      AElig: "Æ",
      AM: "&",
      AMP: "&",
      Aacut: "Á",
      Aacute: "Á",
      Abreve: "Ă",
      Acir: "Â",
      Acirc: "Â",
      Acy: "А",
      Afr: "𝔄",
      Agrav: "À",
      Agrave: "À",
      Alpha: "Α",
      Amacr: "Ā",
      And: "⩓",
      Aogon: "Ą",
      Aopf: "𝔸",
      ApplyFunction: "⁡",
      Arin: "Å",
      Aring: "Å",
      Ascr: "𝒜",
      Assign: "≔",
      Atild: "Ã",
      Atilde: "Ã",
      Aum: "Ä",
      Auml: "Ä",
      Backslash: "∖",
      Barv: "⫧",
      Barwed: "⌆",
      Bcy: "Б",
      Because: "∵",
      Bernoullis: "ℬ",
      Beta: "Β",
      Bfr: "𝔅",
      Bopf: "𝔹",
      Breve: "˘",
      Bscr: "ℬ",
      Bumpeq: "≎",
      CHcy: "Ч",
      COP: "©",
      COPY: "©",
      Cacute: "Ć",
      Cap: "⋒",
      CapitalDifferentialD: "ⅅ",
      Cayleys: "ℭ",
      Ccaron: "Č",
      Ccedi: "Ç",
      Ccedil: "Ç",
      Ccirc: "Ĉ",
      Cconint: "∰",
      Cdot: "Ċ",
      Cedilla: "¸",
      CenterDot: "·",
      Cfr: "ℭ",
      Chi: "Χ",
      CircleDot: "⊙",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      Colon: "∷",
      Colone: "⩴",
      Congruent: "≡",
      Conint: "∯",
      ContourIntegral: "∮",
      Copf: "ℂ",
      Coproduct: "∐",
      CounterClockwiseContourIntegral: "∳",
      Cross: "⨯",
      Cscr: "𝒞",
      Cup: "⋓",
      CupCap: "≍",
      DD: "ⅅ",
      DDotrahd: "⤑",
      DJcy: "Ђ",
      DScy: "Ѕ",
      DZcy: "Џ",
      Dagger: "‡",
      Darr: "↡",
      Dashv: "⫤",
      Dcaron: "Ď",
      Dcy: "Д",
      Del: "∇",
      Delta: "Δ",
      Dfr: "𝔇",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      Diamond: "⋄",
      DifferentialD: "ⅆ",
      Dopf: "𝔻",
      Dot: "¨",
      DotDot: "⃜",
      DotEqual: "≐",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      Downarrow: "⇓",
      Dscr: "𝒟",
      Dstrok: "Đ",
      ENG: "Ŋ",
      ET: "Ð",
      ETH: "Ð",
      Eacut: "É",
      Eacute: "É",
      Ecaron: "Ě",
      Ecir: "Ê",
      Ecirc: "Ê",
      Ecy: "Э",
      Edot: "Ė",
      Efr: "𝔈",
      Egrav: "È",
      Egrave: "È",
      Element: "∈",
      Emacr: "Ē",
      EmptySmallSquare: "◻",
      EmptyVerySmallSquare: "▫",
      Eogon: "Ę",
      Eopf: "𝔼",
      Epsilon: "Ε",
      Equal: "⩵",
      EqualTilde: "≂",
      Equilibrium: "⇌",
      Escr: "ℰ",
      Esim: "⩳",
      Eta: "Η",
      Eum: "Ë",
      Euml: "Ë",
      Exists: "∃",
      ExponentialE: "ⅇ",
      Fcy: "Ф",
      Ffr: "𝔉",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      Fopf: "𝔽",
      ForAll: "∀",
      Fouriertrf: "ℱ",
      Fscr: "ℱ",
      GJcy: "Ѓ",
      G: ">",
      GT: ">",
      Gamma: "Γ",
      Gammad: "Ϝ",
      Gbreve: "Ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      Gcy: "Г",
      Gdot: "Ġ",
      Gfr: "𝔊",
      Gg: "⋙",
      Gopf: "𝔾",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      Gt: "≫",
      HARDcy: "Ъ",
      Hacek: "ˇ",
      Hat: "^",
      Hcirc: "Ĥ",
      Hfr: "ℌ",
      HilbertSpace: "ℋ",
      Hopf: "ℍ",
      HorizontalLine: "─",
      Hscr: "ℋ",
      Hstrok: "Ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      IEcy: "Е",
      IJlig: "Ĳ",
      IOcy: "Ё",
      Iacut: "Í",
      Iacute: "Í",
      Icir: "Î",
      Icirc: "Î",
      Icy: "И",
      Idot: "İ",
      Ifr: "ℑ",
      Igrav: "Ì",
      Igrave: "Ì",
      Im: "ℑ",
      Imacr: "Ī",
      ImaginaryI: "ⅈ",
      Implies: "⇒",
      Int: "∬",
      Integral: "∫",
      Intersection: "⋂",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      Iogon: "Į",
      Iopf: "𝕀",
      Iota: "Ι",
      Iscr: "ℐ",
      Itilde: "Ĩ",
      Iukcy: "І",
      Ium: "Ï",
      Iuml: "Ï",
      Jcirc: "Ĵ",
      Jcy: "Й",
      Jfr: "𝔍",
      Jopf: "𝕁",
      Jscr: "𝒥",
      Jsercy: "Ј",
      Jukcy: "Є",
      KHcy: "Х",
      KJcy: "Ќ",
      Kappa: "Κ",
      Kcedil: "Ķ",
      Kcy: "К",
      Kfr: "𝔎",
      Kopf: "𝕂",
      Kscr: "𝒦",
      LJcy: "Љ",
      L: "<",
      LT: "<",
      Lacute: "Ĺ",
      Lambda: "Λ",
      Lang: "⟪",
      Laplacetrf: "ℒ",
      Larr: "↞",
      Lcaron: "Ľ",
      Lcedil: "Ļ",
      Lcy: "Л",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      LeftRightArrow: "↔",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      Leftarrow: "⇐",
      Leftrightarrow: "⇔",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      LessLess: "⪡",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      Lfr: "𝔏",
      Ll: "⋘",
      Lleftarrow: "⇚",
      Lmidot: "Ŀ",
      LongLeftArrow: "⟵",
      LongLeftRightArrow: "⟷",
      LongRightArrow: "⟶",
      Longleftarrow: "⟸",
      Longleftrightarrow: "⟺",
      Longrightarrow: "⟹",
      Lopf: "𝕃",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      Lscr: "ℒ",
      Lsh: "↰",
      Lstrok: "Ł",
      Lt: "≪",
      Mcy: "М",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      MinusPlus: "∓",
      Mopf: "𝕄",
      Mscr: "ℳ",
      Mu: "Μ",
      NJcy: "Њ",
      Nacute: "Ń",
      Ncaron: "Ň",
      Ncedil: "Ņ",
      Ncy: "Н",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: "\n",
      Nfr: "𝔑",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      Not: "⫬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      Nscr: "𝒩",
      Ntild: "Ñ",
      Ntilde: "Ñ",
      Nu: "Ν",
      OElig: "Œ",
      Oacut: "Ó",
      Oacute: "Ó",
      Ocir: "Ô",
      Ocirc: "Ô",
      Ocy: "О",
      Odblac: "Ő",
      Ofr: "𝔒",
      Ograv: "Ò",
      Ograve: "Ò",
      Omacr: "Ō",
      Omega: "Ω",
      Omicron: "Ο",
      Oopf: "𝕆",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      Or: "⩔",
      Oscr: "𝒪",
      Oslas: "Ø",
      Oslash: "Ø",
      Otild: "Õ",
      Otilde: "Õ",
      Otimes: "⨷",
      Oum: "Ö",
      Ouml: "Ö",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      PartialD: "∂",
      Pcy: "П",
      Pfr: "𝔓",
      Phi: "Φ",
      Pi: "Π",
      PlusMinus: "±",
      Poincareplane: "ℌ",
      Popf: "ℙ",
      Pr: "⪻",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      Prime: "″",
      Product: "∏",
      Proportion: "∷",
      Proportional: "∝",
      Pscr: "𝒫",
      Psi: "Ψ",
      QUO: '"',
      QUOT: '"',
      Qfr: "𝔔",
      Qopf: "ℚ",
      Qscr: "𝒬",
      RBarr: "⤐",
      RE: "®",
      REG: "®",
      Racute: "Ŕ",
      Rang: "⟫",
      Rarr: "↠",
      Rarrtl: "⤖",
      Rcaron: "Ř",
      Rcedil: "Ŗ",
      Rcy: "Р",
      Re: "ℜ",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      Rfr: "ℜ",
      Rho: "Ρ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      Rightarrow: "⇒",
      Ropf: "ℝ",
      RoundImplies: "⥰",
      Rrightarrow: "⇛",
      Rscr: "ℛ",
      Rsh: "↱",
      RuleDelayed: "⧴",
      SHCHcy: "Щ",
      SHcy: "Ш",
      SOFTcy: "Ь",
      Sacute: "Ś",
      Sc: "⪼",
      Scaron: "Š",
      Scedil: "Ş",
      Scirc: "Ŝ",
      Scy: "С",
      Sfr: "𝔖",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      Sigma: "Σ",
      SmallCircle: "∘",
      Sopf: "𝕊",
      Sqrt: "√",
      Square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      Sscr: "𝒮",
      Star: "⋆",
      Sub: "⋐",
      Subset: "⋐",
      SubsetEqual: "⊆",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      SuchThat: "∋",
      Sum: "∑",
      Sup: "⋑",
      Superset: "⊃",
      SupersetEqual: "⊇",
      Supset: "⋑",
      THOR: "Þ",
      THORN: "Þ",
      TRADE: "™",
      TSHcy: "Ћ",
      TScy: "Ц",
      Tab: "\t",
      Tau: "Τ",
      Tcaron: "Ť",
      Tcedil: "Ţ",
      Tcy: "Т",
      Tfr: "𝔗",
      Therefore: "∴",
      Theta: "Θ",
      ThickSpace: "  ",
      ThinSpace: " ",
      Tilde: "∼",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      Topf: "𝕋",
      TripleDot: "⃛",
      Tscr: "𝒯",
      Tstrok: "Ŧ",
      Uacut: "Ú",
      Uacute: "Ú",
      Uarr: "↟",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      Ubreve: "Ŭ",
      Ucir: "Û",
      Ucirc: "Û",
      Ucy: "У",
      Udblac: "Ű",
      Ufr: "𝔘",
      Ugrav: "Ù",
      Ugrave: "Ù",
      Umacr: "Ū",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      Uopf: "𝕌",
      UpArrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      UpEquilibrium: "⥮",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      Uparrow: "⇑",
      Updownarrow: "⇕",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      Upsilon: "Υ",
      Uring: "Ů",
      Uscr: "𝒰",
      Utilde: "Ũ",
      Uum: "Ü",
      Uuml: "Ü",
      VDash: "⊫",
      Vbar: "⫫",
      Vcy: "В",
      Vdash: "⊩",
      Vdashl: "⫦",
      Vee: "⋁",
      Verbar: "‖",
      Vert: "‖",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      Vopf: "𝕍",
      Vscr: "𝒱",
      Vvdash: "⊪",
      Wcirc: "Ŵ",
      Wedge: "⋀",
      Wfr: "𝔚",
      Wopf: "𝕎",
      Wscr: "𝒲",
      Xfr: "𝔛",
      Xi: "Ξ",
      Xopf: "𝕏",
      Xscr: "𝒳",
      YAcy: "Я",
      YIcy: "Ї",
      YUcy: "Ю",
      Yacut: "Ý",
      Yacute: "Ý",
      Ycirc: "Ŷ",
      Ycy: "Ы",
      Yfr: "𝔜",
      Yopf: "𝕐",
      Yscr: "𝒴",
      Yuml: "Ÿ",
      ZHcy: "Ж",
      Zacute: "Ź",
      Zcaron: "Ž",
      Zcy: "З",
      Zdot: "Ż",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      Zfr: "ℨ",
      Zopf: "ℤ",
      Zscr: "𝒵",
      aacut: "á",
      aacute: "á",
      abreve: "ă",
      ac: "∾",
      acE: "∾̳",
      acd: "∿",
      acir: "â",
      acirc: "â",
      acut: "´",
      acute: "´",
      acy: "а",
      aeli: "æ",
      aelig: "æ",
      af: "⁡",
      afr: "𝔞",
      agrav: "à",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      alpha: "α",
      amacr: "ā",
      amalg: "⨿",
      am: "&",
      amp: "&",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      aogon: "ą",
      aopf: "𝕒",
      ap: "≈",
      apE: "⩰",
      apacir: "⩯",
      ape: "≊",
      apid: "≋",
      apos: "'",
      approx: "≈",
      approxeq: "≊",
      arin: "å",
      aring: "å",
      ascr: "𝒶",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      atild: "ã",
      atilde: "ã",
      aum: "ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      bNot: "⫭",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      barvee: "⊽",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bnot: "⌐",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxDL: "╗",
      boxDR: "╔",
      boxDl: "╖",
      boxDr: "╓",
      boxH: "═",
      boxHD: "╦",
      boxHU: "╩",
      boxHd: "╤",
      boxHu: "╧",
      boxUL: "╝",
      boxUR: "╚",
      boxUl: "╜",
      boxUr: "╙",
      boxV: "║",
      boxVH: "╬",
      boxVL: "╣",
      boxVR: "╠",
      boxVh: "╫",
      boxVl: "╢",
      boxVr: "╟",
      boxbox: "⧉",
      boxdL: "╕",
      boxdR: "╒",
      boxdl: "┐",
      boxdr: "┌",
      boxh: "─",
      boxhD: "╥",
      boxhU: "╨",
      boxhd: "┬",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxuL: "╛",
      boxuR: "╘",
      boxul: "┘",
      boxur: "└",
      boxv: "│",
      boxvH: "╪",
      boxvL: "╡",
      boxvR: "╞",
      boxvh: "┼",
      boxvl: "┤",
      boxvr: "├",
      bprime: "‵",
      breve: "˘",
      brvba: "¦",
      brvbar: "¦",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      bumpeq: "≏",
      cacute: "ć",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      ccaps: "⩍",
      ccaron: "č",
      ccedi: "ç",
      ccedil: "ç",
      ccirc: "ĉ",
      ccups: "⩌",
      ccupssm: "⩐",
      cdot: "ċ",
      cedi: "¸",
      cedil: "¸",
      cemptyv: "⦲",
      cen: "¢",
      cent: "¢",
      centerdot: "·",
      cfr: "𝔠",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      chi: "χ",
      cir: "○",
      cirE: "⧃",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledR: "®",
      circledS: "Ⓢ",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      clubs: "♣",
      clubsuit: "♣",
      colon: ":",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      conint: "∮",
      copf: "𝕔",
      coprod: "∐",
      cop: "©",
      copy: "©",
      copysr: "℗",
      crarr: "↵",
      cross: "✗",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      cup: "∪",
      cupbrcap: "⩈",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curre: "¤",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      dArr: "⇓",
      dHar: "⥥",
      dagger: "†",
      daleth: "ℸ",
      darr: "↓",
      dash: "‐",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      dcaron: "ď",
      dcy: "д",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      ddotseq: "⩷",
      de: "°",
      deg: "°",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      dfr: "𝔡",
      dharl: "⇃",
      dharr: "⇂",
      diam: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divid: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      dopf: "𝕕",
      dot: "˙",
      doteq: "≐",
      doteqdot: "≑",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      downarrow: "↓",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      dscr: "𝒹",
      dscy: "ѕ",
      dsol: "⧶",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      dzcy: "џ",
      dzigrarr: "⟿",
      eDDot: "⩷",
      eDot: "≑",
      eacut: "é",
      eacute: "é",
      easter: "⩮",
      ecaron: "ě",
      ecir: "ê",
      ecirc: "ê",
      ecolon: "≕",
      ecy: "э",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      efr: "𝔢",
      eg: "⪚",
      egrav: "è",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      emptyv: "∅",
      emsp13: " ",
      emsp14: " ",
      emsp: " ",
      eng: "ŋ",
      ensp: " ",
      eogon: "ę",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      equals: "=",
      equest: "≟",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erDot: "≓",
      erarr: "⥱",
      escr: "ℯ",
      esdot: "≐",
      esim: "≂",
      eta: "η",
      et: "ð",
      eth: "ð",
      eum: "ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      expectation: "ℰ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      ffr: "𝔣",
      filig: "ﬁ",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      fopf: "𝕗",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      fpartint: "⨍",
      frac1: "¼",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac3: "¾",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      fscr: "𝒻",
      gE: "≧",
      gEl: "⪌",
      gacute: "ǵ",
      gamma: "γ",
      gammad: "ϝ",
      gap: "⪆",
      gbreve: "ğ",
      gcirc: "ĝ",
      gcy: "г",
      gdot: "ġ",
      ge: "≥",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      gfr: "𝔤",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      gjcy: "ѓ",
      gl: "≷",
      glE: "⪒",
      gla: "⪥",
      glj: "⪤",
      gnE: "≩",
      gnap: "⪊",
      gnapprox: "⪊",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      gopf: "𝕘",
      grave: "`",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      g: ">",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      hArr: "⇔",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      hardcy: "ъ",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      hbar: "ℏ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      hfr: "𝔥",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      hopf: "𝕙",
      horbar: "―",
      hscr: "𝒽",
      hslash: "ℏ",
      hstrok: "ħ",
      hybull: "⁃",
      hyphen: "‐",
      iacut: "í",
      iacute: "í",
      ic: "⁣",
      icir: "î",
      icirc: "î",
      icy: "и",
      iecy: "е",
      iexc: "¡",
      iexcl: "¡",
      iff: "⇔",
      ifr: "𝔦",
      igrav: "ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      ijlig: "ĳ",
      imacr: "ī",
      image: "ℑ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      intercal: "⊺",
      intlarhk: "⨗",
      intprod: "⨼",
      iocy: "ё",
      iogon: "į",
      iopf: "𝕚",
      iota: "ι",
      iprod: "⨼",
      iques: "¿",
      iquest: "¿",
      iscr: "𝒾",
      isin: "∈",
      isinE: "⋹",
      isindot: "⋵",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      itilde: "ĩ",
      iukcy: "і",
      ium: "ï",
      iuml: "ï",
      jcirc: "ĵ",
      jcy: "й",
      jfr: "𝔧",
      jmath: "ȷ",
      jopf: "𝕛",
      jscr: "𝒿",
      jsercy: "ј",
      jukcy: "є",
      kappa: "κ",
      kappav: "ϰ",
      kcedil: "ķ",
      kcy: "к",
      kfr: "𝔨",
      kgreen: "ĸ",
      khcy: "х",
      kjcy: "ќ",
      kopf: "𝕜",
      kscr: "𝓀",
      lAarr: "⇚",
      lArr: "⇐",
      lAtail: "⤛",
      lBarr: "⤎",
      lE: "≦",
      lEg: "⪋",
      lHar: "⥢",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      lambda: "λ",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      laqu: "«",
      laquo: "«",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      lcaron: "ľ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      le: "≤",
      leftarrow: "←",
      leftarrowtail: "↢",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      leftthreetimes: "⋋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      lessgtr: "≶",
      lesssim: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      ljcy: "љ",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      llhard: "⥫",
      lltri: "◺",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnE: "≨",
      lnap: "⪉",
      lnapprox: "⪉",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      longleftarrow: "⟵",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      lscr: "𝓁",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      lstrok: "ł",
      l: "<",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltrPar: "⦖",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      mDDot: "∺",
      mac: "¯",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      mcy: "м",
      mdash: "—",
      measuredangle: "∡",
      mfr: "𝔪",
      mho: "℧",
      micr: "µ",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middo: "·",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      mopf: "𝕞",
      mp: "∓",
      mscr: "𝓂",
      mstpos: "∾",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nGg: "⋙̸",
      nGt: "≫⃒",
      nGtv: "≫̸",
      nLeftarrow: "⇍",
      nLeftrightarrow: "⇎",
      nLl: "⋘̸",
      nLt: "≪⃒",
      nLtv: "≪̸",
      nRightarrow: "⇏",
      nVDash: "⊯",
      nVdash: "⊮",
      nabla: "∇",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbs: " ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      ncaron: "ň",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      neArr: "⇗",
      nearhk: "⤤",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      nexist: "∄",
      nexists: "∄",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      ngsim: "≵",
      ngt: "≯",
      ngtr: "≯",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      njcy: "њ",
      nlArr: "⇍",
      nlE: "≦̸",
      nlarr: "↚",
      nldr: "‥",
      nle: "≰",
      nleftarrow: "↚",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nlsim: "≴",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nmid: "∤",
      nopf: "𝕟",
      no: "¬",
      not: "¬",
      notin: "∉",
      notinE: "⋹̸",
      notindot: "⋵̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      ntild: "ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvDash: "⊭",
      nvHarr: "⤄",
      nvap: "≍⃒",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwArr: "⇖",
      nwarhk: "⤣",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      oS: "Ⓢ",
      oacut: "ó",
      oacute: "ó",
      oast: "⊛",
      ocir: "ô",
      ocirc: "ô",
      ocy: "о",
      odash: "⊝",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      oelig: "œ",
      ofcir: "⦿",
      ofr: "𝔬",
      ogon: "˛",
      ograv: "ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      omacr: "ō",
      omega: "ω",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      oopf: "𝕠",
      opar: "⦷",
      operp: "⦹",
      oplus: "⊕",
      or: "∨",
      orarr: "↻",
      ord: "º",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oscr: "ℴ",
      oslas: "ø",
      oslash: "ø",
      osol: "⊘",
      otild: "õ",
      otilde: "õ",
      otimes: "⊗",
      otimesas: "⨶",
      oum: "ö",
      ouml: "ö",
      ovbar: "⌽",
      par: "¶",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      pfr: "𝔭",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      plusm: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      pointint: "⨕",
      popf: "𝕡",
      poun: "£",
      pound: "£",
      pr: "≺",
      prE: "⪳",
      prap: "⪷",
      prcue: "≼",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      prime: "′",
      primes: "ℙ",
      prnE: "⪵",
      prnap: "⪹",
      prnsim: "⋨",
      prod: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      pscr: "𝓅",
      psi: "ψ",
      puncsp: " ",
      qfr: "𝔮",
      qint: "⨌",
      qopf: "𝕢",
      qprime: "⁗",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      quo: '"',
      quot: '"',
      rAarr: "⇛",
      rArr: "⇒",
      rAtail: "⤜",
      rBarr: "⤏",
      rHar: "⥤",
      race: "∽̱",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raqu: "»",
      raquo: "»",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      rarrtl: "↣",
      rarrw: "↝",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      rcaron: "ř",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      re: "®",
      reg: "®",
      rfisht: "⥽",
      rfloor: "⌋",
      rfr: "𝔯",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      rho: "ρ",
      rhov: "ϱ",
      rightarrow: "→",
      rightarrowtail: "↣",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      rightthreetimes: "⋌",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      rsaquo: "›",
      rscr: "𝓇",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      ruluhar: "⥨",
      rx: "℞",
      sacute: "ś",
      sbquo: "‚",
      sc: "≻",
      scE: "⪴",
      scap: "⪸",
      scaron: "š",
      sccue: "≽",
      sce: "⪰",
      scedil: "ş",
      scirc: "ŝ",
      scnE: "⪶",
      scnap: "⪺",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      seArr: "⇘",
      searhk: "⤥",
      searr: "↘",
      searrow: "↘",
      sec: "§",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      shchcy: "щ",
      shcy: "ш",
      shortmid: "∣",
      shortparallel: "∥",
      sh: "­",
      shy: "­",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      square: "□",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      sub: "⊂",
      subE: "⫅",
      subdot: "⪽",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      sum: "∑",
      sung: "♪",
      sup: "⊃",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      supE: "⫆",
      supdot: "⪾",
      supdsub: "⫘",
      supe: "⊇",
      supedot: "⫄",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swArr: "⇙",
      swarhk: "⤦",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szli: "ß",
      szlig: "ß",
      target: "⌖",
      tau: "τ",
      tbrk: "⎴",
      tcaron: "ť",
      tcedil: "ţ",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      tfr: "𝔱",
      there4: "∴",
      therefore: "∴",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      thinsp: " ",
      thkap: "≈",
      thksim: "∼",
      thor: "þ",
      thorn: "þ",
      tilde: "˜",
      time: "×",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      tscr: "𝓉",
      tscy: "ц",
      tshcy: "ћ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      uArr: "⇑",
      uHar: "⥣",
      uacut: "ú",
      uacute: "ú",
      uarr: "↑",
      ubrcy: "ў",
      ubreve: "ŭ",
      ucir: "û",
      ucirc: "û",
      ucy: "у",
      udarr: "⇅",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      ufr: "𝔲",
      ugrav: "ù",
      ugrave: "ù",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      umacr: "ū",
      um: "¨",
      uml: "¨",
      uogon: "ų",
      uopf: "𝕦",
      uparrow: "↑",
      updownarrow: "↕",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      upsi: "υ",
      upsih: "ϒ",
      upsilon: "υ",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      uring: "ů",
      urtri: "◹",
      uscr: "𝓊",
      utdot: "⋰",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      uum: "ü",
      uuml: "ü",
      uwangle: "⦧",
      vArr: "⇕",
      vBar: "⫨",
      vBarv: "⫩",
      vDash: "⊨",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      vcy: "в",
      vdash: "⊢",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      verbar: "|",
      vert: "|",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      vzigzag: "⦚",
      wcirc: "ŵ",
      wedbar: "⩟",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      wfr: "𝔴",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      yacut: "ý",
      yacute: "ý",
      yacy: "я",
      ycirc: "ŷ",
      ycy: "ы",
      ye: "¥",
      yen: "¥",
      yfr: "𝔶",
      yicy: "ї",
      yopf: "𝕪",
      yscr: "𝓎",
      yucy: "ю",
      yum: "ÿ",
      yuml: "ÿ",
      zacute: "ź",
      zcaron: "ž",
      zcy: "з",
      zdot: "ż",
      zeetrf: "ℨ",
      zeta: "ζ",
      zfr: "𝔷",
      zhcy: "ж",
      zigrarr: "⇝",
      zopf: "𝕫",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌",
      Map: "⤅",
      in: "∈"
    },
    m = Object.freeze({
      AEli: "Æ",
      AElig: "Æ",
      AM: "&",
      AMP: "&",
      Aacut: "Á",
      Aacute: "Á",
      Abreve: "Ă",
      Acir: "Â",
      Acirc: "Â",
      Acy: "А",
      Afr: "𝔄",
      Agrav: "À",
      Agrave: "À",
      Alpha: "Α",
      Amacr: "Ā",
      And: "⩓",
      Aogon: "Ą",
      Aopf: "𝔸",
      ApplyFunction: "⁡",
      Arin: "Å",
      Aring: "Å",
      Ascr: "𝒜",
      Assign: "≔",
      Atild: "Ã",
      Atilde: "Ã",
      Aum: "Ä",
      Auml: "Ä",
      Backslash: "∖",
      Barv: "⫧",
      Barwed: "⌆",
      Bcy: "Б",
      Because: "∵",
      Bernoullis: "ℬ",
      Beta: "Β",
      Bfr: "𝔅",
      Bopf: "𝔹",
      Breve: "˘",
      Bscr: "ℬ",
      Bumpeq: "≎",
      CHcy: "Ч",
      COP: "©",
      COPY: "©",
      Cacute: "Ć",
      Cap: "⋒",
      CapitalDifferentialD: "ⅅ",
      Cayleys: "ℭ",
      Ccaron: "Č",
      Ccedi: "Ç",
      Ccedil: "Ç",
      Ccirc: "Ĉ",
      Cconint: "∰",
      Cdot: "Ċ",
      Cedilla: "¸",
      CenterDot: "·",
      Cfr: "ℭ",
      Chi: "Χ",
      CircleDot: "⊙",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      Colon: "∷",
      Colone: "⩴",
      Congruent: "≡",
      Conint: "∯",
      ContourIntegral: "∮",
      Copf: "ℂ",
      Coproduct: "∐",
      CounterClockwiseContourIntegral: "∳",
      Cross: "⨯",
      Cscr: "𝒞",
      Cup: "⋓",
      CupCap: "≍",
      DD: "ⅅ",
      DDotrahd: "⤑",
      DJcy: "Ђ",
      DScy: "Ѕ",
      DZcy: "Џ",
      Dagger: "‡",
      Darr: "↡",
      Dashv: "⫤",
      Dcaron: "Ď",
      Dcy: "Д",
      Del: "∇",
      Delta: "Δ",
      Dfr: "𝔇",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      Diamond: "⋄",
      DifferentialD: "ⅆ",
      Dopf: "𝔻",
      Dot: "¨",
      DotDot: "⃜",
      DotEqual: "≐",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      Downarrow: "⇓",
      Dscr: "𝒟",
      Dstrok: "Đ",
      ENG: "Ŋ",
      ET: "Ð",
      ETH: "Ð",
      Eacut: "É",
      Eacute: "É",
      Ecaron: "Ě",
      Ecir: "Ê",
      Ecirc: "Ê",
      Ecy: "Э",
      Edot: "Ė",
      Efr: "𝔈",
      Egrav: "È",
      Egrave: "È",
      Element: "∈",
      Emacr: "Ē",
      EmptySmallSquare: "◻",
      EmptyVerySmallSquare: "▫",
      Eogon: "Ę",
      Eopf: "𝔼",
      Epsilon: "Ε",
      Equal: "⩵",
      EqualTilde: "≂",
      Equilibrium: "⇌",
      Escr: "ℰ",
      Esim: "⩳",
      Eta: "Η",
      Eum: "Ë",
      Euml: "Ë",
      Exists: "∃",
      ExponentialE: "ⅇ",
      Fcy: "Ф",
      Ffr: "𝔉",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      Fopf: "𝔽",
      ForAll: "∀",
      Fouriertrf: "ℱ",
      Fscr: "ℱ",
      GJcy: "Ѓ",
      G: ">",
      GT: ">",
      Gamma: "Γ",
      Gammad: "Ϝ",
      Gbreve: "Ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      Gcy: "Г",
      Gdot: "Ġ",
      Gfr: "𝔊",
      Gg: "⋙",
      Gopf: "𝔾",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      Gt: "≫",
      HARDcy: "Ъ",
      Hacek: "ˇ",
      Hat: "^",
      Hcirc: "Ĥ",
      Hfr: "ℌ",
      HilbertSpace: "ℋ",
      Hopf: "ℍ",
      HorizontalLine: "─",
      Hscr: "ℋ",
      Hstrok: "Ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      IEcy: "Е",
      IJlig: "Ĳ",
      IOcy: "Ё",
      Iacut: "Í",
      Iacute: "Í",
      Icir: "Î",
      Icirc: "Î",
      Icy: "И",
      Idot: "İ",
      Ifr: "ℑ",
      Igrav: "Ì",
      Igrave: "Ì",
      Im: "ℑ",
      Imacr: "Ī",
      ImaginaryI: "ⅈ",
      Implies: "⇒",
      Int: "∬",
      Integral: "∫",
      Intersection: "⋂",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      Iogon: "Į",
      Iopf: "𝕀",
      Iota: "Ι",
      Iscr: "ℐ",
      Itilde: "Ĩ",
      Iukcy: "І",
      Ium: "Ï",
      Iuml: "Ï",
      Jcirc: "Ĵ",
      Jcy: "Й",
      Jfr: "𝔍",
      Jopf: "𝕁",
      Jscr: "𝒥",
      Jsercy: "Ј",
      Jukcy: "Є",
      KHcy: "Х",
      KJcy: "Ќ",
      Kappa: "Κ",
      Kcedil: "Ķ",
      Kcy: "К",
      Kfr: "𝔎",
      Kopf: "𝕂",
      Kscr: "𝒦",
      LJcy: "Љ",
      L: "<",
      LT: "<",
      Lacute: "Ĺ",
      Lambda: "Λ",
      Lang: "⟪",
      Laplacetrf: "ℒ",
      Larr: "↞",
      Lcaron: "Ľ",
      Lcedil: "Ļ",
      Lcy: "Л",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      LeftRightArrow: "↔",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      Leftarrow: "⇐",
      Leftrightarrow: "⇔",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      LessLess: "⪡",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      Lfr: "𝔏",
      Ll: "⋘",
      Lleftarrow: "⇚",
      Lmidot: "Ŀ",
      LongLeftArrow: "⟵",
      LongLeftRightArrow: "⟷",
      LongRightArrow: "⟶",
      Longleftarrow: "⟸",
      Longleftrightarrow: "⟺",
      Longrightarrow: "⟹",
      Lopf: "𝕃",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      Lscr: "ℒ",
      Lsh: "↰",
      Lstrok: "Ł",
      Lt: "≪",
      Mcy: "М",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      MinusPlus: "∓",
      Mopf: "𝕄",
      Mscr: "ℳ",
      Mu: "Μ",
      NJcy: "Њ",
      Nacute: "Ń",
      Ncaron: "Ň",
      Ncedil: "Ņ",
      Ncy: "Н",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: "\n",
      Nfr: "𝔑",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      Not: "⫬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      Nscr: "𝒩",
      Ntild: "Ñ",
      Ntilde: "Ñ",
      Nu: "Ν",
      OElig: "Œ",
      Oacut: "Ó",
      Oacute: "Ó",
      Ocir: "Ô",
      Ocirc: "Ô",
      Ocy: "О",
      Odblac: "Ő",
      Ofr: "𝔒",
      Ograv: "Ò",
      Ograve: "Ò",
      Omacr: "Ō",
      Omega: "Ω",
      Omicron: "Ο",
      Oopf: "𝕆",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      Or: "⩔",
      Oscr: "𝒪",
      Oslas: "Ø",
      Oslash: "Ø",
      Otild: "Õ",
      Otilde: "Õ",
      Otimes: "⨷",
      Oum: "Ö",
      Ouml: "Ö",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      PartialD: "∂",
      Pcy: "П",
      Pfr: "𝔓",
      Phi: "Φ",
      Pi: "Π",
      PlusMinus: "±",
      Poincareplane: "ℌ",
      Popf: "ℙ",
      Pr: "⪻",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      Prime: "″",
      Product: "∏",
      Proportion: "∷",
      Proportional: "∝",
      Pscr: "𝒫",
      Psi: "Ψ",
      QUO: '"',
      QUOT: '"',
      Qfr: "𝔔",
      Qopf: "ℚ",
      Qscr: "𝒬",
      RBarr: "⤐",
      RE: "®",
      REG: "®",
      Racute: "Ŕ",
      Rang: "⟫",
      Rarr: "↠",
      Rarrtl: "⤖",
      Rcaron: "Ř",
      Rcedil: "Ŗ",
      Rcy: "Р",
      Re: "ℜ",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      Rfr: "ℜ",
      Rho: "Ρ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      Rightarrow: "⇒",
      Ropf: "ℝ",
      RoundImplies: "⥰",
      Rrightarrow: "⇛",
      Rscr: "ℛ",
      Rsh: "↱",
      RuleDelayed: "⧴",
      SHCHcy: "Щ",
      SHcy: "Ш",
      SOFTcy: "Ь",
      Sacute: "Ś",
      Sc: "⪼",
      Scaron: "Š",
      Scedil: "Ş",
      Scirc: "Ŝ",
      Scy: "С",
      Sfr: "𝔖",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      Sigma: "Σ",
      SmallCircle: "∘",
      Sopf: "𝕊",
      Sqrt: "√",
      Square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      Sscr: "𝒮",
      Star: "⋆",
      Sub: "⋐",
      Subset: "⋐",
      SubsetEqual: "⊆",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      SuchThat: "∋",
      Sum: "∑",
      Sup: "⋑",
      Superset: "⊃",
      SupersetEqual: "⊇",
      Supset: "⋑",
      THOR: "Þ",
      THORN: "Þ",
      TRADE: "™",
      TSHcy: "Ћ",
      TScy: "Ц",
      Tab: "\t",
      Tau: "Τ",
      Tcaron: "Ť",
      Tcedil: "Ţ",
      Tcy: "Т",
      Tfr: "𝔗",
      Therefore: "∴",
      Theta: "Θ",
      ThickSpace: "  ",
      ThinSpace: " ",
      Tilde: "∼",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      Topf: "𝕋",
      TripleDot: "⃛",
      Tscr: "𝒯",
      Tstrok: "Ŧ",
      Uacut: "Ú",
      Uacute: "Ú",
      Uarr: "↟",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      Ubreve: "Ŭ",
      Ucir: "Û",
      Ucirc: "Û",
      Ucy: "У",
      Udblac: "Ű",
      Ufr: "𝔘",
      Ugrav: "Ù",
      Ugrave: "Ù",
      Umacr: "Ū",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      Uopf: "𝕌",
      UpArrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      UpEquilibrium: "⥮",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      Uparrow: "⇑",
      Updownarrow: "⇕",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      Upsilon: "Υ",
      Uring: "Ů",
      Uscr: "𝒰",
      Utilde: "Ũ",
      Uum: "Ü",
      Uuml: "Ü",
      VDash: "⊫",
      Vbar: "⫫",
      Vcy: "В",
      Vdash: "⊩",
      Vdashl: "⫦",
      Vee: "⋁",
      Verbar: "‖",
      Vert: "‖",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      Vopf: "𝕍",
      Vscr: "𝒱",
      Vvdash: "⊪",
      Wcirc: "Ŵ",
      Wedge: "⋀",
      Wfr: "𝔚",
      Wopf: "𝕎",
      Wscr: "𝒲",
      Xfr: "𝔛",
      Xi: "Ξ",
      Xopf: "𝕏",
      Xscr: "𝒳",
      YAcy: "Я",
      YIcy: "Ї",
      YUcy: "Ю",
      Yacut: "Ý",
      Yacute: "Ý",
      Ycirc: "Ŷ",
      Ycy: "Ы",
      Yfr: "𝔜",
      Yopf: "𝕐",
      Yscr: "𝒴",
      Yuml: "Ÿ",
      ZHcy: "Ж",
      Zacute: "Ź",
      Zcaron: "Ž",
      Zcy: "З",
      Zdot: "Ż",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      Zfr: "ℨ",
      Zopf: "ℤ",
      Zscr: "𝒵",
      aacut: "á",
      aacute: "á",
      abreve: "ă",
      ac: "∾",
      acE: "∾̳",
      acd: "∿",
      acir: "â",
      acirc: "â",
      acut: "´",
      acute: "´",
      acy: "а",
      aeli: "æ",
      aelig: "æ",
      af: "⁡",
      afr: "𝔞",
      agrav: "à",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      alpha: "α",
      amacr: "ā",
      amalg: "⨿",
      am: "&",
      amp: "&",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      aogon: "ą",
      aopf: "𝕒",
      ap: "≈",
      apE: "⩰",
      apacir: "⩯",
      ape: "≊",
      apid: "≋",
      apos: "'",
      approx: "≈",
      approxeq: "≊",
      arin: "å",
      aring: "å",
      ascr: "𝒶",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      atild: "ã",
      atilde: "ã",
      aum: "ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      bNot: "⫭",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      barvee: "⊽",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bnot: "⌐",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxDL: "╗",
      boxDR: "╔",
      boxDl: "╖",
      boxDr: "╓",
      boxH: "═",
      boxHD: "╦",
      boxHU: "╩",
      boxHd: "╤",
      boxHu: "╧",
      boxUL: "╝",
      boxUR: "╚",
      boxUl: "╜",
      boxUr: "╙",
      boxV: "║",
      boxVH: "╬",
      boxVL: "╣",
      boxVR: "╠",
      boxVh: "╫",
      boxVl: "╢",
      boxVr: "╟",
      boxbox: "⧉",
      boxdL: "╕",
      boxdR: "╒",
      boxdl: "┐",
      boxdr: "┌",
      boxh: "─",
      boxhD: "╥",
      boxhU: "╨",
      boxhd: "┬",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxuL: "╛",
      boxuR: "╘",
      boxul: "┘",
      boxur: "└",
      boxv: "│",
      boxvH: "╪",
      boxvL: "╡",
      boxvR: "╞",
      boxvh: "┼",
      boxvl: "┤",
      boxvr: "├",
      bprime: "‵",
      breve: "˘",
      brvba: "¦",
      brvbar: "¦",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      bumpeq: "≏",
      cacute: "ć",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      ccaps: "⩍",
      ccaron: "č",
      ccedi: "ç",
      ccedil: "ç",
      ccirc: "ĉ",
      ccups: "⩌",
      ccupssm: "⩐",
      cdot: "ċ",
      cedi: "¸",
      cedil: "¸",
      cemptyv: "⦲",
      cen: "¢",
      cent: "¢",
      centerdot: "·",
      cfr: "𝔠",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      chi: "χ",
      cir: "○",
      cirE: "⧃",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledR: "®",
      circledS: "Ⓢ",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      clubs: "♣",
      clubsuit: "♣",
      colon: ":",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      conint: "∮",
      copf: "𝕔",
      coprod: "∐",
      cop: "©",
      copy: "©",
      copysr: "℗",
      crarr: "↵",
      cross: "✗",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      cup: "∪",
      cupbrcap: "⩈",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curre: "¤",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      dArr: "⇓",
      dHar: "⥥",
      dagger: "†",
      daleth: "ℸ",
      darr: "↓",
      dash: "‐",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      dcaron: "ď",
      dcy: "д",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      ddotseq: "⩷",
      de: "°",
      deg: "°",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      dfr: "𝔡",
      dharl: "⇃",
      dharr: "⇂",
      diam: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divid: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      dopf: "𝕕",
      dot: "˙",
      doteq: "≐",
      doteqdot: "≑",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      downarrow: "↓",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      dscr: "𝒹",
      dscy: "ѕ",
      dsol: "⧶",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      dzcy: "џ",
      dzigrarr: "⟿",
      eDDot: "⩷",
      eDot: "≑",
      eacut: "é",
      eacute: "é",
      easter: "⩮",
      ecaron: "ě",
      ecir: "ê",
      ecirc: "ê",
      ecolon: "≕",
      ecy: "э",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      efr: "𝔢",
      eg: "⪚",
      egrav: "è",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      emptyv: "∅",
      emsp13: " ",
      emsp14: " ",
      emsp: " ",
      eng: "ŋ",
      ensp: " ",
      eogon: "ę",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      equals: "=",
      equest: "≟",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erDot: "≓",
      erarr: "⥱",
      escr: "ℯ",
      esdot: "≐",
      esim: "≂",
      eta: "η",
      et: "ð",
      eth: "ð",
      eum: "ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      expectation: "ℰ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      ffr: "𝔣",
      filig: "ﬁ",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      fopf: "𝕗",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      fpartint: "⨍",
      frac1: "¼",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac3: "¾",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      fscr: "𝒻",
      gE: "≧",
      gEl: "⪌",
      gacute: "ǵ",
      gamma: "γ",
      gammad: "ϝ",
      gap: "⪆",
      gbreve: "ğ",
      gcirc: "ĝ",
      gcy: "г",
      gdot: "ġ",
      ge: "≥",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      gfr: "𝔤",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      gjcy: "ѓ",
      gl: "≷",
      glE: "⪒",
      gla: "⪥",
      glj: "⪤",
      gnE: "≩",
      gnap: "⪊",
      gnapprox: "⪊",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      gopf: "𝕘",
      grave: "`",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      g: ">",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      hArr: "⇔",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      hardcy: "ъ",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      hbar: "ℏ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      hfr: "𝔥",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      hopf: "𝕙",
      horbar: "―",
      hscr: "𝒽",
      hslash: "ℏ",
      hstrok: "ħ",
      hybull: "⁃",
      hyphen: "‐",
      iacut: "í",
      iacute: "í",
      ic: "⁣",
      icir: "î",
      icirc: "î",
      icy: "и",
      iecy: "е",
      iexc: "¡",
      iexcl: "¡",
      iff: "⇔",
      ifr: "𝔦",
      igrav: "ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      ijlig: "ĳ",
      imacr: "ī",
      image: "ℑ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      intercal: "⊺",
      intlarhk: "⨗",
      intprod: "⨼",
      iocy: "ё",
      iogon: "į",
      iopf: "𝕚",
      iota: "ι",
      iprod: "⨼",
      iques: "¿",
      iquest: "¿",
      iscr: "𝒾",
      isin: "∈",
      isinE: "⋹",
      isindot: "⋵",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      itilde: "ĩ",
      iukcy: "і",
      ium: "ï",
      iuml: "ï",
      jcirc: "ĵ",
      jcy: "й",
      jfr: "𝔧",
      jmath: "ȷ",
      jopf: "𝕛",
      jscr: "𝒿",
      jsercy: "ј",
      jukcy: "є",
      kappa: "κ",
      kappav: "ϰ",
      kcedil: "ķ",
      kcy: "к",
      kfr: "𝔨",
      kgreen: "ĸ",
      khcy: "х",
      kjcy: "ќ",
      kopf: "𝕜",
      kscr: "𝓀",
      lAarr: "⇚",
      lArr: "⇐",
      lAtail: "⤛",
      lBarr: "⤎",
      lE: "≦",
      lEg: "⪋",
      lHar: "⥢",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      lambda: "λ",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      laqu: "«",
      laquo: "«",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      lcaron: "ľ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      le: "≤",
      leftarrow: "←",
      leftarrowtail: "↢",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      leftthreetimes: "⋋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      lessgtr: "≶",
      lesssim: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      ljcy: "љ",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      llhard: "⥫",
      lltri: "◺",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnE: "≨",
      lnap: "⪉",
      lnapprox: "⪉",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      longleftarrow: "⟵",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      lscr: "𝓁",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      lstrok: "ł",
      l: "<",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltrPar: "⦖",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      mDDot: "∺",
      mac: "¯",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      mcy: "м",
      mdash: "—",
      measuredangle: "∡",
      mfr: "𝔪",
      mho: "℧",
      micr: "µ",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middo: "·",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      mopf: "𝕞",
      mp: "∓",
      mscr: "𝓂",
      mstpos: "∾",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nGg: "⋙̸",
      nGt: "≫⃒",
      nGtv: "≫̸",
      nLeftarrow: "⇍",
      nLeftrightarrow: "⇎",
      nLl: "⋘̸",
      nLt: "≪⃒",
      nLtv: "≪̸",
      nRightarrow: "⇏",
      nVDash: "⊯",
      nVdash: "⊮",
      nabla: "∇",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbs: " ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      ncaron: "ň",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      neArr: "⇗",
      nearhk: "⤤",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      nexist: "∄",
      nexists: "∄",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      ngsim: "≵",
      ngt: "≯",
      ngtr: "≯",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      njcy: "њ",
      nlArr: "⇍",
      nlE: "≦̸",
      nlarr: "↚",
      nldr: "‥",
      nle: "≰",
      nleftarrow: "↚",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nlsim: "≴",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nmid: "∤",
      nopf: "𝕟",
      no: "¬",
      not: "¬",
      notin: "∉",
      notinE: "⋹̸",
      notindot: "⋵̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      ntild: "ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvDash: "⊭",
      nvHarr: "⤄",
      nvap: "≍⃒",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwArr: "⇖",
      nwarhk: "⤣",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      oS: "Ⓢ",
      oacut: "ó",
      oacute: "ó",
      oast: "⊛",
      ocir: "ô",
      ocirc: "ô",
      ocy: "о",
      odash: "⊝",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      oelig: "œ",
      ofcir: "⦿",
      ofr: "𝔬",
      ogon: "˛",
      ograv: "ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      omacr: "ō",
      omega: "ω",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      oopf: "𝕠",
      opar: "⦷",
      operp: "⦹",
      oplus: "⊕",
      or: "∨",
      orarr: "↻",
      ord: "º",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oscr: "ℴ",
      oslas: "ø",
      oslash: "ø",
      osol: "⊘",
      otild: "õ",
      otilde: "õ",
      otimes: "⊗",
      otimesas: "⨶",
      oum: "ö",
      ouml: "ö",
      ovbar: "⌽",
      par: "¶",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      pfr: "𝔭",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      plusm: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      pointint: "⨕",
      popf: "𝕡",
      poun: "£",
      pound: "£",
      pr: "≺",
      prE: "⪳",
      prap: "⪷",
      prcue: "≼",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      prime: "′",
      primes: "ℙ",
      prnE: "⪵",
      prnap: "⪹",
      prnsim: "⋨",
      prod: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      pscr: "𝓅",
      psi: "ψ",
      puncsp: " ",
      qfr: "𝔮",
      qint: "⨌",
      qopf: "𝕢",
      qprime: "⁗",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      quo: '"',
      quot: '"',
      rAarr: "⇛",
      rArr: "⇒",
      rAtail: "⤜",
      rBarr: "⤏",
      rHar: "⥤",
      race: "∽̱",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raqu: "»",
      raquo: "»",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      rarrtl: "↣",
      rarrw: "↝",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      rcaron: "ř",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      re: "®",
      reg: "®",
      rfisht: "⥽",
      rfloor: "⌋",
      rfr: "𝔯",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      rho: "ρ",
      rhov: "ϱ",
      rightarrow: "→",
      rightarrowtail: "↣",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      rightthreetimes: "⋌",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      rsaquo: "›",
      rscr: "𝓇",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      ruluhar: "⥨",
      rx: "℞",
      sacute: "ś",
      sbquo: "‚",
      sc: "≻",
      scE: "⪴",
      scap: "⪸",
      scaron: "š",
      sccue: "≽",
      sce: "⪰",
      scedil: "ş",
      scirc: "ŝ",
      scnE: "⪶",
      scnap: "⪺",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      seArr: "⇘",
      searhk: "⤥",
      searr: "↘",
      searrow: "↘",
      sec: "§",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      shchcy: "щ",
      shcy: "ш",
      shortmid: "∣",
      shortparallel: "∥",
      sh: "­",
      shy: "­",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      square: "□",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      sub: "⊂",
      subE: "⫅",
      subdot: "⪽",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      sum: "∑",
      sung: "♪",
      sup: "⊃",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      supE: "⫆",
      supdot: "⪾",
      supdsub: "⫘",
      supe: "⊇",
      supedot: "⫄",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swArr: "⇙",
      swarhk: "⤦",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szli: "ß",
      szlig: "ß",
      target: "⌖",
      tau: "τ",
      tbrk: "⎴",
      tcaron: "ť",
      tcedil: "ţ",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      tfr: "𝔱",
      there4: "∴",
      therefore: "∴",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      thinsp: " ",
      thkap: "≈",
      thksim: "∼",
      thor: "þ",
      thorn: "þ",
      tilde: "˜",
      time: "×",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      tscr: "𝓉",
      tscy: "ц",
      tshcy: "ћ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      uArr: "⇑",
      uHar: "⥣",
      uacut: "ú",
      uacute: "ú",
      uarr: "↑",
      ubrcy: "ў",
      ubreve: "ŭ",
      ucir: "û",
      ucirc: "û",
      ucy: "у",
      udarr: "⇅",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      ufr: "𝔲",
      ugrav: "ù",
      ugrave: "ù",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      umacr: "ū",
      um: "¨",
      uml: "¨",
      uogon: "ų",
      uopf: "𝕦",
      uparrow: "↑",
      updownarrow: "↕",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      upsi: "υ",
      upsih: "ϒ",
      upsilon: "υ",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      uring: "ů",
      urtri: "◹",
      uscr: "𝓊",
      utdot: "⋰",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      uum: "ü",
      uuml: "ü",
      uwangle: "⦧",
      vArr: "⇕",
      vBar: "⫨",
      vBarv: "⫩",
      vDash: "⊨",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      vcy: "в",
      vdash: "⊢",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      verbar: "|",
      vert: "|",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      vzigzag: "⦚",
      wcirc: "ŵ",
      wedbar: "⩟",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      wfr: "𝔴",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      yacut: "ý",
      yacute: "ý",
      yacy: "я",
      ycirc: "ŷ",
      ycy: "ы",
      ye: "¥",
      yen: "¥",
      yfr: "𝔶",
      yicy: "ї",
      yopf: "𝕪",
      yscr: "𝓎",
      yucy: "ю",
      yum: "ÿ",
      yuml: "ÿ",
      zacute: "ź",
      zcaron: "ž",
      zcy: "з",
      zdot: "ż",
      zeetrf: "ℨ",
      zeta: "ζ",
      zfr: "𝔷",
      zhcy: "ж",
      zigrarr: "⇝",
      zopf: "𝕫",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌",
      default: g
    }),
    b = {
      AElig: "Æ",
      AMP: "&",
      Aacute: "Á",
      Acirc: "Â",
      Agrave: "À",
      Aring: "Å",
      Atilde: "Ã",
      Auml: "Ä",
      COPY: "©",
      Ccedil: "Ç",
      ETH: "Ð",
      Eacute: "É",
      Ecirc: "Ê",
      Egrave: "È",
      Euml: "Ë",
      GT: ">",
      Iacute: "Í",
      Icirc: "Î",
      Igrave: "Ì",
      Iuml: "Ï",
      LT: "<",
      Ntilde: "Ñ",
      Oacute: "Ó",
      Ocirc: "Ô",
      Ograve: "Ò",
      Oslash: "Ø",
      Otilde: "Õ",
      Ouml: "Ö",
      QUOT: '"',
      REG: "®",
      THORN: "Þ",
      Uacute: "Ú",
      Ucirc: "Û",
      Ugrave: "Ù",
      Uuml: "Ü",
      Yacute: "Ý",
      aacute: "á",
      acirc: "â",
      acute: "´",
      aelig: "æ",
      agrave: "à",
      amp: "&",
      aring: "å",
      atilde: "ã",
      auml: "ä",
      brvbar: "¦",
      ccedil: "ç",
      cedil: "¸",
      cent: "¢",
      copy: "©",
      curren: "¤",
      deg: "°",
      divide: "÷",
      eacute: "é",
      ecirc: "ê",
      egrave: "è",
      eth: "ð",
      euml: "ë",
      frac12: "½",
      frac14: "¼",
      frac34: "¾",
      gt: ">",
      iacute: "í",
      icirc: "î",
      iexcl: "¡",
      igrave: "ì",
      iquest: "¿",
      iuml: "ï",
      laquo: "«",
      lt: "<",
      macr: "¯",
      micro: "µ",
      middot: "·",
      nbsp: " ",
      not: "¬",
      ntilde: "ñ",
      oacute: "ó",
      ocirc: "ô",
      ograve: "ò",
      ordf: "ª",
      ordm: "º",
      oslash: "ø",
      otilde: "õ",
      ouml: "ö",
      para: "¶",
      plusmn: "±",
      pound: "£",
      quot: '"',
      raquo: "»",
      reg: "®",
      sect: "§",
      shy: "­",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      szlig: "ß",
      thorn: "þ",
      times: "×",
      uacute: "ú",
      ucirc: "û",
      ugrave: "ù",
      uml: "¨",
      uuml: "ü",
      yacute: "ý",
      yen: "¥",
      yuml: "ÿ"
    },
    v = Object.freeze({
      AElig: "Æ",
      AMP: "&",
      Aacute: "Á",
      Acirc: "Â",
      Agrave: "À",
      Aring: "Å",
      Atilde: "Ã",
      Auml: "Ä",
      COPY: "©",
      Ccedil: "Ç",
      ETH: "Ð",
      Eacute: "É",
      Ecirc: "Ê",
      Egrave: "È",
      Euml: "Ë",
      GT: ">",
      Iacute: "Í",
      Icirc: "Î",
      Igrave: "Ì",
      Iuml: "Ï",
      LT: "<",
      Ntilde: "Ñ",
      Oacute: "Ó",
      Ocirc: "Ô",
      Ograve: "Ò",
      Oslash: "Ø",
      Otilde: "Õ",
      Ouml: "Ö",
      QUOT: '"',
      REG: "®",
      THORN: "Þ",
      Uacute: "Ú",
      Ucirc: "Û",
      Ugrave: "Ù",
      Uuml: "Ü",
      Yacute: "Ý",
      aacute: "á",
      acirc: "â",
      acute: "´",
      aelig: "æ",
      agrave: "à",
      amp: "&",
      aring: "å",
      atilde: "ã",
      auml: "ä",
      brvbar: "¦",
      ccedil: "ç",
      cedil: "¸",
      cent: "¢",
      copy: "©",
      curren: "¤",
      deg: "°",
      divide: "÷",
      eacute: "é",
      ecirc: "ê",
      egrave: "è",
      eth: "ð",
      euml: "ë",
      frac12: "½",
      frac14: "¼",
      frac34: "¾",
      gt: ">",
      iacute: "í",
      icirc: "î",
      iexcl: "¡",
      igrave: "ì",
      iquest: "¿",
      iuml: "ï",
      laquo: "«",
      lt: "<",
      macr: "¯",
      micro: "µ",
      middot: "·",
      nbsp: " ",
      not: "¬",
      ntilde: "ñ",
      oacute: "ó",
      ocirc: "ô",
      ograve: "ò",
      ordf: "ª",
      ordm: "º",
      oslash: "ø",
      otilde: "õ",
      ouml: "ö",
      para: "¶",
      plusmn: "±",
      pound: "£",
      quot: '"',
      raquo: "»",
      reg: "®",
      sect: "§",
      shy: "­",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      szlig: "ß",
      thorn: "þ",
      times: "×",
      uacute: "ú",
      ucirc: "û",
      ugrave: "ù",
      uml: "¨",
      uuml: "ü",
      yacute: "ý",
      yen: "¥",
      yuml: "ÿ",
      default: b
    }),
    E = {
      0: "�",
      128: "€",
      130: "‚",
      131: "ƒ",
      132: "„",
      133: "…",
      134: "†",
      135: "‡",
      136: "ˆ",
      137: "‰",
      138: "Š",
      139: "‹",
      140: "Œ",
      142: "Ž",
      145: "‘",
      146: "’",
      147: "“",
      148: "”",
      149: "•",
      150: "–",
      151: "—",
      152: "˜",
      153: "™",
      154: "š",
      155: "›",
      156: "œ",
      158: "ž",
      159: "Ÿ"
    },
    w = Object.freeze({ default: E }),
    y = function(r) {
      var e = "string" == typeof r ? r.charCodeAt(0) : r;
      return e >= 48 && e <= 57;
    };
  var A = function(r) {
    var e = "string" == typeof r ? r.charCodeAt(0) : r;
    return (
      (e >= 97 && e <= 102) || (e >= 65 && e <= 70) || (e >= 48 && e <= 57)
    );
  };
  var C = function(r) {
    var e = "string" == typeof r ? r.charCodeAt(0) : r;
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  };
  var q = function(r) {
    return C(r) || y(r);
  };
  var F = (m && g) || m,
    k = (v && b) || v,
    x = (w && E) || w,
    L = function(r, e) {
      var t,
        u,
        n = {};
      e || (e = {});
      for (u in Z) (t = e[u]), (n[u] = null === t || void 0 === t ? Z[u] : t);
      (n.position.indent || n.position.start) &&
        ((n.indent = n.position.indent || []), (n.position = n.position.start));
      return (function(r, e) {
        var t,
          u,
          n,
          a,
          o,
          i,
          c,
          l,
          s,
          f,
          p,
          D,
          d,
          h,
          g,
          m,
          b,
          v,
          E = e.additional,
          w = e.nonTerminated,
          y = e.text,
          A = e.reference,
          C = e.warning,
          L = e.textContext,
          Z = e.referenceContext,
          ar = e.warningContext,
          or = e.position,
          ir = e.indent || [],
          sr = r.length,
          fr = 0,
          pr = -1,
          Dr = or.column || 1,
          dr = or.line || 1,
          hr = M,
          gr = [];
        (g = br()),
          (c = C
            ? function(r, e) {
                var t = br();
                (t.column += e), (t.offset += e), C.call(ar, cr[r], t, r);
              }
            : T),
          fr--,
          sr++;
        for (; ++fr < sr; )
          if ((a === I && (Dr = ir[pr] || 1), (a = vr(fr)) !== R))
            a === I && (dr++, pr++, (Dr = 0)), a ? ((hr += a), Dr++) : Er();
          else {
            if (
              (i = vr(fr + 1)) === $ ||
              i === I ||
              i === N ||
              i === j ||
              i === G ||
              i === R ||
              i === M ||
              (E && i === E)
            ) {
              (hr += a), Dr++;
              continue;
            }
            for (
              p = D = fr + 1,
                v = D,
                i !== U
                  ? (d = Y)
                  : ((v = ++p),
                    (i = vr(v)) === V || i === z
                      ? ((d = _), (v = ++p))
                      : (d = J)),
                t = M,
                f = M,
                n = M,
                h = K[d],
                v--;
              ++v < sr && ((i = vr(v)), h(i));

            )
              (n += i), d === Y && B.call(k, n) && ((t = n), (f = k[n]));
            (u = vr(v) === P) &&
              (v++, d === Y && B.call(F, n) && ((t = n), (f = F[n]))),
              (b = 1 + v - D),
              (u || w) &&
                (n
                  ? d === Y
                    ? (u && !f
                        ? c(tr, 1)
                        : (t !== n &&
                            ((v = p + t.length), (b = 1 + v - p), (u = !1)),
                          u ||
                            ((l = t ? W : rr),
                            e.attribute
                              ? (i = vr(v)) === H
                                ? (c(l, b), (f = null))
                                : q(i)
                                ? (f = null)
                                : c(l, b)
                              : c(l, b))),
                      (o = f))
                    : (u || c(X, b),
                      (o = parseInt(n, Q[d])),
                      ((mr = o) >= 55296 && mr <= 57343) || mr > 1114111
                        ? (c(nr, b), (o = O))
                        : o in x
                        ? (c(ur, b), (o = x[o]))
                        : ((s = M),
                          lr(o) && c(ur, b),
                          o > 65535 &&
                            ((s += S(((o -= 65536) >>> 10) | 55296)),
                            (o = 56320 | (1023 & o))),
                          (o = s + S(o))))
                  : d !== Y && c(er, b)),
              o
                ? (Er(),
                  (g = br()),
                  (fr = v - 1),
                  (Dr += v - D + 1),
                  gr.push(o),
                  (m = br()).offset++,
                  A && A.call(Z, o, { start: g, end: m }, r.slice(D - 1, v)),
                  (g = m))
                : ((n = r.slice(D - 1, v)),
                  (hr += n),
                  (Dr += n.length),
                  (fr = v - 1));
          }
        var mr;
        return gr.join(M);
        function br() {
          return { line: dr, column: Dr, offset: fr + (or.offset || 0) };
        }
        function vr(e) {
          return r.charAt(e);
        }
        function Er() {
          hr &&
            (gr.push(hr),
            y && y.call(L, hr, { start: g, end: br() }),
            (hr = M));
        }
      })(r, n);
    },
    B = {}.hasOwnProperty,
    S = String.fromCharCode,
    T = Function.prototype,
    O = "�",
    N = "\f",
    R = "&",
    U = "#",
    P = ";",
    I = "\n",
    V = "x",
    z = "X",
    j = " ",
    G = "<",
    H = "=",
    M = "",
    $ = "\t",
    Z = {
      warning: null,
      reference: null,
      text: null,
      warningContext: null,
      referenceContext: null,
      textContext: null,
      position: {},
      additional: null,
      attribute: !1,
      nonTerminated: !0
    },
    Y = "named",
    _ = "hexadecimal",
    J = "decimal",
    Q = {};
  (Q[_] = 16), (Q[J] = 10);
  var K = {};
  (K[Y] = q), (K[J] = y), (K[_] = A);
  var W = 1,
    X = 2,
    rr = 3,
    er = 4,
    tr = 5,
    ur = 6,
    nr = 7,
    ar = "Numeric character references",
    or = " must be terminated by a semicolon",
    ir = " cannot be empty",
    cr = {};
  function lr(r) {
    return (
      (r >= 1 && r <= 8) ||
      11 === r ||
      (r >= 13 && r <= 31) ||
      (r >= 127 && r <= 159) ||
      (r >= 64976 && r <= 65007) ||
      65535 == (65535 & r) ||
      65534 == (65535 & r)
    );
  }
  (cr[W] = "Named character references" + or),
    (cr[X] = ar + or),
    (cr[rr] = "Named character references" + ir),
    (cr[er] = ar + ir),
    (cr[tr] = "Named character references must be known"),
    (cr[ur] = ar + " cannot be disallowed"),
    (cr[nr] = ar + " cannot be outside the permissible Unicode range");
  var sr = function(r) {
    return (
      (u.raw = function(r, u, a) {
        return L(r, n(a, { position: e(u), warning: t }));
      }),
      u
    );
    function e(e) {
      for (var t = r.offset, u = e.line, n = []; ++u && u in t; )
        n.push((t[u] || 0) + 1);
      return { start: e, indent: n };
    }
    function t(e, t, u) {
      3 !== u && r.file.message(e, t);
    }
    function u(u, n, a) {
      L(u, {
        position: e(n),
        warning: t,
        text: a,
        reference: a,
        textContext: r,
        referenceContext: r
      });
    }
  };
  var fr = function(r) {
      return function(e, t) {
        var u,
          n,
          a,
          o,
          i,
          c,
          l = this,
          s = l.offset,
          f = [],
          p = l[r + "Methods"],
          D = l[r + "Tokenizers"],
          d = t.line,
          h = t.column;
        if (!e) return f;
        (v.now = m), (v.file = l.file), g("");
        for (; e; ) {
          for (
            u = -1, n = p.length, i = !1;
            ++u < n &&
            ((o = p[u]),
            !(a = D[o]) ||
              (a.onlyAtStart && !l.atStart) ||
              (a.notInList && l.inList) ||
              (a.notInBlock && l.inBlock) ||
              (a.notInLink && l.inLink) ||
              ((c = e.length), a.apply(l, [v, e]), !(i = c !== e.length)));

          );
          i || l.file.fail(new Error("Infinite loop"), v.now());
        }
        return (l.eof = m()), f;
        function g(r) {
          for (var e = -1, t = r.indexOf("\n"); -1 !== t; )
            d++, (e = t), (t = r.indexOf("\n", t + 1));
          -1 === e ? (h += r.length) : (h = r.length - e),
            d in s && (-1 !== e ? (h += s[d]) : h <= s[d] && (h = s[d] + 1));
        }
        function m() {
          var r = { line: d, column: h };
          return (r.offset = l.toOffset(r)), r;
        }
        function b() {
          var r = m();
          return function(e, t) {
            var u = e.position,
              n = u ? u.start : r,
              a = [],
              o = u && u.end.line,
              i = r.line;
            if (
              ((e.position = new (function(r) {
                (this.start = r), (this.end = m());
              })(n)),
              u && t && u.indent)
            ) {
              if (((a = u.indent), o < i)) {
                for (; ++o < i; ) a.push((s[o] || 0) + 1);
                a.push(r.column);
              }
              t = a.concat(t);
            }
            return (e.position.indent = t || []), e;
          };
        }
        function v(r) {
          var t = (function() {
              var r = [],
                e = d + 1;
              return function() {
                for (var t = d + 1; e < t; ) r.push((s[e] || 0) + 1), e++;
                return r;
              };
            })(),
            u = b(),
            n = m();
          return (
            (function(r) {
              e.substring(0, r.length) !== r &&
                l.file.fail(
                  new Error(
                    "Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"
                  ),
                  m()
                );
            })(r),
            (a.reset = o),
            (o.test = i),
            (a.test = i),
            (e = e.substring(r.length)),
            g(r),
            (t = t()),
            a
          );
          function a(r, e) {
            return u(
              (function(r, e) {
                var t = e ? e.children : f,
                  u = t[t.length - 1];
                u &&
                  r.type === u.type &&
                  r.type in pr &&
                  Dr(u) &&
                  Dr(r) &&
                  (r = pr[r.type].call(l, u, r));
                r !== u && t.push(r);
                l.atStart && 0 !== f.length && l.exitStart();
                return r;
              })(u(r), e),
              t
            );
          }
          function o() {
            var t = a.apply(null, arguments);
            return (d = n.line), (h = n.column), (e = r + e), t;
          }
          function i() {
            var t = u({});
            return (d = n.line), (h = n.column), (e = r + e), t.position;
          }
        }
      };
    },
    pr = {
      text: function(r, e) {
        return (r.value += e.value), r;
      },
      blockquote: function(r, e) {
        if (this.options.commonmark) return e;
        return (r.children = r.children.concat(e.children)), r;
      }
    };
  function Dr(r) {
    var e, t;
    return (
      "text" !== r.type ||
      !r.position ||
      ((e = r.position.start),
      (t = r.position.end),
      e.line !== t.line || t.column - e.column === r.value.length)
    );
  }
  var dr = br,
    hr = [
      "\\",
      "`",
      "*",
      "{",
      "}",
      "[",
      "]",
      "(",
      ")",
      "#",
      "+",
      "-",
      ".",
      "!",
      "_",
      ">"
    ],
    gr = hr.concat(["~", "|"]),
    mr = gr.concat([
      "\n",
      '"',
      "$",
      "%",
      "&",
      "'",
      ",",
      "/",
      ":",
      ";",
      "<",
      "=",
      "?",
      "@",
      "^"
    ]);
  function br(r) {
    var e = r || {};
    return e.commonmark ? mr : e.gfm ? gr : hr;
  }
  (br.default = hr), (br.gfm = gr), (br.commonmark = mr);
  var vr = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "meta",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "pre",
      "section",
      "source",
      "title",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ],
    Er = Object.freeze({ default: vr }),
    wr = {
      position: !0,
      gfm: !0,
      commonmark: !1,
      footnotes: !1,
      pedantic: !1,
      blocks: (Er && vr) || Er
    },
    yr = function(e) {
      var t,
        u,
        a = this.options;
      if (null == e) e = {};
      else {
        if ("object" !== r(e))
          throw new Error("Invalid value `" + e + "` for setting `options`");
        e = n(e);
      }
      for (t in wr) {
        if (
          (null == (u = e[t]) && (u = a[t]),
          ("blocks" !== t && "boolean" != typeof u) ||
            ("blocks" === t && "object" !== r(u)))
        )
          throw new Error(
            "Invalid value `" + u + "` for setting `options." + t + "`"
          );
        e[t] = u;
      }
      return (this.options = e), (this.escape = dr(e)), this;
    };
  var Ar = function(r, e, t, u) {
    "function" == typeof e && ((u = t), (t = e), (e = null));
    function n(r, a, o) {
      var i;
      return (
        (a = a || (o ? 0 : null)),
        (e && r.type !== e) || (i = t(r, a, o || null)),
        r.children && !1 !== i
          ? (function(r, e) {
              var t,
                a = u ? -1 : 1,
                o = r.length,
                i = (u ? o : -1) + a;
              for (; i > -1 && i < o; ) {
                if ((t = r[i]) && !1 === n(t, i, e)) return !1;
                i += a;
              }
              return !0;
            })(r.children, r)
          : i
      );
    }
    n(r);
  };
  var Cr = function(r, e) {
    return Ar(r, e ? qr : Fr), r;
  };
  function qr(r) {
    delete r.position;
  }
  function Fr(r) {
    r.position = void 0;
  }
  var kr = function() {
      var r,
        e = String(this.file),
        t = { line: 1, column: 1, offset: 0 },
        u = n(t);
      65279 === (e = e.replace(Lr, xr)).charCodeAt(0) &&
        ((e = e.slice(1)), u.column++, u.offset++);
      (r = {
        type: "root",
        children: this.tokenizeBlock(e, u),
        position: { start: t, end: this.eof || n(t) }
      }),
        this.options.position || Cr(r, !0);
      return r;
    },
    xr = "\n",
    Lr = /\r\n|\r/g;
  var Br = function(r) {
      return Tr.test("number" == typeof r ? Sr(r) : r.charAt(0));
    },
    Sr = String.fromCharCode,
    Tr = /\s/;
  var Or = function(r, e, t) {
    var u,
      n,
      a,
      o,
      i = e.charAt(0);
    if ("\n" !== i) return;
    if (t) return !0;
    (o = 1), (u = e.length), (n = i), (a = "");
    for (; o < u && ((i = e.charAt(o)), Br(i)); )
      (a += i), "\n" === i && ((n += a), (a = "")), o++;
    r(n);
  };
  var Nr,
    Rr = "",
    Ur = function(r, e) {
      if ("string" != typeof r) throw new TypeError("expected a string");
      if (1 === e) return r;
      if (2 === e) return r + r;
      var t = r.length * e;
      if (Nr !== r || void 0 === Nr) (Nr = r), (Rr = "");
      else if (Rr.length >= t) return Rr.substr(0, t);
      for (; t > Rr.length && e > 1; ) 1 & e && (Rr += r), (e >>= 1), (r += r);
      return (Rr = (Rr += r).substr(0, t));
    };
  var Pr = function(r) {
      var e = String(r),
        t = e.length;
      for (; e.charAt(--t) === Ir; );
      return e.slice(0, t + 1);
    },
    Ir = "\n";
  var Vr = function(r, e, t) {
      var u,
        n,
        a,
        o = -1,
        i = e.length,
        c = "",
        l = "",
        s = "",
        f = "";
      for (; ++o < i; )
        if (((u = e.charAt(o)), a))
          if (((a = !1), (c += s), (l += f), (s = ""), (f = ""), u === zr))
            (s = u), (f = u);
          else
            for (c += u, l += u; ++o < i; ) {
              if (!(u = e.charAt(o)) || u === zr) {
                (f = u), (s = u);
                break;
              }
              (c += u), (l += u);
            }
        else if (
          u === Gr &&
          e.charAt(o + 1) === u &&
          e.charAt(o + 2) === u &&
          e.charAt(o + 3) === u
        )
          (s += Hr), (o += 3), (a = !0);
        else if (u === jr) (s += u), (a = !0);
        else {
          for (n = ""; u === jr || u === Gr; ) (n += u), (u = e.charAt(++o));
          if (u !== zr) break;
          (s += n + u), (f += u);
        }
      if (l) return !!t || r(c)({ type: "code", lang: null, value: Pr(l) });
    },
    zr = "\n",
    jr = "\t",
    Gr = " ",
    Hr = Ur(Gr, 4);
  var Mr = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i,
        c,
        l,
        s,
        f,
        p,
        D,
        d = this.options,
        h = e.length + 1,
        g = 0,
        m = "";
      if (!d.gfm) return;
      for (; g < h && ((a = e.charAt(g)) === Yr || a === Zr); ) (m += a), g++;
      if (((p = g), (a = e.charAt(g)) !== _r && a !== Jr)) return;
      g++, (n = a), (u = 1), (m += a);
      for (; g < h && (a = e.charAt(g)) === n; ) (m += a), u++, g++;
      if (u < Qr) return;
      for (; g < h && ((a = e.charAt(g)) === Yr || a === Zr); ) (m += a), g++;
      (o = ""), (i = "");
      for (; g < h && (a = e.charAt(g)) !== $r && a !== _r && a !== Jr; )
        a === Yr || a === Zr ? (i += a) : ((o += i + a), (i = "")), g++;
      if ((a = e.charAt(g)) && a !== $r) return;
      if (t) return !0;
      ((D = r.now()).column += m.length),
        (D.offset += m.length),
        (m += o),
        (o = this.decode.raw(this.unescape(o), D)),
        i && (m += i);
      (i = ""), (s = ""), (f = ""), (c = ""), (l = "");
      for (; g < h; )
        if (
          ((a = e.charAt(g)), (c += s), (l += f), (s = ""), (f = ""), a === $r)
        ) {
          for (
            c ? ((s += a), (f += a)) : (m += a), i = "", g++;
            g < h && (a = e.charAt(g)) === Yr;

          )
            (i += a), g++;
          if (((s += i), (f += i.slice(p)), !(i.length >= Kr))) {
            for (i = ""; g < h && (a = e.charAt(g)) === n; ) (i += a), g++;
            if (((s += i), (f += i), !(i.length < u))) {
              for (i = ""; g < h && ((a = e.charAt(g)) === Yr || a === Zr); )
                (s += a), (f += a), g++;
              if (!a || a === $r) break;
            }
          }
        } else (c += a), (f += a), g++;
      return r((m += c + s))({ type: "code", lang: o || null, value: Pr(l) });
    },
    $r = "\n",
    Zr = "\t",
    Yr = " ",
    _r = "~",
    Jr = "`",
    Qr = 3,
    Kr = 4;
  var Wr = o(function(r, e) {
      ((e = r.exports = function(r) {
        return r.replace(/^\s*|\s*$/g, "");
      }).left = function(r) {
        return r.replace(/^\s*/, "");
      }),
        (e.right = function(r) {
          return r.replace(/\s*$/, "");
        });
    }),
    Xr = function(r, e, t, u) {
      var n,
        a,
        o,
        i,
        c,
        l,
        s = ["pedantic", "commonmark"],
        f = s.length,
        p = r.length,
        D = -1;
      for (; ++D < p; ) {
        for (n = r[D], a = n[1] || {}, o = n[0], i = -1, l = !1; ++i < f; )
          if (void 0 !== a[(c = s[i])] && a[c] !== t.options[c]) {
            l = !0;
            break;
          }
        if (!l && e[o].apply(t, u)) return !0;
      }
      return !1;
    };
  var re = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i,
        c,
        l,
        s,
        f,
        p = this.offset,
        D = this.blockTokenizers,
        d = this.interruptBlockquote,
        h = r.now(),
        g = h.line,
        m = e.length,
        b = [],
        v = [],
        E = [],
        w = 0;
      for (; w < m && ((n = e.charAt(w)) === ue || n === te); ) w++;
      if (e.charAt(w) !== ne) return;
      if (t) return !0;
      w = 0;
      for (; w < m; ) {
        for (
          o = e.indexOf(ee, w), l = w, s = !1, -1 === o && (o = m);
          w < m && ((n = e.charAt(w)) === ue || n === te);

        )
          w++;
        if (
          (e.charAt(w) === ne
            ? (w++, (s = !0), e.charAt(w) === ue && w++)
            : (w = l),
          (i = e.slice(w, o)),
          !s && !Wr(i))
        ) {
          w = l;
          break;
        }
        if (!s && ((a = e.slice(w)), Xr(d, D, this, [r, a, !0]))) break;
        (c = l === w ? i : e.slice(l, o)),
          E.push(w - l),
          b.push(c),
          v.push(i),
          (w = o + 1);
      }
      (w = -1), (m = E.length), (u = r(b.join(ee)));
      for (; ++w < m; ) (p[g] = (p[g] || 0) + E[w]), g++;
      return (
        (f = this.enterBlock()),
        (v = this.tokenizeBlock(v.join(ee), h)),
        f(),
        u({ type: "blockquote", children: v })
      );
    },
    ee = "\n",
    te = "\t",
    ue = " ",
    ne = ">";
  var ae = function(r, e, t) {
      var u,
        n,
        a,
        o = this.options,
        i = e.length + 1,
        c = -1,
        l = r.now(),
        s = "",
        f = "";
      for (; ++c < i; ) {
        if ((u = e.charAt(c)) !== ce && u !== ie) {
          c--;
          break;
        }
        s += u;
      }
      a = 0;
      for (; ++c <= i; ) {
        if ((u = e.charAt(c)) !== le) {
          c--;
          break;
        }
        (s += u), a++;
      }
      if (a > se) return;
      if (!a || (!o.pedantic && e.charAt(c + 1) === le)) return;
      (i = e.length + 1), (n = "");
      for (; ++c < i; ) {
        if ((u = e.charAt(c)) !== ce && u !== ie) {
          c--;
          break;
        }
        n += u;
      }
      if (!o.pedantic && 0 === n.length && u && u !== oe) return;
      if (t) return !0;
      (s += n), (n = ""), (f = "");
      for (; ++c < i && (u = e.charAt(c)) && u !== oe; )
        if (u === ce || u === ie || u === le) {
          for (; u === ce || u === ie; ) (n += u), (u = e.charAt(++c));
          for (; u === le; ) (n += u), (u = e.charAt(++c));
          for (; u === ce || u === ie; ) (n += u), (u = e.charAt(++c));
          c--;
        } else (f += n + u), (n = "");
      return (
        (l.column += s.length),
        (l.offset += s.length),
        r((s += f + n))({
          type: "heading",
          depth: a,
          children: this.tokenizeInline(f, l)
        })
      );
    },
    oe = "\n",
    ie = "\t",
    ce = " ",
    le = "#",
    se = 6;
  var fe = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i = -1,
        c = e.length + 1,
        l = "";
      for (; ++i < c && ((u = e.charAt(i)) === De || u === de); ) l += u;
      if (u !== he && u !== me && u !== ge) return;
      (n = u), (l += u), (a = 1), (o = "");
      for (; ++i < c; )
        if ((u = e.charAt(i)) === n) a++, (l += o + n), (o = "");
        else {
          if (u !== de)
            return a >= be && (!u || u === pe)
              ? ((l += o), !!t || r(l)({ type: "thematicBreak" }))
              : void 0;
          o += u;
        }
    },
    pe = "\n",
    De = "\t",
    de = " ",
    he = "*",
    ge = "_",
    me = "-",
    be = 3;
  var ve = function(r) {
      var e,
        t = 0,
        u = 0,
        n = r.charAt(t),
        a = {};
      for (; n in Ee; )
        (e = Ee[n]),
          (u += e),
          e > 1 && (u = Math.floor(u / e) * e),
          (a[u] = t),
          (n = r.charAt(++t));
      return { indent: u, stops: a };
    },
    Ee = { " ": 1, "\t": 4 };
  var we = function(r, e) {
      var t,
        u,
        n,
        a,
        o = r.split(Ae),
        i = o.length + 1,
        c = 1 / 0,
        l = [];
      o.unshift(Ur(ye, e) + "!");
      for (; i--; )
        if (((u = ve(o[i])), (l[i] = u.stops), 0 !== Wr(o[i]).length)) {
          if (!u.indent) {
            c = 1 / 0;
            break;
          }
          u.indent > 0 && u.indent < c && (c = u.indent);
        }
      if (c !== 1 / 0)
        for (i = o.length; i--; ) {
          for (n = l[i], t = c; t && !(t in n); ) t--;
          (a = 0 !== Wr(o[i]).length && c && t !== c ? Ce : ""),
            (o[i] = a + o[i].slice(t in n ? n[t] + 1 : 0));
        }
      return o.shift(), o.join(Ae);
    },
    ye = " ",
    Ae = "\n",
    Ce = "\t";
  var qe = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i,
        c,
        l,
        s,
        f,
        p,
        D,
        d,
        h,
        g,
        m,
        b,
        v,
        E,
        w,
        A,
        C,
        q,
        F,
        k,
        x = this.options.commonmark,
        L = this.options.pedantic,
        B = this.blockTokenizers,
        S = this.interruptList,
        T = 0,
        O = e.length,
        N = null,
        R = 0;
      for (; T < O; ) {
        if ((o = e.charAt(T)) === Se) R += Oe - (R % Oe);
        else {
          if (o !== Le) break;
          R++;
        }
        T++;
      }
      if (R >= Oe) return;
      if (((o = e.charAt(T)), (u = x ? je : ze), !0 === Ve[o]))
        (i = o), (a = !1);
      else {
        for (a = !0, n = ""; T < O && ((o = e.charAt(T)), y(o)); )
          (n += o), T++;
        if (((o = e.charAt(T)), !n || !0 !== u[o])) return;
        (N = parseInt(n, 10)), (i = o);
      }
      if ((o = e.charAt(++T)) !== Le && o !== Se) return;
      if (t) return !0;
      (T = 0), (g = []), (m = []), (b = []);
      for (; T < O; ) {
        for (
          c = e.indexOf(Be, T),
            l = T,
            s = !1,
            k = !1,
            -1 === c && (c = O),
            F = T + Oe,
            R = 0;
          T < O;

        ) {
          if ((o = e.charAt(T)) === Se) R += Oe - (R % Oe);
          else {
            if (o !== Le) break;
            R++;
          }
          T++;
        }
        if (
          (R >= Oe && (k = !0),
          v && R >= v.indent && (k = !0),
          (o = e.charAt(T)),
          (f = null),
          !k)
        ) {
          if (!0 === Ve[o]) (f = o), T++, R++;
          else {
            for (n = ""; T < O && ((o = e.charAt(T)), y(o)); ) (n += o), T++;
            (o = e.charAt(T)),
              T++,
              n && !0 === u[o] && ((f = o), (R += n.length + 1));
          }
          if (f)
            if ((o = e.charAt(T)) === Se) (R += Oe - (R % Oe)), T++;
            else if (o === Le) {
              for (F = T + Oe; T < F && e.charAt(T) === Le; ) T++, R++;
              T === F && e.charAt(T) === Le && ((T -= Oe - 1), (R -= Oe - 1));
            } else o !== Be && "" !== o && (f = null);
        }
        if (f) {
          if (!L && i !== f) break;
          s = !0;
        } else
          x || k || e.charAt(l) !== Le
            ? x && v && (k = R >= v.indent || R > Oe)
            : (k = !0),
            (s = !1),
            (T = l);
        if (
          ((D = e.slice(l, c)),
          (p = l === T ? D : e.slice(T, c)),
          (f === Fe || f === ke || f === xe) &&
            B.thematicBreak.call(this, r, D, !0))
        )
          break;
        if (((d = h), (h = !Wr(p).length), k && v))
          (v.value = v.value.concat(b, D)), (m = m.concat(b, D)), (b = []);
        else if (s)
          0 !== b.length && (v.value.push(""), (v.trail = b.concat())),
            (v = { value: [D], indent: R, trail: [] }),
            g.push(v),
            (m = m.concat(b, D)),
            (b = []);
        else if (h) {
          if (d) break;
          b.push(D);
        } else {
          if (d) break;
          if (Xr(S, B, this, [r, D, !0])) break;
          (v.value = v.value.concat(b, D)), (m = m.concat(b, D)), (b = []);
        }
        T = c + 1;
      }
      (C = r(m.join(Be)).reset({
        type: "list",
        ordered: a,
        start: N,
        loose: null,
        children: []
      })),
        (E = this.enterList()),
        (w = this.enterBlock()),
        (A = !1),
        (T = -1),
        (O = g.length);
      for (; ++T < O; )
        (v = g[T].value.join(Be)),
          (q = r.now()),
          (v = r(v)(Ge(this, v, q), C)).loose && (A = !0),
          (v = g[T].trail.join(Be)),
          T !== O - 1 && (v += Be),
          r(v);
      return E(), w(), (C.loose = A), C;
    },
    Fe = "*",
    ke = "_",
    xe = "-",
    Le = " ",
    Be = "\n",
    Se = "\t",
    Te = "x",
    Oe = 4,
    Ne = /\n\n(?!\s*$)/,
    Re = /^\[([ \t]|x|X)][ \t]/,
    Ue = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
    Pe = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
    Ie = /^( {1,4}|\t)?/gm,
    Ve = {};
  (Ve[Fe] = !0), (Ve["+"] = !0), (Ve[xe] = !0);
  var ze = { ".": !0 },
    je = {};
  function Ge(r, e, t) {
    var u,
      n,
      a = r.offset,
      o = null;
    return (
      (e = (r.options.pedantic ? He : Me).apply(null, arguments)),
      r.options.gfm &&
        (u = e.match(Re)) &&
        ((n = u[0].length),
        (o = u[1].toLowerCase() === Te),
        (a[t.line] += n),
        (e = e.slice(n))),
      {
        type: "listItem",
        loose: Ne.test(e) || e.charAt(e.length - 1) === Be,
        checked: o,
        children: r.tokenizeBlock(e, t)
      }
    );
  }
  function He(r, e, t) {
    var u = r.offset,
      n = t.line;
    return (e = e.replace(Pe, a)), (n = t.line), e.replace(Ie, a);
    function a(r) {
      return (u[n] = (u[n] || 0) + r.length), n++, "";
    }
  }
  function Me(r, e, t) {
    var u,
      n,
      a,
      o,
      i,
      c,
      l,
      s = r.offset,
      f = t.line;
    for (
      o = (e = e.replace(Ue, function(r, e, t, o, i) {
        (n = e + t + o),
          (a = i),
          Number(t) < 10 && n.length % 2 == 1 && (t = Le + t);
        return (u = e + Ur(Le, t.length) + o) + a;
      })).split(Be),
        (i = we(e, ve(u).indent).split(Be))[0] = a,
        s[f] = (s[f] || 0) + n.length,
        f++,
        c = 0,
        l = o.length;
      ++c < l;

    )
      (s[f] = (s[f] || 0) + o[c].length - i[c].length), f++;
    return i.join(Be);
  }
  (je["."] = !0), (je[")"] = !0);
  var $e = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i,
        c = r.now(),
        l = e.length,
        s = -1,
        f = "";
      for (; ++s < l; ) {
        if ((a = e.charAt(s)) !== _e || s >= Je) {
          s--;
          break;
        }
        f += a;
      }
      (u = ""), (n = "");
      for (; ++s < l; ) {
        if ((a = e.charAt(s)) === Ze) {
          s--;
          break;
        }
        a === _e || a === Ye ? (n += a) : ((u += n + a), (n = ""));
      }
      if (
        ((c.column += f.length),
        (c.offset += f.length),
        (f += u + n),
        (a = e.charAt(++s)),
        (o = e.charAt(++s)),
        a !== Ze || !Qe[o])
      )
        return;
      (f += a), (n = o), (i = Qe[o]);
      for (; ++s < l; ) {
        if ((a = e.charAt(s)) !== o) {
          if (a !== Ze) return;
          s--;
          break;
        }
        n += a;
      }
      if (t) return !0;
      return r(f + n)({
        type: "heading",
        depth: i,
        children: this.tokenizeInline(u, c)
      });
    },
    Ze = "\n",
    Ye = "\t",
    _e = " ",
    Je = 3,
    Qe = {};
  (Qe["="] = 1), (Qe["-"] = 2);
  var Ke =
      "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
    We = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    Xe = {
      openCloseTag: new RegExp("^(?:" + Ke + "|" + We + ")"),
      tag: new RegExp(
        "^(?:" +
          Ke +
          "|" +
          We +
          "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"
      )
    },
    rt = Xe.openCloseTag,
    et = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i,
        c,
        l,
        s = this.options.blocks,
        f = e.length,
        p = 0,
        D = [
          [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
          [/^<!--/, /-->/, !0],
          [/^<\?/, /\?>/, !0],
          [/^<![A-Za-z]/, />/, !0],
          [/^<!\[CDATA\[/, /\]\]>/, !0],
          [
            new RegExp("^</?(" + s.join("|") + ")(?=(\\s|/?>|$))", "i"),
            /^$/,
            !0
          ],
          [new RegExp(rt.source + "\\s*$"), /^$/, !1]
        ];
      for (; p < f && ((o = e.charAt(p)) === tt || o === ut); ) p++;
      if (e.charAt(p) !== at) return;
      (u = -1 === (u = e.indexOf(nt, p + 1)) ? f : u),
        (n = e.slice(p, u)),
        (a = -1),
        (i = D.length);
      for (; ++a < i; )
        if (D[a][0].test(n)) {
          c = D[a];
          break;
        }
      if (!c) return;
      if (t) return c[2];
      if (((p = u), !c[1].test(n)))
        for (; p < f; ) {
          if (
            ((u = -1 === (u = e.indexOf(nt, p + 1)) ? f : u),
            (n = e.slice(p + 1, u)),
            c[1].test(n))
          ) {
            n && (p = u);
            break;
          }
          p = u;
        }
      return (l = e.slice(0, p)), r(l)({ type: "html", value: l });
    },
    tt = "\t",
    ut = " ",
    nt = "\n",
    at = "<";
  var ot = function(r) {
    return String(r).replace(/\s+/g, " ");
  };
  var it = function(r) {
    return ot(r).toLowerCase();
  };
  var ct = bt;
  (bt.notInList = !0), (bt.notInBlock = !0);
  var lt = "\\",
    st = "\n",
    ft = "\t",
    pt = " ",
    Dt = "[",
    dt = "]",
    ht = "^",
    gt = ":",
    mt = /^( {4}|\t)?/gm;
  function bt(r, e, t) {
    var u,
      n,
      a,
      o,
      i,
      c,
      l,
      s,
      f,
      p,
      D,
      d,
      h = this.offset;
    if (this.options.footnotes) {
      for (
        u = 0, n = e.length, a = "", o = r.now(), i = o.line;
        u < n && ((f = e.charAt(u)), Br(f));

      )
        (a += f), u++;
      if (e.charAt(u) === Dt && e.charAt(u + 1) === ht) {
        for (
          u = (a += Dt + ht).length, l = "";
          u < n && (f = e.charAt(u)) !== dt;

        )
          f === lt && ((l += f), u++, (f = e.charAt(u))), (l += f), u++;
        if (l && e.charAt(u) === dt && e.charAt(u + 1) === gt) {
          if (t) return !0;
          for (
            p = it(l), u = (a += l + dt + gt).length;
            u < n && ((f = e.charAt(u)) === ft || f === pt);

          )
            (a += f), u++;
          for (
            o.column += a.length, o.offset += a.length, l = "", c = "", s = "";
            u < n;

          ) {
            if ((f = e.charAt(u)) === st) {
              for (s = f, u++; u < n && (f = e.charAt(u)) === st; )
                (s += f), u++;
              for (l += s, s = ""; u < n && (f = e.charAt(u)) === pt; )
                (s += f), u++;
              if (0 === s.length) break;
              l += s;
            }
            l && ((c += l), (l = "")), (c += f), u++;
          }
          return (
            (a += c),
            (c = c.replace(mt, function(r) {
              return (h[i] = (h[i] || 0) + r.length), i++, "";
            })),
            (D = r(a)),
            (d = this.enterBlock()),
            (c = this.tokenizeBlock(c, o)),
            d(),
            D({ type: "footnoteDefinition", identifier: p, children: c })
          );
        }
      }
    }
  }
  var vt = Ot;
  (Ot.notInList = !0), (Ot.notInBlock = !0);
  var Et = '"',
    wt = "'",
    yt = "\\",
    At = "\n",
    Ct = "\t",
    qt = " ",
    Ft = "[",
    kt = "]",
    xt = "(",
    Lt = ")",
    Bt = ":",
    St = "<",
    Tt = ">";
  function Ot(r, e, t) {
    for (
      var u,
        n,
        a,
        o,
        i,
        c,
        l,
        s,
        f = this.options.commonmark,
        p = 0,
        D = e.length,
        d = "";
      p < D && ((o = e.charAt(p)) === qt || o === Ct);

    )
      (d += o), p++;
    if ((o = e.charAt(p)) === Ft) {
      for (p++, d += o, a = ""; p < D && (o = e.charAt(p)) !== kt; )
        o === yt && ((a += o), p++, (o = e.charAt(p))), (a += o), p++;
      if (a && e.charAt(p) === kt && e.charAt(p + 1) === Bt) {
        for (
          c = a, p = (d += a + kt + Bt).length, a = "";
          p < D && ((o = e.charAt(p)) === Ct || o === qt || o === At);

        )
          (d += o), p++;
        if (((a = ""), (u = d), (o = e.charAt(p)) === St)) {
          for (p++; p < D && Nt((o = e.charAt(p))); ) (a += o), p++;
          if ((o = e.charAt(p)) === Nt.delimiter) (d += St + a + o), p++;
          else {
            if (f) return;
            (p -= a.length + 1), (a = "");
          }
        }
        if (!a) {
          for (; p < D && Rt((o = e.charAt(p))); ) (a += o), p++;
          d += a;
        }
        if (a) {
          for (
            l = a, a = "";
            p < D && ((o = e.charAt(p)) === Ct || o === qt || o === At);

          )
            (a += o), p++;
          if (
            ((i = null),
            (o = e.charAt(p)) === Et
              ? (i = Et)
              : o === wt
              ? (i = wt)
              : o === xt && (i = Lt),
            i)
          ) {
            if (!a) return;
            for (
              p = (d += a + o).length, a = "";
              p < D && (o = e.charAt(p)) !== i;

            ) {
              if (o === At) {
                if ((p++, (o = e.charAt(p)) === At || o === i)) return;
                a += At;
              }
              (a += o), p++;
            }
            if ((o = e.charAt(p)) !== i) return;
            (n = d), (d += a + o), p++, (s = a), (a = "");
          } else (a = ""), (p = d.length);
          for (; p < D && ((o = e.charAt(p)) === Ct || o === qt); )
            (d += o), p++;
          return (o = e.charAt(p)) && o !== At
            ? void 0
            : !!t ||
                ((u = r(u).test().end),
                (l = this.decode.raw(this.unescape(l), u, {
                  nonTerminated: !1
                })),
                s &&
                  ((n = r(n).test().end),
                  (s = this.decode.raw(this.unescape(s), n))),
                r(d)({
                  type: "definition",
                  identifier: it(c),
                  title: s || null,
                  url: l
                }));
        }
      }
    }
  }
  function Nt(r) {
    return r !== Tt && r !== Ft && r !== kt;
  }
  function Rt(r) {
    return r !== Ft && r !== kt && !Br(r);
  }
  Nt.delimiter = Tt;
  var Ut = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i,
        c,
        l,
        s,
        f,
        p,
        D,
        d,
        h,
        g,
        m,
        b,
        v,
        E,
        w,
        y,
        A,
        C,
        q,
        F;
      if (!this.options.gfm) return;
      (u = 0), (E = 0), (c = e.length + 1), (l = []);
      for (; u < c; ) {
        if (
          ((C = e.indexOf(Ht, u)),
          (q = e.indexOf(zt, u + 1)),
          -1 === C && (C = e.length),
          -1 === q || q > C)
        ) {
          if (E < Zt) return;
          break;
        }
        l.push(e.slice(u, C)), E++, (u = C + 1);
      }
      (o = l.join(Ht)),
        (n = l.splice(1, 1)[0] || []),
        (u = 0),
        (c = n.length),
        E--,
        (a = !1),
        (D = []);
      for (; u < c; ) {
        if ((f = n.charAt(u)) === zt) {
          if (((p = null), !1 === a)) {
            if (!1 === F) return;
          } else D.push(a), (a = !1);
          F = !1;
        } else if (f === Vt) (p = !0), (a = a || Qt);
        else if (f === jt) a = a === Yt ? _t : p && a === Qt ? Jt : Yt;
        else if (!Br(f)) return;
        u++;
      }
      !1 !== a && D.push(a);
      if (D.length < $t) return;
      if (t) return !0;
      (v = -1),
        (y = []),
        (A = r(o).reset({ type: "table", align: D, children: y }));
      for (; ++v < E; ) {
        for (
          w = l[v],
            i = { type: "tableRow", children: [] },
            v && r(Ht),
            r(w).reset(i, A),
            c = w.length + 1,
            u = 0,
            s = "",
            d = "",
            h = !0,
            g = null,
            m = null;
          u < c;

        )
          if ((f = w.charAt(u)) !== Mt && f !== Gt) {
            if ("" === f || f === zt)
              if (h) r(f);
              else {
                if (f && m) {
                  (s += f), u++;
                  continue;
                }
                (!d && !f) ||
                  h ||
                  ((o = d),
                  s.length > 1 &&
                    (f
                      ? ((o += s.slice(0, s.length - 1)),
                        (s = s.charAt(s.length - 1)))
                      : ((o += s), (s = ""))),
                  (b = r.now()),
                  r(o)(
                    { type: "tableCell", children: this.tokenizeInline(d, b) },
                    i
                  )),
                  r(s + f),
                  (s = ""),
                  (d = "");
              }
            else if (
              (s && ((d += s), (s = "")),
              (d += f),
              f === Pt && u !== c - 2 && ((d += w.charAt(u + 1)), u++),
              f === It)
            ) {
              for (g = 1; w.charAt(u + 1) === f; ) (d += f), u++, g++;
              m ? g >= m && (m = 0) : (m = g);
            }
            (h = !1), u++;
          } else d ? (s += f) : r(f), u++;
        v || r(Ht + n);
      }
      return A;
    },
    Pt = "\\",
    It = "`",
    Vt = "-",
    zt = "|",
    jt = ":",
    Gt = " ",
    Ht = "\n",
    Mt = "\t",
    $t = 1,
    Zt = 2,
    Yt = "left",
    _t = "center",
    Jt = "right",
    Qt = null;
  var Kt = function(r, e, t) {
      var u,
        n,
        a,
        o,
        i,
        c = this.options,
        l = c.commonmark,
        s = c.gfm,
        f = this.blockTokenizers,
        p = this.interruptParagraph,
        D = e.indexOf(Wt),
        d = e.length;
      for (; D < d; ) {
        if (-1 === D) {
          D = d;
          break;
        }
        if (e.charAt(D + 1) === Wt) break;
        if (l) {
          for (o = 0, u = D + 1; u < d; ) {
            if ((a = e.charAt(u)) === Xt) {
              o = eu;
              break;
            }
            if (a !== ru) break;
            o++, u++;
          }
          if (o >= eu) {
            D = e.indexOf(Wt, D + 1);
            continue;
          }
        }
        if (((n = e.slice(D + 1)), Xr(p, f, this, [r, n, !0]))) break;
        if (
          f.list.call(this, r, n, !0) &&
          (this.inList || l || (s && !y(Wr.left(n).charAt(0))))
        )
          break;
        if (
          ((u = D),
          -1 !== (D = e.indexOf(Wt, D + 1)) && "" === Wr(e.slice(u, D)))
        ) {
          D = u;
          break;
        }
      }
      if (((n = e.slice(0, D)), "" === Wr(n))) return r(n), null;
      if (t) return !0;
      return (
        (i = r.now()),
        (n = Pr(n)),
        r(n)({ type: "paragraph", children: this.tokenizeInline(n, i) })
      );
    },
    Wt = "\n",
    Xt = "\t",
    ru = " ",
    eu = 4;
  var tu = function(r, e) {
    return r.indexOf("\\", e);
  };
  var uu = nu;
  function nu(r, e, t) {
    var u, n;
    if (
      "\\" === e.charAt(0) &&
      ((u = e.charAt(1)), -1 !== this.escape.indexOf(u))
    )
      return (
        !!t ||
        ((n = "\n" === u ? { type: "break" } : { type: "text", value: u }),
        r("\\" + u)(n))
      );
  }
  nu.locator = tu;
  var au = function(r, e) {
    return r.indexOf("<", e);
  };
  var ou = Du;
  (Du.locator = au), (Du.notInLink = !0);
  var iu = "<",
    cu = ">",
    lu = "@",
    su = "/",
    fu = "mailto:",
    pu = fu.length;
  function Du(r, e, t) {
    var u, n, a, o, i, c, l, s, f, p, D;
    if (e.charAt(0) === iu) {
      for (
        this, u = "", n = e.length, a = 0, o = "", c = !1, l = "", a++, u = iu;
        a < n &&
        ((i = e.charAt(a)),
        !(
          Br(i) ||
          i === cu ||
          i === lu ||
          (":" === i && e.charAt(a + 1) === su)
        ));

      )
        (o += i), a++;
      if (o) {
        if (((l += o), (o = ""), (l += i = e.charAt(a)), a++, i === lu)) c = !0;
        else {
          if (":" !== i || e.charAt(a + 1) !== su) return;
          (l += su), a++;
        }
        for (; a < n && ((i = e.charAt(a)), !Br(i) && i !== cu); )
          (o += i), a++;
        if (((i = e.charAt(a)), o && i === cu))
          return (
            !!t ||
            ((f = l += o),
            (u += l + i),
            (s = r.now()).column++,
            s.offset++,
            c &&
              (l.slice(0, pu).toLowerCase() === fu
                ? ((f = f.substr(pu)), (s.column += pu), (s.offset += pu))
                : (l = fu + l)),
            (p = this.inlineTokenizers),
            (this.inlineTokenizers = { text: p.text }),
            (D = this.enterLink()),
            (f = this.tokenizeInline(f, s)),
            (this.inlineTokenizers = p),
            D(),
            r(u)({
              type: "link",
              title: null,
              url: L(l, { nonTerminated: !1 }),
              children: f
            }))
          );
      }
    }
  }
  var du = function(r, e) {
      var t,
        u = hu.length,
        n = -1,
        a = -1;
      if (!this.options.gfm) return -1;
      for (; ++n < u; )
        -1 !== (t = r.indexOf(hu[n], e)) && (t < a || -1 === a) && (a = t);
      return a;
    },
    hu = ["https://", "http://", "mailto:"];
  var gu = Fu;
  (Fu.locator = du), (Fu.notInLink = !0);
  var mu = "[",
    bu = "]",
    vu = "(",
    Eu = ")",
    wu = "<",
    yu = "@",
    Au = "mailto:",
    Cu = ["http://", "https://", Au],
    qu = Cu.length;
  function Fu(r, e, t) {
    var u, n, a, o, i, c, l, s, f, p, D, d;
    if (this.options.gfm) {
      for (u = "", o = -1, s = qu; ++o < s; )
        if (((c = Cu[o]), (l = e.slice(0, c.length)).toLowerCase() === c)) {
          u = l;
          break;
        }
      if (u) {
        for (
          o = u.length, s = e.length, f = "", p = 0;
          o < s &&
          ((a = e.charAt(o)), !Br(a) && a !== wu) &&
          (("." !== a &&
            "," !== a &&
            ":" !== a &&
            ";" !== a &&
            '"' !== a &&
            "'" !== a &&
            ")" !== a &&
            "]" !== a) ||
            ((D = e.charAt(o + 1)) && !Br(D))) &&
          ((a !== vu && a !== mu) || p++, (a !== Eu && a !== bu) || !(--p < 0));

        )
          (f += a), o++;
        if (f) {
          if (((n = u += f), c === Au)) {
            if (-1 === (i = f.indexOf(yu)) || i === s - 1) return;
            n = n.substr(Au.length);
          }
          return (
            !!t ||
            ((d = this.enterLink()),
            (n = this.tokenizeInline(n, r.now())),
            d(),
            r(u)({
              type: "link",
              title: null,
              url: L(u, { nonTerminated: !1 }),
              children: n
            }))
          );
        }
      }
    }
  }
  var ku = Xe.tag,
    xu = Su;
  Su.locator = au;
  var Lu = /^<a /i,
    Bu = /^<\/a>/i;
  function Su(r, e, t) {
    var u,
      n,
      a = e.length;
    if (
      !("<" !== e.charAt(0) || a < 3) &&
      ((u = e.charAt(1)),
      (C(u) || "?" === u || "!" === u || "/" === u) && (n = e.match(ku)))
    )
      return (
        !!t ||
        ((n = n[0]),
        !this.inLink && Lu.test(n)
          ? (this.inLink = !0)
          : this.inLink && Bu.test(n) && (this.inLink = !1),
        r(n)({ type: "html", value: n }))
      );
  }
  var Tu = function(r, e) {
    var t = r.indexOf("[", e),
      u = r.indexOf("![", e);
    if (-1 === u) return t;
    return t < u ? t : u;
  };
  var Ou = $u;
  $u.locator = Tu;
  var Nu = {}.hasOwnProperty,
    Ru = "\\",
    Uu = "[",
    Pu = "]",
    Iu = "(",
    Vu = ")",
    zu = "<",
    ju = ">",
    Gu = "`",
    Hu = { '"': '"', "'": "'" },
    Mu = {};
  function $u(r, e, t) {
    var u,
      n,
      a,
      o,
      i,
      c,
      l,
      s,
      f,
      p,
      D,
      d,
      h,
      g,
      m,
      b,
      v,
      E,
      w,
      y = "",
      A = 0,
      C = e.charAt(0),
      q = this.options.pedantic,
      F = this.options.commonmark,
      k = this.options.gfm;
    if (
      ("!" === C && ((f = !0), (y = C), (C = e.charAt(++A))),
      C === Uu && (f || !this.inLink))
    ) {
      for (
        y += C,
          m = "",
          A++,
          d = e.length,
          g = 0,
          (v = r.now()).column += A,
          v.offset += A;
        A < d;

      ) {
        if (((c = C = e.charAt(A)), C === Gu)) {
          for (n = 1; e.charAt(A + 1) === Gu; ) (c += C), A++, n++;
          a ? n >= a && (a = 0) : (a = n);
        } else if (C === Ru) A++, (c += e.charAt(A));
        else if ((a && !k) || C !== Uu) {
          if ((!a || k) && C === Pu) {
            if (!g) {
              if (!q)
                for (; A < d && ((C = e.charAt(A + 1)), Br(C)); ) (c += C), A++;
              if (e.charAt(A + 1) !== Iu) return;
              (c += Iu), (u = !0), A++;
              break;
            }
            g--;
          }
        } else g++;
        (m += c), (c = ""), A++;
      }
      if (u) {
        for (p = m, y += m + c, A++; A < d && ((C = e.charAt(A)), Br(C)); )
          (y += C), A++;
        if (
          ((C = e.charAt(A)), (s = F ? Mu : Hu), (m = ""), (o = y), C === zu)
        ) {
          for (A++, o += zu; A < d && (C = e.charAt(A)) !== ju; ) {
            if (F && "\n" === C) return;
            (m += C), A++;
          }
          if (e.charAt(A) !== ju) return;
          (y += zu + m + ju), (b = m), A++;
        } else {
          for (
            C = null, c = "";
            A < d && ((C = e.charAt(A)), !c || !Nu.call(s, C));

          ) {
            if (Br(C)) {
              if (!q) break;
              c += C;
            } else {
              if (C === Iu) g++;
              else if (C === Vu) {
                if (0 === g) break;
                g--;
              }
              (m += c),
                (c = ""),
                C === Ru && ((m += Ru), (C = e.charAt(++A))),
                (m += C);
            }
            A++;
          }
          (b = m), (A = (y += m).length);
        }
        for (m = ""; A < d && ((C = e.charAt(A)), Br(C)); ) (m += C), A++;
        if (((C = e.charAt(A)), (y += m), m && Nu.call(s, C)))
          if ((A++, (y += C), (m = ""), (D = s[C]), (i = y), F)) {
            for (; A < d && (C = e.charAt(A)) !== D; )
              C === Ru && ((m += Ru), (C = e.charAt(++A))), A++, (m += C);
            if ((C = e.charAt(A)) !== D) return;
            for (h = m, y += m + C, A++; A < d && ((C = e.charAt(A)), Br(C)); )
              (y += C), A++;
          } else
            for (c = ""; A < d; ) {
              if ((C = e.charAt(A)) === D)
                l && ((m += D + c), (c = "")), (l = !0);
              else if (l) {
                if (C === Vu) {
                  (y += m + D + c), (h = m);
                  break;
                }
                Br(C) ? (c += C) : ((m += D + c + C), (c = ""), (l = !1));
              } else m += C;
              A++;
            }
        if (e.charAt(A) === Vu)
          return (
            !!t ||
            ((y += Vu),
            (b = this.decode.raw(this.unescape(b), r(o).test().end, {
              nonTerminated: !1
            })),
            h &&
              ((i = r(i).test().end),
              (h = this.decode.raw(this.unescape(h), i))),
            (w = { type: f ? "image" : "link", title: h || null, url: b }),
            f
              ? (w.alt = this.decode.raw(this.unescape(p), v) || null)
              : ((E = this.enterLink()),
                (w.children = this.tokenizeInline(p, v)),
                E()),
            r(y)(w))
          );
      }
    }
  }
  (Mu['"'] = '"'), (Mu["'"] = "'"), (Mu[Iu] = Vu);
  var Zu = un;
  un.locator = Tu;
  var Yu = "link",
    _u = "image",
    Ju = "footnote",
    Qu = "shortcut",
    Ku = "collapsed",
    Wu = "full",
    Xu = "^",
    rn = "\\",
    en = "[",
    tn = "]";
  function un(r, e, t) {
    var u,
      n,
      a,
      o,
      i,
      c,
      l,
      s,
      f = e.charAt(0),
      p = 0,
      D = e.length,
      d = "",
      h = "",
      g = Yu,
      m = Qu;
    if (("!" === f && ((g = _u), (h = f), (f = e.charAt(++p))), f === en)) {
      if (
        (p++, (h += f), (c = ""), this.options.footnotes && e.charAt(p) === Xu)
      ) {
        if (g === _u) return;
        (h += Xu), p++, (g = Ju);
      }
      for (s = 0; p < D; ) {
        if ((f = e.charAt(p)) === en) (l = !0), s++;
        else if (f === tn) {
          if (!s) break;
          s--;
        }
        f === rn && ((c += rn), (f = e.charAt(++p))), (c += f), p++;
      }
      if (((d = c), (u = c), (f = e.charAt(p)) === tn)) {
        for (p++, d += f, c = ""; p < D && ((f = e.charAt(p)), Br(f)); )
          (c += f), p++;
        if (((f = e.charAt(p)), g !== Ju && f === en)) {
          for (
            n = "", c += f, p++;
            p < D && (f = e.charAt(p)) !== en && f !== tn;

          )
            f === rn && ((n += rn), (f = e.charAt(++p))), (n += f), p++;
          (f = e.charAt(p)) === tn
            ? ((m = n ? Wu : Ku), (c += n + f), p++)
            : (n = ""),
            (d += c),
            (c = "");
        } else {
          if (!u) return;
          n = u;
        }
        if (m === Wu || !l)
          return (
            (d = h + d),
            g === Yu && this.inLink
              ? null
              : !!t ||
                (g === Ju && -1 !== u.indexOf(" ")
                  ? r(d)({
                      type: "footnote",
                      children: this.tokenizeInline(u, r.now())
                    })
                  : (((a = r.now()).column += h.length),
                    (a.offset += h.length),
                    (o = {
                      type: g + "Reference",
                      identifier: it((n = m === Wu ? n : u))
                    }),
                    (g !== Yu && g !== _u) || (o.referenceType = m),
                    g === Yu
                      ? ((i = this.enterLink()),
                        (o.children = this.tokenizeInline(u, a)),
                        i())
                      : g === _u &&
                        (o.alt = this.decode.raw(this.unescape(u), a) || null),
                    r(d)(o)))
          );
      }
    }
  }
  var nn = function(r, e) {
    var t = r.indexOf("**", e),
      u = r.indexOf("__", e);
    if (-1 === u) return t;
    if (-1 === t) return u;
    return u < t ? u : t;
  };
  var an = ln;
  ln.locator = nn;
  var on = "*",
    cn = "_";
  function ln(r, e, t) {
    var u,
      n,
      a,
      o,
      i,
      c,
      l,
      s = 0,
      f = e.charAt(s);
    if (
      !(
        (f !== on && f !== cn) ||
        e.charAt(++s) !== f ||
        ((n = this.options.pedantic),
        (i = (a = f) + a),
        (c = e.length),
        s++,
        (o = ""),
        (f = ""),
        n && Br(e.charAt(s)))
      )
    )
      for (; s < c; ) {
        if (
          ((l = f),
          !((f = e.charAt(s)) !== a || e.charAt(s + 1) !== a || (n && Br(l))) &&
            (f = e.charAt(s + 2)) !== a)
        ) {
          if (!Wr(o)) return;
          return (
            !!t ||
            (((u = r.now()).column += 2),
            (u.offset += 2),
            r(i + o + i)({
              type: "strong",
              children: this.tokenizeInline(o, u)
            }))
          );
        }
        n || "\\" !== f || ((o += f), (f = e.charAt(++s))), (o += f), s++;
      }
  }
  var sn = function(r) {
      return pn.test("number" == typeof r ? fn(r) : r.charAt(0));
    },
    fn = String.fromCharCode,
    pn = /\w/;
  var Dn = function(r, e) {
    var t = r.indexOf("*", e),
      u = r.indexOf("_", e);
    if (-1 === u) return t;
    if (-1 === t) return u;
    return u < t ? u : t;
  };
  var dn = mn;
  mn.locator = Dn;
  var hn = "*",
    gn = "_";
  function mn(r, e, t) {
    var u,
      n,
      a,
      o,
      i,
      c,
      l,
      s = 0,
      f = e.charAt(s);
    if (
      !(
        (f !== hn && f !== gn) ||
        ((n = this.options.pedantic),
        (i = f),
        (a = f),
        (c = e.length),
        s++,
        (o = ""),
        (f = ""),
        n && Br(e.charAt(s)))
      )
    )
      for (; s < c; ) {
        if (((l = f), !((f = e.charAt(s)) !== a || (n && Br(l))))) {
          if ((f = e.charAt(++s)) !== a) {
            if (!Wr(o) || l === a) return;
            if (!n && a === gn && sn(f)) {
              o += a;
              continue;
            }
            return (
              !!t ||
              ((u = r.now()).column++,
              u.offset++,
              r(i + o + a)({
                type: "emphasis",
                children: this.tokenizeInline(o, u)
              }))
            );
          }
          o += a;
        }
        n || "\\" !== f || ((o += f), (f = e.charAt(++s))), (o += f), s++;
      }
  }
  var bn = function(r, e) {
    return r.indexOf("~~", e);
  };
  var vn = yn;
  yn.locator = bn;
  var En = "~",
    wn = "~~";
  function yn(r, e, t) {
    var u,
      n,
      a,
      o = "",
      i = "",
      c = "",
      l = "";
    if (
      this.options.gfm &&
      e.charAt(0) === En &&
      e.charAt(1) === En &&
      !Br(e.charAt(2))
    )
      for (
        u = 1, n = e.length, (a = r.now()).column += 2, a.offset += 2;
        ++u < n;

      ) {
        if (!((o = e.charAt(u)) !== En || i !== En || (c && Br(c))))
          return (
            !!t ||
            r(wn + l + wn)({
              type: "delete",
              children: this.tokenizeInline(l, a)
            })
          );
        (l += i), (c = i), (i = o);
      }
  }
  var An = function(r, e) {
    return r.indexOf("`", e);
  };
  var Cn = Fn;
  Fn.locator = An;
  var qn = "`";
  function Fn(r, e, t) {
    for (
      var u, n, a, o, i, c, l, s, f = e.length, p = 0, D = "", d = "";
      p < f && e.charAt(p) === qn;

    )
      (D += qn), p++;
    if (D) {
      for (i = D, o = p, D = "", s = e.charAt(p), a = 0; p < f; ) {
        if (
          ((c = s),
          (s = e.charAt(p + 1)),
          c === qn ? (a++, (d += c)) : ((a = 0), (D += c)),
          a && s !== qn)
        ) {
          if (a === o) {
            (i += D + d), (l = !0);
            break;
          }
          (D += d), (d = "");
        }
        p++;
      }
      if (!l) {
        if (o % 2 != 0) return;
        D = "";
      }
      if (t) return !0;
      for (u = "", n = "", f = D.length, p = -1; ++p < f; )
        (c = D.charAt(p)),
          Br(c) ? (n += c) : (n && (u && (u += n), (n = "")), (u += c));
      return r(i)({ type: "inlineCode", value: u });
    }
  }
  var kn = function(r, e) {
    var t = r.indexOf("\n", e);
    for (; t > e && " " === r.charAt(t - 1); ) t--;
    return t;
  };
  var xn = Bn;
  Bn.locator = kn;
  var Ln = 2;
  function Bn(r, e, t) {
    for (var u, n = e.length, a = -1, o = ""; ++a < n; ) {
      if ("\n" === (u = e.charAt(a))) {
        if (a < Ln) return;
        return !!t || r((o += u))({ type: "break" });
      }
      if (" " !== u) return;
      o += u;
    }
  }
  var Sn = function(r, e, t) {
    var u, n, a, o, i, c, l, s, f, p;
    if (t) return !0;
    (u = this.inlineMethods),
      (o = u.length),
      (n = this.inlineTokenizers),
      (a = -1),
      (f = e.length);
    for (; ++a < o; )
      "text" !== (s = u[a]) &&
        n[s] &&
        ((l = n[s].locator) || r.file.fail("Missing locator: `" + s + "`"),
        -1 !== (c = l.call(this, e, 1)) && c < f && (f = c));
    (i = e.slice(0, f)),
      (p = r.now()),
      this.decode(i, p, function(e, t, u) {
        r(u || e)({ type: "text", value: e });
      });
  };
  var Tn = On;
  function On(r, e) {
    (this.file = e),
      (this.offset = {}),
      (this.options = n(this.options)),
      this.setOptions({}),
      (this.inList = !1),
      (this.inBlock = !1),
      (this.inLink = !1),
      (this.atStart = !0),
      (this.toOffset = d(e).toOffset),
      (this.unescape = h(this, "escape")),
      (this.decode = sr(this));
  }
  var Nn = On.prototype;
  function Rn(r) {
    var e,
      t = [];
    for (e in r) t.push(e);
    return t;
  }
  (Nn.setOptions = yr),
    (Nn.parse = kr),
    (Nn.options = wr),
    (Nn.exitStart = D("atStart", !0)),
    (Nn.enterList = D("inList", !1)),
    (Nn.enterLink = D("inLink", !1)),
    (Nn.enterBlock = D("inBlock", !1)),
    (Nn.interruptParagraph = [
      ["thematicBreak"],
      ["atxHeading"],
      ["fencedCode"],
      ["blockquote"],
      ["html"],
      ["setextHeading", { commonmark: !1 }],
      ["definition", { commonmark: !1 }],
      ["footnote", { commonmark: !1 }]
    ]),
    (Nn.interruptList = [
      ["atxHeading", { pedantic: !1 }],
      ["fencedCode", { pedantic: !1 }],
      ["thematicBreak", { pedantic: !1 }],
      ["definition", { commonmark: !1 }],
      ["footnote", { commonmark: !1 }]
    ]),
    (Nn.interruptBlockquote = [
      ["indentedCode", { commonmark: !0 }],
      ["fencedCode", { commonmark: !0 }],
      ["atxHeading", { commonmark: !0 }],
      ["setextHeading", { commonmark: !0 }],
      ["thematicBreak", { commonmark: !0 }],
      ["html", { commonmark: !0 }],
      ["list", { commonmark: !0 }],
      ["definition", { commonmark: !1 }],
      ["footnote", { commonmark: !1 }]
    ]),
    (Nn.blockTokenizers = {
      newline: Or,
      indentedCode: Vr,
      fencedCode: Mr,
      blockquote: re,
      atxHeading: ae,
      thematicBreak: fe,
      list: qe,
      setextHeading: $e,
      html: et,
      footnote: ct,
      definition: vt,
      table: Ut,
      paragraph: Kt
    }),
    (Nn.inlineTokenizers = {
      escape: uu,
      autoLink: ou,
      url: gu,
      html: xu,
      link: Ou,
      reference: Zu,
      strong: an,
      emphasis: dn,
      deletion: vn,
      code: Cn,
      break: xn,
      text: Sn
    }),
    (Nn.blockMethods = Rn(Nn.blockTokenizers)),
    (Nn.inlineMethods = Rn(Nn.inlineTokenizers)),
    (Nn.tokenizeBlock = fr("block")),
    (Nn.tokenizeInline = fr("inline")),
    (Nn.tokenizeFactory = fr);
  var Un = Pn;
  function Pn(r) {
    var e = p(Tn);
    (e.prototype.options = n(e.prototype.options, this.data("settings"), r)),
      (this.Parser = e);
  }
  Pn.Parser = Tn;
  var In = Object.prototype.hasOwnProperty,
    Vn = Object.prototype.toString,
    zn = function(r) {
      return "function" == typeof Array.isArray
        ? Array.isArray(r)
        : "[object Array]" === Vn.call(r);
    },
    jn = function(r) {
      if (!r || "[object Object]" !== Vn.call(r)) return !1;
      var e,
        t = In.call(r, "constructor"),
        u =
          r.constructor &&
          r.constructor.prototype &&
          In.call(r.constructor.prototype, "isPrototypeOf");
      if (r.constructor && !t && !u) return !1;
      for (e in r);
      return void 0 === e || In.call(r, e);
    },
    Gn = function e() {
      var t,
        u,
        n,
        a,
        o,
        i,
        c = arguments[0],
        l = 1,
        s = arguments.length,
        f = !1;
      for (
        "boolean" == typeof c && ((f = c), (c = arguments[1] || {}), (l = 2)),
          (null == c || ("object" !== r(c) && "function" != typeof c)) &&
            (c = {});
        l < s;
        ++l
      )
        if (null != (t = arguments[l]))
          for (u in t)
            (n = c[u]),
              c !== (a = t[u]) &&
                (f && a && (jn(a) || (o = zn(a)))
                  ? (o
                      ? ((o = !1), (i = n && zn(n) ? n : []))
                      : (i = n && jn(n) ? n : {}),
                    (c[u] = e(f, i, a)))
                  : void 0 !== a && (c[u] = a));
      return c;
    },
    Hn = function(r) {
      if (r) throw r;
    };
  var Mn =
    "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : {};
  function $n() {
    throw new Error("setTimeout has not been defined");
  }
  function Zn() {
    throw new Error("clearTimeout has not been defined");
  }
  var Yn = $n,
    _n = Zn;
  function Jn(r) {
    if (Yn === setTimeout) return setTimeout(r, 0);
    if ((Yn === $n || !Yn) && setTimeout)
      return (Yn = setTimeout), setTimeout(r, 0);
    try {
      return Yn(r, 0);
    } catch (e) {
      try {
        return Yn.call(null, r, 0);
      } catch (e) {
        return Yn.call(this, r, 0);
      }
    }
  }
  "function" == typeof Mn.setTimeout && (Yn = setTimeout),
    "function" == typeof Mn.clearTimeout && (_n = clearTimeout);
  var Qn,
    Kn = [],
    Wn = !1,
    Xn = -1;
  function ra() {
    Wn &&
      Qn &&
      ((Wn = !1),
      Qn.length ? (Kn = Qn.concat(Kn)) : (Xn = -1),
      Kn.length && ea());
  }
  function ea() {
    if (!Wn) {
      var r = Jn(ra);
      Wn = !0;
      for (var e = Kn.length; e; ) {
        for (Qn = Kn, Kn = []; ++Xn < e; ) Qn && Qn[Xn].run();
        (Xn = -1), (e = Kn.length);
      }
      (Qn = null),
        (Wn = !1),
        (function(r) {
          if (_n === clearTimeout) return clearTimeout(r);
          if ((_n === Zn || !_n) && clearTimeout)
            return (_n = clearTimeout), clearTimeout(r);
          try {
            _n(r);
          } catch (e) {
            try {
              return _n.call(null, r);
            } catch (e) {
              return _n.call(this, r);
            }
          }
        })(r);
    }
  }
  function ta(r, e) {
    (this.fun = r), (this.array = e);
  }
  ta.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  function ua() {}
  var na = ua,
    aa = ua,
    oa = ua,
    ia = ua,
    ca = ua,
    la = ua,
    sa = ua;
  var fa = Mn.performance || {},
    pa =
      fa.now ||
      fa.mozNow ||
      fa.msNow ||
      fa.oNow ||
      fa.webkitNow ||
      function() {
        return new Date().getTime();
      };
  var Da = new Date();
  var da = {
      nextTick: function(r) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
        Kn.push(new ta(r, e)), 1 !== Kn.length || Wn || Jn(ea);
      },
      title: "browser",
      browser: !0,
      env: {},
      argv: [],
      version: "",
      versions: {},
      on: na,
      addListener: aa,
      once: oa,
      off: ia,
      removeListener: ca,
      removeAllListeners: la,
      emit: sa,
      binding: function(r) {
        throw new Error("process.binding is not supported");
      },
      cwd: function() {
        return "/";
      },
      chdir: function(r) {
        throw new Error("process.chdir is not supported");
      },
      umask: function() {
        return 0;
      },
      hrtime: function(r) {
        var e = 0.001 * pa.call(fa),
          t = Math.floor(e),
          u = Math.floor((e % 1) * 1e9);
        return r && ((t -= r[0]), (u -= r[1]) < 0 && (t--, (u += 1e9))), [t, u];
      },
      platform: "browser",
      release: {},
      config: {},
      uptime: function() {
        return (new Date() - Da) / 1e3;
      }
    },
    ha = {},
    ga = Object.freeze({ default: ha }),
    ma = (ga && ha) || ga;
  var ba = function(r, e) {
      if ("string" != typeof r) return r;
      if (0 === r.length) return r;
      var t = ma.basename(r, ma.extname(r)) + e;
      return ma.join(ma.dirname(r), t);
    },
    va = {}.hasOwnProperty,
    Ea = function(e) {
      if (!e || "object" !== r(e)) return null;
      if (va.call(e, "position") || va.call(e, "type")) return ya(e.position);
      if (va.call(e, "start") || va.call(e, "end")) return ya(e);
      if (va.call(e, "line") || va.call(e, "column")) return wa(e);
      return null;
    };
  function wa(e) {
    return (
      (e && "object" === r(e)) || (e = {}), Aa(e.line) + ":" + Aa(e.column)
    );
  }
  function ya(e) {
    return (e && "object" === r(e)) || (e = {}), wa(e.start) + "-" + wa(e.end);
  }
  function Aa(r) {
    return r && "number" == typeof r ? r : 1;
  }
  var Ca = function(r) {
    return (
      null != r &&
      (qa(r) ||
        (function(r) {
          return (
            "function" == typeof r.readFloatLE &&
            "function" == typeof r.slice &&
            qa(r.slice(0, 0))
          );
        })(r) ||
        !!r._isBuffer)
    );
  };
  function qa(r) {
    return (
      !!r.constructor &&
      "function" == typeof r.constructor.isBuffer &&
      r.constructor.isBuffer(r)
    );
  }
  var Fa = Ba,
    ka = {}.hasOwnProperty,
    xa = Ba.prototype;
  (xa.toString = function(r) {
    var e = this.contents || "";
    return Ca(e) ? e.toString(r) : String(e);
  }),
    (xa.message = Sa),
    (xa.info = function() {
      var r = this.message.apply(this, arguments);
      return (r.fatal = null), r;
    }),
    (xa.fail = function() {
      var r = this.message.apply(this, arguments);
      throw ((r.fatal = !0), r);
    }),
    (xa.warn = Sa);
  var La = ["history", "path", "basename", "stem", "extname", "dirname"];
  function Ba(r) {
    var e, t, u;
    if (r) {
      if ("string" == typeof r || Ca(r)) r = { contents: r };
      else if ("message" in r && "messages" in r) return r;
    } else r = {};
    if (!(this instanceof Ba)) return new Ba(r);
    for (
      this.data = {},
        this.messages = [],
        this.history = [],
        this.cwd = da.cwd(),
        t = -1,
        u = La.length;
      ++t < u;

    )
      (e = La[t]), ka.call(r, e) && (this[e] = r[e]);
    for (e in r) -1 === La.indexOf(e) && (this[e] = r[e]);
  }
  function Sa(r, e, t) {
    var u,
      n,
      a = this.path,
      o = Ea(e) || "1:1";
    return (
      (u = {
        start: { line: null, column: null },
        end: { line: null, column: null }
      }),
      e && e.position && (e = e.position),
      e && (e.start ? ((u = e), (e = e.start)) : (u.start = e)),
      ((n = new Oa(r.message || r)).name = (a ? a + ":" : "") + o),
      (n.file = a || ""),
      (n.reason = r.message || r),
      (n.line = e ? e.line : null),
      (n.column = e ? e.column : null),
      (n.location = u),
      (n.ruleId = t || null),
      (n.source = null),
      (n.fatal = !1),
      r.stack && (n.stack = r.stack),
      this.messages.push(n),
      n
    );
  }
  function Ta() {}
  function Oa(r) {
    this.message = r;
  }
  function Na(r, e) {
    if (-1 !== r.indexOf(ma.sep))
      throw new Error(
        "`" + e + "` cannot be a path: did not expect `" + ma.sep + "`"
      );
  }
  function Ra(r, e) {
    if (!r) throw new Error("`" + e + "` cannot be empty");
  }
  function Ua(r, e) {
    if (!r)
      throw new Error("Setting `" + e + "` requires `path` to be set too");
  }
  Object.defineProperty(xa, "path", {
    get: function() {
      return this.history[this.history.length - 1];
    },
    set: function(r) {
      Ra(r, "path"), r !== this.path && this.history.push(r);
    }
  }),
    Object.defineProperty(xa, "dirname", {
      get: function() {
        return "string" == typeof this.path ? ma.dirname(this.path) : void 0;
      },
      set: function(r) {
        Ua(this.path, "dirname"), (this.path = ma.join(r || "", this.basename));
      }
    }),
    Object.defineProperty(xa, "basename", {
      get: function() {
        return "string" == typeof this.path ? ma.basename(this.path) : void 0;
      },
      set: function(r) {
        Ra(r, "basename"),
          Na(r, "basename"),
          (this.path = ma.join(this.dirname || "", r));
      }
    }),
    Object.defineProperty(xa, "extname", {
      get: function() {
        return "string" == typeof this.path ? ma.extname(this.path) : void 0;
      },
      set: function(r) {
        var e = r || "";
        if ((Na(e, "extname"), Ua(this.path, "extname"), e)) {
          if ("." !== e.charAt(0))
            throw new Error("`extname` must start with `.`");
          if (-1 !== e.indexOf(".", 1))
            throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = ba(this.path, e);
      }
    }),
    Object.defineProperty(xa, "stem", {
      get: function() {
        return "string" == typeof this.path
          ? ma.basename(this.path, this.extname)
          : void 0;
      },
      set: function(r) {
        Ra(r, "stem"),
          Na(r, "stem"),
          (this.path = ma.join(this.dirname || "", r + (this.extname || "")));
      }
    }),
    (Ta.prototype = Error.prototype),
    (Oa.prototype = new Ta()),
    ((xa = Oa.prototype).file = ""),
    (xa.name = ""),
    (xa.reason = ""),
    (xa.message = ""),
    (xa.stack = ""),
    (xa.fatal = null),
    (xa.column = null),
    (xa.line = null);
  var Pa = function() {
      var r = [],
        e = {};
      return (
        (e.run = function() {
          var e = -1,
            t = Ia.call(arguments, 0, -1),
            u = arguments[arguments.length - 1];
          if ("function" != typeof u)
            throw new Error("Expected function as last argument, not " + u);
          (function n(a) {
            var o = r[++e],
              i = Ia.call(arguments, 0),
              c = i.slice(1),
              l = t.length,
              s = -1;
            if (a) u(a);
            else {
              for (; ++s < l; )
                (null !== c[s] && void 0 !== c[s]) || (c[s] = t[s]);
              (t = c),
                o
                  ? (function(r, e) {
                      var t;
                      return function() {
                        var e,
                          a = Ia.call(arguments, 0),
                          o = r.length > a.length;
                        o && a.push(u);
                        try {
                          e = r.apply(null, a);
                        } catch (r) {
                          if (o && t) throw r;
                          return u(r);
                        }
                        o ||
                          (e && "function" == typeof e.then
                            ? e.then(n, u)
                            : e instanceof Error
                            ? u(e)
                            : n(e));
                      };
                      function u() {
                        t || ((t = !0), e.apply(null, arguments));
                      }
                      function n(r) {
                        u(null, r);
                      }
                    })(o, n).apply(null, t)
                  : u.apply(null, [null].concat(t));
            }
          }.apply(null, [null].concat(t)));
        }),
        (e.use = function(t) {
          if ("function" != typeof t)
            throw new Error("Expected `fn` to be a function, not " + t);
          return r.push(t), e;
        }),
        e
      );
    },
    Ia = [].slice;
  var Va = Object.prototype.toString,
    za = function(r) {
      return "[object String]" === Va.call(r);
    };
  var ja = function(r) {
      return "[object Function]" === Object.prototype.toString.call(r);
    },
    Ga = Object.prototype.toString,
    Ha = function(r) {
      var e;
      return (
        "[object Object]" === Ga.call(r) &&
        (null === (e = Object.getPrototypeOf(r)) ||
          e === Object.getPrototypeOf({}))
      );
    },
    Ma = (function e() {
      var t = [];
      var u = Pa();
      var n = {};
      var a = !1;
      var o = -1;
      i.data = function(r, e) {
        if (za(r))
          return 2 === arguments.length
            ? (Ka("data", a), (n[r] = e), i)
            : (Za.call(n, r) && n[r]) || null;
        if (r) return Ka("data", a), (n = r), i;
        return n;
      };
      i.freeze = c;
      i.attachers = t;
      i.use = function(e) {
        var u;
        if ((Ka("use", a), null === e || void 0 === e));
        else if (ja(e)) s.apply(null, arguments);
        else {
          if ("object" !== r(e))
            throw new Error("Expected usable value, not `" + e + "`");
          "length" in e ? l(e) : o(e);
        }
        u && (n.settings = Gn(n.settings || {}, u));
        return i;
        function o(r) {
          l(r.plugins), r.settings && (u = Gn(u || {}, r.settings));
        }
        function c(e) {
          if (ja(e)) s(e);
          else {
            if ("object" !== r(e))
              throw new Error("Expected usable value, not `" + e + "`");
            "length" in e ? s.apply(null, e) : o(e);
          }
        }
        function l(e) {
          var t, u;
          if (null === e || void 0 === e);
          else {
            if (!("object" === r(e) && "length" in e))
              throw new Error("Expected a list of plugins, not `" + e + "`");
            for (t = e.length, u = -1; ++u < t; ) c(e[u]);
          }
        }
        function s(r, e) {
          var u = (function(r) {
            var e,
              u = t.length,
              n = -1;
            for (; ++n < u; ) if ((e = t[n])[0] === r) return e;
          })(r);
          u
            ? (Ha(u[1]) && Ha(e) && (e = Gn(u[1], e)), (u[1] = e))
            : t.push($a.call(arguments));
        }
      };
      i.parse = function(r) {
        var e,
          t = Fa(r);
        if ((c(), Ja("parse", (e = i.Parser)), _a(e)))
          return new e(String(t), t).parse();
        return e(String(t), t);
      };
      i.stringify = function(r, e) {
        var t,
          u = Fa(e);
        if ((c(), Qa("stringify", (t = i.Compiler)), Wa(r), _a(t)))
          return new t(r, u).compile();
        return t(r, u);
      };
      i.run = l;
      i.runSync = function(r, e) {
        var t,
          u = !1;
        return (
          l(r, e, function(r, e) {
            (u = !0), Hn(r), (t = e);
          }),
          Xa("runSync", "run", u),
          t
        );
      };
      i.process = s;
      i.processSync = function(r) {
        var e,
          t = !1;
        return (
          c(),
          Ja("processSync", i.Parser),
          Qa("processSync", i.Compiler),
          s((e = Fa(r)), function(r) {
            (t = !0), Hn(r);
          }),
          Xa("processSync", "process", t),
          e
        );
      };
      return i;
      function i() {
        for (var r = e(), u = t.length, a = -1; ++a < u; )
          r.use.apply(null, t[a]);
        return r.data(Gn(!0, {}, n)), r;
      }
      function c() {
        var r, e, n, c;
        if (a) return i;
        for (; ++o < t.length; )
          (r = t[o]),
            (e = r[0]),
            (n = r[1]),
            (c = null),
            !1 !== n &&
              (!0 === n && (r[1] = void 0),
              (c = e.apply(i, r.slice(1))),
              ja(c) && u.use(c));
        return (a = !0), (o = 1 / 0), i;
      }
      function l(r, e, t) {
        if ((Wa(r), c(), !t && ja(e) && ((t = e), (e = null)), !t))
          return new Promise(n);
        function n(n, a) {
          u.run(r, Fa(e), function(e, u, o) {
            (u = u || r), e ? a(e) : n ? n(u) : t(null, u, o);
          });
        }
        n(null, t);
      }
      function s(r, e) {
        if ((c(), Ja("process", i.Parser), Qa("process", i.Compiler), !e))
          return new Promise(t);
        function t(t, u) {
          var n = Fa(r);
          Ya.run(i, { file: n }, function(r) {
            r ? u(r) : t ? t(n) : e(null, n);
          });
        }
        t(null, e);
      }
    })().freeze(),
    $a = [].slice,
    Za = {}.hasOwnProperty,
    Ya = Pa()
      .use(function(r, e) {
        e.tree = r.parse(e.file);
      })
      .use(function(r, e, t) {
        r.run(e.tree, e.file, function(r, u, n) {
          r ? t(r) : ((e.tree = u), (e.file = n), t());
        });
      })
      .use(function(r, e) {
        e.file.contents = r.stringify(e.tree, e.file);
      });
  function _a(r) {
    return (
      ja(r) &&
      (function(r) {
        var e;
        for (e in r) return !0;
        return !1;
      })(r.prototype)
    );
  }
  function Ja(r, e) {
    if (!ja(e)) throw new Error("Cannot `" + r + "` without `Parser`");
  }
  function Qa(r, e) {
    if (!ja(e)) throw new Error("Cannot `" + r + "` without `Compiler`");
  }
  function Ka(r, e) {
    if (e)
      throw new Error(
        "Cannot invoke `" +
          r +
          "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`."
      );
  }
  function Wa(r) {
    if (!r || !za(r.type)) throw new Error("Expected node, got `" + r + "`");
  }
  function Xa(r, e, t) {
    if (!t)
      throw new Error("`" + r + "` finished async. Use `" + e + "` instead");
  }
  var ro = /[|\\{}()[\]^$+*?.]/g,
    eo = function(r) {
      if ("string" != typeof r) throw new TypeError("Expected a string");
      return r.replace(ro, "\\$&");
    },
    to = { "---": "yaml", "+++": "toml" };
  var uo = function(r) {
      var e = Object.keys(to)
          .map(eo)
          .join("|"),
        t = r.match(
          new RegExp(
            "^(".concat(
              e,
              ")[^\\n\\S]*\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)"
            )
          )
        );
      if (null === t) return { frontMatter: null, content: r };
      var u = t[0].replace(/\n$/, ""),
        n = t[1],
        a = t[2];
      return {
        frontMatter: { type: to[n], value: a, raw: u },
        content: t[0].replace(/[^\n]/g, " ") + r.slice(t[0].length)
      };
    },
    no = o(function(r) {
      var e = ["format", "prettier"];
      function t(r) {
        var t = "@(".concat(e.join("|"), ")"),
          u = new RegExp(
            [
              "\x3c!--\\s*".concat(t, "\\s*--\x3e"),
              "\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(
                t,
                "[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e"
              )
            ].join("|"),
            "m"
          ),
          n = r.match(u);
        return n && 0 === n.index;
      }
      r.exports = {
        startWithPragma: t,
        hasPragma: function(r) {
          return t(uo(r).content.trimLeft());
        },
        insertPragma: function(r) {
          var t = uo(r),
            u = "\x3c!-- @".concat(e[0], " --\x3e");
          return t.frontMatter
            ? ""
                .concat(t.frontMatter.raw, "\n\n")
                .concat(u, "\n\n")
                .concat(t.content)
            : "".concat(u, "\n\n").concat(t.content);
        }
      };
    }),
    ao = o(function(r) {
      r.exports = function(r) {
        r = Object.assign({ onlyFirst: !1 }, r);
        var e = [
          "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)",
          "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
        ].join("|");
        return new RegExp(e, r.onlyFirst ? void 0 : "g");
      };
    }),
    oo = o(function(r) {
      r.exports = function(r) {
        return (
          !Number.isNaN(r) &&
          (r >= 4352 &&
            (r <= 4447 ||
              9001 === r ||
              9002 === r ||
              (11904 <= r && r <= 12871 && 12351 !== r) ||
              (12880 <= r && r <= 19903) ||
              (19968 <= r && r <= 42182) ||
              (43360 <= r && r <= 43388) ||
              (44032 <= r && r <= 55203) ||
              (63744 <= r && r <= 64255) ||
              (65040 <= r && r <= 65049) ||
              (65072 <= r && r <= 65131) ||
              (65281 <= r && r <= 65376) ||
              (65504 <= r && r <= 65510) ||
              (110592 <= r && r <= 110593) ||
              (127488 <= r && r <= 127569) ||
              (131072 <= r && r <= 262141)))
        );
      };
    });
  o(function(r) {
    var e = /\uD83C\uDFF4(?:\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\u200D\u2620\uFE0F)|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDD1-\uDDDD])/g;
    r.exports = function(r) {
      if ("string" != typeof (r = r.replace(e, "  ")) || 0 === r.length)
        return 0;
      r = (function(r) {
        return "string" == typeof r ? r.replace(ao(), "") : r;
      })(r);
      for (var t = 0, u = 0; u < r.length; u++) {
        var n = r.codePointAt(u);
        n <= 31 ||
          (n >= 127 && n <= 159) ||
          ((n >= 768 && n <= 879) || (n > 65535 && u++, (t += oo(n) ? 2 : 1)));
      }
      return t;
    };
  });
  function io(r) {
    return function(e, t, u) {
      var n = u && u.backwards;
      if (!1 === t) return !1;
      for (var a = e.length, o = t; o >= 0 && o < a; ) {
        var i = e.charAt(o);
        if (r instanceof RegExp) {
          if (!r.test(i)) return o;
        } else if (-1 === r.indexOf(i)) return o;
        n ? o-- : o++;
      }
      return (-1 === o || o === a) && o;
    };
  }
  io(/\s/), io(" \t"), io(",; \t"), io(/[^\r\n]/);
  var co = {};
  [
    ["|>"],
    ["||", "??"],
    ["&&"],
    ["|"],
    ["^"],
    ["&"],
    ["==", "===", "!=", "!=="],
    ["<", ">", "<=", ">=", "in", "instanceof"],
    [">>", "<<", ">>>"],
    ["+", "-"],
    ["*", "/", "%"],
    ["**"]
  ].forEach(function(r, e) {
    r.forEach(function(r) {
      co[r] = e;
    });
  });
  var lo =
      "[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312e\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u32fe\\u3300-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fea\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d]",
    so =
      "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]",
    fo =
      "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0af0\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166d-\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e49\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc9\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]",
    po = function(r) {
      return r.length > 0 ? r[r.length - 1] : null;
    },
    Do = [
      "liquidNode",
      "inlineCode",
      "emphasis",
      "strong",
      "delete",
      "link",
      "linkReference",
      "image",
      "imageReference",
      "footnote",
      "footnoteReference",
      "sentence",
      "whitespace",
      "word",
      "break",
      "inlineMath"
    ],
    ho = Do.concat(["tableCell", "paragraph", "heading"]),
    go = new RegExp(so),
    mo = new RegExp(fo);
  var bo = {
      mapAst: function(r, e) {
        return (function r(t, u, n) {
          n = n || [];
          var a = Object.assign({}, e(t, u, n));
          return (
            a.children &&
              (a.children = a.children.map(function(e, t) {
                return r(e, t, [a].concat(n));
              })),
            a
          );
        })(r, null, null);
      },
      splitText: function(r, e) {
        var t = "non-cjk",
          u = "cj-letter",
          n = "cjk-punctuation",
          a = [];
        return (
          ("preserve" === e.proseWrap
            ? r
            : r.replace(
                new RegExp("(".concat(lo, ")\n(").concat(lo, ")"), "g"),
                "$1$2"
              )
          )
            .split(/([ \t\n]+)/)
            .forEach(function(r, e, i) {
              e % 2 != 1
                ? ((0 !== e && e !== i.length - 1) || "" !== r) &&
                  r
                    .split(new RegExp("(".concat(lo, ")")))
                    .forEach(function(r, e, a) {
                      ((0 !== e && e !== a.length - 1) || "" !== r) &&
                        (e % 2 != 0
                          ? o(
                              mo.test(r)
                                ? {
                                    type: "word",
                                    value: r,
                                    kind: n,
                                    hasLeadingPunctuation: !0,
                                    hasTrailingPunctuation: !0
                                  }
                                : {
                                    type: "word",
                                    value: r,
                                    kind: go.test(r) ? "k-letter" : u,
                                    hasLeadingPunctuation: !1,
                                    hasTrailingPunctuation: !1
                                  }
                            )
                          : "" !== r &&
                            o({
                              type: "word",
                              value: r,
                              kind: t,
                              hasLeadingPunctuation: mo.test(r[0]),
                              hasTrailingPunctuation: mo.test(po(r))
                            }));
                    })
                : a.push({
                    type: "whitespace",
                    value: /\n/.test(r) ? "\n" : " "
                  });
            }),
          a
        );
        function o(r) {
          var e,
            o,
            i = po(a);
          i &&
            "word" === i.type &&
            ((i.kind === t && r.kind === u && !i.hasTrailingPunctuation) ||
            (i.kind === u && r.kind === t && !r.hasLeadingPunctuation)
              ? a.push({ type: "whitespace", value: " " })
              : ((e = t),
                (o = n),
                (i.kind === e && r.kind === o) ||
                  (i.kind === o && r.kind === e) ||
                  [i.value, r.value].some(function(r) {
                    return /\u3000/.test(r);
                  }) ||
                  a.push({ type: "whitespace", value: "" }))),
            a.push(r);
        }
      },
      punctuationPattern: fo,
      getFencedCodeBlockValue: function(r, e) {
        var t = e.slice(r.position.start.offset, r.position.end.offset),
          u = t.match(/^\s*/)[0].length,
          n = new RegExp("^\\s{0,".concat(u, "}")),
          a = t.split("\n"),
          o = t[u],
          i = t.slice(u).match(new RegExp("^[".concat(o, "]+")))[0],
          c = new RegExp("^\\s{0,3}".concat(i)).test(
            a[a.length - 1].slice(l(a.length - 1))
          );
        return a
          .slice(1, c ? -1 : void 0)
          .map(function(r, e) {
            return r.slice(l(e + 1)).replace(n, "");
          })
          .join("\n");
        function l(e) {
          return r.position.indent[e - 1] - 1;
        }
      },
      getOrderedListItemInfo: function(r, t) {
        var u = e(
          t
            .slice(r.position.start.offset, r.position.end.offset)
            .match(/^\s*(\d+)(\.|\))(\s*)/),
          4
        );
        return { numberText: u[1], marker: u[2], leadingSpaces: u[3] };
      },
      INLINE_NODE_TYPES: Do,
      INLINE_NODE_WRAPPER_TYPES: ho
    },
    vo = o(function(r) {
      var e = /^import/,
        t = /^export/,
        u = function(r) {
          return e.test(r);
        },
        n = function(r) {
          return t.test(r);
        },
        a = function(r, e) {
          var t = e.indexOf("\n\n"),
            a = e.slice(0, t);
          if (n(a) || u(a))
            return r(a)({ type: n(a) ? "export" : "import", value: a });
        };
      (a.locator = function(r) {
        return n(r) || u(r) ? -1 : 1;
      }),
        (r.exports = {
          esSyntax: function() {
            var r = this.Parser,
              e = r.prototype.blockTokenizers,
              t = r.prototype.blockMethods;
            (e.esSyntax = a), t.splice(t.indexOf("paragraph"), 0, "esSyntax");
          },
          BLOCKS_REGEX: "[a-z\\.]+(\\.){0,1}[a-z\\.]"
        });
    });
  function Eo(r, e) {
    return r.indexOf("$", e);
  }
  var wo = /^\\\$/,
    yo = /^\$((?:\\\$|[^$])+)\$/,
    Ao = /^\$\$((?:\\\$|[^$])+)\$\$/,
    Co = "\n",
    qo = "\t",
    Fo = " ",
    ko = "$",
    xo = 2,
    Lo = 4,
    Bo = function() {
      var r =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (function(r) {
        var e = this.Parser,
          t = e.prototype.blockTokenizers,
          u = e.prototype.blockMethods;
        (t.math = function(r, e, t) {
          for (
            var u, n, a, o, i, c, l, s, f, p, D = e.length + 1, d = 0, h = "";
            d < D && ((a = e.charAt(d)) === Fo || a === qo);

          )
            (h += a), d++;
          if (((f = d), (a = e.charAt(d)) === ko)) {
            for (d++, n = a, u = 1, h += a; d < D && (a = e.charAt(d)) === n; )
              (h += a), u++, d++;
            if (!(u < xo)) {
              for (; d < D && (a = e.charAt(d)) !== Co; ) {
                if (a === ko) return;
                (h += a), d++;
              }
              if (((a = e.charAt(d)), t)) return !0;
              for (
                (p = r.now()).column += h.length,
                  p.offset += h.length,
                  o = l = s = i = c = "";
                d < D;

              )
                if (
                  ((i += l), (c += s), (l = s = ""), (a = e.charAt(d)) === Co)
                ) {
                  for (
                    i ? ((l += a), (s += a)) : (h += a), o = "", d++;
                    d < D && (a = e.charAt(d)) === Fo;

                  )
                    (o += a), d++;
                  if (((l += o), (s += o.slice(f)), !(o.length >= Lo))) {
                    for (o = ""; d < D && (a = e.charAt(d)) === n; )
                      (o += a), d++;
                    if (((l += o), (s += o), !(o.length < u))) {
                      for (o = ""; d < D && (a = e.charAt(d)) !== Co; )
                        (l += a), (s += a), d++;
                      break;
                    }
                  }
                } else (i += a), (s += a), d++;
              h += i + l;
              var g = Pr(c);
              return r(h)({
                type: "math",
                value: g,
                data: {
                  hName: "div",
                  hProperties: { className: "math" },
                  hChildren: [{ type: "text", value: g }]
                }
              });
            }
          }
        }),
          u.splice(u.indexOf("fencedCode") + 1, 0, "math");
        var n = e.prototype.interruptParagraph,
          a = e.prototype.interruptList,
          o = e.prototype.interruptBlockquote;
        n.splice(n.indexOf("fencedCode") + 1, 0, ["math"]),
          a.splice(a.indexOf("fencedCode") + 1, 0, ["math"]),
          o.splice(o.indexOf("fencedCode") + 1, 0, ["math"]);
        var i = this.Compiler;
        null != i &&
          (i.prototype.visitors.math = function(r) {
            return "$$\n" + r.value + "\n$$";
          });
      }.call(this, r),
        function(r) {
          function e(e, t, u) {
            var n = !0,
              a = Ao.exec(t);
            a || ((a = yo.exec(t)), (n = !1));
            var o = wo.exec(t);
            if (o) return !!u || e(o[0])({ type: "text", value: "$" });
            if ("\\$" === t.slice(-2))
              return e(t)({ type: "text", value: t.slice(0, -2) + "$" });
            if (a) {
              if (u) return !0;
              if (a[0].includes("`") && t.slice(a[0].length).includes("`")) {
                var i = t.slice(0, t.indexOf("`"));
                return e(i)({ type: "text", value: i });
              }
              var c = a[1].trim();
              return e(a[0])({
                type: "inlineMath",
                value: c,
                data: {
                  hName: "span",
                  hProperties: {
                    className:
                      "inlineMath" +
                      (n && r.inlineMathDouble ? " inlineMathDouble" : "")
                  },
                  hChildren: [{ type: "text", value: c }]
                }
              });
            }
          }
          e.locator = Eo;
          var t = this.Parser,
            u = t.prototype.inlineTokenizers,
            n = t.prototype.inlineMethods;
          (u.math = e), n.splice(n.indexOf("text"), 0, "math");
          var a = this.Compiler;
          null != a &&
            (a.prototype.visitors.inlineMath = function(r) {
              return "$" + r.value + "$";
            });
        }.call(this, r));
    },
    So = bo.mapAst,
    To = bo.INLINE_NODE_WRAPPER_TYPES;
  function Oo(r) {
    var e = r.isMDX;
    return function(r) {
      var t = Ma()
        .use(
          Un,
          Object.assign(
            { footnotes: !0, commonmark: !0 },
            e && { blocks: [vo.BLOCKS_REGEX] }
          )
        )
        .use(Uo)
        .use(Bo)
        .use(e ? vo.esSyntax : No)
        .use(Po)
        .use(e ? Ro : No);
      return t.runSync(t.parse(r));
    };
  }
  function No(r) {
    return r;
  }
  function Ro() {
    return function(r) {
      return So(r, function(r, t, u) {
        var n = e(u, 1)[0];
        return "html" !== r.type ||
          /^<!--[\s\S]*-->$/.test(r.value) ||
          -1 !== To.indexOf(n.type)
          ? r
          : Object.assign({}, r, { type: "jsx" });
      });
    };
  }
  function Uo() {
    var r = this.Parser.prototype;
    function e(r, e) {
      var t = uo(e);
      if (t.frontMatter) return r(t.frontMatter.raw)(t.frontMatter);
    }
    (r.blockMethods = ["frontMatter"].concat(r.blockMethods)),
      (r.blockTokenizers.frontMatter = e),
      (e.onlyAtStart = !0);
  }
  function Po() {
    var r = this.Parser.prototype,
      e = r.inlineMethods;
    function t(r, e) {
      var t = e.match(/^({%[\s\S]*?%}|{{[\s\S]*?}})/);
      if (t) return r(t[0])({ type: "liquidNode", value: t[0] });
    }
    e.splice(e.indexOf("text"), 0, "liquid"),
      (r.inlineTokenizers.liquid = t),
      (t.locator = function(r, e) {
        return r.indexOf("{", e);
      });
  }
  var Io = {
      astFormat: "mdast",
      hasPragma: no.hasPragma,
      locStart: function(r) {
        return r.position.start.offset;
      },
      locEnd: function(r) {
        return r.position.end.offset;
      },
      preprocess: function(r) {
        return r.replace(/\n\s+$/, "\n");
      }
    },
    Vo = Object.assign({}, Io, { parse: Oo({ isMDX: !1 }) });
  return {
    parsers: {
      remark: Vo,
      markdown: Vo,
      mdx: Object.assign({}, Io, { parse: Oo({ isMDX: !0 }) })
    }
  };
});
//# sourceMappingURL=parser_markdown.js.map
