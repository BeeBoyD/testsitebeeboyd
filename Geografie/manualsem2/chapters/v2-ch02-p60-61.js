registerChapter({ chapter: "v2-ch02-p60-61", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare și evaluare finale');
jade_mixins["subtitle"]("Paginile 60 - 61");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a60-intro',
          top: 13.1628,
          left: 5,
          width: 90,
          height: 21.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a60-jurnal-ex-1',
          top: 43.4884,
          left: 5,
          width: 90,
          height: 6.6977,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a60-jurnal-ex-2',
          top: 50.7442,
          left: 5,
          width: 90,
          height: 19.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a60-jurnal-ex-3',
          top: 70.9302,
          left: 5,
          width: 90,
          height: 25.6744,
          type: 'blank'
        }
      ],
      image: 'v2/p60.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a61-ro-ex-1',
          top: 8.0465,
          left: 5,
          width: 90,
          height: 6.6977,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a61-ro-ex-2',
          top: 15.3953,
          left: 5,
          width: 90,
          height: 26.7907,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a61-ro-ex-3',
          top: 42.7442,
          left: 5,
          width: 90,
          height: 21.4884,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a61-terra-ex-1',
          top: 68.4186,
          left: 5,
          width: 90,
          height: 8.3721,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a61-terra-ex-2',
          top: 77.5349,
          left: 5,
          width: 90,
          height: 5.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a61-terra-ex-3',
          top: 83.2093,
          left: 5,
          width: 90,
          height: 12.4651,
          type: 'blank'
        }
      ],
      image: 'v2/p61.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Recapitulare și evaluare finale</div>");
}
}, {id: 'art-g4v2-a60-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-chenar-v2-orange\"><div class=\"row\"><div class=\"col-sm-7\"><div class=\"indent\"><em>Călătoria noastră prin universul fascinant și extrem de divers al realității înconjurătoare se apropie de final. Împreună ne-am dezvoltat cunoștințele și deprinderile de a observa, de a descoperi, de a analiza și explica lumea din jur. Am învățat să cunoaștem și să respectăm diversitatea naturală și umană. Știm mai multe și suntem mai buni!</em></div><div class=\"indent\"><em>Caietul de notițe, proiectele și portofoliul consemnează pas cu pas activitățile și experiențele noastre de învățare. Am pornit de la cunoașterea orizontului apropiat și local și, treptat, universul cunoașterii s-a extins până la întreaga planetă. Să parcurgem împreună jurnalul călătoriei noastre.</em></div></div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p60_foto_intro.png");
buf.push("</div></div></div>");
}
}, {id: 'art-g4v2-a60-intro'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">JURNAL DE CĂLĂTORIE</div><div class=\"art-g4-red-subtitle\">I. ORIZONTUL APROPIAT ȘI LOCAL, REGIUNEA ÎNCONJURĂTOARE</div>");
}
}, {id: 'art-g4v2-a60-jurnal-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-autoevaluare"].call({
block: function(){
buf.push("<div class=\"indent\"><em>Mă numesc … și sunt elev în clasa a … la Școala … . Locuiesc pe strada … din … . Acesta este spațiul pe care îl consider orizontul … .</em></div>");
}
}, 1, "Copiază pe caiet enunțurile de mai jos și completează spațiile libere cu informațiile corespunzătoare:");
}
}, {id: 'art-g4v2-a60-jurnal-ex-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-7\">");
jade_mixins["art-g4-ex-v2-autoevaluare"](2, "În imaginea alăturată este prezentat planul locuinței lui Bogdan. Identifică, după descrierea de mai jos, încăperile care formează locuința lui Bogdan, notate pe plan cu literele <strong>a</strong>, <strong>b</strong>, <strong>c</strong>, <strong>d</strong> și <strong>e</strong>.");
buf.push("</div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p60_ex2.png");
buf.push("</div></div><div class=\"indent\"><em>Ușa de intrare în locuință este orientată spre sud. Camera lui Bogdan este situată în partea de N a casei, ușa de la intrarea în camera sa fiind situată la V de ușa de intrare în bucătărie. Bucătăria este amplasată la est de baie, care are un perete comun cu camera lui Bogdan. Cum intri în casă, camera părinților este situată în partea dreaptă, adică la sud de bucătărie. Camera de zi este situată la sud de camera lui Bogdan, adică este prima încăpere, pe stânga, cum intri în locuință. Locuința lui Bogdan are un hol mare, din care se intră în fiecare încăpere.</em></div>");
}
}, {id: 'art-g4v2-a60-jurnal-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-autoevaluare"].call({
block: function(){
buf.push("<div class=\"indent\"> Copiază această fișă pe caiet și completează spațiile libere cu informațiile corespunzătoare:</div><div class=\"indent\"> Numele localității natale: … . Numele județului natal: … . Numele regiunii: … .</div>");
}
}, 3, "<strong> FIȘA ORIZONTULUI LOCAL ȘI A REGIUNII ÎN CARE ACESTA ESTE SITUAT</strong>");
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"art-g4-orange-border\"><div>Caracteristici naturale legate de:</div><ul class=\"art-g4-orange\"><li>relief: …</li><li>climă: …</li><li>ape: …</li><li>specii de plante: …</li><li>specii de animale: …</li><li>soluri: …</li><li>resurse naturale: …</li></ul></div></div><div class=\"col-sm-6\"><div class=\"art-g4-orange-border\"><div>Caracteristici introduse de om legate de:</div><ul class=\"art-g4-orange\"><li>populația din localitate, județ, regiune: ...</li><li>așezările urbane (orașe, orașe municipiu, orașul municipiu reședință de județ): ...</li><li>așezările rurale (comune, sate, felul cum sunt așezate gospodăriile ș.a.): ...</li><li>activități economice specifice (agricole, industriale, căi de comunicație etc.): ...</li></ul></div></div></div>");
}
}, {id: 'art-g4v2-a60-jurnal-ex-3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">II. ROMÂNIA ESTE O ȚARĂ EUROPEANĂ, IAR EUROPA ESTE UN CONTINENT AL PLANETEI</div>");
}
}, {id: 'art-g4v2-a61-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-autoevaluare"](1, "Scrie o scrisoare pentru un elev de aceeași vârstă cu tine care locuiește în Cairo, un mare oraș din Africa. Descrie poziția geografică a României în Europa și în lume, folosind următorii termeni geografici: <em>carpato-dunăreano-pontică, continent, emisferă, granițe naturale și convenționale, punct cardinal, vecini</em>.");
}
}, {id: 'art-g4v2-a61-ro-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-autoevaluare"](2, "Pe harta alăturată sunt marcate cu litere de la <strong>A</strong> la <strong>H</strong> unități geografice sau diviziuni ale acestora, cu cifre de la <strong>1</strong> la <strong>6</strong> cele mai importante râuri și cu numere de la <strong>7</strong> la <strong>15</strong> cele mai importante orașe.");
buf.push("<ol class=\"art-g4-lowercase-orange\"><li>Scrie, pe caiet, denumirea acestor elemente geografice specifice spațiului românesc.</li><li>Scrie, pe caiet, litera sau numărul cu care este marcat pe hartă:</li><div class=\"indent\">- orașul-capitală al țării noastre;</div><div class=\"indent\">- râul care formează graniță naturală;</div><div class=\"indent\">- orașul-port maritim;</div><div class=\"indent\">- orașul port la Dunăre;</div><div class=\"indent\">- cel mai mare oraș din vestul țării.</div></ol>");
jade_mixins["img"]("img/v2/v2_p61_ex2.png");
}
}, {id: 'art-g4v2-a61-ro-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2-autoevaluare"](3, "Când a avut probleme la cipul de memorie, <strong><em>Zoom</strong></em> a tăiat harta Europei, crezând că este la ora de <em>Arte vizuale și abilități practice</em> și trebuie să confecționeze mărțișoare. Când și-a dat seama de isprava sa, <strong><em>Zoom</strong></em> a lipit bucățile pe un carton și a refăcut harta Europei. Reconstituie și tu harta Europei din cele patru fragmente.");
}
}, "v2/s2_p61_evaluare finala_ex_3");
jade_mixins["drag-to-bucket"].call({
block: function(){
buf.push("<div class=\"buckets\"><div data-name=\"map\" class=\"bucket\"><div class=\"items well well-lg center\"><div data-index=\"1\" data-target=\"sj\" class=\"item\"> </div><div data-index=\"2\" data-target=\"ss\" class=\"item\"> </div><div data-index=\"3\" data-target=\"dj\" class=\"item\"> </div><div data-index=\"4\" data-target=\"ds\" class=\"item\"> </div></div></div><div><div data-name=\"ss\" class=\"bucket\"><div class=\"items well well-lg\"></div></div><div data-name=\"ds\" class=\"bucket\"><div class=\"items well well-lg\"></div></div><div data-name=\"sj\" class=\"bucket\"><div class=\"items well well-lg\"></div></div><div data-name=\"dj\" class=\"bucket\"><div class=\"items well well-lg\"></div></div></div></div>");
}
}, {name: "art-g4v2-a61-ro-ex-3-dragto"});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a61-ro-ex-3-bucket'});
}
}, {id: 'art-g4v2-a61-ro-ex-3', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">III. TERRA ESTE PLANETA OAMENILOR ȘI O PLANETĂ A SISTEMULUI SOLAR</div>");
}
}, {id: 'art-g4v2-a61-terra-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-autoevaluare"].call({
block: function(){
buf.push("<ul class=\"art-g4-orange\"><li>forma, mărimea, mișcările Terrei și modificările observabile în realitatea înconjurătoare generate de aceste mișcări;</li><li>continentele și oceanele lumii.</li></ul>");
}
}, 1, "Scrie un articol pentru revista școlii în care să prezinți:");
}
}, {id: 'art-g4v2-a61-terra-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-autoevaluare"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-orange\"><li>Terra este o planetă; </li><li>pe Mercur temperaturile sunt foarte ridicate.</li></ol>");
}
}, 2, "Explică de ce:");
}
}, {id: 'art-g4v2-a61-terra-ex-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-7\">");
jade_mixins["art-g4-ex-v2-autoevaluare"](3, "Imaginează-ți că reprezentăm simbolic, prin cercuri de diferite dimensiuni, locurile călătoriei noastre: orizontul local și regiunea în care acesta este situat, România, Europa, Terra, Sistemul Solar, ca în imaginea alăturată. Stabilește ordinea exactă a cercurilor, astfel încât să redea traseul călătoriei noastre geografice din acest an școlar, de la orizontul local la Sistemul Solar.");
buf.push("</div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p61_ex3_jos.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a61-terra-ex-3'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});