registerChapter({ chapter: "x-help-04", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Activitățile interactive. Testele de autoevaluare");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v1/h9.jpg'
    },
    {
      hotspots: [],
      image: 'v1/h10.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">ACTIVITĂȚILE INTERACTIVE </div><div class=\"justify\">Presupun rezolvarea unor sarcini de lucru și îți oferă posibilitatea de a verifica imediat felul cum ai lucrat. Dă clic pe bara de sunet pentru a asculta cerința. După ce ai rezolvat, apasă butonul <span><div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/verifica.png");
buf.push("</div>pentru a afla ce rezultate ai obținut. Poți relua sarcina apăsând butonul </span><span><div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/reia.png");
buf.push("</div></span></div><div class=\"justify\">În funcție de cum ai lucrat, vei primi confirmări vizuale și auditive din partea avatarului. De asemenea, linia roșie punctată din stânga jos (<span><div class=\"marcaje-menu\">");
jade_mixins["img"]("img/help/linia punctata.jpg");
buf.push("</div>) indică greșeli sau rezolvări incomplete, iar semnul verde (<span><div class=\"marcaje-menu\">");
jade_mixins["img"]("img/help/bifa.jpg");
buf.push("</div>) indică rezolvarea corectă. Codul de culori folosit pe parcursul întregului manual pentru validarea răspunsurilor este: culoarea verde pentru răspunsul </span><span><div class=\"marcaje-menu\">");
jade_mixins["img"]("img/help/corect.png");
buf.push("</div> și culoarea mov pentru răspunsul </span><span><div class=\"marcaje-menu\">");
jade_mixins["img"]("img/help/incorect.png");
buf.push("</div> .</span></span></div>");
jade_mixins["lightbox"]("img/help/interactiva.png");
buf.push("<br/><div class=\"justify\">Exercițiile din manual sunt de mai multe tipuri:</div><ul class=\"art-g4-orange\"><li>exerciții de alegere duală (adevărat sau fals, corect sau incorect);</li><li>exerciții de alegere multiplă (o variantă corectă din mai multe soluții sugerate);</li><li>exerciții de realizare a unor corespondențe;</li><li>exerciții de ordonare a unor elemente;</li><li>exerciții de grupare a unor elemente după anumite criterii.</li></ul><br/>");
}
}, {id: 'art-g4v1-help-page-4-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">Teste de autoevaluare</div><div class=\"justify\">În manual există și o serie de <strong>teste de autoevaluare</strong>, care propun mai multe exerciții interactive a căror validare se face diferit de exercițiile interactive propriu-zise. În acest caz, după ce rezolvi toate sarcinile de lucru, ai posibilitatea de a vedea ce calificativ ai obținut pentru  fiecare exercițiu.</div><div class=\"img-big\">");
jade_mixins["lightbox"]("img/help/evaluare.png");
buf.push("</div><br/>");
}
}, {id: 'art-g4v1-help-page-4-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});