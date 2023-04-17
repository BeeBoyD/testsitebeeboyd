registerChapter({ chapter: "v1-ch01-p40-41", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]('Paginile 40 - 41');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a40-chenar',
          top: 5.4419,
          left: 5,
          width: 90,
          height: 26.3256,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a40-recapitulare-poze',
          top: 40.5116,
          left: 66.4858,
          width: 27.9953,
          height: 56.186,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a40-ex1',
          top: 45.814,
          left: 5,
          width: 61,
          height: 4.093,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a40-ex2',
          top: 49.6279,
          left: 5,
          width: 61,
          height: 3.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a40-ex3',
          top: 53.1628,
          left: 5,
          width: 61,
          height: 4.4651,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a40-ex4',
          top: 58.5581,
          left: 5,
          width: 61,
          height: 15.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a40-ex5',
          top: 75.2093,
          left: 5,
          width: 61,
          height: 21.3953,
          type: 'blank'
        }
      ],
      image: 'v1/p40.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a41-ex1',
          top: 14.6512,
          left: 5,
          width: 90,
          height: 24.7442,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a41-ex2',
          top: 40.4186,
          left: 5,
          width: 90,
          height: 24,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a41-ex3',
          top: 65.2558,
          left: 5,
          width: 90,
          height: 17.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a41-grila-autoevaluare',
          top: 84.2326,
          left: 5,
          width: 90,
          height: 12.8372,
          type: 'blank'
        }
      ],
      image: 'v1/p41.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<br/><div class=\"art-g4-chenar\"><div class=\"row\"><div class=\"col-xs-6 col-xs-offset-3\">");
jade_mixins["img"]('img/v1/v1_p40_deschidere.png');
buf.push("</div><div class=\"col-sm-12\"><div class=\"indent\">Împreună am aflat că lumea înconjurătoare înseamnă mai mult decât <span class=\"g4-myriadb\">orizontul apropiat</span> și <span class=\"g4-myriadb\">orizontul local</span>. Ea se continuă și dincolo de localitatea noastră, de <span class=\"g4-myriadb\">regiunea </span> din care aceasta face parte, până la întinderea țării și mult mai departe.</div><div class=\"indent\">Formele de relief, râurile sau lacurile, plantele, animalele, solul, precum și însușirile legate de temperatura aerului, precipitații, vânturi reprezintă <span class=\"g4-myriadb\">elementele naturale </span> care caracterizează un anumit spațiu (localitate, regiune sau țară) și <span class=\"g4-myriadb\">formează cadrul său natural</span>.</div><div class=\"indent\">Dar o localitate, o regiune sau o țară se caracterizează și prin aspecte legate de așezările omenești (tip, mărime, aspect), de <span class=\"g4-myriadb\">populație </span> (număr, grupe de vârstă), de <span class=\"g4-myriadb\">activitățile oamenilor</span>. Împreună, elementele naturale și elementele create sau introduse de om definesc <span class=\"g4-myriadb\">geografia </span> acelui spațiu, respectiv <span class=\"g4-myriadb\">geografia orizontului local</span>, <span class=\"g4-myriadb\">geografia regiunii </span> sau <span class=\"g4-myriadb\"> a țării</span>.</div></div></div></div>");
}
}, {id: 'art-g4v1-a40-chenar'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Recapitulare</div><div class=\"indent\">Alina locuiește în cartierul Rogerius din orașul Oradea. Observă desenele alăturate și răspunde următoarelor cerințe:</div><div class=\"row\"><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p40_ex4_A.png');
buf.push("</div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p40_ex4_B.png');
buf.push("</div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p40_ex4_C.png');
buf.push("</div></div><br/>");
}
}, {id: 'art-g4v1-a40-recapitulare-poze'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1,'Cu ce literă este marcat desenul care reprezintă planul simplificat al cartierului Rogerius? Ce reprezintă acest cartier pentru Alina?');
}
}, {id: 'art-g4v1-a40-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2,'Cu ce literă este marcat desenul care prezintă orașul Oradea?');
}
}, {id: 'art-g4v1-a40-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](3,'Cu ce literă este marcat desenul care prezintă regiunea în care este situat orizontul local al Alinei?');
}
}, {id: 'art-g4v1-a40-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-5\">");
jade_mixins["img"]('img/v1/p40ex4a.jpg');
buf.push("</div><div class=\"col-xs-1\"></div><div class=\"col-xs-5\">");
jade_mixins["img"]('img/v1/p40ex4b.jpg');
buf.push("</div></div><div class=\"indent\">Alege varianta care indică asocierea corectă dintre desen și scara la care a fost realizat:</div><ol class=\"art-g4-lowercase row\"><li class=\"col-xs-6\">A - 1 și B - 2;</li><li class=\"col-xs-6\">A - 2 și B - 1.</li></ol><div class=\"indent\">Care dintre cele trei desene (A, B, C) reprezintă o hartă? Ce diferențe sunt între un plan și o hartă? Dar asemănări?</div>");
}
}, 4,'Desenele marcate cu literele A și B au fost realizate la scările:');
}
}, {id: 'art-g4v1-a40-ex4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](5,'Mai jos sunt prezentate două imagini din regiunea în care este situat orizontul local al Alinei. Observă imaginile și alege titlul potrivit pentru fiecare: <em>Culturi agricole în Câmpia Ierului; Orașul Oradea; Peisaj din Munții Codru-Moma.</em>');
buf.push("<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p40_ex5_1.png');
buf.push("</div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p40_ex5_2.png');
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a40-ex5'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Autoevaluare</div>");
}
}, {id: 'art-g4v1-a41-autoevaluare-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-uppercase\"><li>Scrie, pe caiet, ce mișcare a Pământului este sugerată de imaginea 1.</li><li>Scrie, pe caiet, varianta de răspuns care indică asocierea corectă dintre imaginile 2 și 3 și cele două localități marcate pe glob prin punctele X și Y.</li></ol><ol class=\"art-g4-lowercase row\"><li class=\"col-xs-6 indent\">2 - X și 3 - Y; </li><li class=\"col-xs-6 indent\">2 - Y și 3 - X.</li></ol><ol class=\"art-g4-uppercase\"><li style=\"visibility:hidden;height:0;\"></li><li style=\"visibility:hidden;height:0;\"></li><li>Ciclul zi-noapte aduce schimbări ale temperaturii aerului. Scrie, pe caiet, varianta de răspuns care indică asocierea corectă dintre localitățile marcate cu punctele X și Y și temperaturile indicate de termometrele alăturate, marcate cu a și b.</li></ol><ol class=\"art-g4-lowercase row\"><li class=\"col-xs-6 indent\">X - a și Y - b; </li><li class=\"col-xs-6 indent\">X - b și Y - a.</li></ol><br/><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p41_ex1_1.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p41_ex1_2.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p41_ex1_3.png');
buf.push("</div></div><div class=\"row\"><div class=\"col-xs-6 termo\">");
jade_mixins["img"]('img/v1/v1_p41_ex1_a.png');
buf.push("</div><div class=\"col-xs-6 termo\">");
jade_mixins["img"]('img/v1/v1_p41_ex1_b.png');
buf.push("</div></div>");
}
}, 1,'Punctele X și Y din imaginea 1 reprezintă localitățile în care se află copiii din imaginile 2 și 3.');
}
}, {id: 'art-g4v1-a41-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p41_ex2_a.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p41_ex2_b.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p41_ex2_c.png');
buf.push("</div></div><div class=\"row\"><div class=\"col-xs-4 termo\">");
jade_mixins["img"]('img/v1/v1_p41_ex2_1.png');
buf.push("</div><div class=\"col-xs-4 termo\">");
jade_mixins["img"]('img/v1/v1_p41_ex2_2.png');
buf.push("</div><div class=\"col-xs-4 termo\">");
jade_mixins["img"]('img/v1/v1_p41_ex2_3.png');
buf.push("</div></div><br/><ol class=\"art-g4-uppercase\"><li>Scrie, pe caiet, ce mișcare a Pământului are ca rezultat formarea anotimpurilor.</li><li>Anotimpul care nu este reprezentat în imagine este primăvara. Scrie, pe caiet, ce anotimp indică fiecare imagine.</li><li>Scrie, pe caiet, varianta de răspuns care indică asocierea corectă dintre anotimpuri și temperaturile indicate de termometrele alăturate, marcate cu 1, 2 și 3.</li></ol><ol class=\"art-g4-lowercase row\"><li class=\"col-sm-4 indent\">a - 1; b - 2; c - 3;</li><li class=\"col-sm-4 indent\">a - 2; b - 3; c - 1; </li><li class=\"col-sm-4 indent\">a - 3; b - 1; c - 2.</li></ol>");
}
}, 2,'Desenele de mai jos, marcate cu literele a, b și c prezintă același spațiu în anotimpuri diferite, iar cele marcate cu 1, 2 și 3 temperaturile înregistrate în aceste anotimpuri.');
}
}, {id: 'art-g4v1-a41-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>Apele care se scurg pe pantele munților și ale dealurilor și care străbat câmpiile se numesc … .</li><li>Munții cu înălțime mai mare sunt marcați pe hartă printr-o culoare mai … .</li><li>Semnele convenționale folosite pentru reprezentarea pe hartă a elementelor naturale și a celor introduse de om sunt notate în … hărții.</li><li>Spațiul pe care putem să-l cuprindem cu privirea până la linia orizontului alcătuiește … .</li><li>Așezarea de dimensiuni mai mari și cu o populație mai numeroasă se numește … .</li><li>Punctele … ne sunt de folos pentru a ne orienta și a ști în ce direcție să ne deplasăm ca să ajungem în locul dorit.</li></ol>");
}
}, 3,'Copiază, pe caiet, enunțurile următoare și completează-le cu răspunsurile corecte:');
}
}, {id: 'art-g4v1-a41-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"center\"> <div class=\"art-g4-blue-text text-uppercase\">Grilă de autoevaluare</div></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare\"><tr><th></th><th>Itemul 1</th><th>Itemul 2</th><th>Itemul 3</th></tr><tr><td>Foarte bine</td><td>3 răspunsuri corecte </td><td>3 răspunsuri corecte </td><td>5-6 răspunsuri corecte </td></tr><tr><td>Bine</td><td>două răspunsuri corecte </td><td>două răspunsuri corecte </td><td>3-4 răspunsuri corecte </td></tr><tr><td>Suficient </td><td>un răspuns corect </td><td>un răspuns corect </td><td>două răspunsuri corecte</td></tr></table></div>");
}
}, {id: 'art-g4v1-a41-grila-autoevaluare'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});