registerChapter({ chapter: "v1-ch02-p56-57", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Activitățile economice - A. Resursele și activitățile industriale');
jade_mixins["subtitle"]("Paginile 56 - 57");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a56-observa-1',
          top: 13.5349,
          left: 4.5,
          width: 92,
          height: 18.8837,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a56-retine',
          top: 32.7907,
          left: 4.5,
          width: 52.8774,
          height: 17.2093,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a56-aplica',
          top: 32.8837,
          left: 58.2311,
          width: 38.4906,
          height: 17.2093,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a56-observa-2',
          top: 50.5581,
          left: 4.5,
          width: 92,
          height: 30.4186,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a56-descopera',
          top: 81.3488,
          left: 4.5,
          width: 92,
          height: 15.1628,
          type: 'blank'
        }
      ],
      image: 'v1/p56.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a57-retine-1',
          top: 4.8837,
          left: 4.5,
          width: 52.9953,
          height: 29.0233,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a57-vocabular',
          top: 34.186,
          left: 3.9104,
          width: 53.5896,
          height: 15.2558,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a57-retine-2',
          top: 17.0698,
          left: 58,
          width: 37,
          height: 18.0465,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a57-aplica-1',
          top: 49.814,
          left: 3.7925,
          width: 54,
          height: 17.5814,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a57-aplica-2',
          top: 67.8605,
          left: 3.8,
          width: 54,
          height: 14.2326,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a57-explica-1',
          top: 82.7442,
          left: 3.79,
          width: 54,
          height: 8.7442,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a57-explica-2',
          top: 91.5814,
          left: 3.79,
          width: 54,
          height: 5.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a57-retine-3',
          top: 35.3023,
          left: 58,
          width: 37,
          height: 8.7442,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a57-retine-4',
          top: 44.5116,
          left: 58,
          width: 37,
          height: 21.6744,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a57-retine-5',
          top: 66.3721,
          left: 58,
          width: 37,
          height: 7.4419,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a57-retine-6',
          top: 74.093,
          left: 58,
          width: 37,
          height: 22.7907,
          type: 'audio'
        }
      ],
      image: 'v1/p57.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-u2"]('15.', "Activitățile economice<br>A. Resursele și activitățile industriale","România – caracteristici introduse de om");
}
}, {id: 'art-g4v1-a56-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a56-observa-1-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">În imaginile alăturate sunt prezentate activitățile care asigură produsele necesare existenței și bunăstării noastre. Ele sunt grupate pe patru domenii.</div><ol class=\"art-g4-u2\"><li>Citește domeniile de activitate.</li><li>Cu ce se ocupă oamenii care lucrează în agricultură? Ce produse ne asigură prin activitățile lor?</li><li>Ce importanță au transporturile pentru existența noastră?</li></ol><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/v1_p56_observa_1.png");
buf.push("</div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/v1_p56_observa_2.png");
buf.push("</div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/v1_p56_observa_3.png");
buf.push("</div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/v1_p56_observa_4.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a56-observa-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p56_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a56-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Activitățile desfășurate de oameni pentru producerea bunurilor necesare vieții lor alcătuiesc <strong>economia</strong>. Aceasta cuprinde mai multe ramuri (domenii) de activitate: <em>industria, agricultura, transporturile</em>, la care se adaugă și alte activități foarte importante (<em>comerțul, turismul, activitățile culturale, medicale, educative, sportive, de recreere </em>etc.).</div>");
}
});
}
}, {id: 'art-g4v1-a56-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v1-a56-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a56-aplicaInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Formează cu literele de mai jos cuvântul care desemnează totalitatea activităților întreprinse de oameni pentru obținerea bunurilor necesare existenței noastre.</div>");
}
}, "v1/p56_aplica");
buf.push("<span>C &nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp; O &nbsp;&nbsp;&nbsp; N &nbsp;&nbsp;&nbsp; O &nbsp;&nbsp;&nbsp; M &nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp; I &nbsp;&nbsp;&nbsp;</span><span>&rarr; </span><div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a56-aplicaa", type: 'text', max: 10,regexp: '^(ECONOMIE|economie|Economie)$',size:'20', placeholder: '...'});
buf.push("</div><br/>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a56-aplicaex'});
}
}, {id: 'art-g4v1-a56-aplica', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Observă</div><div>Privește imaginile de mai jos. Care sunt bogățiile/resursele naturale ale solului? Dar ale subsolului? </div><div>Toate aceste bogății ale solului și ale subsolului reprezintă resurse naturale. Rocile sunt folosite în construcții, lemnul arborilor pentru fabricarea mobile dar și pentru încălozirea locuințelor, petrolul și gazele naturale sunt utilizate pentru producerea de benzină, motorină, pentru încălzire și în multe alte ramuri industriale. Cărbunii sunt încă folosiți pentru încălzirea locuințelor. Dacă nu protejăm aceste resurse, la un moment dat ele se vor termina!</div>");
}
}, "v1/p56_observa");
buf.push("<div class=\"row\"><div class=\"col-xs-6\"><div class=\"art-g4-img-80\">");
jade_mixins["img"]("img/v1/v1_p56_observa_paduri.png");
buf.push("<br/>");
jade_mixins["img"]("img/v1/v1_p56_observa_roci.png");
buf.push("</div></div><div class=\"col-xs-6\"><div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/v1_p56_observa_gaze.png");
buf.push("</div></div><div class=\"col-xs-5\">");
jade_mixins["img"]("img/v1/v1_p56_observa_ape.png");
buf.push("</div><div class=\"col-xs-7\"><br/>");
jade_mixins["img"]("img/v1/v1_p56_observa_carbuni.png");
buf.push("</div></div></div>");
}
}, {id: 'art-g4v1-a56-observa-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v1-a56-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Citește textul următor:</div><div class=\"indent\"><em>„În pântecele acestor munți zac comorile minerale cele mai bogate și mai felurite din Europa: sarea, fierul, argintul, arama, plumbul [...] și, în sfârșit, metalul cel mai îmbelșugat decât toate, aurul.“</em></div><div class=\"right\">(Nicolae Bălcescu – <em>Românii supt Mihai Voievod Viteazul</em>)</div><ul class=\"art-g4-u2\"><li>Alege cuvintele care au același înțeles cu termenul „comori“ dintre: bogății, natură, resurse, produse.</li><li>Numește „comorile“ prezentate în text. Unde se găsesc ele?</li></ul>");
}
}, {id: 'art-g4v1-a56-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p57_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a57-retine-1', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Prin activitățile lor, oamenii transformă bogățiile naturii în produse necesare existenței și bunăstării noastre. Toate bogățiile oferite de natură, care sunt folositoare oamenilor, se numesc <em>resurse naturale</em>. După locul în care se găsesc aceste resurse, se deosebesc: <em>resurse ale solului </em>(pădurile, terenurile agricole, apele) și <em>resurse ale subsolului </em>(cărbunii, petrolul, gazele naturale, sarea, minereurile de fier, minereurile neferoase precum cuprul, plumbul, aurul și argintul, rocile de construcție). Resursele subsolului sunt epuizabile și de aceea trebuie exploatate cu grijă, fără a face risipă. Principala resursă naturală a României o reprezintă terenurile arabile.</div>");
}
});
}
}, {id: 'art-g4v1-a57-retine-1-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular </div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"terms\">rocă – </div>&nbsp; structură naturală solidă care intră în alcătuirea formelor de relief<br/><span>Rocile de construcție (marmura, granitul etc.) sunt folosite de om în diferite activități. De exemplu, din calcar se obține cimentul, varul sau ipsosul. Granitul, marmura și travertinul se folosesc atât la decorarea locuințelor, cât și în diferite alte construcții. Locurile de unde se extrag rocile de construcție sunt numite… cariere.</span>");
}
}, "v1/s1_p57_vocabular");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p57_vocabular-3.jpg");
buf.push("<div class=\"center\">carieră de calcar Munții Apuseni </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p57_vocabular-1.jpg");
buf.push("<div class=\"center\">carieră de granit Munții Măcinului  </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p57_vocabular-2.jpg");
buf.push("<div class=\"center\">carieră de marmură Munții Poiana Ruscă</div></div></div></div>");
}
}, {id: 'art-g4v1-a57-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Activitățile prin care oamenii exploatează și transformă resursele naturale în diferite produse folositoare, cu ajutorul mașinilor și instalațiilor din întreprinderi, fabrici, uzine, reprezintă <strong>activități industriale</strong>. Acestea formează <strong>industria</strong>. </div><div class=\"indent\">Curentul electric este produs de <em>industria energetică </em>în <em>termocentrale</em>, care folosesc cărbunii, petrolul și gazele naturale, și în hidrocentrale, care folosesc forța apelor curgătoare.</div><div class=\"indent\">Produsele din metal, obținute, prin transformarea minereurilor de fier și neferoase, în <em>industria metalurgică</em>, sunt apoi prelucrate în <em>industria construcțiilor de mașini </em>în multe produse utile: motoare, unelte, aparate electrocasnice (frigidere, mașini de spălat, aspiratoare etc.), aparate electrice și electronice (aparate de radio, televizoare, computere etc.), mijloace de transport (autovehicule, nave, locomotive, vagoane, avioane etc.), tractoare ș.a.</div><div class=\"indent\"> <em>Industria chimică </em>transformă petrolul, sarea, gazele naturale, lemnul în produse necesare oamenilor (cauciuc, obiecte din plastic, detergent, hârtie, cerneală etc.). <em>Industria lemnului </em>produce mobilă și alte produse din lemn, <em>industria materialelor de construcție </em>produce ciment, sticlă, obiecte din faianță, <em>industria textilă</em>, materiale pentru îmbrăcăminte, <em>industria alimentară</em>, produse pentru alimentația omului.</div><div class=\"indent\">În țara noastră se desfășoară toate tipurile de activități industriale în orașe, care sunt numite <em>centre industriale</em>. Toate marile orașe din țară sunt centre industriale.</div>");
}
});
}
}, {id: 'art-g4v1-a57-retine-2-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține</div><div>Activitățile prin care oamenii exploatează și transformă resursele naturale în diferite produse folositoare, cu ajutorul mașinilor și instalațiilor din întreprinderi, fabrici, uzine, reprezintă activități industriale. Acestea formează industria. </div>");
}
}, "v1/p57_retine_1");
buf.push("<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_1.jpg');
buf.push("<div class=\"text-center\">exploatarea lemnului</div></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_2.jpg');
buf.push("<div class=\"text-center\">minereuri feroase</div></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_3.jpg');
buf.push("<div class=\"text-center\">extracția rocilor de construcții</div></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_4.jpg');
buf.push("<div class=\"text-center\">extracția cărbunilor</div></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_5.jpg');
buf.push("<div class=\"text-center\">carieră de minereuri neferoase</div></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_6.jpg');
buf.push("<div class=\"text-center\">extracția petrolului și a gazelor naturale</div></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_7.jpg');
buf.push("<div class=\"text-center\">salină (mină pentru extracția sării)</div></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/p57_retine_1_8.jpg');
buf.push("<div class=\"text-center\">exploatarea apelor curgătoare</div></div></div></div>");
}
}, {id: 'art-g4v1-a57-retine-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține</div><div>Curentul electric este produs de industria energetică în termocentrale, care folosesc cărbunii, petrolul și ga­zele naturale, și în hidrocentrale, care folosesc forța apelor curgătoare. </div>");
}
}, "v1/p57_retine_2");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/p57_retine_2_1.jpg');
buf.push("<div class=\"text-center\">termocentrala de la Rovinari produce energie electrică și termică pe bază de cărbune</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/p57_retine_2_2.jpg');
buf.push("<div class=\"text-center\">hidrocentrala de la Porțile de Fier este cea mai mare din România</div></div></div></div>");
}
}, {id: 'art-g4v1-a57-retine-3', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține</div><div>Produsele din metal obținute prin transformarea minereurilor de fier și neferoase, în industria metalurgică, sunt apoi prelucrate în industria construcțiilor de mașini în multe produse utile: motoare, unelte, aparate electrocasnice (frigidere, mașini de spălat, aspiratoare etc.), aparate electrice și electronice (aparate de radio, televizoare, compu­tere etc.), mijloace de transport (autove­hi­cule, nave, locomotive, vagoane, avioane etc.), tractoare.</div>");
}
}, "v1/p57_retine_3");
buf.push("<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\">");
jade_mixins["img"]('img/v1/p57_retine_3_1.jpg');
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-6\"><div class=\"art-g4-img-80\">");
jade_mixins["img"]('img/v1/p57_retine_3_2.png');
buf.push("</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/p57_retine_3_3.png');
buf.push("</div></div><div class=\"text-center\">Combinatul de la Galați prelucrează minereuri de fier dar și deșeuri reciclabile de fier vechi. Produce oțel și produse din oțel</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_3_4.jpg');
buf.push("<div class=\"text-center\">la Șantierul  Naval de la  Galați se construiesc și se repară vapoare</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_3_5.jpg');
buf.push("<div class=\"text-center\">mai vechi  sau mai noi, vagoanele  românești sunt fabricate la  Arad</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_3_6.jpg');
buf.push("<div class=\"text-center\">la Mioveni,  lângă Pitești, se fabrică  autoturismele  Dacia</div></div></div></div>");
}
}, {id: 'art-g4v1-a57-retine-4', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține</div><div>Industria chimică transformă petro­lul, sarea, gazele naturale, lemnul în produse necesare oamenilor (cauciuc, obiecte din plastic, detergent, hârtie, cerneală etc.). Industria lemnului produ­ce mobilă și alte produse din lemn.</div>");
}
}, "v1/p57_retine_4");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_4_1.jpg');
buf.push("<div class=\"text-center\">rafinăria de la Brazi unde se prelucrează petrolul</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_4_2.jpg');
buf.push("<div class=\"text-center\">producerea de medicamente</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_4_3.jpg');
buf.push("<div class=\"text-center\">mobila este un produs al industriei lemnului</div></div></div></div>");
}
}, {id: 'art-g4v1-a57-retine-5', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține</div><div>Industria materialelor de construcție pro­duce ciment, sticlă, obiecte din faianță, industria textilă, materiale pen­tru îmbrăcăminte, industria alimen­tară, produse pentru alimentația omului. În țara noastră se desfășoară toate tipurile de activități industriale în orașe, care sunt numite centre industriale. Toate marile orașe din țară sunt centre industriale.</div>");
}
}, "v1/p57_retine_5");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_1.jpg');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_2.jpg');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_3.jpg');
buf.push("</div></div><div class=\"text-center\">Pentru producerea cimentului, a varului și a altor materiale de construcție, rocile se exploatează din cariere, apoi se prelucrează în fabrici.</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_4.jpg');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_5.jpg');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_6.jpg');
buf.push("</div></div><div class=\"text-center\">Pentru fabricarea obiectelor de îmbrăcăminte, lâna suferă un lung șir de procese.</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_7.jpg');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_8.jpg');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/p57_retine_5_9.jpg');
buf.push("</div></div><div class=\"text-center\">Colectarea și prelucrarea laptelui pentru a se obține produsele de consum.</div></div>");
}
}, {id: 'art-g4v1-a57-retine-6', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v1-a57-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/v1_p57_aplica_masa-scaune.png");
buf.push("</div><div class=\"col-sm-3\"><div class=\"art-g4-img-60\">");
jade_mixins["img"]("img/v1/v1_p57_aplica_becuri.png");
jade_mixins["img"]("img/v1/v1_p57_aplica_trusa.png");
buf.push("</div></div><div class=\"col-sm-3\"><div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/v1_p57_aplica_anvelope.png");
buf.push("</div></div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/v1_p57_aplica_avion.png");
buf.push("</div></div>");
}
}, 1, "Numește pentru fiecare dintre produsele de mai jos resursele naturale folosite și industria care le-a produs.");
}
}, {id: 'art-g4v1-a57-aplica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<ul class=\"art-g4-u2\"><li>Identifică, pentru fiecare treaptă de relief, principalele resurse ale subsolului. Notează informațiile în caiet.</li><li>Identifică principalele centre industriale din România.</li><li>Localizează aceste centre industriale pe harta murală a României.</li></ul>");
}
}, 2, "Caută în Atlasul geografic al României <em>harta resurselor naturale</em> și <em>harta economică</em>.");
}
}, {id: 'art-g4v1-a57-aplica-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div> Explică </div></div>");
}
}, {id: 'art-g4v1-a57-explica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](1, "Ce urmări are epuizarea resurselor subsolului pentru viața și bunăstarea oamenilor?");
}
}, {id: 'art-g4v1-a57-explica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](2, "Curentul electric este foarte necesar, dar resursele naturale folosite pentru producerea sa sunt pe cale de a se termina. Ce ar trebui să facă oamenii pentru a avea curent electric și pe viitor?");
}
}, {id: 'art-g4v1-a57-explica-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});