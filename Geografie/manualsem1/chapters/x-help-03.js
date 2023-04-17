registerChapter({ chapter: "x-help-03", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Activitățile statice și animate");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v1/h7.jpg'
    },
    {
      hotspots: [],
      image: 'v1/h8.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">ACTIVITĂȚILE STATICE</div><div class=\"justify\">Presupun ascultare activă și observare dirijată a unei imagini semnificative. Pentru a asculta, dă clic pe butonul <span><div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/play.png");
buf.push("</div>de pe bara de sunet. Poți opri derularea în orice moment, având posibilitatea de a relua ascultarea din acel punct. De asemenea, ai posibilitatea de a regla volumul.</span><div class=\"img-big\">");
jade_mixins["lightbox"]("img/help/statica.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-help-page-3-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">ACTIVITĂȚILE ANIMATE </div><div class=\"justify\">Presupun vizionarea unor scurte filme sau animații care pot fi oprite pe anumite secvențe de interes, pot fi mărite pe tot ecranul și al căror volum se poate regla.</div><div class=\"img-big\">");
jade_mixins["lightbox"]("img/help/animata.png");
buf.push("</div><div class=\"art-g4-red-subtitle\">ATENȚIE!</div><div class=\"justify\">Există în manualul digital „atomi” asociați unei secvențe de învățare (de exemplu REȚINE sau OBSERVĂ sau DESCOPERĂ) care au alocate mai multe activități multimedia de învățare: două, trei sau chiar mai multe! La pagina 21 din semestrul I, pentru secvența REȚINE din manualul tipărit, sunt alocate în manualul digital 12 activități multimedia statice, referitoare la modalități de orientare în natură și în orașe! Fiecare astfel de activitate poate fi activată prin trecerea mouse-ului pe deasupra atomului respectiv (mouse-over).</div><div class=\"img-big\">");
jade_mixins["lightbox"]("img/help/multi-digitale.png");
buf.push("</div><br/>");
}
}, {id: 'art-g4v1-help-page-3-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});