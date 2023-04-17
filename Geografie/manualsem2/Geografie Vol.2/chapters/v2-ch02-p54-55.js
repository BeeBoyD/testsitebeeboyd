registerChapter({ chapter: "v2-ch02-p54-55", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Continentele și oceanele Terrei');
jade_mixins["subtitle"]("Paginile 54 - 55");
buf.push("<div class=\"lfa-print-spread\"> ");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a54-observa',
          top: 18.9302,
          left: 5,
          width: 90,
          height: 5.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a54-descopera-ex-1',
          top: 25.6279,
          left: 5,
          width: 90,
          height: 19.6279,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a54-descopera-ex-2',
          top: 45.814,
          left: 5,
          width: 90,
          height: 13.3953,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a54-descopera-ex-3',
          top: 59.3953,
          left: 5,
          width: 90,
          height: 16.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a54-retine',
          top: 76.5116,
          left: 36.533,
          width: 58.8915,
          height: 21.3953,
          type: 'video'
        }
      ],
      image: 'v2/p54.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a55-aplica',
          top: 9.5349,
          left: 5,
          width: 90,
          height: 16.8372,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a55-descopera-ex-1',
          top: 31.8605,
          left: 5,
          width: 90,
          height: 22.0465,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a55-descopera-ex-2',
          top: 54.186,
          left: 5,
          width: 90,
          height: 16.4651,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a55-descopera-ex-3',
          top: 70.9302,
          left: 5,
          width: 90,
          height: 3.0698,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a55-retine',
          top: 74.186,
          left: 35.1179,
          width: 59.8349,
          height: 13.3953,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a55-descopera-ex-4',
          top: 74.4651,
          left: 5,
          width: 30,
          height: 22.2326,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a55-portofoliu',
          top: 88.4186,
          left: 35.7075,
          width: 59.0094,
          height: 8.7442,
          type: 'blank'
        }
      ],
      image: 'v2/p55.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('15.', "Continentele și oceanele Terrei",'Terra – planeta noastră');
}
}, {id: 'art-g4v2-a54-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Observă </div>");
}
}, {id: 'art-g4v2-a54-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-8\"><div class=\"indent\">Privește imaginea alăturată. Așa arată planeta noastră văzută din cosmos. Se poate observa forma sa sferică. Primii cosmonauți au numit-o și ,,Planeta albastră”. De ce Terrei i se mai spune și ,,Planeta albastră”?</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p54_observa.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a54-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a54-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a42-exercitii-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
buf.push(" ");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">În grafic este reprezentată întinderea uscatului și a apei pe suprafața Pământului. Analizează graficul și răspunde următoarelor cerințe:</div>");
}
}, "v2/s2_p54_descopera");
buf.push("<div class=\"row\"><div class=\"col-sm-9\"><ul class=\"art-g4-v2-c9\"><li>Marile întinderi de uscat, numite <em>continente</em>, reprezintă din suprafața Pământului:</li></ul>");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9 row\"><li class=\"col-sm-4 btn btn-lg bad\">sub 25 %;</li><li class=\"col-sm-4 btn btn-lg bad\">25 %;</li><li class=\"col-sm-4 btn btn-lg good\">puțin peste 25%.</li></ol>");
}
}, {name: 'art-g4v2-a54-descopera-ex-1-select-a'});
buf.push("<ul class=\"art-g4-v2-c9\"><li>Întinderile imense de apă sărată numite <em>oceane </em>ocupă din suprafața Pământului:</li></ul>");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9 row\"><li class=\"col-sm-4 btn btn-lg bad\">50 %; </li><li class=\"col-sm-4 btn btn-lg bad\">75 %; </li><li class=\"col-sm-4 btn btn-lg good\">aproape 75%.</li></ol>");
}
}, {name: 'art-g4v2-a54-descopera-ex-1-select-b'});
buf.push("</div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v2/v2_p54_descopera_placinta.png");
buf.push("</div></div><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a54-descopera-ex-1-select'});
}
}, {id: 'art-g4v2-a54-descopera-ex-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](2, "Aceasta este o hartă a întregului Pământ. Compară scara acestei hărți cu scara la care a fost realizată harta Europei de la pagina <strong>46 - harta fizică a Europei</strong>. Pentru care hartă dimensiunile reale ale elementelor reprezentate au fost micșorate de mai multe ori?");
jade_mixins["img"]("img/v2/v2_p54_descopera_harta.png");
}
}, {id: 'art-g4v2-a54-descopera-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<table class=\"art-g4-v2-p11-table\"><tr> <th>Continente </th><th>Oceane</th></tr><tr><td>..... </td><td>..... </td></tr></table>");
}
}, 3, "Citește următoarele denumiri geografice: Africa, Arctic, America de Nord, America de Sud, Antarctica, Asia, Atlantic, Australia, Indian, Pacific. Identifică pe harta alăturată ce reprezintă fiecare denumire și completează în caiet un tabel asemănător:");
}
}, {id: 'art-g4v2-a54-descopera-ex-3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p54_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a54-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <br/><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p54_retine.png");
buf.push("</div><div class=\"col-sm-8\"><div class=\"indent\"><em><strong>Continentele </strong></em>reprezintă cele mai mari întinderi de uscat ale planetei noastre. Continentele sunt: <em>Europa, Asia, Africa, America de Nord, America de Sud, Australia și Antarctica. </em>Ele sunt înconjurate de apa oceanelor și a mărilor. <strong>Oceanele </strong>reprezintă cele mai mari întinderi de apă sărată. Cele patru oceane de pe Terra sunt: <em>Pacific, Atlantic, Indian și Arctic. </em>Întinderile de apă sărată, de dimensiuni mai reduse decât oceanele, se numesc <strong>mări</strong>. Toate oceanele și mările comunică între ele și formează împreună <em>Oceanul Planetar.</em></div></div></div>");
}
});
}
}, {id: 'art-g4v2-a54-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Aplică </div>");
}
}, {id: 'art-g4v2-a55-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div>Analizează harta de la pagina alăturată și răspunde următoarelor cerințe:</div>");
jade_mixins["art-g4-ex-v2-c9"](1, "Numește continentele traversate de Ecuator.");
jade_mixins["art-g4-ex-v2-c9"](2, "Care continente sunt situate în întregime în emisfera nordică? Dar în emisfera sudică?");
jade_mixins["art-g4-ex-v2-c9"](3, "Reformulează enunțurile următoare astfel încât să prezinte realitatea geografică observată pe hartă:");
buf.push("<div class=\"row\"><div class=\"col-sm-12\"><ul class=\"art-g4-v2-c9\"><li>Continentul Africa se află situat în nordul Europei.</li><li>Oceanul Pacific mărginește continentele America de Nord, America de Sud, Europa și Australia.</li><li>La sudul Asiei se întinde Oceanul Atlantic.</li><li>Oceanul Arctic este situat în emisfera sudică.</li><li>Antarctica este înconjurată de oceanele Pacific, Arctic și Indian.</li></ul></div></div>");
}
}, {id: 'art-g4v2-a55-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a55-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](1, "Să presupunem că acoperim fiecare continent cu o rețea de pătrate, ca în imaginea alăturată. Fiecare pătrat are latura de 10 km. În tabelul de mai jos sunt notate câte sute de mii de pătrate cu latura de 10 km acoperă fiecare continent. Ele reprezintă aria (adică suprafața) fiecărui continent.");
buf.push("<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\">");
jade_mixins["img"]("img/v2/v2_p55_descopera_africa.png");
buf.push("</div></div><table class=\"art-g4-v2-p11-table\"><tr> <th><em>Continentul </em></th><th><em>Suprafața/Aria (în sute de mii de pătrate cu latura de 10 km)</em></th></tr><tr> <td>Europa </td><td>10</td></tr><tr> <td>Asia </td><td>44</td></tr><tr> <td>Africa </td><td>30</td></tr><tr> <td>America de Nord </td><td>24</td></tr><tr> <td>America de Sud </td><td>18</td></tr><tr> <td>Australia </td><td>8</td></tr><tr> <td>Antarctica </td><td>13</td></tr></table><ul class=\"art-g4-v2-c9\"><li>Cum se numește continentul care ocupă cea mai mare întindere?</li><li>Scrie în caiet continentele, în ordinea descrescătoare a suprafeței.</li><li>Ce loc ocupă Europa, ca întindere, între continentele lumii?</li><li>Localizează pe harta murală a lumii fiecare continent, în ordinea notată pe caiet.</li></ul>");
}
}, {id: 'art-g4v2-a55-descopera-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](2, "Fiecare pătrat din imaginea alăturată semnifică, în mod simbolic, întinderea unui ocean. Literele indică oceanele, după cum urmează:");
buf.push("<div class=\"row\"><div class=\"col-sm-7\"><ol class=\"art-g4-lowercase-v2-c9 row\"><li class=\"col-sm-4\"> <em>Oceanul Indian; </em></li><li class=\"col-sm-4\"> <em>Oceanul Pacific; </em></li><li class=\"col-sm-4\"> <em>Oceanul</em></li></ol><ul class=\"art-g4-v2-c9\"><li>Numește oceanul cu cea mai mare întindere.</li><li>Scrie în caiet oceanele, în ordinea crescătoare a întinderii. Cum se numește cel mai mic ocean?</li><li>Arată pe harta murală a lumii fiecare ocean, în ordinea notată pe caiet.</li></ul></div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p55_descopera.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a55-descopera-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](3, "Numește mările care mărginesc continentul Europa. Cu ce ocean comunică fiecare? Descoperă pe harta murală a lumii și alte mări.");
}
}, {id: 'art-g4v2-a55-descopera-ex-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](4, "Observă, cu atenție, harta de la pagina anterioară. În partea de NE a Americii de Nord se află o suprafață mai mică de uscat, înconjurată de ape. Aceasta este o <em>insulă</em>, la fel ca suprafața mai mică de uscat din partea de SE a Africii. Identifică pe harta murală a lumii aceste insule. Cum se numesc? Ce insule sunt situate în apropierea Europei și aparțin continentului nostru?");
}
}, {id: 'art-g4v2-a55-descopera-ex-4'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Pe lângă continente, care ocupă cele mai mari întinderi de uscat de pe Pământ, există și întinderi mai mici de uscat, înconjurate din toate părțile de apă. Acestea se numesc <strong><em>insule</em></strong>. Cea mai mare insulă de pe glob se numește Groenlanda.</div>");
}
}, 'v2/s2_p55_retine');
jade_mixins["img"]('img/v2/v2_p55_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a55-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-purplebox-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Realizează un pliant de prezentare a continentelor și a oceanelor de pe Terra. Folosește texte scurte și ilustrații.</div>");
}
}, "Portofoliu");
}
}, {id: 'art-g4v2-a55-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});