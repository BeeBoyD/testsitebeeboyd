registerChapter({ chapter: "x-help-02", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Modul de navigare");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v1/h5.jpg'
    },
    {
      hotspots: [],
      image: 'v1/h6.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<p>2. ca o singură pagină, ce se derulează în jos (<em>Modul de afișare tip digital</em>). Atunci când ai această opțiune activată, conținutul din manual se rearanjează pe ecran în funcție de dimensiunea acestuia, deci nu mai coincide cu varianta tipărită. Activitățile multimedia sunt deja vizibile în ecran. Acest mod de afișare permite profesorului să folosească din manual texte și imagini pentru a-și pregăti materiale auxiliare necesare la clasă (selecție, copiere, mărire etc.).<div class=\"img-big\">");
jade_mixins["lightbox"]("img/help/pagini-digital.png");
buf.push("</div></p><div class=\"justify\">Manualul se comportă diferit în funcție de dimensiunea ecranului. Dacă îl vei deschide pe un ecran mai mare (desktop sau laptop), în mod automat conținutul se va afișa pe două pagini. Dacă îl deschizi pe un ecran mai mic (telefon sau tabletă), cele două pagini vor apărea una sub alta. Pe un ecran și mai mic, conținutul se rearanjează, astfel încât fiecare element se redimensionează pentru a putea fi vizualizat în condiții optime de calitate (<em>Modul de afișare automat</em>).</div>");
}
}, {id: 'art-g4v1-help-page-3-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">Modul de navigare</div><div class=\"justify\">Săgeata din stânga-jos permite navigarea către pagina precedentă din manual. Săgeata din dreapta-jos permite navigarea către pagina următoare din manual. Bara de navigare, plasată în partea inferioară a ecranului, îți indică punctul la care te afli în parcurgerea manualului.</div>");
jade_mixins["img"]("img/help/bara-navigare.png");
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">ACTIVITĂȚILE MULTIMEDIA DE ÎNVĂȚARE</div><div class=\"justify\">Activitățile multimedia din manual sunt de trei tipuri:</div><ul><li> <em>statice</em>, semnalizate prin simbolul &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton_statice.png");
buf.push("</div></span></li><li> <em>animate</em>, semnalizate prin simbolul &nbsp;&nbsp;&nbsp; <span> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton_animatie.png");
buf.push("</div></span></li><li> <em>interactive</em>, semnalizate prin simbolul<span> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton_interactive.png");
buf.push("</div></span></li></ul>");
}
}, {id: 'art-g4v1-help-page-3-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});