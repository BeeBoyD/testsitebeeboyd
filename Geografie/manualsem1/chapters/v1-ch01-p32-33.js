registerChapter({ chapter: "v1-ch01-p32-33", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]('Paginile 32 - 33');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a32-chenar',
          top: 5.4419,
          left: 7.1698,
          width: 85.7783,
          height: 29.6744,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a32-ex1',
          top: 45.3488,
          left: 35.1179,
          width: 59.9528,
          height: 21.5814,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a32-ex2',
          top: 67.5814,
          left: 5,
          width: 90,
          height: 11.907,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a32-ex3',
          top: 80.4186,
          left: 5,
          width: 90,
          height: 10.0465,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a32-ex4',
          top: 91.2093,
          left: 5,
          width: 90,
          height: 5.7674,
          type: 'blank'
        }
      ],
      image: 'v1/p32.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a33-ex1',
          top: 14.7442,
          left: 5,
          width: 90,
          height: 33.1163,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a33-ex2',
          top: 48.6977,
          left: 41.5,
          width: 53.5,
          height: 6.4186,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a33-ex3',
          top: 55.8605,
          left: 41.5,
          width: 53.5,
          height: 25.9535,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a33-grila-autoevaluare',
          top: 83.9535,
          left: 5,
          width: 90,
          height: 12.7442,
          type: 'blank'
        }
      ],
      image: 'v1/p33.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('', '', "Orizontul local");
buf.push("<div class=\"art-g4-chenar\"><div class=\"row\"><div class=\"col-xs-6 col-xs-offset-3\">");
jade_mixins["img"]('img/v1/v1_p32_deschidere.png');
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"indent\">Mă bucur să ne revedem. De la ultima noastră întâlnire, ai descoperit că, dincolo de <span class=\"g4-myriadb\">orizontul apropiat</span>, se întinde orizontul local, care cuprinde localitatea, județul și regiunea natală. Dar despre acestea din urmă vom învăța în viitoarele lecții. Până atunci, nu uita de <em>portofoliul </em>tău. El reprezintă cartea ta de vizită, adică este:</div><div class=\"indent\">– colecția ta de materiale și de informații geografice;</div><div class=\"indent\">– dovada performanțelor tale școlare, căci te va conduce sigur spre calificativele maxime;</div><div class=\"indent\">– dovada faptului că ai dobândit noi cunoștințe și abilități, care te vor ajuta să devii o persoană deosebită, cu o atitudine civică privind cunoașterea, conservarea și protecția mediului, cu respect pentru diversitatea naturală și umană.</div><div class=\"indent\">Ai grijă! Grupează materialele și ordonează-le pe teme, în funcție de lecțiile parcurse.</div><div class=\"indent\">Ai realizat ziarul <span class=\"g4-myriadb\">Orizontul apropiat? </span>Felicitări! Deja ai primul material în portofoliu. Nu uita <em>fișele de observare </em>a orizontului local. Informează-te și colecționează cât mai multe materiale. Așa vei descoperi frumoasa lume în care trăim cu toții.</div></div></div></div>");
}
}, {id: 'art-g4v1-a32-chenar'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Recapitulare</div>");
}
}, {id: 'art-g4v1-a32-recapitulare-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p32_ex1.png');
buf.push("</div><div class=\"col-sm-8\"><ol class=\"art-g4-lowercase\"><li>Mașina albastră se deplasează de la NV spre SE.</li><li>Clădirea marcată cu A este situată la sud de clădirea marcată cu B.</li><li>Cea mai nordică dintre clădiri este marcată cu litera C.</li><li>La est de copacul marcat cu D se află clădirea marcată cu B.</li><li>Copacul marcat cu E este situat în partea de sud a imaginii.</li><li>Mașina verde se deplasează de la NV spre SE.</li></ol></div></div>");
}
}, 1,'Copiază pe caiet enunțurile următoare. Privește cu atenție imaginea alăturată și scrie A, dacă propoziția este adevărată, sau F, dacă propoziția este falsă, în dreptul fiecăruia dintre enunțurile de mai jos.');
}
}, {id: 'art-g4v1-a32-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"><em>Cele mai înalte forme de relief sunt …, pe care îi recunoaștem pe hartă după culoarea … . Spre deosebire de munți, … au culmile mai domoale și rotunjite. Aceste forme de relief sunt marcate pe hartă prin culoarea … . Cu verde sunt marcate, pe hartă, formele de relief numite … . Acestea sunt netede și au cele mai mici … . Cele mai multe ape … izvorăsc din munți. Pe hartă sunt marcate cu linii de culoare … . Cu această culoare sunt marcate și …, care sunt ape stătătoare.</em></div>");
}
}, 2,'Completează spațiile libere din enunțurile următoare:');
}
}, {id: 'art-g4v1-a32-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>La câmpie se întâlnesc păduri de conifere.</li><li>Pădurile de foioase sunt formate din arbori cu frunzele ca niște ace.</li><li>În pădurile de foioase cresc brazi, molizi și trăiesc animale precum ursul și jderul.</li><li>Munții sunt acoperiți de ierburi scunde și plante cu flori precum macul, mușețelul, albăstrelele.</li></ol>");
}
}, 3,'Reformulează enunțurile astfel încât să devină adevărate.');
}
}, {id: 'art-g4v1-a32-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](4,'Descrie orizontul local, precizând caracteristicile observabile naturale și pe cele legate de populație, așezări și activități ale oamenilor. Folosește pentru descriere și fișele de observare din portofoliu.');
}
}, {id: 'art-g4v1-a32-ex4'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Autoevaluare</div>");
}
}, {id: 'art-g4v1-a33-autoevaluare-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a17-ex3-pickoneInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Astăzi ești jurnalist sportiv și vei comenta partida de fotbal dintre echipa băieților din clasa a IV-a A (jucătorii în alb) și echipa băieților din clasa a IV-a B (jucătorii în roșu). Completează cu informațiile corecte spațiile punctate.</div>");
}
}, "v1/s1_p33_autoevaluare_ex_1");
jade_mixins["img"]('img/v1/v1_p33_ex1.png');
buf.push("<span>Portarul echipei albe, aflat în partea de vest a terenului, pasează mingea pe direcția V-E. Mingea ajunge la jucătorul cu numărul 3 care o direcționează spre jucătorul cu numărul 8, aflat în partea de N</span><div class=\"inline-block\">");
jade_mixins["pickone"](3, ['N','S', 'E', 'V'], { name: 'art-g4v1-a33-ex1-pickone-1-1',  ignoreAvatar: false, placement:'right'});
buf.push("</div><span class=\"triger\">. Jucătorul cu numărul 8 este flancat la SE și la</span><div class=\"inline-block\">");
jade_mixins["pickone"](4, ['N','S', 'E', 'V'], { name: 'art-g4v1-a33-ex1-pickone-1-2',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">de doi adversari, dar reușește să paseze mingea la colegul său cu numărul 7, aflat la </span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['N','S', 'E', 'V'], { name: 'art-g4v1-a33-ex1-pickone-1-3',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">. Acesta îndreaptă mingea spre </span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['N','S', 'E', 'V'], { name: 'art-g4v1-a33-ex1-pickone-1-4',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">E, la jucătorul cu numărul 2, care pasează colegului său cu numărul 9 aflat în direcția </span><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['N','S', 'E', 'V'], { name: 'art-g4v1-a33-ex1-pickone-1-5',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">. Jucătorul cu numărul 9 șutează puternic spre poarta adversarilor aflată în partea de </span><div class=\"inline-block\">");
jade_mixins["pickone"](3, ['N','S', 'E', 'V'], { name: 'art-g4v1-a33-ex1-pickone-1-6',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">și GOOOL.</span><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a33-ex1-pickone'});
}
}, {id: 'art-g4v1-a33-ex1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2,'Privește harta alăturată. În mod intenționat, pe această hartă s-au strecurat trei elemente greșite. Identifică aceste elemente și notează-le pe caiet.');
buf.push("<div class=\"row\"><div class=\"col-sm-6 col-sm-offset-3\">");
jade_mixins["img"]('img/v1/v1_p33_ex2.png');
buf.push("<br/></div></div>");
}
}, {id: 'art-g4v1-a33-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a17-ex3-pickoneInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Completează enunțurile cu variantele corecte de răspuns.</div>");
}
}, "v1/s1_p33_autoevaluare_ex_3");
buf.push("<ol class=\"art-g4-lowercase\"><li>Desenul care reprezintă într-o formă micșorată spații foarte întinse se nume <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['plan','hartă'], { name: 'art-g4v1-a33-ex3-pickone-1-1',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">. </span></li><li>Dacă ne aflăm pe creasta muntelui, linia orizontului pare foarte <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['apropiată','depărtată'], { name: 'art-g4v1-a33-ex3-pickone-1-2',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">.</span></li><li>Soarele apune în partea de orizont numită <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['miazănoapte','vest'], { name: 'art-g4v1-a33-ex3-pickone-1-3',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">.</span></li><li> <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['Hidrografia','Vegetația'], { name: 'art-g4v1-a33-ex3-pickone-1-4',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">dintr-un anumit spațiu este reprezentată de toate plantele care cresc în acel spațiu.</span><div class=\"is-done-box\"></div></li></ol>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a33-ex3-pickone'});
}
}, {id: 'art-g4v1-a33-ex3', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"center\"> <div class=\"art-g4-blue-text text-uppercase\">Grilă de autoevaluare</div></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare\"><tr><th></th><th>Itemul 1</th><th>Itemul 2</th><th>Itemul 3</th></tr><tr><td>Foarte bine</td><td>5-6 răspunsuri corecte </td><td>3 răspunsuri corecte </td><td>4 răspunsuri corecte</td></tr><tr><td>Bine</td><td>3-4 răspunsuri corecte </td><td>două răspunsuri corecte </td><td>3 răspunsuri corecte</td></tr><tr><td>Suficient </td><td>două răspunsuri corecte </td><td>un răspuns corect </td><td>două răspunsuri corecte</td></tr></table></div>");
}
}, {id: 'art-g4v1-a33-grila-autoevaluare'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});