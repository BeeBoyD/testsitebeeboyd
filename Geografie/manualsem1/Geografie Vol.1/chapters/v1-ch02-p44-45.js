registerChapter({ chapter: "v1-ch02-p44-45", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Limite și vecini');
jade_mixins["subtitle"]('Paginile 44 - 45');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      number: '44',
      hotspots: [
        {
          atom: 'art-g4v1-a44-observa-1',
          top: 14.7442,
          left: 5.3,
          width: 92,
          height: 10.9767,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a44-descopera-1',
          top: 26.093,
          left: 5.3,
          width: 92,
          height: 16.7442,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a44-descopera-2',
          top: 43.2093,
          left: 5.3,
          width: 92,
          height: 7.0698,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a44-observa-2',
          top: 51.2093,
          left: 5.3,
          width: 55.8255,
          height: 44.9302,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a44-retine',
          top: 60.4186,
          left: 62.1226,
          width: 35.467,
          height: 37.4884,
          type: 'video'
        }
      ],
      image: 'v1/p44.jpg'
    },
    {
      number: '45',
      hotspots: [
        {
          atom: 'art-g4v1-a45-aplica-1',
          top: 5.4419,
          left: 5.3,
          width: 92,
          height: 6.2326,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a45-aplica-2',
          top: 11.5814,
          left: 5.3,
          width: 92,
          height: 3.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a45-aplica-3',
          top: 15.3023,
          left: 5.3,
          width: 92,
          height: 1.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a45-exerseaza-1',
          top: 17.7209,
          left: 4.5,
          width: 92,
          height: 25.4884,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a45-exerseaza-2',
          top: 43.4884,
          left: 4.5,
          width: 92.9434,
          height: 23.814,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a45-explica',
          top: 68.3256,
          left: 4.5,
          width: 48.9858,
          height: 29,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a45-joc',
          top: 67.9535,
          left: 54.5755,
          width: 42.9717,
          height: 29.7442,
          type: 'blank'
        }
      ],
      image: 'v1/p45.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-u2"]('11.','Limite și vecini','România - limite și vecini');
}
}, {id: 'art-g4v1-a44-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a44-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Care este suprafața ocupată de țara noastră? Cea colorată cu verde sau cea colorată cu portocaliu? Cu ce culoare este colorată linia curbă închisă care reprezintă conturul României?</div>");
jade_mixins["img"]("img/v1/v1_p44_observa.png");
}
}, {id: 'art-g4v1-a44-observa-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v1-a44-descopera-T-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<em>„Călătorii străini care-au străbătut văile României [...] în căruțele de poștă de-acum patruzeci de ani, cu greu ar mai cunoaște astăzi locurile pe unde-au umblat [...] Moșia lui Mircea ș-a lui Ștefan, libera și mândra Românie de azi, nemaicrescând în lături, a trebuit să crească-n sus și saltă zi cu zi [...]. Din hotar în hotar, în lung și-n lat, o prind acum, ca-ntr-o rețea, șosele netede, pietruite, și linii ferate înșirând pe firele lor orașele înfloritoare și sutele de fabrici ce scot la lumină bogățiile țării.“</em><div class=\"right\">(Alexandru Vlahuță – <em>România pitorească</em>)</div>");
}
}, 1, "Citește textul următor. Găsește cuvântul care semnifică limita până la care se întinde teritoriul României.");
}
}, {id: 'art-g4v1-a44-descopera-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](2, "Alege, din caseta alăturată, cuvintele care au același înțeles și care semnifică limita ce desparte o țară de altă țară.");
buf.push("<div class=\"row\"><div class=\"col-sm-7\"><div class=\"indent\">Notează în caiet cuvintele respective și caută, în dicționare sau în alte surse, și alți termeni care au același înțeles.</div></div><div class=\"col-sm-5\"><div class=\"art-g4-blue-border-u2\"><em>apus, hotar, vest, orizont, graniță, zare.</em></div></div></div>");
}
}, {id: 'art-g4v1-a44-descopera-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a44-observa-T-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a44-observa-2Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Analizează harta granițelor și vecinilor României. Urmărește pe hartă granițele României și apoi răspunde la următoarele întrebări.</div>");
}
}, "v1/p44_observa");
jade_mixins["img"]("img/v1/v1_p44_observa_harta.png");
buf.push("<br/>");
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<strong>Granițe  </strong>");
jade_mixins["multiRegex"].call({
block: function(){
}
}, {
          name: 'art-g4v1-a44-observa-mregexp', 
          hasIsDoneBox: false,
          regexps: [
            ["^conven[t|ț]ionale$", "^pe uscat$", "^naturale$", "^pe ap[a|ă]$"],
            ["^naturale$", "^pe ap[a|ă]$", "^conven[t|ț]ionale$", "^pe uscat$"],
          ],
          textlines: [
            {placeholder: '....', max:'30', className: 'col-sm-6'},
            {placeholder: '....', max:'30', className: 'col-sm-6'}
          ],
          statementClassName: 'row',
          containerClassName: 'row'
        });
}
}, 1, "De câte feluri sunt granițele?");
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2c", type: 'text', max: 30,regexp: '^(Tisa|Mure[ș|s]ul|Mure[ș|s]|Dun[ă|a]re|Dun[ă|a]rea|Prut|Prutul)$',size:'15', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2d", type: 'text', max: 30,regexp: '^(Tisa|Mure[ș|s]ul|Mure[ș|s]|Dun[ă|a]re|Dun[ă|a]rea|Prut|Prutul)$',size:'15', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2e", type: 'text', max: 30,regexp: '^(Tisa|Mure[ș|s]ul|Mure[ș|s]|Dun[ă|a]re|Dun[ă|a]rea|Prut|Prutul)$',size:'15', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2f", type: 'text', max: 30,regexp: '^(Tisa|Mure[ș|s]ul|Mure[ș|s]|Dun[ă|a]re|Dun[ă|a]rea|Prut|Prutul)$',size:'15', placeholder: '...'});
buf.push("</div>");
}
}, 2, "Numește apele care formează granițele naturale. ");
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<strong>Localitățile între care granița cu Bulgaria este naturală sunt: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2g", type: 'text', max: 30,regexp: '^(Pristol|C[ă|a]l[ă|a]ra[ș|s]i)$',size:'20', placeholder: '...'});
buf.push("</div> și <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2h", type: 'text', max: 30,regexp: '^(Pristol|C[ă|a]l[ă|a]ra[ș|s]i)$',size:'20', placeholder: '...'});
buf.push("</div>.</strong><br/><strong>Localitățile între care granița cu Bulgaria este convențională sunt: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2i", type: 'text', max: 30,regexp: '^(Vama Veche|C[ă|a]l[ă|a]ra[ș|s]i)$',size:'20', placeholder: '...'});
buf.push("</div> și <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a44-observa-2j", type: 'text', max: 30,regexp: '^(Vama Veche|C[ă|a]l[ă|a]ra[ș|s]i)$',size:'20', placeholder: '...'});
buf.push("</div></strong>");
}
}, 3, "Numește localitățile între care granița cu Bulgaria este naturală și pe cele între care granița cu această țară este convențională.");
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a44-observa-2ex'});
}
}, {id: 'art-g4v1-a44-observa-2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p44_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a44-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Fiecare țară ocupă un anumit teritoriu dintr-un continent. Linia imaginară care desparte teritoriul unei țări de teritoriul altei țări vecine se numește <strong>graniță</strong>. Această linie a fost stabilită prin înțelegerea dintre țările vecine. Ea poate fi trasată pe uscat (și atunci se numește graniță <strong>convențională</strong>) sau poate să urmeze traseul unui element natural (râu, fluviu), situație în care granița este <strong>naturală</strong>. Pe hărți, granița este marcată printr-o linie continuă sau întreruptă.</div>");
}
});
}
}, {id: 'art-g4v1-a44-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a45-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](1, "În ce parte România are ieșire la Marea Neagră?");
}
}, {id: 'art-g4v1-a45-aplica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](2, "Numește țările vecine României. Notează-le pe caiet, cu liniuțe, unele sub altele. Precizează poziția acestora față de țara noastră.");
}
}, {id: 'art-g4v1-a45-aplica-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"](3, "Cum se numesc țările cu care se învecinează România între localitățile Pristol și Halmeu?");
}
}, {id: 'art-g4v1-a45-aplica-3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a45-exerseaza-1T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a45-exerseaza-1Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Citește, în tabel, lungimea graniței României cu fiecare țară vecină. Ordonează crescător țările vecine după lungimea totală a graniței pe care o au cu țara noastră.</div>");
}
}, "v1/p45_exerseaza");
buf.push("<table class=\"art-g4-table-u2\"><tr> <th>Țara vecină </th><th>Lungimea totală a graniței </th><th>Lungimea graniței naturale</th></tr><tr> <td>Bulgaria </td><td>631 km </td><td>470 km</td></tr><tr> <td>Republica Moldova</td><td>681 km </td><td>681 km</td></tr><tr> <td>Serbia</td><td>546 km</td><td>290 km</td></tr><tr> <td>Ucraina</td><td>650 km</td><td>344 km</td></tr><tr> <td>Ungaria </td><td>448 km </td><td>32 km </td></tr></table><div class=\"right\"> <em>(Valorile din tabel sunt rotunjite).</em></div>");
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<span data-index='3' class=\"item\">Bulgaria</span><span data-index='5' class=\"item\">Republica Moldova</span><span data-index='2' class=\"item\">Serbia</span><span data-index='4' class=\"item\">Ucraina</span><span data-index='1' class=\"item\">Ungaria</span>");
}
}, {name: 'art-g4v1-a45-exerseaza-1drag', scoreByRelativeOrder: true});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a45-exerseaza-1ex'});
}
}, {id: 'art-g4v1-a45-exerseaza-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p45_exerseaza_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p45_exerseaza_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p45_exerseaza_3.png");
buf.push("</div></div><div class=\"small-text\">Podul „Noua Europă“ dintre România și Bulgaria, prezentat în cele trei imagini de mai sus, este al doilea pod rutier și feroviar care traversează Dunărea (după „Podul Prieteniei“ dintre Giurgiu și Ruse). Acesta a fost inaugurat în anul 2013 și leagă localitățile Calafat (din România) și Vidin (din Bulgaria).</div><div class=\"small-text\">În afară de cele două poduri de peste Dunăre, legătura dintre România și Bulgaria mai este asigurată, în porțiunea de graniță convențională, de o cale ferată (Negru Vodă) și o șosea (Vama Veche)</div>");
}
}, {id: 'art-g4v1-a45-exerseaza-2-webview'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Descoperă</div><div>Granița României cu Bulgaria este atât naturală (pe Dunăre), cât și convențională. Între cele două țări există mai multe locuri prin care se realizează transportul mărfurilor și al persoanelor.</div>");
}
}, "v1/p45_observa");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p45_observa_1.jpg");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p45_observa_2.jpg");
buf.push("</div></div><div class=\"center\">Podul Calafat-Vidin în tipul construcției și după inaugurare</div><div class=\"row\"><div class=\"col-sm-offset-3 col-sm-6\">");
jade_mixins["img"]("img/v1/p45_observa_6.jpg");
buf.push("</div></div><div class=\"center\">Traversarea Dunării cu bacul, la Călărași</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p45_observa_3.jpg");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p45_observa_4.jpg");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p45_observa_5.jpg");
buf.push("</div></div><div class=\"center\">Punctul pe unde se trece granița la Giurgiu, intrarea pe Podul Prieteniei și sectorul rutier al podului</div></div>");
}
}, {id: 'art-g4v1-a45-exerseaza-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Explică</div></div>");
}
}, {id: 'art-g4v1-a45-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Explică de ce lungimea totală a graniței cu Republica Moldova este egală cu lungimea graniței naturale.</div><div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/v1_p45_explica.png");
buf.push("</div><div class=\"center\"><em>Râul Prut</em></div>");
}
}, {id: 'art-g4v1-a45-explica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox-u2"].call({
block: function(){
buf.push("<div style=\"margin-top: 0;\" class=\"indent\">Invită-ți colegul de bancă la un joc.</div><div style=\"margin-top: 0;\" class=\"indent\">Pregătește nouă bilețele de dimensiuni identice. Scrie pe fiecare numele unei țări vecine sau numele unei ape care formează graniță naturală.</div><div style=\"margin-top: 0;\" class=\"indent\">Așază bilețele împăturite într-un săculeț. Extrageți, pe rând, câte un bilețel și indicați poziția țării vecine față de România (în funcție de punctele cardinale) sau țara cu care râul respectiv formează graniță naturală.</div><div style=\"margin-top: 0;\" class=\"indent\">Câștigă cine dă cele mai multe răspunsuri corecte.</div>");
}
}, "JOC GEOGRAFIC");
}
}, {id: 'art-g4v1-a45-joc'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});