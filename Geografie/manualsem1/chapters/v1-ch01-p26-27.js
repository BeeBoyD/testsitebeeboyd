registerChapter({ chapter: "v1-ch01-p26-27", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Relief, hidrografie, vegetație');
jade_mixins["subtitle"]('Paginile 26 - 27');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a26-aplica-1',
          top: 5.4418,
          left: 4,
          width: 93,
          height: 6.8837,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a26-aplica-2',
          top: 12.7907,
          left: 4,
          width: 93,
          height: 13.6744,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a26-aplica-3',
          top: 27.0233,
          left: 4,
          width: 93,
          height: 12.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a26-aplica-4',
          top: 40.4186,
          left: 4,
          width: 93,
          height: 17.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a26-aplica-5',
          top: 58.186,
          left: 4,
          width: 93,
          height: 5.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a26-aplica-6',
          top: 63.7674,
          left: 4,
          width: 93,
          height: 5.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a26-retine',
          top: 70,
          left: 4,
          width: 61.9575,
          height: 27.5349,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a26-vocabular',
          top: 75.5814,
          left: 67.0755,
          width: 30.3538,
          height: 21.8605,
          type: 'audio'
        }
      ],
      image: 'v1/p26.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a27-exerseaza',
          top: 5.1628,
          left: 4,
          width: 93,
          height: 18.1395,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a27-aplica',
          top: 23.7674,
          left: 4,
          width: 93,
          height: 23.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a27-vocabular',
          top: 48.1395,
          left: 4,
          width: 37.4292,
          height: 8,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a27-retine',
          top: 47.8605,
          left: 43.4906,
          width: 53.3491,
          height: 22.7907,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a27-portofoliu',
          top: 70.3721,
          left: 4,
          width: 93,
          height: 25.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a27-vocabular-sol',
          top: 56.3256,
          left: 4,
          width: 37.4292,
          height: 6.8837,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a27-vocabular-specie',
          top: 63.3023,
          left: 4,
          width: 37.4292,
          height: 6.0465,
          type: 'audio'
        }
      ],
      image: 'v1/p27.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v1-a26-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1, "Ce înțelegi prin ape curgătoare? Dar prin ape stătătoare?");
}
}, {id: 'art-g4v1-a26-aplica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"><em>… este cea mai mică apă curgătoare. Pâraiele nu sunt prea adânci și pot fi trecute cu piciorul. Prin adunarea apelor mai multor pâraie se formează o apă curgătoare mai mare numită …, care curge printr-o vale și se varsă într-un râu mai mare, într-un fluviu, într-un lac, într-o mare sau într-un ocean. În drumul lor, apele mai multor râuri se unesc și formează apa curgătoare cu lățimea și adâncimea cea mai mare, numită … . Fluviul se varsă într-o mare sau ocean.</em></div>");
}
}, 2, "Copiază pe caiet textul următor, în care sunt prezentate apele curgătoare, apoi citește-l cu atenție și completează spațiile punctate cu termenul corespunzător. Scrie în caiet ce înseamnă fiecare apă curgătoare.");
}
}, {id: 'art-g4v1-a26-aplica-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Numește apa curgătoare prezentată în imaginea <strong><em>a</em></strong>? De ce se văd pietrele ieșind din apă?</li><li>În imaginea <strong><em>b </em></strong>este prezentat un fluviu. Fluviul are o lățime mai mare sau mai mică decât un râu? Râul se varsă într-un fluviu sau fluviul se varsă într-un râu? Explică răspunsurile date.</li></ul><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p26_aplica_a.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p26_aplica_b.png");
buf.push("</div></div>");
}
}, 3, "Privește imaginile alăturate și răspunde următoarelor cerințe:");
}
}, {id: 'art-g4v1-a26-aplica-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"><em>… se formează în mici adâncituri prin adunarea apei din ploi, din topirea zăpezii sau din revărsarea râurilor. Când apa bălții seacă mai mult se poate forma …, care este o porțiune de pământ îmbibată cu multă apă. Cea mai adâncă și mai întinsă apă stătătoare, care se formează prin adunarea unei cantități mari de apă într-o adâncitură de pe suprafața pământului se numește … .</em></div>");
}
}, 4, "Copiază pe caiet textul următor, în care sunt prezentate apele stătătoare, apoi citește-l cu atenție și completează spațiile punctate cu termenul corespunzător. Scrie în caiet ce înseamnă fiecare apă stătătoare.");
}
}, {id: 'art-g4v1-a26-aplica-4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p26_aplica_c.png");
buf.push("</div></div>");
}
}, 5, "Descrie lacul prezentat în imaginea <strong><em>c</em></strong>. Lacul are o întindere mai mare sau mai mică decât balta? Dar adâncimea?");
}
}, {id: 'art-g4v1-a26-aplica-5'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](6, "Ce fel de ape se află în apropierea localității natale sau pe teritoriul său? Numește aceste ape. Ce importanță au?");
}
}, {id: 'art-g4v1-a26-aplica-6'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p26_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a26-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">La suprafața pământului se întâlnesc <strong>ape curgătoare </strong>și <strong>ape stătătoare</strong>. Apele curgătoare sunt apele care se scurg pe pantele munților și ale dealurilor și care străbat câmpiile. Sunt reprezentate de <strong>pâraie</strong>, <strong>râuri </strong>și <strong>fluvii</strong>. Pe suprafața pământului se întâlnesc și ape care nu curg. Ele se numesc ape stătătoare și s-au format prin adunarea apei provenite din ploi, din topirea zăpezilor sau din revărsarea râurilor, în adânciturile existente pe suprafața pământului. Apele stătătoare sunt <strong>mlaștina</strong>, <strong>balta </strong>și <strong>lacul</strong>. Pe hărți, apele curgătoare sunt reprezentate prin linii albastre, iar apele stătătoare printr-o pată de aceeași culoare. Toate apele care se găsesc într-un anumit spațiu alcătuiesc <strong>hidrografia </strong>acelui spațiu.</div>");
}
});
}
}, {id: 'art-g4v1-a26-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">izvor – </div>&nbsp; locul în care un firicel de apă iese la suprafața pământului și curge; locul de obârșie al unei ape curgătoare. Există și izvoare minerale ale căror ape sunt utilizate de om");
}
}, "v1/p26_vocabular");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p26_vocabular_1.jpg");
buf.push("<div class=\"center\">izvor natural </div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p26_vocabular_2.jpg");
buf.push("<div class=\"center\">izvor de apă minerală </div></div></div></div>");
}
}, {id: 'art-g4v1-a26-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a27-exerseazaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Identifică, în fiecare text, forma de relief și plantele specifice. Scrie-le pe caiet.</div><div class=\"indent\"><em>„Pe culmea dealului se-nalță falnic stejarul, la umbra căruia se odihnește uneori un iepure obosit. Este frate cu teiul, arțarul sau frasinul și împreună formează pădurile de foioase care îmbracă dealurile mai puțin semețe.“</em></div><br/><div class=\"row\"><div class=\"col-sm-6\"><em>„Pe câmpie, printre ierburile scunde,</em><br/><em>Mai apar ca niște pete,</em><br/><em>Frumoase flori mici, dar cochete.“</em></div><div class=\"col-sm-6\"><div class=\"indent\"><em>„Urcând pe munte, îți iese în cale pădurea de conifere, cu arborii ei zvelți și drepți. Toți au frunzele ca niște ace. Primul care te salută este bradul cel voinic.“</em></div></div></div>");
}
}, {id: 'art-g4v1-a27-exerseaza'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a27-aplicaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Discută cu colegii și numiți alte plante specifice pădurilor de conifere și pădurilor de foioase.</li><li>Realizează corespondența dintre textele de mai sus și imagini.</li></ul><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p27_aplica_1.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p27_aplica_2.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p27_aplica_3.png');
buf.push("</div></div><br/>");
}
}, {id: 'art-g4v1-a27-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">arbust –</div>&nbsp; plantă lemnoasă mai mică decât arborele");
}
}, "v1/p27_vocabular_1");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p27_vocabular_1_1.jpg");
buf.push("<div class=\"center\">măceș </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p27_vocabular_1_2.jpg");
buf.push("<div class=\"center\">porumbar</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p27_vocabular_1_3.png");
buf.push("<div class=\"center\">alun</div></div></div></div>");
}
}, {id: 'art-g4v1-a27-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">sol –  </div>&nbsp; stratul de la suprafața pământului în care plantele își înfig rădăcina și de unde își iau apa cu substanțele hrănitoare");
}
}, "v1/p27_vocabular_2");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p27_vocabular_2_1.jpg");
buf.push("<div class=\"center\">sol din regiunile  câmpie</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p27_vocabular_2_2.jpg");
buf.push("<div class=\"center\">sol din regiunile  deluroase</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p27_vocabular_2_3.jpg");
buf.push("<div class=\"center\">sol din zona de munte</div></div></div></div>");
}
}, {id: 'art-g4v1-a27-vocabular-sol', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">specie – </div>&nbsp; grup de plante sau animale cu trăsături și însușiri comune ");
}
}, "v1/p27_vocabular_3");
jade_mixins["img"]("img/v1/p27_vocabular_3.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a27-vocabular-specie', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-subtitle\"><div>Reține</div></div>");
}
}, {id: 'art-g4v1-a27-retine-ww'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține</div><div>Vegetația este reprezentată de toate plantele dintr-un anumit spațiu și este formată din arbori, arbuști și ierburi. Animalele sălbatice care trăiesc într-un anumit spațiu formează fauna acelui spațiu. În țara noastră, pentru a ocroti animalele și plantele rare, s-au declarat numeroase arii naturale protejate, de tipul rezervațiilor și al parcurilor naționale sau naturale. Există 14 parcuri naționale (inclusiv Delta Dunării).</div>");
}
}, "v1/p27_retine");
jade_mixins["img"]("img/v1/p27_retine.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a27-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Portofoliu</div></div>");
}
}, {id: 'art-g4v1-a27-portofoliuT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-blue-text\"><strong>A. </strong></div><span>Completează o <strong>fișă de observare </strong>a orizontului local, folosind observațiile făcute în timpul excursiilor, cu următoarele caracteristici:</span><ol class=\"art-g4\"><li>Forma de relief din regiunea în care se găsește localitatea natală. Notează: trăsături legate de înfățișare; înălțimea aproximativă; cum a influențat această formă de relief așezarea și dezvoltarea localității voastre. Identifică această formă de relief pe harta fizică a regiunii în care este situată localitatea natală și precizează denumirea ei și semnul convențional cu care este marcată.</li><li>Apele curgătoare și lacurile din regiune.</li><li>Vegetația și animalele sălbatice specifice.</li></ol><div class=\"art-g4-blue-text\"><strong>B. </strong></div>Caută în cărți sau reviste informații legate de plantele și animalele din orizontul local care sunt ocrotite prin lege sau care au dispărut. Informează-te și din alte surse (reviste de cultură generală, enciclopedii ilustrate, mass-media, internet) dacă în orizontul local există arii naturale protejate. Prezintă colegilor aceste informații.");
}
}, {id: 'art-g4v1-a27-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});