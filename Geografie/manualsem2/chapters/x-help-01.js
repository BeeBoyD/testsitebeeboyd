registerChapter({ chapter: "x-help-01", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Structura ecranului");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v2/h3.jpg'
    },
    {
      hotspots: [],
      image: 'v2/h4.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">Structura ecranului</div><div> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton-drona.png");
buf.push("</div><span class=\"justify\">În partea stângă a ecranului este prezent în permanență avatarul <span class=\"bolditalic\">Zoom</span>, o simpatică dronă animată, prietenul care te va însoți pe parcursul întregului manual, care îți prezintă meniul de navigare și are rolul de a oferi un răspuns (vizual și auditiv) atunci când ai rezolvat corect sarcina de lucru sau, dimpotrivă,atunci când ai dificultăți.</span></div><br/><div class=\"justify\"><strong>Meniul de navigare </strong>cuprinde următoarele butoane și funcționalități:</div><div> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton-cuprins.png");
buf.push("</div><span class=\"justify\">Butonul <strong>CUPRINS </strong>permite accesul permanent la structura ierarhică a conținutului din manual. Manualul este organizat în patru unități de învățare (câte două pentru fiecare semestru), unitățile de învățare fiind la rândul lor structurate în mai multe lecții. Un clic pe titlul unei lecții realizează saltul la lecția respectivă. Atunci când ai ajuns la lecția căutată, dă un clic oriunde în pagină pentru a face bara cuprinsului să dispară. </span></div><div> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton-ecran-complet.png");
buf.push("</div><span class=\"justify\">Butonul <strong>ECRAN COMPLET </strong>permite maximizarea conținutului din pagina la care este deschis manualul. Pentru a reveni la afișarea inițială, apasă din nou acest buton.</span></div><div> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton-mod-afisare.png");
buf.push("</div><span class=\"justify\">Butonul <strong>MOD DE AFIȘARE </strong>îți oferă trei variante de vizualizare a conținutului din manual: o variantă de tip carte, similară cu varianta tipărită, o variantă de tip digital, care permite rearanjarea conținutului din manual, astfel încât să poată fi citit pe orice tip de ecran, și o variantă automată, mixtă, care face ca manualul să se comporte diferit în funcție de dimensiunea ecranului pe care este deschis.</span></div><div> <div class=\"marcaje-menu\"> ");
jade_mixins["img"]("img/help/buton-ajutor.png");
buf.push("</div><span class=\"justify\">Secțiunea  <strong>AJUTOR </strong>îți oferă informații despre modul general de funcționare a manualului, precum și despre tipurile de activități multimedia interactive de învățare, pe care le vei întâlni în manual.</span></div>");
}
}, {id: 'art-g4v1-help-page-2-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">Conținutul manualului</div><div class=\"justify\">În partea centrală a ecranului este afișat conținutul manualului. În funcție de modul de afișare selectat (vezi butonul MOD DE AFIȘARE), conținutul vizualizat poate arăta astfel:</div><p>1. ca o pagină dublă deschisă de carte (<em>Modul de afișare tip carte</em>), așa cum îl vezi și în varianta tipărită. Atunci când ai această opțiune activată, vei observa că activitățile multimedia se deschid într-o fereastră distinctă atunci când le accesezi prin clic. Acest mod de afișare permite folosirea cu ușurință a manualului digital în paralel cu varianta tipărită și este recomandat a fi folosit în clasă. În acest scop, toate exercițiile din manual pot fi deschise în fereastră pentru o mai bună vizualizare.<div class=\"img-big\">");
jade_mixins["lightbox"]("img/help/pagini-carte.png");
buf.push("</div></p>");
}
}, {id: 'art-g4v1-help-page-2-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});