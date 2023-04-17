registerChapter({ chapter: "v1-ch01-p08-09", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Clasa, școala, cartierul, localitatea');
jade_mixins["subtitle"]('Paginile 8 - 9');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a08-aminteste-ti',
          top: 19.0233,
          left: 5.5189,
          width: 91.7925,
          height: 6.6977,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a08-aplica',
          top: 62.2791,
          left: 5.5189,
          width: 91.7925,
          height: 10.0465,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a08-vocabular',
          top: 73.4419,
          left: 3.868,
          width: 36.25,
          height: 10.6046,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a08-retine',
          top: 73.5349,
          left: 40.6604,
          width: 52.7594,
          height: 24.5581,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a08-observa',
          top: 30,
          left: 5.5189,
          width: 91.7925,
          height: 27.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a08-vocabular-1',
          top: 84.1395,
          left: 3.868,
          width: 36.25,
          height: 12.2791,
          type: 'audio'
        }
      ],
      image: 'v1/p08.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a09-descopera',
          top: 5.2558,
          left: 5.5189,
          width: 91.7925,
          height: 34.8837,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a09-retine',
          top: 40.6977,
          left: 5.5189,
          width: 47.0991,
          height: 30.7907,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a09-aplica-1',
          top: 45.0698,
          left: 53.5142,
          width: 41.2028,
          height: 16,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a09-explica',
          top: 65.4419,
          left: 53.3962,
          width: 41.4387,
          height: 8,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a09-exerseaza',
          top: 74,
          left: 5.5189,
          width: 91.7925,
          height: 24,
          type: 'blank'
        }
      ],
      image: 'v1/p09.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('1.', 'Clasa, școala, cartierul, localitatea','Orizontul apropiat');
}
}, {id: 'art-g4v1-a08-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Amintește-ți </div></div>");
}
}, {id: 'art-g4v1-a08-aminteste-ti-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">O parte din activitatea ta zilnică se desfășoară la școală, în sala de clasă. Școala este locul în care tu descoperi și înveți multe lucruri noi și folositoare. O altă parte din zi o petreci acasă. Zilnic, te deplasezi de acasă la școală, pe un drum pe care îl cunoști.</div>");
}
}, {id: 'art-g4v1-a08-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă</div></div>");
}
}, {id: 'art-g4v1-a08-observa-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Privește imaginile de mai jos.</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p8_observa_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p8_observa_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p8_observa_3.png");
buf.push("</div></div>");
jade_mixins["art-g4-ex"](1,'Ce reprezintă primele două imagini? Numește obiectele care apar în aceste imagini și precizează la ce folosește fiecare dintre acestea. Care dintre aceste obiecte sunt prezente și în clasa ta?');
jade_mixins["art-g4-ex"](2,'Ce reprezintă clădirea din imaginea cu numărul 3? Ce legătură este între cele trei imagini?');
}
}, {id: 'art-g4v1-a08-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a08-aplica-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Răspunde la următoarele cerințe:</div><ol class=\"art-g4-lowercase\"><li>Câți elevi sunt în clasa ta? Cum se numește colegul tău de bancă?</li><li>Cum se numește școala unde înveți? Câte săli de clasă sunt la etajul la care înveți?</li><li>Numește cinci obiecte pe care le folosești zilnic, aflate în clasa sau în școala ta. Numește cinci persoane pe care le vezi sau cu care vorbești zilnic.</li></ol><br/>");
}
}, {id: 'art-g4v1-a08-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">sat – &nbsp; </div>localitate de dimensiuni mici, a cărei populație se ocupă în principal cu agricultura");
}
}, 'v1/p8_vocabular_sat');
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p8_vocabular_sat_1.jpg");
buf.push("<div class=\"center\">sat de câmpie </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p8_vocabular_sat_2.jpg");
buf.push("<div class=\"center\">sat de deal </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p8_vocabular_sat_3.jpg");
buf.push("<div class=\"center\">sat de munte</div></div></div></div>");
}
}, {id: 'art-g4v1-a08-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">oraș – &nbsp; </div>localitate de dimensiuni mai mari, a cărei populație, mai numeroasă decât cea a satelor, se ocupă cu activități din domeniul industriei, al comerțului, al sănătății, al culturii etc.");
}
}, 'v1/p8_vocabular_oras');
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p8_vocabular_sibiu.jpg");
buf.push("<div class=\"center\">Sibiu </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p8_vocabular_reghin.jpg");
buf.push("<div class=\"center\">Reghin</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p8_vocabular_focsani.jpg");
buf.push("<div class=\"center\">Focșani</div></div></div></div>");
}
}, {id: 'art-g4v1-a08-vocabular-1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p8_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a08-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<br/><div class=\"indent\">Spațiul pe care îl străbați în fiecare zi, de acasă până la școala unde înveți, care cuprinde mai multe străzi, case, blocuri sau clădiri în care oamenii locuiesc și muncesc, formează un <strong>cartier </strong>și are un nume propriu.</div><div class=\"indent\"> <strong>Cartierul </strong>reprezintă o diviziune sau o parte a unei localități.</div><div class=\"indent\"> <strong> Localitatea </strong>este o așezare omenească, adică un spațiu delimitat de natura înconjurătoare, în care oamenii trăiesc și desfășoară diferite activități.</div>");
}
});
}
}, {id: 'art-g4v1-a08-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v1-a09-descopera-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a09-descoperaInteractiv\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Bianca și Gabriela locuiesc în aceeași localitate, dar în cartiere diferite. Imaginile de mai jos prezintă localitatea și cartierele celor două prietene.</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p9_descopera_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p9_descopera_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p9_descopera_3.png");
buf.push("</div></div><div class=\"indent\">Completează spațiile libere din propozițiile de mai jos cu numărul corespunzător imaginii.</div>");
}
}, 'v1/p9_descopera');
jade_mixins["validator"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Bianca locuiește într-un bloc din cartierul Traian. Imaginea numărul <div class=\"inline-block\">");
jade_mixins["pickone"](3, ['1','2','3'], { name: 'art-g4v1-a09-descoper-ex1',  ignoreAvatar: false,placement:'top'});
buf.push("</div> prezintă cartierul Biancăi.</li><li>Gabriela învață la altă școală decât Bianca, pentru că locuiește în cartierul Griviței. Este un cartier frumos, cu multe case. Imaginea cu numărul <div class=\"inline-block\">");
jade_mixins["pickone"](1, ['1','2','3'], { name: 'art-g4v1-a09-descoper-ex2',  ignoreAvatar: false,placement:'top'});
buf.push("</div> prezintă cartierul Gabrielei.</li><li>Ambele cartiere fac parte dintr-o localitate. Imaginea numărul <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['1','2','3'], { name: 'art-g4v1-a09-descoper-ex3',  ignoreAvatar: false,placement:'top'});
buf.push("</div> prezintă localitatea în care trăiesc cele două prietene.</li></ul><div class=\"is-done-box\"></div>");
}
});
buf.push("<br/></div>");
}
}, {name: 'art-g4v1-a09-descoper-ex'});
}
}, {id: 'art-g4v1-a09-descopera', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p9_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a09-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Spațiul din jurul tău, în care îți desfășori existența zilnică, reprezintă <strong>orizontul apropiat </strong>. Acesta cuprinde locuința, școala, drumul de acasă până la școală, precum și locurile prin care treci pentru a parcurge acest drum.</div><div class=\"indent\">Acest spațiu diferă ca mărime, în funcție de dimensiunile localității. Dacă trăiești într-o <strong>localitate rurală </strong>(adică într-un <strong>sat</strong>), de dimensiuni mai mici, orizontul apropiat este reprezentat de întreaga localitate. Dacă trăiești într-o <strong>localitate urbană </strong>(adică într-un <strong>oraș</strong>), care are dimensiuni mai mari, atunci orizontul apropiat este reprezentat de cartierul în care se află locuința și școala ta.</div>");
}
});
}
}, {id: 'art-g4v1-a09-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a09-aplica-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Răspunde următoarelor cerințe:</div>");
jade_mixins["art-g4-ex"](1,'Cum se numește cartierul în care locuiești? Precizează două trăsături specifice cartierului tău.');
jade_mixins["art-g4-ex"](2,'Numește locurile (clădirile) pe lângă care treci zilnic în drumul tău spre școală.');
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push(" ");
}
}, 3,'Cum se numește localitatea în care trăiești?');
jade_mixins["art-g4-ex"](4,'Formulează propoziții cu fiecare dintre cuvintele: <em>clasă, școală, cartier, localitate.</em>');
}
}, {id: 'art-g4v1-a09-aplica-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Explică</div></div>");
}
}, {id: 'art-g4v1-a09-explicaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">În fiecare vacanță Bogdan merge la bunicii săi, care trăiesc într-o altă localitate. Acolo toată lumea se cunoaște și se salută.</div><div class=\"indent\"> În ce fel de localitate trăiesc bunicii lui Bogdan?</div>");
}
}, {id: 'art-g4v1-a09-explica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a09-exerseaz-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Bogdan locuiește într-un oraș mare. Imaginea alăturată reprezintă spațiul în care Bogdan își desfășoară activitățile sale zilnice. Răspunde la următoarele cerințe:</div><div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/v1_p9_exerseaza.png");
buf.push("</div>");
jade_mixins["art-g4-ex"](1,'Cum se numește spațiul care reprezintă pentru Bogdan orizontul său apropiat?');
jade_mixins["art-g4-ex"](2,'Numește principalele clădiri situate în orizontul său apropiat. Precizează ce activități desfășoară oamenii care lucrează în aceste clădiri.');
jade_mixins["art-g4-ex"](3,'Stabilește traseul pe care îl parcurge zilnic Bogdan, de acasă până la școală. Descrie acest traseu.');
}
}, {id: 'art-g4v1-a09-exerseaza'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});