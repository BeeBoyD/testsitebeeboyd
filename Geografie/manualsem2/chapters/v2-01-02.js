registerChapter({ chapter: "v2-01-02", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Coperta 2. Pagina 1');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v2/p01.jpg'
    },
    {
      hotspots: [],
      image: 'v2/p02.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<br/><div class=\"center\">Acest manual este proprietatea Ministerului Educației Naționale și Cercetării Științifice.</div><div class=\"center\">Manualul școlar este realizat în conformitate cu <br><em>Programa școlară pentru disciplina GEOGRAFIE</em>, clasa a IV-a, aprobată prin <br> OM nr. 5003 din 02.12.2014.</div><div class=\"center\">Numărul european de asistență pentru copii: 116.111</div>");
}
}, {id: 'art-g4v2-a01-page'});
jade_mixins["atom"].call({
block: function(){
buf.push("<br/><br/><br/>");
}
}, {id: 'art-g4v2-a01-space'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-cover\"><h3 class=\"min text-uppercase\">Ministerului Educației Naționale și Cercetării Științifice</h3><div class=\"titlu-autor\">");
jade_mixins["img"]('img/autor.jpg');
buf.push("</div><div class=\"titlu-coperta\">");
jade_mixins["img"]('img/titlu_GEOGRAFIE.png');
buf.push("</div><h3 class=\"subtitle-orange\">CLASA A IV-A</h3><h3 class=\"subtitle-blue\">SEMESTRUL AL II-LEA  </h3><div class=\"art-g4-m-bottom\"></div><div class=\"logo-art\">");
jade_mixins["img"]("img/logo-arthur.png");
buf.push("</div><br/></div>");
}
}, {id: 'art-g4v2-a02-page'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});