registerChapter({ chapter: "v1-ch01-p12-13", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Planul clasei, al școlii, al locuinței, al cartierului și al localității');
jade_mixins["subtitle"]('Paginile 12 - 13');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a12-observa-1',
          top: 19.1163,
          left: 5,
          width: 90,
          height: 23.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a12-observa-2',
          top: 43.2093,
          left: 5,
          width: 90,
          height: 3.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a12-descopera1',
          top: 51.8605,
          left: 5,
          width: 90,
          height: 11.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a12-descopera2',
          top: 64.3256,
          left: 5,
          width: 90,
          height: 7.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a12-descopera3',
          top: 71.9535,
          left: 5,
          width: 90,
          height: 6.9767,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a12-retine',
          top: 79.9535,
          left: 5,
          width: 90,
          height: 17.5814,
          type: 'video'
        }
      ],
      image: 'v1/p12.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a13-observa',
          top: 9.7209,
          left: 5,
          width: 49.5,
          height: 44.3721,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a13-activitate-practica',
          top: 5.5349,
          left: 55.1651,
          width: 44.8585,
          height: 48.5581,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a13-descopera-ex1',
          top: 60.7907,
          left: 7.5,
          width: 57,
          height: 5.6,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a13-descopera-ex2',
          top: 66.7442,
          left: 7.5,
          width: 57,
          height: 3.2558,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a13-descopera-ex3',
          top: 70.2791,
          left: 7.5,
          width: 57,
          height: 3.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a13-descopera-ex4',
          top: 73.907,
          left: 7.5,
          width: 57,
          height: 3.814,
          type: 'blank'
        }
      ],
      image: 'v1/p13.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('3.','Planul clasei, al școlii, al locuinței,<br>al cartierului și al localității','Orizontul apropiat');
}
}, {id: 'art-g4v1-a12-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a12-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div>Daria este elevă în clasa a IV-a la Școala Gimnazială ,,Ion Creangă“.</div>");
jade_mixins["art-g4-ex"](1, "Observă imaginile de mai jos, apoi copiază pe caiet propozițiile următoare și scrie A („adevărat“) sau F („fals“) pentru fiecare enunț. Argumentează răspunsurile.");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p12_observa_A.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p12_observa_B.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p12_observa_C.png");
buf.push("</div><ul class=\"art-g4\"><li>Imaginea A reprezintă locuința Dariei.</li><li>Imaginea A reprezintă școala unde învață Daria.</li><li>Imaginile B și C reprezintă două săli de clasă din școala ,,Ion Creangă“.</li><li>Imaginile B și C reprezintă sala de clasă a Dariei, observată din poziții diferite.</li></ul></div>");
}
}, {id: 'art-g4v1-a12-observa-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2, "Compară imaginea A cu imaginea B. Pentru care dintre imagini dimensiunile reale ale elementului reprezentat au fost micșorate de mai multe ori?");
}
}, {id: 'art-g4v1-a12-observa-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă  </div></div>");
}
}, {id: 'art-g4v1-a12-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Daria a desenat sala de clasă, cu bănci, scaune și toate obiectele din jurul său. Desenul ei poartă numele de <strong>plan</strong>. Pentru a reprezenta pereții, ferestrele, ușa și obiectele din clasă a folosit diferite figuri geometrice simbolice.</div>");
jade_mixins["img"]("img/v1/v1_p12_descopera.png");
jade_mixins["art-g4-ex"](1, "Ce simbol a folosit Daria pentru a marca pe desen fiecare dintre obiectele alăturate?");
}
}, {id: 'art-g4v1-a12-descopera1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2, "Numește celelalte obiecte marcate pe planul clasei și precizează pentru fiecare dintre acestea simbolul utilizat. Analizează forma, dimensiunea și culoarea simbolurilor folosite. Există o legătură între dimensiunea reală a obiectelor și mărimea simbolurilor utilizate? Dar între forma și culoarea obiectelor și forma și culoarea simbolurilor?");
}
}, {id: 'art-g4v1-a12-descopera2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>În clasa Dariei învață în total (16, 32) elevi.</li><li>Când Daria stă în bancă, cu fața spre tablă, razele soarelui se joacă vesele pe obrazul ei (stâng, drept).</li><li>Tabla se află pe peretele din (fața, spatele) clasei.</li></ol>");
}
}, 3, "Completează fiecare enunț selectând răspunsul corect dintre cuvintele aflate în paranteză:");
}
}, {id: 'art-g4v1-a12-descopera3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p12_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a12-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\"> <strong>Planul </strong>este un desen care reprezintă porțiuni din orizontul apropiat (clasa, școala, locuința, cartierul, localitatea) cu principalele elemente care le caracterizează (obiecte, clădiri, străzi, parcuri etc.) redate într-o formă <strong>micșorată </strong>și <strong>convențională</strong>.</div><div class=\"indent\"> Micșorarea se realizează în funcție de dimensiunile (mărimea) spațiului și ale elementelor pentru care se întocmește planul. Cu cât spațiul și elementele sale sunt mai mari, cu atât dimensiunile lor se micșorează de mai multe ori.</div>");
}
});
}
}, {id: 'art-g4v1-a12-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Observă</div><div class=\"indent\">Acesta este planul unei școli. Observă desenul schematic al școlii și asociază fiecare încăpere din desen cu transpunerea sa în plan. Pentru a te orienta mai ușor, identifică sălile de clasă, numerotate în plan cu cifra 1, apoi și celelalte săli marcate în legendă.</div>");
}
}, "v1/s1_p13_observa");
jade_mixins["img"]("img/v1/p13_observa_jos.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a13-observa', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Măsoară lungimea fiecărui perete al clasei tale, lățimea ușii, a ferestrelor și a distanțelor dintre ele. Măsoară lungimea și lățimea obiectelor semnificative din clasă, mai mari ca dimensiune.</li><li>Micșorează de 10 ori dimensiunile măsurate și întocmește planul clasei tale, utilizând simbolurile Dariei. Marchează cu semnul „X“ poziția ta în bancă.</li><li>Schimbă caietul cu colegul de bancă. Planul clasei întocmit de colegul tău este identic cu planul întocmit de tine? Stabiliți împreună și alte semne convenționale pentru obiectele din clasa voastră; notați-le separat, într-o nouă legendă.</li><li>Vizitează școala ta și reține câte încăperi are, forma acestora și cum sunt ele situate unele în raport de celelalte. Realizează planul școlii tale, folosind legenda întocmită de Daria. Marchează cu semnul „X“ poziția clasei tale.</li><li>Compară planul școlii tale cu planul școlii unde învață Daria. Stabilește asemănări între cele două școli.</li></ul>");
}
}, 'Activitate practică');
}
}, {id: 'art-g4v1-a13-activitate-practica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă  </div></div>");
}
}, {id: 'art-g4v1-a13-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Aceasta este locuința Dariei. Analizează imaginile și alege varianta corespunzătoare răspunsului corect:</li></ul>");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>baie, bucătărie, camera de zi, două dormitoare;</li><li>baie, bucătărie, camera de zi, hol, un dormitor.</li></ol>");
}
}, 1, "Locuința Dariei este compusă din:");
}
}, {id: 'art-g4v1-a13-descopera-ex1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase row\"><li class=\"col-sm-6 no-padding-left\">diferite; </li><li class=\"col-sm-6 no-padding-left\">egale.</li></ol>");
}
}, 2, "Baia și bucătăria au dimensiuni:");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p13_descopera_1.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a13-descopera-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase row\"><li class=\"col-sm-6 no-padding-left\"> bucătăria și baia; </li><li class=\"col-sm-6 no-padding-left\"> camera de zi și bucătăria.</li></ol>");
}
}, 3, "Au un perete comun:");
buf.push("<ul class=\"art-g4\"><li>Identifică încăperile ce formează locuința Dariei, marcate, pe planul locuinței cu literele <em>a</em>, <em>b</em>, <em>c</em>, <em>d</em> și <em>e</em>.</li></ul>");
}
}, {id: 'art-g4v1-a13-descopera-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p13_descopera_2.png");
buf.push("</div><div class=\"col-sm-4\"><div class=\"art-g4-img-80\">");
jade_mixins["img"]("img/v1/v1_p13_descopera_3.png");
buf.push("</div></div><div class=\"col-sm-4\"><div class=\"art-g4-img-80\">");
jade_mixins["img"]("img/v1/v1_p13_descopera_4.png");
buf.push("</div></div></div>");
}
}, {id: 'art-g4v1-a13-descopera-ex4'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});