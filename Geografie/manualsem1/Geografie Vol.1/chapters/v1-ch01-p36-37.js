registerChapter({ chapter: "v1-ch01-p36-37", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Repere de timp: ora, ziua, săptămâna, anul, calendarul');
jade_mixins["subtitle"]('Paginile 36 - 37');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a36-aminteste-ti',
          top: 14.2791,
          left: 4,
          width: 93,
          height: 16,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a36-observa',
          top: 30.5581,
          left: 4,
          width: 93,
          height: 22.5116,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a36-descopera',
          top: 53.4419,
          left: 4,
          width: 93,
          height: 13.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a36-aplica',
          top: 67.5814,
          left: 4,
          width: 38.2925,
          height: 29.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a36-retine',
          top: 67.7674,
          left: 42.783,
          width: 54.5,
          height: 9.2093,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a36-retine-2',
          top: 77.0698,
          left: 43,
          width: 54.5,
          height: 5.2093,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a36-retine-3',
          top: 82.5581,
          left: 43,
          width: 54.5,
          height: 14.6047,
          type: 'video'
        }
      ],
      image: 'v1/p36.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a37-exerseaza-1',
          top: 5.1628,
          left: 4,
          width: 93,
          height: 8.093,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a37-exerseaza-2',
          top: 13.3488,
          left: 4,
          width: 93,
          height: 3.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a37-exerseaza-3',
          top: 16.9767,
          left: 4,
          width: 93,
          height: 5.6744,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a37-aminteste-ti',
          top: 23.1163,
          left: 4,
          width: 93,
          height: 12.7442,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a37-observa',
          top: 36.3256,
          left: 4,
          width: 93,
          height: 28.8372,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a37-exerseaza',
          top: 66,
          left: 4,
          width: 45,
          height: 31.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a37-aplica',
          top: 65.2558,
          left: 49.9292,
          width: 47.8821,
          height: 32.5581,
          type: 'exercise'
        }
      ],
      image: 'v1/p37.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('9.', "Repere de timp: ora, ziua, săptămâna, anul, calendarul",'Modificări observabile și repere de timp');
}
}, {id: 'art-g4v1-a36-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Amintește-ți</div></div><div class=\"indent\">Oamenii au simțit dintotdeauna nevoia să măsoare timpul, pentru că, astfel, puteau să-și organizeze activitățile în condiții mai bune. Pentru aceasta s-au folosit de schimbările naturale care se repetă, cu regularitate, la aceleași intervale de timp. Ciclul zi-noapte reprezintă, de fapt, o trecere regulată de la lumină la întuneric. Repetarea anotimpurilor la aceleași intervale de timp produce schimbări naturale ușor de sesizat. Observând că aceste modificări se produc cu regularitate, oamenii le-au folosit pentru măsurarea și împărțirea timpului.</div>");
}
}, {id: 'art-g4v1-a36-aminteste-tiT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Amintește-ți </div><div> Oamenii au simțit dintotdeauna nevoia să măsoare timpul, pentru că, astfel, puteau să-și organizeze activitățile în condiții mai bune. Pentru aceasta s-au folosit de schimbările naturale care se repetă, cu regularitate, la aceleași intervale de timp. </div>");
}
}, "v1/p36_aminteste-ti");
buf.push("<div class=\"row\"><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">cadran solar</div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_1.jpg");
buf.push("<br/></div><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">clepsidră</div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_2.png");
buf.push("<br/></div><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">ceasul lui Al Jazari</div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_3.jpg");
buf.push("<br/></div><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">ceas astronomic </div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_4.jpg");
buf.push("<br/></div></div><div class=\"row\"><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">ceas cu arc</div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_5.png");
buf.push("<br/></div><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">pendulă </div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_6.png");
buf.push("<br/></div><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">ceas electronic</div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_7.png");
buf.push("<br/></div><div class=\"col-sm-3 col-xs-6 text-center\"><div class=\"center\">ceas atomic</div>");
jade_mixins["img"]("img/v1/p36_aminteste-ti_8.jpg");
buf.push("<br/></div></div></div>");
}
}, {id: 'art-g4v1-a36-aminteste-ti', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă</div></div>");
}
}, {id: 'art-g4v1-a36-observaT'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a36-observaInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Imaginile alăturate îl prezintă pe Andrei în patru momente diferite ale zilei.</div><div class=\"indent\">Privește imaginile și răspunde cerințelor:</div>");
}
}, "v1/p36_observa");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a36-observa-a", type: 'text', max: 10,regexp: '^(7|7:00|07:00|7.00|07.00|7 00|07 00)$',size:'5', placeholder: '...'});
buf.push("</div></strong><div>La ce oră adoarme el seara?<br/><strong>Răspuns: </strong><div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"> </div>");
}
}, {name: "art-g4v1-a36-observa-b", type: 'text', max: 10,regexp: '^(10|10:00|10.00|10 00|22|22:00|22.00|22 00)$',size:'5', placeholder: '...'});
buf.push("</div></div><div>Ce interval de timp se scurge între aceste ore?<br/><strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a36-observa-c", type: 'text', max: 10,regexp: '^9$',size:'5', placeholder: '...'});
buf.push("</div></strong></div>");
}
}, 1,'La ce oră se trezește Andrei în fiecare zi?');
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>după oră;");
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<div data-index='1' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_1.png');
buf.push("</div><div data-index='4' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_2.png');
buf.push("</div><div data-index='2' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_3.png');
buf.push("</div><div data-index='3' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_4.png');
buf.push("</div><div class=\"is-done-box\"></div>");
}
}, {name: 'art-g4v1-a36-observa-d', scoreByRelativeOrder: false});
buf.push("</li><li>după ziua săptămânii.");
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<div data-index='2' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_1.png');
buf.push("</div><div data-index='3' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_2.png');
buf.push("</div><div data-index='1' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_3.png');
buf.push("</div><div data-index='4' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p36_observa_4.png');
buf.push("</div><div class=\"is-done-box\"></div>");
}
}, {name: 'art-g4v1-a36-observa-e', scoreByRelativeOrder: false});
buf.push("</li></ol>");
}
}, 2,'Ordonează imaginile:');
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a36-observaex'});
}
}, {id: 'art-g4v1-a36-observa', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v1-a36-descoperaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Transcrie pe caiet textele și subliniază momentele de timp la care se face referire în dialog.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/v1_p36_descopera_bula1.png');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/v1_p36_descopera_bula2.png');
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a36-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a36-aplicaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">În această mulțime de litere sunt ascunse șapte cuvinte. Descoperă aceste cuvinte și notează-le pe caiet. Ce reprezintă ele?</div><table class=\"art-g4-p36-table\"><tr><td>A </td><td>L </td><td>N </td><td>P </td><td>S </td><td>D </td><td>I </td><td>V</td></tr><tr><td>M </td><td>I </td><td>E </td><td>R </td><td>C </td><td>U </td><td>R </td><td>I</td></tr><tr><td>L </td><td>U </td><td>N </td><td>I </td><td>A </td><td>M </td><td>E </td><td>N</td></tr><tr><td>J </td><td>O </td><td>I </td><td>E </td><td>M </td><td>I </td><td>R </td><td>E</td></tr><tr><td>O </td><td>L </td><td>C </td><td>I </td><td>E </td><td>N </td><td>J </td><td>R</td></tr><tr><td>N </td><td>M </td><td>A </td><td>R </td><td>Ț </td><td>I </td><td>M </td><td>I</td></tr><tr><td>M </td><td>C </td><td>B </td><td>J </td><td>L </td><td>C </td><td>A </td><td>Ț</td></tr><tr><td>S </td><td>S </td><td>Â </td><td>M </td><td>B </td><td>Ă </td><td>T </td><td>Ă</td></tr></table>");
}
}, {id: 'art-g4v1-a36-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p36_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a36-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p36_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a36-retine-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p36_retine_03.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a36-retine-3', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<ul class=\"art-g4-orange\"><li>O zi (adică un ciclu zi-noapte) are durata unei rotații complete a Pământului în jurul axei sale. <em>Ziua </em>are 24 de <em>ore</em>.</li><li> <em>O săptămână </em>are 7 zile. Ordinea zilelor săptămânii este întotdeauna aceeași. Într-o <em>lună </em>sunt 4 săptămâni întregi, plus 2 sau 3 zile.</li><li>12 luni formează un an. <em>Anul </em>este timpul necesar Pământului pentru a face o rotație completă în jurul Soarelui. Aceasta se produce în 365 de zile și 6 ore. Anul are 365 de zile. Cele 6 ore se adună o dată la 4 ani și se formează o zi (6 x 4 = 24 ore), care se adaugă lunii februarie. Anul în care luna februarie are 29 de zile se numește an <em>bisect </em>și are 366 de zile.</li></ul>");
}
});
}
}, {id: 'art-g4v1-a36-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează </div></div>");
}
}, {id: 'art-g4v1-a37-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1, "Ce oră este acum? În ce zi a săptămânii este notată în orar <em>geografia</em>? În ce zile și între ce ore ești la școală? Câte ore petreci zilnic la școală? Care sunt zilele săptămânii când nu vii la școală?");
}
}, {id: 'art-g4v1-a37-exerseaza-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2, "În ce dată suntem astăzi? În ce anotimp și în ce an vei fi în clasa a V-a tot la această dată? În ce lună, anotimp și an a fost prima ta zi de școală? În ce lună, anotimp și an vei promova clasa a IV-a?");
}
}, {id: 'art-g4v1-a37-exerseaza-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div>Scrie în caiet fiecare rezultat. Care număr reprezintă</div><ul class=\"art-g4\"><li>câte zile sunt într-o săptămână? </li><li>câte săptămâni sunt într-o lună? </li><li>câte luni sunt într-un an?</li></ul>");
}
}, 3, "Calculează: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 + (6 : 3); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(30 + 40) : 10; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(4 x 4) – 4.");
}
}, {id: 'art-g4v1-a37-exerseaza-3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Amintește-ți </div></div><div class=\"indent\">Ordinea lunilor anului rămâne mereu aceeași. Oamenii au observat că unele schimbări naturale se desfășoară periodic, numai în anumite luni. Ca urmare, au grupat lunile după durata zilelor și a nopților și după fenomenele naturale care se produc. Așa au apărut anotimpurile; ele corespund momentelor parcurse de Pământ în jurul Soarelui. Fiecare anotimp durează 3 luni.</div>");
}
}, {id: 'art-g4v1-a37-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Amintește-ți </div><div> Ordinea lunilor anului rămâne mereu aceeași. Oamenii au observat că unele schimbări naturale se desfășoară periodic, numai în anumite luni. Ca urmare, au grupat lunile după durata zilelor și a nopților și după fenomenele naturale care se produc. Așa au apărut anotimpurile; ele corespund momentelor parcurse de Pământ în jurul Soarelui. Fiecare anotimp durează 3 luni.</div>");
}
}, "v1/p37_aminteste-ti");
buf.push("<div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/p37_aminteste-ti_1.png");
buf.push("<div class=\"center\">calendar egiptean</div></div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/p37_aminteste-ti_2.png");
buf.push("<div class=\"center\">calendar mayaș </div></div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/p37_aminteste-ti_3.png");
buf.push("<div class=\"center\">calendar chinezesc</div></div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v1/p37_aminteste-ti_4.jpg");
buf.push("<div class=\"center\">calendar actual (gregorian)</div></div></div></div>");
}
}, {id: 'art-g4v1-a37-aminteste-ti', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a37-observa-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a37-observaInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Ordonează corespunzător imaginile de mai jos astfel încât să respecte ordinea lunilor dintr-un an. Grupează lunile după anotimpul corespunzător.</div>");
}
}, "v1/p37_observa");
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<div data-index='4' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p37_observa_1.png');
buf.push("</div><div data-index='1' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p37_observa_2.png');
buf.push("</div><div data-index='5' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p37_observa_3.png');
buf.push("</div><div data-index='3' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p37_observa_4.png');
buf.push("</div><div data-index='2' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p37_observa_5.png');
buf.push("</div><div data-index='6' class=\"item\">");
jade_mixins["img"]('img/v1/v1_p37_observa_6.png');
buf.push("</div><div class=\"is-done-box\"></div>");
}
}, {name: 'art-g4v1-a37-observa-a', scoreByRelativeOrder: false});
buf.push("<div class=\"indent\"> Ce luni lipsesc?<br/></div>");
jade_mixins["multiRegex"].call({
block: function(){
}
}, {
          name: 'art-g4v1-a37-art-g4v1-a37-observa-mregexp', 
          hasIsDoneBox: false,
          regexps: [
            ["^aprilie$"],
            ["^februarie$"],
            ["iulie"],
            ["iunie"],
            ["mai"],
            ["octombrie"]
          ],
          textlines: [
            {placeholder: '....', max:'20', className: 'col-md-4'},
            {placeholder: '....', max:'20', className: 'col-md-4'},
            {placeholder: '....', max:'20', className: 'col-md-4'},
            {placeholder: '....', max:'20', className: 'col-md-4'},
            {placeholder: '....', max:'20', className: 'col-md-4'},
            {placeholder: '....', max:'20', className: 'col-md-4'}
          ],
          statementClassName: 'row',
          containerClassName: 'row'
        });
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a37-observaex'});
}
}, {id: 'art-g4v1-a37-observa', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează </div></div>");
}
}, {id: 'art-g4v1-a37-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Scrie în caiet numele fiecărei luni și cifra romană corespunzătoare. Grupează lunile după anotimp.</div><div class=\"art-g4-img-70\">");
jade_mixins["img"]('img/v1/v1_p37_exerseaza_bula.png');
buf.push("</div>");
}
}, {id: 'art-g4v1-a37-exerseaza'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a37-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a37-aplicaInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Atenți la schimbările care au loc în jurul lor, oamenii au dat și alte denumiri lunilor anului (denumiri populare). Asociază numele fiecărei luni din coloana A cu denumirea sa populară din coloana B.</div>");
}
}, "v1/p37_aplica");
jade_mixins["connect-points"].call({
block: function(){
buf.push("<div class=\"row\"><div data-group=\"stanga\" class=\"col-xs-4\"><div class=\"text-center art-g4-blue-text\">A</div><ol class=\"art-g4-lowercase\"><li class=\"choice pin-to\">Ianuarie<div data-name=\"s1\" class=\"connector pin-right\"></div></li><li class=\"choice pin-to\">Mai<div data-name=\"s2\" class=\"connector pin-right\"></div></li><li class=\"choice pin-to\">Iunie<div data-name=\"s3\" class=\"connector pin-right\"></div></li><li class=\"choice pin-to\">Iulie<div data-name=\"s4\" class=\"connector pin-right\"></div></li></ol></div><div class=\"col-xs-4\"> </div><div data-group=\"dreapta\" class=\"col-xs-4\"><div class=\"text-center art-g4-blue-text\">B</div><ol class=\"art-g4\"><li class=\"choice pin-to\">Cireșar<div data-name=\"d1\" class=\"connector pin-left\"></div></li><li class=\"choice pin-to\">Cuptor<div data-name=\"d2\" class=\"connector pin-left\"></div></li><li class=\"choice pin-to\">Florar<div data-name=\"d3\" class=\"connector pin-left\"></div></li><li class=\"choice pin-to\">Gerar<div data-name=\"d4\" class=\"connector pin-left\"></div></li></ol></div></div>");
}
}, {name: 'help10-1', orientation: 'horizontal',connections: [['s1', 'd4'],['s2', 'd3'],['s3', 'd1'],['s4', 'd2']]});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a37-aplicaex'});
}
}, {id: 'art-g4v1-a37-aplica', class:'art-g4-interactiv'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});