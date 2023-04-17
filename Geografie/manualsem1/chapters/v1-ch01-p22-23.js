registerChapter({ chapter: "v1-ch01-p22-23", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Hărți ale orizontului local');
jade_mixins["subtitle"]('Paginile 22 - 23');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a22-observa',
          top: 14.8372,
          left: 5.3,
          width: 92,
          height: 35.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a22-descopera',
          top: 51.2093,
          left: 5.3,
          width: 92,
          height: 27.2558,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a22-vocabular',
          top: 79.0233,
          left: 4.1038,
          width: 30.4717,
          height: 19.0698,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a22-retine',
          top: 78.8372,
          left: 35.2358,
          width: 62.5472,
          height: 19.0698,
          type: 'audio'
        }
      ],
      image: 'v1/p22.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a23-retine',
          top: 4.9767,
          left: 5.3,
          width: 92,
          height: 27.5349,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a23-aplica',
          top: 33.2558,
          left: 5.3,
          width: 92,
          height: 16,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a23-exerseaza-1',
          top: 49.814,
          left: 5.5,
          width: 92,
          height: 26.9767,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a23-explica',
          top: 77.907,
          left: 5.5,
          width: 92,
          height: 18.9767,
          type: 'blank'
        }
      ],
      image: 'v1/p23.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-titlu"]('5.','Hărți ale orizontului local','Orizontul local');
}
}, {id: 'art-g4v1-a22-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a22-observa-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Mă numesc Daniel și locuiesc în orașul Timișoara. Împreună cu colegii, am făcut drumeții în împrejurimile localității mele. Iată și câteva fotografii.</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p22_observa_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p22_observa_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"].call({
block: function(){
buf.push(" ");
}
}, "img/v1/v1_p22_observa_3.png");
buf.push("</div></div>");
jade_mixins["art-g4-ex"](1,'Observă imaginile și alege titlul potrivit pentru fiecare: <em>localitatea Remetea Mare; Câmpia Timișului; râul Bega la Timișoara.</em>');
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"><em>În drumețiile făcute în jurul localității sale, Daniel a observat că în împrejurimi sunt mai multe … cu case frumoase. Privind în jur, de multe ori linia orizontului pare foarte departe, deoarece suprafața pământului este mai mult … cu relief de câmpie și doar pe alocuri apar dealuri. Prin orașul Timișoara trece râul numit … .</em></div>");
}
}, 2,'Copiază pe caiet textul următor și completează enunțurile astfel încât să prezinte corect realitatea observată în imagini:');
}
}, {id: 'art-g4v1-a22-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v1-a22-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Daniel ți-a pregătit acest desen pentru a afla mai multe informații despre localitățile pe care le-a vizitat în drumețiile sale prin împrejurimile orașului Timișoara.</div><div class=\"art-g4-img-60\">");
jade_mixins["img"]("img/v1/v1_p22_descopera.png");
buf.push("</div><ul class=\"art-g4\"><li>Care element îți indică ce reprezintă acest desen?</li><li>Ce parte a desenului îți arată simbolul folosit pentru reprezentarea localităților?</li><li>Identifică localitățile prezentate în fotografii. Identifică și celelalte localități din împrejurimile orașului Timișoara.</li><li>În ce parte a desenului este situat punctul cardinal nord? Ce element al desenului te ajută în orientare? Stabilește poziția localității Dumbrăvița față de orașul Timișoara.</li></ul>");
}
}, {id: 'art-g4v1-a22-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">județ – &nbsp; </div>&nbsp; unitate administrativ-teritorială tradițională pentru țara noastră, care cuprinde un spațiu cu mai multe localități care se gospodăresc împreună");
}
}, "v1/p22_vocabular");
jade_mixins["img"]("img/v1/p22_vocabular.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a22-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Reține</div></div>");
}
}, {id: 'art-g4v1-a22-retinew-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține </div><div>Orizontul local reprezintă spațiul din jurul localității natale. Acest spațiu are  anumite caracteristici naturale proprii (aspectul suprafeței terenului, apele, plantele și animalele sălbatice, solurile). El cuprinde mai multe localități de mărimi diferite, care se gospodăresc împreună și care sunt legate prin diferite căi de comunicație. De obicei, orizontul local este reprezentat de județul natal.</div>");
}
}, "v1/p22_retine");
jade_mixins["img"]("img/v1/p22_retine.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a22-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p23_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a23-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Desenul prin care sunt reprezentate, într-o formă micșorată și convențională, spații mai mari de pe suprafața Pământului sau chiar Pământul în întregime poartă numele de hartă. Harta este o reprezentare mai complexă decât planul și redă, în general, suprafețe mai mari decât acesta. La întocmirea hărții se respectă <strong>orientarea după punctele cardinale.</strong></div><div class=\"indent\">Pentru ca orice om de pe Pământ să poată citi informațiile de pe o hartă, aceasta conține:</div><div class=\"indent\"> <strong>Titlul </strong>– care ne indică ce spațiu și ce fenomen geografic sunt reprezentate pe hartă;</div><div class=\"indent\"> <strong>Scara </strong>– care ne precizează de câte ori au fost micșorate dimensiunile reale ale suprafeței pentru ca aceasta să poată fi reprezentată pe hartă (cu cât suprafețele sunt mai mari, cu atât ele sunt micșorate de mai multe ori); pe scurt, scara unei hărți îți spune cât reprezintă în realitate 1 cm de pe hartă.</div><div class=\"indent\"> <strong>Legenda </strong>– care cuprinde semnele convenționale folosite pe hartă, astfel încât orice persoană să poată înțelege ce semnificație au elementele (naturale sau create de om) marcate.</div><div class=\"indent\">Cartea care conține o colecție de mai multe hărți diferite se numește <strong><em>Atlas geografic.</em></strong></div>");
}
});
}
}, {id: 'art-g4v1-a23-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v1-a23-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Găsește, pe desenul lui Daniel, cuvântul <strong>scară</strong>. Scara este reprezentată în acest desen sub forma unei linii orizontale, împărțită în segmente egale, fiecare segment având lungimea de 1 cm. Numerele de deasupra indică faptul că 1 cm pe acest desen înseamnă, în realitate, o distanță de 3 km.</div><span>Răspunde la următoarele cerințe:</span>");
jade_mixins["art-g4-ex"](1, "Suprafețele și distanțele din realitate au fost mărite sau micșorate pentru a putea fi reprezentate?");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push(" ");
}
}, 2, "Numește localitățile situate la cea mai mică distanță de Timișoara.");
}
}, {id: 'art-g4v1-a23-aplica-webview'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Aplică </div><div>Găsește pe desen cuvântul scară. Scara este reprezentată în acest desen sub forma unei linii orizontale, împărțită, în manualul tău tipărit în segemente egale, fiecare segment având lungimea de 1 cm.</div><span>Cifrele de deasupra indică faptul că 1 cm pe acest desen înseamnă, în realitate, o distanță de 3 km.</span>");
}
}, "v1/p23_aplica");
buf.push("<div class=\"art-g4-img-80\">");
jade_mixins["img"]("img/v1/p23_aplica.png");
buf.push("</div><div class=\"art-g4-red-text\">Atenție </div>&nbsp; - în manualul digital scările grafice nu respectă dimensiunile din manualul tipărit. Ele sunt reprezentate orientativ!</div>");
}
}, {id: 'art-g4v1-a23-aplica', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a23-exerseaza-t'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a23-exerseaza-1Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](1, "Analizează harta, apoi scrie A („adevărat“) sau F („fals“) în dreptul fiecărui enunț:");
}
}, "v1/p23_exerseaza_01");
buf.push("<div class=\"row\">           <div class=\"col-xs-9\"><ul class=\"art-g4\"><li>Orașul Timișoara este situat în Câmpia Timișului.</li></ul></div><div class=\"col-xs-3 no-padding\">");
jade_mixins["yesno"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {answer: true, name:'art-g4v1-a23-exerseaza-1ex-a', yes: 'A', no: 'F'});
buf.push("</div><div class=\"col-xs-9\"><ul class=\"art-g4\"><li>Râul Timiș traversează orașul Timișoara.</li></ul></div><div class=\"col-xs-3 no-padding\">");
jade_mixins["yesno"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {answer: false, name:'art-g4v1-a23-exerseaza-1ex-b', yes: 'A', no: 'F'});
buf.push("</div><div class=\"col-xs-9\"><ul class=\"art-g4\"><li>Lacul Surduc este situat la vest de Timișoara.</li></ul></div><div class=\"col-xs-3 no-padding\">");
jade_mixins["yesno"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {answer: false, name:'art-g4v1-a23-exerseaza-1ex-c', yes: 'A', no: 'F'});
buf.push("</div><div class=\"col-xs-9\"><ul class=\"art-g4\"><li>La NE de Timișoara se întind Munții Lipovei.</li></ul></div><div class=\"col-xs-3 no-padding\">");
jade_mixins["yesno"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {answer: false, name:'art-g4v1-a23-exerseaza-1ex-d', yes: 'A', no: 'F'});
buf.push("</div><div class=\"col-xs-9\"><ul class=\"art-g4\"><li>Prin sudul regiunii reprezentate pe hartă curge râul Bârzava.</li></ul></div><div class=\"col-xs-3 no-padding\">");
jade_mixins["yesno"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {answer: true, name:'art-g4v1-a23-exerseaza-1ex-e', yes: 'A', no: 'F'});
buf.push("</div></div><div class=\"art-g4-img-60\">");
jade_mixins["img"]("img/v1/v1_p23_exerseaza.png");
buf.push("</div>");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a23-exerseaza-1ex-f", type: 'text', max: 10,regexp: '^(3|trei)$',size:'2', placeholder: '...'});
buf.push("</div> cm</strong>");
}
}, 2, "Ce informații oferă scara acestei hărți? De la Timișoara până la lacul Surduc este o distanță, în linie dreaptă, de circa 75 km. Câți centimetri înseamnă, pe hartă, această distanță?");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a23-exerseaza-1ex'});
}
}, {id: 'art-g4v1-a23-exerseaza-1', class:'art-g4-interactiv'});
jade_mixins["atom"]({id: 'art-g4v1-a23-exerseaza-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Explică </div></div>");
}
}, {id: 'art-g4v1-a23-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Explică enunțul: <em>Planul și harta reprezintă două mijloace de cunoaștere.</em></li><li>Compară cele două hărți care prezintă localitățile din împrejurimile orașului Timișoara. Pe care dintre cele două hărți apar marcate mai multe localități? Explică de ce.</li></ul><div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/v1_p23_explica.png");
buf.push("</div><br/>");
}
}, {id: 'art-g4v1-a23-explica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});