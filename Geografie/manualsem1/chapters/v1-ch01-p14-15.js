registerChapter({ chapter: "v1-ch01-p14-15", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Planul clasei, al școlii, al locuinței, al cartierului și al localității');
jade_mixins["subtitle"]('Paginile 14 - 15');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a14-exerseaza',
          top: 5.3488,
          left: 5,
          width: 90,
          height: 29.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a14-retine',
          top: 37.0698,
          left: 6.8632,
          width: 51.8632,
          height: 20,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a14-vocabular',
          top: 37.0698,
          left: 59.4104,
          width: 38.3726,
          height: 19.907,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a14-observa',
          top: 57.3488,
          left: 5,
          width: 90,
          height: 38.8837,
          type: 'blank'
        }
      ],
      image: 'v1/p14.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a15-explica',
          top: 4.7907,
          left: 5,
          width: 90,
          height: 20,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a15-proiect',
          top: 25.4419,
          left: 5,
          width: 90,
          height: 71.1628,
          type: 'blank'
        }
      ],
      image: 'v1/p15.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează </div></div>");
}
}, {id: 'art-g4v1-a14-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Descoperă care dintre cele două planuri de mai jos aparține locuinței din imaginea alăturată (A). Desenează pe caiet planul corect al locuinței.</div><ul class=\"art-g4\"><li>Ce formă au încăperile?</li><li>Când intri în locuință, în ce parte vezi ușa de la bucătărie?</li></ul><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p14_exerseaza_A.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p14_exerseaza_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p14_exerseaza_2.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a14-exerseaza'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține </div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Spațiul și elementele sale specifice sunt reprezentate în plan prin simboluri numite <strong>semne convenționale</strong>. Acestea pot fi simboluri speciale, linii sau figuri geometrice, culori etc. Semnele convenționale folosite la desenarea planului alcătuiesc <strong>legenda planului</strong>. Orice plan este însoțit de legendă și are un titlu! </div><div class=\"indent\">În planul Cartierului Cetate din Timișoara, de exemplu, străzile sunt simbolizate cu linii de culoare galbenă, clădirile importante sunt marcate prin forme geometrice de diferite culori, în timp ce parcurile și spațiile verzi din oraș sunt reprezentate în plan prin culoarea verde. Pentru a ușura „citirea” planului, sunt marcate și o serie de denumiri ale străzilor, ale clădirilor sau ale altor spații.</div>");
}
}, 'v1/s1_p14_retine');
jade_mixins["img"]("img/v1/p14_retine_jos.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a14-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular </div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"terms\">semne convenționale – &nbsp; </div>simboluri folosite pentru a marca pe planuri sau pe hărți diferite elemente naturale sau elemente create de om (obiecte din jurul nostru, străzi, clădiri, parcuri, căi ferate etc.)<br/><span>Iată câteva dintre semnele convenționale pe care le vei întâlni marcate pe planurile și pe hărțile din manualul tău de geografie:</span>");
}
}, "v1/s1_p14_vocabular");
jade_mixins["img"]("img/v1/p14_vocabular_jos.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a14-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a14-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Daria locuiește în cartierul Cetate din localitatea Timișoara. Acesta este planul unei porțiuni din cartierul său.</div><ul class=\"art-g4\"><li>Identifică locuința Dariei, care este marcată, pe plan, cu cifra 1.</li><li>Identifică școala unde învață Daria, știind că este situată pe strada Gheorghe Lazăr. Cu ce cifră este marcată pe plan?</li><li>Identifică cele mai importante clădiri din cartierul Cetate, știind că cifrele marcate pe plan indică:<div>3 - farmacia; 4 - spitalul; 5 - vechea Primărie;</div><div>6 - librăria; 7 - biserica; 8 - banca.</div></li><li>Daria locuiește pe strada Radu Negru. Această stradă are în realitate o lungime de 70 m. Pe planul cartierului lungimea ei este de 7 mm. De câte ori a fost micșorată lungimea reală a acestei străzi pentru a putea fi reprezentată pe plan?");
jade_mixins["img"]("img/v1/v1_p14_observa.png");
buf.push("</li></ul>");
}
}, {id: 'art-g4v1-a14-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Explică  </div></div>");
}
}, {id: 'art-g4v1-a15-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><ul class=\"art-g4\"><li>Alăturat este planul simplificat al localității Timișoara. Explică ce informații oferă acest desen despre orașul Timișoara?</li><li>Compară planul alăturat cu planul cartierului Cetate, realizat de Daria, și explică motivul pentru care fetița a desenat doar o porțiune din cartierul său.</li><li>Explică faptul că pe planul localității Timișoara nu au fost marcate principalele clădiri.</li></ul></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p15_explica.png");
buf.push("<br/></div></div>");
}
}, {id: 'art-g4v1-a15-explica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\"><em>Bună! Eu sunt Daria și ți-am prezentat o mică parte din orizontul meu apropiat. Acum este rândul tău. Îți propun să realizezi un ziar cu titlul <strong>„Orizontul apropiat”</strong>. Bănuiești de ce este necesară o astfel de activitate, nu-i așa?</em></div><div class=\"indent\"><em>Mai întâi, pentru că materialele și informațiile adunate te vor ajuta să cunoști mai bine spațiul în care îți desfășori activitatea de zi cu zi: școala la care înveți, cartierul în care locuiești.</em></div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p15_proiect_1.png");
buf.push("</div></div><div class=\"indent\"><em>Unele informații îți vor fi de folos la orele de istorie și de educație civică.</em></div><div class=\"indent\"><em>Proiectul tău va fi de folos tuturor celor care doresc să cunoască școala, cartierul sau localitatea în care trăiești.</em></div><div class=\"indent\"><em>În final, află că acest proiect îți va aduce, cu siguranță, și un calificativ de „foarte bine”.</em></div><div class=\"indent\"><em>Ce ai de făcut? Citește rândurile de mai jos.</em></div><div class=\"art-g4-blue-box\"><div class=\"indent\"><em>Tema proiectului</em>: Ziarul <strong>Orizontul apropiat</strong></div><div class=\"indent\"><em>Ce vei realiza? </em>Un ziar care să prezinte aspecte din spațiul în care îți desfășori activitățile zilnice:</div><div class=\"indent\">– planul clasei și al școlii unde înveți;</div><div class=\"indent\">– planul cartierului și al localității în care trăiești;</div><div class=\"indent\">– fotografii din clasa și din școala ta;</div><div class=\"indent\">– fotografii care surprind clădiri importante, străzi deosebite din cartierul și din localitatea ta;</div><div class=\"indent\">– desene cu locurile tale preferate din cartierul sau din localitatea ta;</div><div class=\"indent\">– povestiri sau legende despre cartierul sau localitatea ta.</div><div class=\"indent\"><em>Cum vei lucra? </em>Orice ziar este realizat de către o echipă redacțională. Formează cu colegii echipe de câte patru-cinci elevi. Fiecare echipă realizează propriul ziar. Stabiliți sarcini de lucru pentru fiecare membru al echipei redacționale (cine strânge informațiile despre cartier, cine face fotografiile, cine realizează planurile, cine află poveștile și legendele interesante despre cartier sau despre localitate etc.).</div><div class=\"indent\"> <em>Spor la lucru și calificativ maxim echipei redacționale a celui mai bun ziar </em><strong>Orizontul apropiat</strong>!</div></div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p15_proiect_2.png");
buf.push("</div><div class=\"col-sm-6\"><div class=\"indent\"><em>Și eu am lucrat un astfel de proiect. O parte din materialele mele le-ai văzut deja: planul clasei și al școlii mele, al locuinței și al cartierului în care trăiesc. Ți-au fost de folos, nu-i așa?</em></div><div class=\"indent\"> <em>Nu ți-am arătat ziarul meu </em><strong>Orizontul apropiat</strong>.</div><div class=\"indent\"><em>Să știi însă că am realizat pentru acest ziar și câteva desene. Iată copacul meu preferat din Grădina Botanică.</em></div></div></div>");
}
}, "Proiect");
}
}, {id: 'art-g4v1-a15-proiect'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});