registerChapter({ chapter: "v2-ch02-p56-57", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Terra, o planetă a Sistemului Solar Planiglobul – imaginea Terrei');
jade_mixins["subtitle"]("Paginile 56 - 57");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a56-aminteste-ti',
          top: 18.8372,
          left: 5,
          width: 90,
          height: 4.2791,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a56-observa',
          top: 27.8605,
          left: 5,
          width: 90,
          height: 29.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a56-retine',
          top: 59.1163,
          left: 5,
          width: 45.4481,
          height: 26.6047,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a56-vocabular',
          top: 86.7442,
          left: 5,
          width: 46.2736,
          height: 9.9535,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a56-descopera',
          top: 62.9302,
          left: 51.3915,
          width: 43.6792,
          height: 33.7674,
          type: 'blank'
        }
      ],
      image: 'v2/p56.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a57-observa',
          top: 9.3488,
          left: 5,
          width: 90,
          height: 24.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a57-retine',
          top: 34.8372,
          left: 5,
          width: 90,
          height: 15.5349,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a57-aplica-ex-1',
          top: 55.7674,
          left: 5,
          width: 36,
          height: 29.5814,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a57-aplica-ex-2',
          top: 85.5349,
          left: 5,
          width: 90,
          height: 10.6977,
          type: 'blank'
        }
      ],
      image: 'v2/p57.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('16.', "Terra, o planetă a Sistemului Solar <br>Planiglobul – imaginea Terrei",'Terra – o planetă a Sistemului Solar');
}
}, {id: 'art-g4v2-a56-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Amintește-ți</div>");
}
}, {id: 'art-g4v2-a56-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">În clasa a II-a, la <em>Matematică și explorarea mediului </em>și acum, în clasa a IV-a, la <em>Științe</em>, ai aflat multe lucruri interesante despre Sistemul Solar. Ce corpuri alcătuiesc Sistemul Solar?</div>");
}
}, {id: 'art-g4v2-a56-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Observă</div>");
}
}, {id: 'art-g4v2-a56-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Imaginea marcată cu <strong>1 </strong>prezintă schematic Sistemul Solar. Analizează această imagine și răspunde următoarelor cerințe:</div>");
jade_mixins["art-g4-ex-v2-c9"](1, "Copiază pe caiet propozițiile următoare și scrie A („adevărat“) sau F („fals“) pentru fiecare enunț..");
buf.push("<div class=\"row\"><div class=\"col-sm-7\"><ul class=\"art-g4-v2-c9\"><li>Soarele este cel mai mare corp din Sistemul Solar.</li><li>Soarele este un corp ceresc cu lumină și căldură proprie.</li><li>Planetele primesc lumină și căldură de la Soare.</li><li>Soarele se rotește în jurul fiecărei planete.</li></ul>");
jade_mixins["art-g4-ex-v2-c9"](2, "Numește planetele Sistemului Solar. Numărând de la Soare, a câta planetă este Terra? Între ce planete este situată Terra?");
buf.push("</div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p56_foto_1.png");
buf.push("</div></div>");
jade_mixins["art-g4-ex-v2-c9"](3, "Cum se numește cea mai mare planetă din Sistemul Solar? Dar cea mai mică?");
jade_mixins["art-g4-ex-v2-c9"](4, "Care planetă primește cea mai redusă cantitate de lumină și de căldură? De ce?");
}
}, {id: 'art-g4v2-a56-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p56_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a56-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Planeta noastră, <strong>Terra</strong>, face parte din Sistemul Solar, fiind a treia planetă, ca distanţă, faţă de Soare.</div><div class=\"indent\">Sistemul Solar este alcătuit din <strong>Soare</strong>, <strong>planete</strong>, <strong>sateliți </strong>și alte corpuri cerești. Planetele sunt corpurile cerești care se rotesc, pe orbite proprii, în jurul Soarelui. <strong>Sateliții </strong>sunt corpurile cerești care se rotesc în jurul planetelor. Satelitul Pământului este <strong>Luna</strong>.</div><div class=\"indent\"> <strong>Soarele este steaua Sistemului Solar</strong>. Stele sunt corpuri cerești cu lumină și căldură proprie.</div>");
}
});
}
}, {id: 'art-g4v2-a56-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a56-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Imaginea <strong>2 </strong>prezintă Soarele, Pământul și Luna.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["art-g4-ex-v2-c9"](1, "Precizează cu ce literă este marcat fiecare dintre aceste corpuri cerești.");
jade_mixins["art-g4-ex-v2-c9"](2, "Citește enunțul următor și alege, din paranteză, termenul care exprimă realitatea observată în imagine:");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p56_foto_2.png");
buf.push("</div></div><div class=\"indent\"><em>Soarele pare de aceeași mărime cu Luna pentru că este situat la o distanță mult mai (mică, mare) de Pământ față de Lună.</em></div>");
}
}, {id: 'art-g4v2-a56-descopera'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> <strong>orbită </strong>– drumul pe care un corp ceresc îl parcurge în spațiul cosmic</div>");
}
}, 'v2/s2_p56_vocabular');
jade_mixins["img"]('img/v2/v2_p56_vocabular.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a56-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Observă</div>");
}
}, {id: 'art-g4v2-a57-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Din timpuri străvechi, oamenii au fost interesați să găsească anumite modalități de a reprezenta cât mai exact întreaga suprafață a Pământului. Astfel au apărut globul geografic și harta.</div><div class=\"indent\">Observă imaginile a și b. Așa arătau un glob geografic și o hartă a Terrei, cu multe sute de ani în urmă. Observă imaginile c și d. Așa arată globul geografic și harta cu întreaga suprafață a Terrei pe care le folosești tu astăzi.</div><ul class=\"art-g4-v2-c9\"><li>Care dintre aceste două moduri de reprezentare ale Terrei redă cel mai exact forma acesteia?</li><li>Cum se numește harta care redă în întregime suprafața Terrei?</li></ul><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p57_observa_a.png");
buf.push("</div><div class=\"col-sm-8\">");
jade_mixins["img"]("img/v2/v2_p57_observa_b.png");
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p57_observa_c.png");
buf.push("</div><div class=\"col-sm-8\">");
jade_mixins["img"]("img/v2/v2_p57_observa_d.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a57-observa'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Reprezentarea suprafeței planetei noastre se realizează cu ajutorul globului geografic și al hărții. </div>");
}
}, 'v2/s2_p57_retine');
jade_mixins["img"]('img/v2/v2_p57_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a57-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Aplică </div>");
}
}, {id: 'art-g4v2-a57-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9\"><li>Europa reprezintă unul din continentele Terrei.</li><li>Timișoara este un oraș al României.</li><li>Terra este o planetă din Sistemul Solar.</li><li>România este un stat european.</li><li>Daria locuiește în orașul Timișoara.</li><li>Sistemul Solar este alcătuit din Soare, planete, sateliți și alte corpuri cerești.</li></ol>");
}
}, 1, "Citește următoarele enunțuri. Ordonează enunțurile astfel încât să prezinți trecerea de la spațiul de locuire al Dariei, la Terra, spațiul de locuire al tuturor oamenilor și respectiv la locul Terrei în spațiul cosmic.");
}
}, {id: 'art-g4v2-a57-aplica-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p57_aplica_1.png");
buf.push("</div><div class=\"col-sm-7\">");
jade_mixins["img"]("img/v2/v2_p57_aplica_2.png");
buf.push("</div></div><br/><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p57_aplica_3.png");
buf.push("</div><div class=\"col-sm-8\">");
jade_mixins["img"]("img/v2/v2_p57_aplica_4.png");
buf.push("</div></div><br/><div class=\"row\"><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p57_aplica_5.png");
buf.push("</div><div class=\"col-sm-7\">");
jade_mixins["img"]("img/v2/v2_p57_aplica_6.png");
buf.push("</div></div>");
}
}, 2, "Ordonează imaginile și reprezentările alăturate, astfel încât să indice trecerea succesivă de la orizontul apropiat și local la planeta Terra, o planetă a Sistemului Solar.");
}
}, {id: 'art-g4v2-a57-aplica-ex-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});