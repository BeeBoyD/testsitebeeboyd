registerChapter({ chapter: "x-help-05", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Elementele multimedia și interfața");
jade_mixins["subtitle"]("Caracteristici generale");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v1/h11.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">Elementele multimedia și interfața.</div><div class=\"art-g4-red-subtitle text-uppercase\">Caracteristici generale</div><div class=\"justify\">Manualul digital integrează o interfaţă grafică ce respectă cele mai moderne cerinţe de ergonomie şi care integrează, de asemenea, ultimele convenţii şi metafore în dezvoltarea aplicaţiilor multimedia interactive.</div><br/><div class=\"justify\">Elementele multimedia integrate în cadrul manualului digital sunt optimizate pentru utilizare web, având dimeniuni reduse şi, implicit, un timp scăzut de încărcare.</div><div class=\"justify\"><strong>Elementele de tip video au următoarele specificaţii:</strong></div><div class=\"justify\">– format: mpeg-4;</div><div class=\"justify\">– dimensiune: maximum 10 MB;</div><div class=\"justify\">– mod: mono / stereo / surround;</div><div class=\"justify\">– rezoluţie: 320 x 240 pixeli sau superior.</div><div class=\"justify\"><strong>Elementele de tip audio au următoarele specificaţii:</strong></div><div class=\"justify\">– format: .mp3;</div><div class=\"justify\">– dimensiune: maximum 2 MB;</div><div class=\"justify\">– rată biţi: 16-48 kbps.</div><div class=\"justify\"><strong>Elementele de tip imagini au următoarele specificaţii:</strong></div><div class=\"justify\">– format: .png, .jpg;</div><div class=\"justify\">– dimensiune: maximum 1 MB;</div><div class=\"justify\">– rezoluţie: 640 x 480 pixeli sau superior;</div><div class=\"justify\">– DPI: minimum 72.</div>");
}
}, {id: 'art-g4v1-help-page-4-1'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});