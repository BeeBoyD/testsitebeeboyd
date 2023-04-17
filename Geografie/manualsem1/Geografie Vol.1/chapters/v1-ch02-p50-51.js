registerChapter({ chapter: "v1-ch02-p50-51", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Clima, apele, vegetația, animalele și solurile');
jade_mixins["subtitle"]("Paginile 50 - 51");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a50-aplica-6',
          top: 4.7791,
          left: 4.5,
          width: 92,
          height: 9.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a50-aplica-7',
          top: 14.093,
          left: 4.5,
          width: 92,
          height: 4.2791,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a50-exerseaza-1-1',
          top: 18.9302,
          left: 4.5,
          width: 92,
          height: 12,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a50-exerseaza-1-2',
          top: 31.2093,
          left: 4.5,
          width: 92,
          height: 11.1628,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a50-observa',
          top: 43.4884,
          left: 4.5,
          width: 92,
          height: 36.6512,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a50-exerseaza-2-1',
          top: 80.6047,
          left: 4.5,
          width: 92,
          height: 11.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a50-exerseaza-2-2',
          top: 92.2326,
          left: 4.5,
          width: 92,
          height: 4.2791,
          type: 'blank'
        }
      ],
      image: 'v1/p50.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a51-aplicatie-practica',
          top: 4.5116,
          left: 4.5,
          width: 38.1368,
          height: 35.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a51-retine-1',
          top: 4.6047,
          left: 43.7264,
          width: 53.7028,
          height: 50.8837,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a51-vocabular',
          top: 40.6047,
          left: 4.5,
          width: 38.1368,
          height: 14.9767,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a51-aplica-1',
          top: 71.0233,
          left: 4.5,
          width: 39.0802,
          height: 14.5116,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a51-aplica-2',
          top: 86.3721,
          left: 4.5,
          width: 39,
          height: 4.7442,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a51-aplica-3',
          top: 91.6744,
          left: 4.5,
          width: 39.08,
          height: 4.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a51-retine-2',
          top: 71.1163,
          left: 44.0802,
          width: 53.467,
          height: 25.9535,
          type: 'audio'
        }
      ],
      image: 'v1/p51.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<table class=\"art-g4-table-u2\"><tr> <th>Râul </th><th>Afluenți</th></tr><tr> <td>&nbsp; </td><td>&nbsp; </td></tr></table>");
}
}, 6, "Identifică pe harta hidrografică a României cele mai lungi râuri din țara noastră. Completează pe caiet un tabel asemănător:");
}
}, {id: 'art-g4v1-a50-aplica-6'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](7, "Identifică, împreună cu colegul tău de bancă, un râu care traversează regiunea voastră natală. Cum se numește? Unde se varsă? Notați în caiet.");
}
}, {id: 'art-g4v1-a50-aplica-7'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Exersează</div></div><div class=\"indent\">Răspunde următoarelor cerințe:</div>");
}
}, {id: 'art-g4v1-a50-exerseaza-1-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](1, "Ce sunt lacurile? Unele lacuri au fost amenajate de oameni pe râuri, pentru a fi folosite la producerea curentului electric. Identifică astfel de lacuri și notează-le în caiet. Identifică și alte lacuri care se găsesc pe teritoriul României. Unde sunt situate cele mai multe lacuri?");
}
}, {id: 'art-g4v1-a50-exerseaza-1-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Exersează </div><div>În partea de sud-est, România are ieșire la Marea Neagră. Marea se aseamănă cu lacurile, dar nu face parte din grupul apelor stătătoare. Mările și oceanele formează un grup separat de ape, foarte întinse, sărate, care înconjoară continentele și sunt legate între ele. Privește harta Mării Negre. Cu ce culoare este marcată apa mării? De ce culoarea este mai închisă spre mijloc și mai deschisă spre țărmuri?</div>");
}
}, "v1/p50_exerseaza");
jade_mixins["img"]("img/v1/p50_exerseaza.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a50-exerseaza-1-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a50-observa-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a50-observaInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Privește cu atenție imaginile din partea stângă și asociază fiecare text cu imaginea la care se referă.</div>");
}
}, "v1/p50_observa");
jade_mixins["connect-points"].call({
block: function(){
buf.push("<div data-group=\"stanga\" class=\"row\"><div class=\"col-xs-4 choice pin-to\"><div data-name=\"s1\" class=\"connector pin-bottom\"></div>");
jade_mixins["img"]("img/v1/v1_p50_observa_1.jpg");
buf.push("</div><div class=\"col-xs-4 choice pin-to\"><div data-name=\"s2\" class=\"connector pin-bottom\"></div>");
jade_mixins["img"]("img/v1/v1_p50_observa_2.jpg");
buf.push("</div><div class=\"col-xs-4 choice pin-to\"><div data-name=\"s3\" class=\"connector pin-bottom\"></div>");
jade_mixins["img"]("img/v1/v1_p50_observa_3.jpg");
buf.push("</div></div><br/><br/><br/><div class=\"row\"><div class=\"col-xs-4 choice pin-to\"> <div data-name=\"d1\" class=\"connector pin-top\"></div><div class=\"art-g4-chenar-v1-p50\"><span>În regiunile joase cresc ierburi mărunte și din loc în loc arbuști (măceș). Aici trăiesc rozătoare (iepure, hârciog, șoarece de câmp) și multe păsări (ciocârlia, prepelița, potârnichea).</span></div></div><div class=\"col-xs-4 choice pin-to\"> <div data-name=\"d2\" class=\"connector pin-top\"></div><div class=\"art-g4-chenar-v1-p50\"><span>În regiunile deluroase se întâlnesc păduri de foioase cu stejar, fag, ulm, tei, arțar etc. Fagul crește și în părțile mai joase ale munților. Aici se întâlnesc mistrețul, lupul, căprioara, vulpea, veverița, iar dintre păsări, cucul, mierla, privighetoarea.</span></div></div><div class=\"col-xs-4 choice pin-to\"> <div data-name=\"d3\" class=\"connector pin-top\"></div><div class=\"art-g4-chenar-v1-p50\"><span>În regiunile muntoase sunt răspândite pădurile de conifere cu brad, molid, pin. Animalele care trăiesc aici sunt ursul, cerbul, râsul și păsări precum cocoșul de munte, acvila (pajura).</span></div></div></div>");
}
}, {name: 'art-g4v1-a50-observa-connect', orientation: 'vertical',connections: [['s1', 'd2'],['s2', 'd3'],['s3', 'd1']]});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a50-observaex'});
}
}, {id: 'art-g4v1-a50-observa', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Exersează </div></div>");
}
}, {id: 'art-g4v1-a50-exerseaza-2-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](1, "Identifică în imagini animalele prezentate în textele de mai sus. Numește și alte specii de plante și animale care trăiesc în regiunile de câmpie, de deal și de munte");
}
}, {id: 'art-g4v1-a50-exerseaza-2-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](2, "Dă exemple de plante și animale sălbatice care trăiesc în apropierea localității tale.");
}
}, {id: 'art-g4v1-a50-exerseaza-2-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox-u2"].call({
block: function(){
buf.push("<div class=\"indent\">Pe crestele înalte ale munților, din cauza frigului și a vântului puternic, pădurile lasă locul unei vegetații mărunte, formată din arbuști pitici (ienupăr, jneapăn, afin) și mai sus din ierburi mici, cu flori viu colorate (floarea de colț, bujorul de munte). Aici trăiesc capra neagră și acvila de munte.</div><div class=\"indent\">Caută și identifică în Atlasul botanic speciile de plante menționate și în Atlasul zoologic speciile de animale. Cum arată floarea de colț? Știai că este ocrotită prin lege și că nu avem voie să o rupem? Cum arată capra neagră? De ce are un corp zvelt? Știai că acest animal este protejat prin lege, fiind una dintre speciile cele mai valoroase ale faunei din țara noastră?</div>");
}
}, "Aplicație practică");
}
}, {id: 'art-g4v1-a51-aplicatie-practica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p51_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a51-retine-1', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Relieful, clima și apele influențează răspândirea <strong>vegetației </strong>și a <strong>faunei</strong>. În strânsă legătură cu acestea sunt <strong>solurile</strong>.</div><div class=\"indent\">La <strong>câmpie </strong>și pe unele <strong>dealuri </strong>foarte <strong>joase </strong>se întâlnesc ierburi mărunte și arbuști care formează <strong>vegetația de stepă</strong>. Aici trăiesc rozătoarele și multe păsări. Solurile sunt foarte fertile, adică foarte prielnice pentru cultura plantelor, mai ales cereale.</div><div class=\"indent\">În regiunile mai înalte sunt răspândite <strong>pădurile</strong>. Acestea urcă până la cel mult 1.800 m altitudine. Pe <strong>dealurile </strong>și <strong>podișurile </strong>mai joase cresc stejari, arțari, tei ș.a. Pe dealurile mai înalte și la poalele munților crește fagul. Împreună, acești arbori formează <strong>pădurile de foioase </strong>(cu arbori care își pierd frunzele toamna), în care trăiesc diferite animale și multe păsări. Solurile din regiunile de deal și de podiș au o fertilitate mai mică, dar sunt favorabile pentru culturile de viță-de-vie și de pomi fructiferi.</div><div class=\"indent\">În <strong>munți </strong>sunt răspândite <strong>pădurile de conifere </strong>(arbori cu frunze veșnic verzi). Aici se întâlnesc mai puține specii de animale și de păsări. Pe crestele înalte ale munților cresc numai tufișuri joase și ierburi mărunte. Solurile din munți sunt mai subțiri sau chiar lipsesc la înălțimile cele mai mari, unde se pot observa doar stânci goale.</div>");
}
});
}
}, {id: 'art-g4v1-a51-retine-1-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p51_retine_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p51_retine_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p51_retine_3.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a51-retine-img'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular</div><div class=\"terms\">fertil (fertilitate) – </div>&nbsp; proprietate a solului de a asigura plantelor substanțele nutritive, apa și aerul de care acestea au nevoie pentru creșterea și dezvoltarea lor");
}
}, "v1/p51_vocabular");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p51_vocabular_1.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p51_vocabular_2.png");
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-8\"><div>Și tu poți ajuta la protejarea solurilor, consumând alimente naturale, cât mai proaspete, care să nu conțină conservanți, coloranți și alte substanțe toxice. De asemenea, poți păstra solurile curate având mai multă grijă unde și cum arunci sau depozitezi gunoiul. Păstrază apele curate, și solurile vor fi, la sândul lor, sănătoase!</div></div><div class=\"col-sm-4\"><div class=\"flip\">");
jade_mixins["img"]("img/v1/avatar/drona_eco_verde.png");
buf.push("</div></div></div></div>");
}
}, {id: 'art-g4v1-a51-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v1-a51-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a51-aplica-1Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](1, "Alege literele și formează cuvântul care desemnează stratul fertil de la suprafața pământului, în care există apă și diferite substanțe:");
}
}, "v1/p51_aplica_01");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"btn btn-lg bad\">A </div><div class=\"btn btn-lg good\">L </div><div class=\"btn btn-lg good\">S</div><div class=\"btn btn-lg good\">O </div><div class=\"btn btn-lg bad\">C </div>");
}
}, {name: 'art-g4v1-a51-aplica-1ex-select'});
buf.push("<strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a51-aplica-1a", type: 'text', max: 5,regexp: '^(SOL|Sol|sol)$',size:'5', placeholder: '...'});
buf.push("</div></strong><br/>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a51-aplica-1ex'});
}
}, {id: 'art-g4v1-a51-aplica-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](2, "Există vreo legătură între formele de relief, viețuitoare și soluri?");
}
}, {id: 'art-g4v1-a51-aplica-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](3, "Ce importanță are pădurea pentru om? Ce s-ar întâmpla dacă nu ar mai exista arbori?");
}
}, {id: 'art-g4v1-a51-aplica-3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține </div><div>Pentru a păstra echilibrul naturii, plantele și animalele trebuie protejate. Vegetația, mai ales cea de pădure, însănătoșește aerul. Arborii dau stabilitate solului prin rădăcinile lor și îl protejează de inundații. De asemenea, pădurea îi oferă omului lemnul folositor în construcții sau la fabricarea mobilei. </div>");
}
}, "v1/p51_retine");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p51_retine_1.jpg");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p51_retine_2.jpg");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p51_retine_3.jpg");
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-8\"><div>Pentru a se bucura, atât în prezent cât și în viitor, de aer, de ape și de soluri curate, precum și de plantele și de animalele din jur, oamenii trebuie să le ocrotească.</div></div><div class=\"col-sm-4\"><div class=\"flip\">");
jade_mixins["img"]("img/v1/avatar/drona_eco_verde.png");
buf.push("</div></div></div></div>");
}
}, {id: 'art-g4v1-a51-retine-2', class:'art-g4-audio'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});