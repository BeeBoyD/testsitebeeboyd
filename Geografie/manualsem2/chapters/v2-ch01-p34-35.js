registerChapter({ chapter: "v2-ch01-p34-35", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Caracterizarea geografică a județului și a localității în care este situat orizontul local');
jade_mixins["subtitle"]('Paginile 34 - 35');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a34-observa',
          top: 18.8372,
          left: 5,
          width: 63,
          height: 19.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-descopera',
          top: 44.6977,
          left: 46,
          width: 50,
          height: 7.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-descopera-ex1',
          top: 52.0465,
          left: 46,
          width: 50,
          height: 3.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-descopera-ex2',
          top: 55.6744,
          left: 46,
          width: 50,
          height: 5.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-descopera-ex3',
          top: 61.1628,
          left: 46,
          width: 50,
          height: 5.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-descopera-ex4',
          top: 66.6512,
          left: 46,
          width: 50,
          height: 3.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-descopera-ex5',
          top: 70.5581,
          left: 46,
          width: 50,
          height: 3.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-aplica-ex1',
          top: 80.0465,
          left: 5,
          width: 90,
          height: 5.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a34-aplica-ex2',
          top: 85.4419,
          left: 5,
          width: 90,
          height: 11.2558,
          type: 'blank'
        }
      ],
      image: 'v2/p34.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a35-descopera',
          top: 11.4884,
          left: 5,
          width: 90,
          height: 3.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a35-ex1',
          top: 15.3023,
          left: 5,
          width: 90,
          height: 25.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a35-ex2',
          top: 42.5581,
          left: 5,
          width: 90,
          height: 22.1395,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a35-vocabular',
          top: 82.5581,
          left: 4,
          width: 49.5755,
          height: 14.4186,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a35-activitate',
          top: 65.6279,
          left: 55,
          width: 40,
          height: 31.3488,
          type: 'blank'
        }
      ],
      image: 'v2/p35.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('8.', "Caracterizarea geografică a județului și a localității în care este situat orizontul local",'Organizarea administrativă a României');
}
}, {id: 'art-g4v2-a34-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v2-a34-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-8\"><div class=\"indent\">George a participat în această primăvară la un concurs județean de geografie, organizat pentru elevii din clasa a IV-a, cu tema: „Județul natal”. A obținut premiul I la acest concurs.</div><div class=\"indent\">La primul subiect, a fost următoarea cerință:</div><div class=\"indent\"><em>Observă imaginile și alege titlul potrivit pentru fiecare, dintre: Culturi de cereale în Podișul Dobrogei de Sud; Portul Constanța; Ruinele Cetății Histria; Peisaj montan din Podișul Dobrogei.</em></div><div class=\"indent\">Alege și tu titlul potrivit fiecărei imagini.</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p34_observa_a.png");
jade_mixins["img"]("img/v2/v2_p34_observa_b.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a34-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a34-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p34_descopera.png");
buf.push("</div><div class=\"col-sm-6\"><div class=\"indent\">La al doilea subiect, George și-a dat seama că știe răspunsurile doar citind harta alăturată. Iată cerințele și harta județului Constanța.</div><div class=\"indent\">Răspunde și tu la aceste cerințe:</div></div></div>");
}
}, {id: 'art-g4v2-a34-descopera'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Unde este situat județul Constanța în cadrul României?");
}
}, {id: 'art-g4v2-a34-descopera-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "În ce parte județul are limite administrative naturale? În ce parte limitele sale sunt convenționale? Cu ce județe formează aceste limite?" );
}
}, {id: 'art-g4v2-a34-descopera-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Ce forme de relief caracterizează acest județ? Numește unitatea sau unitățile geografice în care se află situat județul Constanța?");
}
}, {id: 'art-g4v2-a34-descopera-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](4, "Ce categorie de ape predomină în acest județ? Numește două astfel de ape.");
}
}, {id: 'art-g4v2-a34-descopera-ex4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](5, "Numește orașele-municipii din județul Constanța. Care dintre ele este reședință de județ?");
}
}, {id: 'art-g4v2-a34-descopera-ex5'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a34-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Să presupunem că și tu participi la concursul „Județul natal”. Copiază pe caiet cerințele de mai sus, înlocuind numele județului Constanța cu numele județului de care aparține localitatea ta natală. Răspunde la aceste cerințe, folosind harta murală a României și hărțile din Atlasul geografic al României.");
}
}, {id: 'art-g4v2-a34-aplica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<div class=\"art-g4-text-green-v2\">A. </div> Cele mai multe așezări din județul meu sunt așezate:<ol class=\"art-g4-lowercase-v2\"><li>pe văile râurilor și în depresiuni;</li><li>pe culmile și crestele dealurilor;</li><li>pe culmile și crestele munților.</li></ol><div class=\"art-g4-text-green-v2\">B. </div> Cele mai multe așezări din județul meu sunt așezate:<ol class=\"art-g4-lowercase-v2\"><li>un sat dintr-o comună;</li><li>un oraș din județ;</li><li>un oraș-municipiu al județului.</li></ol>");
}
}, 2, "Alege varianta corectă:");
}
}, {id: 'art-g4v2-a34-aplica-ex2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a35-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Subiectul III a fost puțin mai dificil, dar George este isteț și a răspuns foarte bine la toate cerințele. Citește cu atenție fiecare cerință și identifică răspunsurile corecte.</div>");
}
}, {id: 'art-g4v2-a35-descopera'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
jade_mixins["img"]("img/v2/v2_p35_descopera_ex1.png");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>cu ce literă este marcat graficul care prezintă pentru cele trei orașe temperatura medie a aerului înregistrată în luna ianuarie.</li><li>ce temperatură medie s-a înregistrat la Constanța în luna iulie?</li></ol>");
}
}, 1, "Graficele de mai jos prezintă temperatura medie a aerului înregistrată în trei orașe din județul Constanța, într-o lună de iarnă și respectiv într-o lună de vară. Analizează aceste grafice și precizează:");
}
}, {id: 'art-g4v2-a35-ex1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-7\">");
jade_mixins["art-g4-ex-v2"](2, "Cantitatea de precipitații care cade anual pe fiecare suprafață de forma unui pătrat cu latura de 1 m este diferită de la un loc la altul. În pătratele alăturate sunt notate două orașe și cantitatea anuală de precipitații înregistrată în anul 2012, în fiecare oraș.");
buf.push("</div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p35_descopera_ex2.png");
buf.push("</div></div><ol class=\"art-g4-lowercase-v2\"><li>Compară cantitățile de precipitații înregistrate în cele două orașe și completează enunțul de mai jos, selectând din paranteză simbolul matematic corect.<div class=\"indent\"><em>Cantitatea anuală de precipitații căzute în orașul Constanța este mai (>, =, <) față de cea căzută în orașul Timișoara.</em></div></li><li>Citește enunțurile următoare și alege pentru fiecare A (adevărat) sau F (fals):<div class=\"indent\"><em>– În județul Timiș bat vânturile de vest, care aduc precipitații.</em></div><div class=\"indent\"><em>– În județul Constanța bate crivățul care este un vânt uscat.</em></div></li></ol>");
}
}, {id: 'art-g4v2-a35-ex2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> <strong>stație meteorologică </strong>–  locul în care sunt amplasate instrumente pentru măsurarea principalelor elemente care caracterizează vremea și clima din regiunea respectivă</div>");
}
}, 'v2/s2_p35_vocabular');
jade_mixins["img"]('img/v2/v2_p35_vocabular.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a35-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-greenbox-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Împreună cu colegii tăi de clasă faceți o vizită la cea mai apropiată stație meteorologică de localitatea natală. Observați instrumentele cu care se măsoară: temperatura aerului, cantitatea de precipitații căzută, direcția de unde bate vântul. Notați aceste informații pe o fișă. Adăugați fișa la portofoliu. De asemenea, realizați o fișă pe care să notați: temperaturile medii anuale sau lunare înregistrate în județul în care este situat orizontul local; cantitățile anuale de precipitații; vânturile predominate care se manifestă pe teritoriul județului. Adăugați această fișă la portofoliu.</div>");
}
}, "Activitate practică");
}
}, {id: 'art-g4v2-a35-activitate'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});