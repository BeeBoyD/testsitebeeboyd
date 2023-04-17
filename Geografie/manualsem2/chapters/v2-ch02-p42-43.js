registerChapter({ chapter: "v2-ch02-p42-43", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Poziția geografică a României în Europa: limite și vecini');
jade_mixins["subtitle"]('Paginile 42 - 43');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a42-aminteste-ti-T',
          top: 18.9302,
          left: 5,
          width: 38,
          height: 13.0233,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a42-retine-1',
          top: 32.4186,
          left: 5,
          width: 38,
          height: 21.6744,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a42-observa',
          top: 18.8372,
          left: 43.6085,
          width: 52,
          height: 53.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a42-descopera-ex-1',
          top: 59.7674,
          left: 5,
          width: 38,
          height: 20,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a42-descopera-ex-2',
          top: 80.2326,
          left: 5,
          width: 38,
          height: 5.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a42-descopera-ex-3',
          top: 85.6279,
          left: 5,
          width: 38,
          height: 11.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a42-vocabular',
          top: 72.5116,
          left: 43.4906,
          width: 52,
          height: 8.8372,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a42-retine-2',
          top: 81.7209,
          left: 43.7264,
          width: 52,
          height: 15.4419,
          type: 'video'
        }
      ],
      image: 'v2/p42.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a43-descopera',
          top: 9.1628,
          left: 5,
          width: 90,
          height: 20.4651,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-aplica',
          top: 35.5814,
          left: 5,
          width: 90,
          height: 18.6047,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-retine',
          top: 54.7442,
          left: 5,
          width: 38,
          height: 21.6744,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a43-exerseaza-ex-1',
          top: 59.6744,
          left: 43,
          width: 52,
          height: 3.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-exerseaza-ex-2',
          top: 63.5814,
          left: 43,
          width: 52,
          height: 5.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-exerseaza-ex-3',
          top: 68.9767,
          left: 43,
          width: 52,
          height: 5.6744,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-exerseaza-ex-4',
          top: 74.5581,
          left: 43,
          width: 52,
          height: 5.7674,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-activitate',
          top: 81.0698,
          left: 43,
          width: 52,
          height: 15.907,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-explica-ex-1',
          top: 81.7209,
          left: 5,
          width: 38,
          height: 9.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a43-explica-ex-2',
          top: 91.3023,
          left: 5,
          width: 38,
          height: 5.3953,
          type: 'blank'
        }
      ],
      image: 'v2/p43.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('9.', "Poziția geografică a României în Europa: limite și vecini",'România în Europa');
}
}, {id: 'art-g4v2-a42-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Amintește-ți</div>");
}
}, {id: 'art-g4v2-a42-aminteste-ti'});
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
buf.push("<div class=\"indent\">Pe suprafața Pământului se găsesc întinderi foarte mari de uscat, numite continente. Alege literele corecte dintre cele de mai jos și formează numele continentului pe care trăim:</div>");
}
}, "v2/s2_p42_aminteste-ti");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"btn btn-lg bad\">L </div><div class=\"btn btn-lg good\">U </div><div class=\"btn btn-lg good\">E </div><div class=\"btn btn-lg good\">R </div><div class=\"btn btn-lg good\">A </div><div class=\"btn btn-lg bad\">S </div><div class=\"btn btn-lg good\">O </div><div class=\"btn btn-lg good\">P </div>");
}
}, {name: 'art-g4v2-a42-aminteste-ti-select'});
buf.push("<br/>");
jade_mixins["textline"]({name: "art-g4v2-a42-aminteste-ti-textline-1", type: 'text', max: 10, regexp:'^EUROPA|Europa$',size:'15', placeholder: '...'});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a42-aminteste-ti-select'});
}
}, {id: 'art-g4v2-a42-aminteste-ti-T', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Observă </div>");
}
}, {id: 'art-g4v2-a42-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\">În Europa se pot identifica mai multe întinderi care au caracteristici geografice comune. Acestea poartă numele de <em>regiuni </em>și cuprind o serie de state.</div><div class=\"indent\">Analizează harta de mai jos și răspunde la următoarele întrebări:");
jade_mixins["art-g4-ex-v2-c9"](1, "În ce parte a Europei este situat statul marcat pe hartă cu cifra 1? Din ce regiune europeană face parte acest stat?");
jade_mixins["art-g4-ex-v2-c9"](2, "În ce parte a Europei este situată țara noastră? Din ce regiune a Europei face parte România?");
buf.push("</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p42_harta.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a42-observa'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Continentul pe care ne aflăm se numește <strong>Europa</strong>. De aceea spunem că România este o <strong>țară europeană</strong>. Locuitorii Europei se numesc <strong>europeni</strong>. Noi suntem români pentru că trăim în România și europeni pentru că țara noastră este situată în Europa.</div>");
}
}, 'v2/s2_p42_retine');
jade_mixins["img"]('img/v2/v2_p42_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a42-retine-1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a42-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9\"><li>oceanul care mărginește Europa la nord: (250 x 10) + 300 = ?</li><li>marea care mărginește Europa la sud: 580 + 1000 – 530 = ?</li><li>oceanul care mărginește Europa la vest: 5600 : 2 = ?</li><li>munții care limitează Europa la est: (1300 x 2) + (140 x 0) = ?</li></ol>");
}
}, 1, "Efectuează calculele și vei afla la ce distanță (în kilometri) este situată România față de:");
}
}, {id: 'art-g4v2-a42-descopera-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](2, "Scrie în caiet la ce distanță este situată România față de fiecare extremitate/limită a Europei.");
}
}, {id: 'art-g4v2-a42-descopera-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ul class=\"art-g4-v2-c9\"><li>România este situată la distanțe aproape egale față de:</li></ul><ol class=\"art-g4-lowercase-v2-c9\"><li>estul, nordul și sudul Europei;</li><li>estul, nordul și vestul Europei.</li></ol>");
}
}, 3, "Compară aceste distanțe și alege varianta corectă:");
}
}, {id: 'art-g4v2-a42-descopera-ex-3'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> <strong><em>extremitate </em></strong>– limită, margine, capăt, parte extremă</div>");
}
}, 'v2/s2_p42_vocabular');
jade_mixins["img"]('img/v2/v2_p42_vocabular.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a42-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p42_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a42-retine-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\"> <strong>România este situată în Europa Centrală</strong>. Prin poziția sa aproape centrală în cadrul continentului european, țara noastră se află la distanțe aproximativ egale de limita vestică, nordică și estică a continentului și la o distanță mai mică de extremitatea sa sudică.</div>");
}
});
}
}, {id: 'art-g4v2-a42-retine-2-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a43-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Citește textul de mai jos, apoi răspunde următoarelor întrebări:</div><div class=\"indent\"><em>Dacă rechemați în minte o imagine a hărții României, veți vedea în mijloc Carpații Românești, care intră în țară la hotarul cu Ucraina spre a ieși apoi pe la Porțile-de-Fier, în Serbia. La sud se întinde Dunărea, care, obosită după drumul lung prin cele zece țări europene, își varsă apele răsfirate în bătrâna mare, numită în antichitate Pontus Euxinus.</em></div><ul class=\"art-g4-v2-c9\"><li>Ce înțelegi prin expresia „Carpații Românești”?</li><li>Câte state traversează fluviul Dunărea de la izvoare până la vărsare?</li><li>Cum se numea, în antichitate, Marea Neagră?</li></ul>");
}
}, {id: 'art-g4v2-a43-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Aplică </div>");
}
}, {id: 'art-g4v2-a43-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\">Analizează harta alăturată, apoi copiază pe caiet propozițiile următoare și scrie A („adevărat”) sau F („fals”), pentru fiecare enunț:</div><ul class=\"art-g4-v2-c9\"><li>Țările traversate de fluviul Dunărea se numesc țări dunărene.</li><li>Munții Carpați se află în totalitate pe teritoriul țării noastre.</li><li>Țările care au ieșire la Marea Neagră se numesc țări pontice.</li></ul></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p43_harta.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a43-aplica'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Poziția geografică a României în Europa se poate defini prin trei elemente naturale de importanță europeană, incluse în teritoriul sau la hotarele sale: </div><strong>Munții Carpați</strong>, <strong>Dunărea </strong>și <strong>Marea Neagră</strong>. Ca urmare, România este o <strong>țară carpato-dunăreano-pontică</strong>.");
}
}, 'v2/s2_p43_retine');
jade_mixins["img"]('img/v2/v2_p43_retine.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a43-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Explică </div>");
}
}, {id: 'art-g4v2-a43-explica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](1, "De ce Nicolas, prietenul lui George, a localizat foarte repede România pe harta Europei, după ce a aflat că este o țară carpatică, dunăreană și cu ieșire la Marea Neagră?");
}
}, {id: 'art-g4v2-a43-explica-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](2, "Precizează ce importanță au pentru România Munții Carpați, Dunărea și Marea Neagră.");
}
}, {id: 'art-g4v2-a43-explica-ex-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Exersează </div>");
}
}, {id: 'art-g4v2-a43-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](1, "Localizează România pe harta murală a Europei. Precizează poziția geografică a României față de limitele Europei.");
}
}, {id: 'art-g4v2-a43-exerseaza-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](2, "Localizează pe harta murală a Europei Munții Carpați. Cu ajutorul hărților din <em>Atlasul geografic</em>, identifică țările carpatice. Notează-le în caiet.");
}
}, {id: 'art-g4v2-a43-exerseaza-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](3, "Urmărește pe harta murală a Europei traseul Dunării, de la izvoare la vărsare. Cu ajutorul hărților din <em>Atlasul geografic</em>, identifică țările dunărene. Notează-le în caiet.");
}
}, {id: 'art-g4v2-a43-exerseaza-ex-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](4, "Cu ajutorul hărților din <em>Atlasul geografic</em>, identifică țările vecine României care au ieșire la Marea Neagră. Notează-le în caiet.");
}
}, {id: 'art-g4v2-a43-exerseaza-ex-4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-purplebox-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Măsurați pe harta de mai sus distanțele dintre țara noastră și limita vestică, respectiv nordică a Europei. Calculați distanțele reale, știind că 1 cm de pe hartă = 500 km în realitate. Comparați rezultatele. Corespund rezultatele voastre cu distanțele calculate anterior, la <em>exercițiul 1 </em>de la rubrica <em>Descoperă?</em></div>");
}
}, "Activitate în perechi");
}
}, {id: 'art-g4v2-a43-activitate'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});