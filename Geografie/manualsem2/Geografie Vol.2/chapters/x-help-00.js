registerChapter({ chapter: "x-help-00", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("SECȚIUNEA „AJUTOR“");
jade_mixins["subtitle"]('Despre manualul digital. Specificații tehnice');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v2/h1.jpg'
    },
    {
      hotspots: [],
      image: 'v2/h2.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">Despre manualul digital</div><span>Bun venit în lumea <em>Geografiei digitale</em>!</span><br/><div class=\"justify\">Întregul conținut al manualului tău de Geografie pentru clasa a IV-a a fost transferat și în această variantă digitală, dar aceasta din urmă are în plus o mulțime de activități multimedia interactive de învățare, aducând în universul manualului imagini, sunete, filmulețe, animații geografice, aplicații practice, exerciții, teste și jocuri interactive. Cele două variante pot fi folosite și separat, dar, pentru dezvoltarea competențelor și pentru atingerea finalităților propuse de programa școlară, îți recomandăm folosirea lor conjugată, deoarece varianta digitală completează demersul didactic propus de manualul tipărit, iar învățarea devine astfel mai ușoară și mai captivantă. Varianta digitală a fost concepută astfel încât să poată fi folosită atât pe desktop și laptop, cât și pe tabletă sau telefon.</div>");
jade_mixins["lightbox"]("img/help/intro.png");
}
}, {id: 'art-g4v1-help-page-1-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle text-uppercase\">SPECIFICAȚII TEHNICE</div><div class=\"justify\">Manualul nu necesită instalare și poate fi accesat fără instalarea unor alte softuri și fără efectuarea unor operaţiuni suplimentare.</div><br/><div class=\"justify\">Pentru ca acesta să fie utilizat în bune condiții, asigură-te că echipamentul tehnic pe care rulezi manualul digital îndeplinește următoarele specificații:</div><ul class=\"art-g4-orange\"><li> <strong>Sistem de operare </strong>– Windows Vista sau superior, Android 4.03 sau superior, Linux (Ubuntu 14.04, Linux Mint 16, Debian GNU/Linux 7.0, OpenSUSE 13.1), OS X 10.9+, iOS 7.1.X+</li><li> <strong>Browser </strong>– Google Chrome 31+ (Windows Vista+, Android 4.03+, Linux, OS X 10.9+, iOS 7.1.X+), Mozilla Firefox 25+ (Windows Vista+, Android 4.03+, Linux, OS X 10.9+), Internet Explorer 10+ (Windows 7+), Safari 7+ (OS X 10.9+, iOS 7.1.X+)</li><li> <strong>Hardware </strong>– PC/tabletă/smartphone cu procesor având cerințe minime de 800 MHz, 512 MB RAM, 1 GB spaţiu disponibil de sto</li><li> <strong>Rezoluţie </strong>– Minimum 1024 × 768 pixeli</li></ul><br/><div class=\"art-g4-red-subtitle text-uppercase\">Pornirea</div><div class=\"justify\">Rularea aplicației se poate face fie de pe un calculator <em>(offline sau online)</em>, fie de pe o tabletă sau de pe un telefon inteligent <em>(online)</em>.</div><ol class=\"art-g4-orange\"><li>Dacă ai primit manualul pe un CD, deschide folderul corespunzător CD-ului și accesează fișierul numit <em>index.html </em>cu un dublu-clic. În cazul (rar) în care fișierul nu se deschide, din cauza configurării programelor de pe calculator, pornește browserul tău din meniul <em>File (Fișier)</em>, urmat de <em>Open file </em>(Deschide fișierul), caută același <em>index.html</em> și deschide-l.</li><li>O altă modalitate de a accesa acest manual este prin internet. Este deci posibil ca, în loc de un CD, să fi primit o adresă de internet de forma <em>http://... </em>. Vizitează această adresă cu browserul tău pentru a accesa manualul.</li></ol>");
}
}, {id: 'art-g4v1-help-page-1-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});