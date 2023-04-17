registerChapter({ chapter: "v1-ch02-p62-63", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]("Paginile 62 - 63");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a62-proiect1',
          top: 5.5349,
          left: 5,
          width: 90,
          height: 39.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a62-ex1',
          top: 55.0233,
          left: 5,
          width: 90,
          height: 12.2791,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a62-ex2',
          top: 68.3256,
          left: 5,
          width: 90,
          height: 4.5581,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a62-ex3',
          top: 73.2558,
          left: 5,
          width: 90,
          height: 14.4186,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a62-ex4',
          top: 88.2326,
          left: 5,
          width: 90,
          height: 8.6512,
          type: 'blank'
        }
      ],
      image: 'v1/p62.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a63-ex1',
          top: 14.8372,
          left: 5,
          width: 90,
          height: 8.5581,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a63-ex2',
          top: 24.1395,
          left: 5,
          width: 90,
          height: 28.8372,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a63-ex3',
          top: 53.3488,
          left: 5,
          width: 90,
          height: 28.186,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a63-grila-autoevaluare',
          top: 83.3953,
          left: 5,
          width: 90,
          height: 13.3023,
          type: 'blank'
        }
      ],
      image: 'v1/p63.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-u2"]('', "", "România – caracteristici introduse de om");
buf.push("<div class=\"art-g4-bluebox\"><p style=\"background:#1aa696; text-transform: uppercase;\" class=\"title\">Proiect „România – tradiții, obiceiuri”</p><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p62_proiect.png');
buf.push("</div><div class=\"col-sm-8\"><div class=\"indent\"><em>Costumele populare cu o bogăție de simboluri și semnificații, tradițiile și obiceiurile păstrate de-a lungul vremii, cântecele de jale, de dor sau bucurie sunt mărturiile de azi ale trecutului nostru. Ele reprezintă oglinda neamului românesc, lada sa de zestre care trebuie respectată, îngrijită și transmisă României de mâine.</em></div></div></div><br/><div class=\"art-g4-chenar-u2\"> <div class=\"indent\"><em>Tema proiectului: <span class=\"g4-myriadb\"> România – tradiții, obiceiuri</span></em></div><div class=\"indent\"><em>Scopul proiectului: </em>Afirmarea respectului pentru adevăratele valori culturale care definesc trecutul, prezentul și viitorul poporului român.</div><div class=\"indent\"><em>Ce vei realiza? </em>Împreună cu colegii realizați un panou care să cuprindă informații despre tradițiile și obiceiurile practicate în regiunea în care locuiți și o expoziție de obiecte de artă populară specifice regiunii.</div><div class=\"indent\"><em>Cum veți lucra? </em>Formați echipe de câte patru-cinci elevi. Stabiliți sarcini de lucru pentru fiecare echipă. Este o activitate care implică colaborarea și nu competiția între echipe. Oferiți-vă sprijin reciproc. Colaborarea sporește creativitatea și calitatea produselor realizate.</div><div class=\"indent\"><em>Folosiți acest proiect și în cadrul orelor de istorie, educație civică, educație muzicală sau de educație plastică.</em></div></div></div>");
}
}, {id: 'art-g4v1-a62-proiect1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Recapitulare</div>");
}
}, {id: 'art-g4v1-a62-recap-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-u2\"><li>Cea mai numeroasă populație trăiește în treapta de relief numită câmpie.</li><li>În satele de la câmpie gospodăriile sunt situate la distanțe mari unele de celelalte.</li><li>Populația majoritară în țara noastră o formează românii.</li><li>Căile de comunicație asigură produsele de bază necesare în alimentația oamenilor.</li><li>Cea mai mare parte din terenurile arabile se află în regiunile de câmpie.</li></ol>");
}
}, 1,'Copiază pe caiet enunțurile următoare și scrie A („adevărat“) sau F („fals“) pentru fiecare enunț.');
}
}, {id: 'art-g4v1-a62-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](2,'Explică afirmația:<em> Resursele naturale sunt reprezentate de toate bogățiile naturii care sunt folositoare oamenilor</em>.');
}
}, {id: 'art-g4v1-a62-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<table class=\"p62\"><tr><th>Treapta de relief</th><th>Culturi și activități agricole</th></tr><tr><td>Câmpie</td><td>...</td></tr><tr><td>Dealuri și podișuri</td><td>...</td></tr><tr><td>Munți</td><td>...</td></tr></table>");
}
}, 3,'Precizează pentru fiecare treaptă de relief culturile și activitățile agricole specifice. Completează, pe caiet, un tabel asemănător:');
}
}, {id: 'art-g4v1-a62-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](4,'Realizează un text geografic de maxim 10 rânduri, în care să folosești termenii geografici din lista următoare.<br> Lista de termeni geografici: <em>cereale, creșterea animalelor, culturi agricole, industria energetică, industria lemnului, păduri, pomi fructiferi, resurse de subsol, terenuri agricole, viță-de-vie</em>.');
}
}, {id: 'art-g4v1-a62-ex4'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Autoevaluare</div>");
}
}, {id: 'art-g4v1-a63-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-u2\"><li>Numele a trei ramuri economice foarte importante pentru dezvoltarea României.</li><li>Un tip de activitate specifică fiecărei ramuri economice.</li><li>Importanța fiecărui tip de activitate pentru viața și bunăstarea oamenilor.</li></ol>");
}
}, 1,'Scrie pe caiet:');
}
}, {id: 'art-g4v1-a63-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><br/><ol class=\"art-g4-lowercase-u2\"><li>Numește unitatea de relief care prezintă toate cele trei resurse de subsol utilizate în termocentrale.</li><li>Numește centrul industrial situat în unitatea de relief care prezintă cele mai importante resurse de gaze naturale și sare.</li><li>Numește centrul industrial care este și principalul nod de comunicație din România.</li></ol></div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/v1_p63_harta.png');
buf.push("</div></div>");
}
}, 2,'Analizează harta alăturată și răspunde următoarelor cerințe:');
}
}, {id: 'art-g4v1-a63-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](3,'Analizează schemele de mai jos. Completează fiecare schemă cu informația corespunzătoare.');
jade_mixins["img"]('img/v1/v1_p63_schema.png');
}
}, {id: 'art-g4v1-a63-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"text-center\"><strong class=\"art-g4-text-greenu2\">GRILĂ DE AUTOEVALUARE </strong></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare-u2\"><tr><th></th><th>Itemul 1</th><th>Itemul 2</th><th>Itemul 3</th></tr><tr><td>Foarte bine</td><td>3 răspunsuri corecte </td><td>3 răspunsuri corecte </td><td>3 răspunsuri corecte </td></tr><tr><td>Bine</td><td>două răspunsuri corecte </td><td>două răspunsuri corecte </td><td>două răspunsuri corecte </td></tr><tr><td>Suficient </td><td>un răspuns corect </td><td>un răspuns corect </td><td>un răspuns corect </td></tr></table></div>");
}
}, {id: 'art-g4v1-a63-grila-autoevaluare'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});