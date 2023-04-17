registerChapter({ chapter: "v2-ch01-p10-11", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Munții Carpați');
jade_mixins["subtitle"]('Paginile 10 - 11');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a10-ex1',
          top: 9.5349,
          left: 57,
          width: 37,
          height: 5.3953,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a10-ex2',
          top: 15.2093,
          left: 57,
          width: 37,
          height: 14.3256,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a10-ex3',
          top: 29.7209,
          left: 57,
          width: 37,
          height: 9.2093,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a10-ex4',
          top: 39.1163,
          left: 57,
          width: 37,
          height: 3.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a10-ex5',
          top: 42.6512,
          left: 57,
          width: 37,
          height: 9.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a10-retine',
          top: 61.814,
          left: 5,
          width: 50,
          height: 24.6511,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a10-retine-video-2',
          top: 86.5581,
          left: 5,
          width: 50,
          height: 10.6977,
          type: 'video'
        }
      ],
      image: 'v2/p10.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a11-exerseaza',
          top: 9.3488,
          left: 5,
          width: 61,
          height: 7.6279,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a11-ex1',
          top: 42.186,
          left: 5,
          width: 90,
          height: 9.0233,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a11-ex2',
          top: 51.5814,
          left: 5,
          width: 90,
          height: 8.9302,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a11-ex3',
          top: 60.9767,
          left: 5,
          width: 90,
          height: 8.7442,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a11-ex4',
          top: 70.093,
          left: 5,
          width: 90,
          height: 4.9302,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a11-ex5',
          top: 75.3023,
          left: 5,
          width: 90,
          height: 1.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a11-ex6',
          top: 77.6279,
          left: 5,
          width: 90,
          height: 3.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a11-ex1-explica',
          top: 87.3953,
          left: 5,
          width: 41,
          height: 3.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a11-ex2-explica',
          top: 91.1163,
          left: 5,
          width: 41,
          height: 5.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a11-portofoliu',
          top: 83.2093,
          left: 47.1462,
          width: 48.0425,
          height: 13.3953,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a11-exerseaza-a1',
          top: 17.1628,
          left: 5,
          width: 61,
          height: 8.186,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a11-exerseaza-a2',
          top: 25.814,
          left: 5,
          width: 61,
          height: 8.186,
          type: 'audio'
        }
      ],
      image: 'v2/p11.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a10-descopera'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut\">");
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Analizează harta Carpaților Occidentali. Cu ce unități de relief se învecinează Carpații Occidentali? ");
}
}, "v2/s2_p10_descopera_01");
jade_mixins["validator"].call({
block: function(){
jade_mixins["multiRegex"]({
          name: 'art-g4v2-a10-ex1-a',
          hasIsDoneBox: false,
          regexps: [
            ["^carpa[t|ț]ii meridionali$"],
            ["^c[a|â]mpia de vest$"],
            ["^dealurile de vest$"],
            ["^depresiunea colinar[a|ă] a transilvaniei$","^depresiunea transilvaniei$"],
          ],
          textlines: [
            {placeholder: '...', className: 'col-md-6', size: '30'},
            {placeholder: '...', className: 'col-md-6', size: '30'},
            {placeholder: '...', className: 'col-md-6', size: '30'},
            {placeholder: '...', className: 'col-md-6', size: '30'},
          ],
          statementClassName: 'row',
          containerClassName: 'row'
        });
}
});
jade_mixins["img"]("img/v2/v2_p10_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a10-ex1-1'});
}
}, {id: 'art-g4v2-a10-ex1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a17-ex2-pickoneInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Citește următoarele enunțuri. Alege din paranteze cuvintele care exprimă realitatea geografică reprezentată pe hartă.");
}
}, "v2/s2_p10_descopera_02");
buf.push("<span>Carpații Occidentali se întind între Valea Dunării ( </span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['la nord','la sud'], { name: 'art-g4v2-a10-ex2-pick-1',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">) și Valea Barcăului </span><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['la nord','la sud'], { name: 'art-g4v2-a10-ex2-pick-2',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">. Reprezintă cea mai </span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['continuă','fragmentată'], { name: 'art-g4v2-a10-ex2-pick-3',  ignoreAvatar: false, placement:'right'});
buf.push("</div><span class=\"triger\">) și mai ramură carpatică.</span><div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v2/v2_p10_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a10-ex2-1'});
}
}, {id: 'art-g4v2-a10-ex2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Scrie numele următorilor munți în ordinea așezării lor, de la nord spre sud:  <em>Almăjului, Bihor, Plopiș, Poiana Ruscă, Semenic, Zarandului</em>. Subliniază cei mai înalți munți.");
}
}, "v2/s2_p10_descopera_03");
buf.push("<div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a10-ex3-textline-1", type: 'text', max: 50,regexp: '^Plopi[s|ș]$',size:'35', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a10-ex3-textline-2", type: 'text', max: 50,regexp: '^Bihor$',size:'35', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a10-ex3-textline-3", type: 'text', max: 50,regexp: '^Zarandului$',size:'35', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a10-ex3-textline-4", type: 'text', max: 50,regexp: '^Poiana Rusc[a|ă]',size:'35', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a10-ex3-textline-5", type: 'text', max: 50,regexp: '^Semenic$',size:'35', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a10-ex3-textline-6", type: 'text', max: 50,regexp: '^Alm[a|ă]jului$',size:'35', placeholder: '...'});
buf.push("</div><div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v2/v2_p10_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a10-ex3-1'});
}
}, {id: 'art-g4v2-a10-ex3', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](4, "Numește depresiunile din Carpații Occidentali. Notează-le în caiet.");
}
}, {id: 'art-g4v2-a10-ex4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](5, "Identifică râurile care izvorăsc din Carpații Occidentali? Notează-le în caiet. Cum se numește râul care izvorăște din Carpații Orientali și traversează Carpații Occidentali?");
}
}, {id: 'art-g4v2-a10-ex5'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p10_foto_1.png");
buf.push("<div class=\"small-text\">Linia Oravița-Anina, prima cale ferată montană (străbate M. Aninei), inaugurată în 1863</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p10_foto_2.png");
buf.push("<div class=\"small-text\">Munții Trascăului</div></div></div>");
}
}, {id: 'art-g4v2-a10-poze'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p10_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a10-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p10_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a10-retine-video-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\"> <strong>Carpații Occidentali </strong>sunt situați între Valea Dunării, la sud, și Valea Barcăului, la nord. Prin comparație cu celelalte ramuri carpatice, culmile muntoase din Carpații Occidentali nu mai păstrează aceeași continuitate.</div><div class=\"indent\">Munții sunt alcătuiți din roci variate, unele mai puțin dure, fapt pentru care au înălțimi reduse, sub 2 000 m (cei mai înalți sunt Munții Bihor, cu 1 849 m) și culmile mai domoale, rotunjite, despărțite de râuri și depresiuni. Sunt acoperiți cu păduri de fag și doar în zonele mai înalte de conifere.</div><div class=\"indent\">Este ramura carpatică cea mai populată, cu sate situate la înălțimi mai mari. Sunt bogați în minereuri de fier, de aur, de argint ș.a. Ocupațiile principale ale oamenilor sunt exploatarea și prelucrarea lemnului și a minereurilor, creșterea animalelor.</div>");
}
});
}
}, {id: 'art-g4v2-a10-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v2-a11-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Exersează</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Munții Banatului reprezintă grupa sudică a Carpaților Occidentali, care se întinde până la Dunăre. Această grupă montană este formată din munți mai scunzi, înălțimile lor maxime fiind sub 1 500 m. Peisajele deosebite de aici, dar și influențele climatice dinspre Marea Mediterană au impus ocrotirea unor specii de plante și animale unice în România.</div>");
}
}, 'v2/s2_p11_exerseaza_1');
jade_mixins["img"]('img/v2/v2_p11_exerseaza_1-audio.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a11-exerseaza', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Exersează</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Munții Poiana Ruscă sunt cuprinși între văile râurilor Mureș, Strei și Bistra. Cu peisaje pitorești și tradiții bine păstrate, această regiune montană mai izolată, numită de locuitori „Ținutul Pădurenilor“ are altitudinea maximă în Vârful Padeș (1 374 m). Cele mai importante bogății ale acestor munți sunt marmura și minereurile de fier exploatate de „pădureni“ din timpuri străvechi.</div>");
}
}, 'v2/s2_p11_exerseaza_2');
jade_mixins["img"]('img/v2/v2_p11_exerseaza_20audio.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a11-exerseaza-a1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Exersează</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Munții Apuseni reprezintă cea mai extinsă grupă montană a Carpaților Occidentali. Datorită rocilor din care sunt alcătuiți, prezintă peisaje naturale deosebite, cu creste abrupte, cu peșteri (scobituri naturale în interiorul munților), cu văi adânci și înguste numite chei, cu căderi frumoase de apă numite cascade. Pentru protejarea peisajelor naturale, a plantelor și animalelor sălbatice s-a înființat Parcul Natural Apuseni. În acest paradis al naturii, turiștii pot vizita cele mai spectaculoase peșteri din România: peștera Urșilor, Scărișoara, Vârtop, Meziad etc.</div>");
}
}, 'v2/s2_p11_exerseaza_3');
jade_mixins["img"]('img/v2/v2_p11_exerseaza_3-audio.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a11-exerseaza-a2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a11-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Precizează, pentru fiecare ramură montană: grupele de munți, râurile care le mărginesc, munții cei mai înalți. Completează tabelul:");
}
}, "v2/s2_p11_aplica_01");
jade_mixins["validator"].call({
block: function(){
buf.push("<div class=\"table-responsive\"><table class=\"art-g4-v2-p11-table\"><tr> <th>Grupa de munți </th><th>Râurile care mărginesc grupa </th><th>Munții cei mai înalți </th><th> <span>Înălțimea </span><br/><span>(m)</span></th></tr><tr> <td>Carpații Orientali</td><td>Prahova</td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a11-ex1-textline-1", type: 'text', max: 50,regexp: '^Rodnei$',size:'20', placeholder: '...'});
buf.push("</td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a11-ex1-textline-2", type: 'text', max: 50,regexp: '^2 303|2303$',size:'20', placeholder: '...'});
buf.push("</td></tr><tr> <td>Carpații Meridionali</td><td> ");
jade_mixins["multiRegex"]({
                  name: 'art-g4v2-a11-ex1-r-1',
                  hasIsDoneBox: false,
                  regexps: [
                    ["^cerna$"],
                    ["^prahova$"],
                    ["^timi[s|ș]$"],
                  ],
                  textlines: [
                    {placeholder: '...', className: 'col-md-12'},
                    {placeholder: '...', className: 'col-md-12'},
                    {placeholder: '...', className: 'col-md-12'},
                  ],
                  statementClassName: 'row',
                  containerClassName: 'row'
                });
buf.push("</td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a11-ex1-textline-3", type: 'text', max: 50,regexp: '^F[a|ă]g[a|ă]ra[s|ș]$',size:'20', placeholder: '...'});
buf.push("</td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a11-ex1-textline-4", type: 'text', max: 50,regexp: '^2 544|2544$',size:'20', placeholder: '...'});
buf.push("</td></tr><tr> <td> ");
jade_mixins["textline"]({name: "art-g4v2-a11-ex1-textline-5", type: 'text', max: 50,regexp: '^Carpa[t|ț]ii Occidentali$',size:'20', placeholder: '...'});
buf.push("</td><td> ");
jade_mixins["multiRegex"]({
                  name: 'art-g4v2-a11-ex1-r-2',
                  hasIsDoneBox: false,
                  regexps: [
                    ["^barc[a|ă]u$", "^bistri[t|ț]a$", "^cerna$", "^dun[a|ă]re$", "^strei$", "^timi[s|ș]$"],
                    ["^bistri[t|ț]a$", "^barc[a|ă]u$", "^dun[a|ă]re$", "^strei$", "^timi[s|ș]$", "^cerna$"],
                    ["^cerna$", "^bistri[t|ț]a$", "^barc[a|ă]u$", "^dun[a|ă]re$", "^strei$", "^timi[s|ș]$"],
                    ["^dun[a|ă]re$", "^bistri[t|ț]a$", "^barc[a|ă]u$", "^cerna$", "^strei$", "^timi[s|ș]$"],
                    ["^strei$", "^bistri[t|ț]a$", "^barc[a|ă]u$", "^cerna$", "^dun[a|ă]re$", "^timi[s|ș]$"],
                    ["^timi[s|ș]$", "^bistri[t|ț]a$", "^barc[a|ă]u$", "^cerna$", "^dun[a|ă]re$", "^strei$"],
                    
                  ],
                  textlines: [
                    {placeholder: '...', className: 'col-md-12'},
                    {placeholder: '...', className: 'col-md-12'},
                    {placeholder: '...', className: 'col-md-12'},
                    {placeholder: '...', className: 'col-md-12'},
                    {placeholder: '...', className: 'col-md-12'},
                    {placeholder: '...', className: 'col-md-12'},
                  ],
                  statementClassName: 'row',
                  containerClassName: 'row'
                });
buf.push("</td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a11-ex1-textline-6", type: 'text', max: 50,regexp: '^Bihor$',size:'20', placeholder: '...'});
buf.push("</td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a11-ex1-textline-7", type: 'text', max: 50,regexp: '^1 849|1849$',size:'20', placeholder: '...'});
buf.push("</td></tr></table><div class=\"is-done-box\"></div></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a11-ex1-t'});
}
}, {id: 'art-g4v2-a11-ex1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Completează spațiile libere din următoarele enunțuri:");
}
}, "v2/s2_p11_aplica_02");
buf.push("<ul class=\"art-g4-v2\"><li> <div class=\"inline-block\">Cea mai înaltă ramură a Carpaților Românești este situată în partea de </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a11-ex2-textline-1", type: 'text', max: 50,regexp: '^sud$',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">a Depresiunii Colinare a Transilvaniei.</div></li><li> <div class=\"inline-block\">Dunărea mărginește la sud Carpații </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a11-ex2-textline-2", type: 'text', max: 50,regexp: '^[O|o]ccidentali$',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">.</div></li><li> <div class=\"inline-block\">Cea mai mare depresiune se numește </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a11-ex2-textline-3", type: 'text', max: 50,regexp: '^[D|d]epresiunea Bra[s|ș]ovului$',size:'25', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">și este situată în grupa </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a11-ex2-textline-4", type: 'text', max: 50,regexp: '^[S|s]udic[a|ă]$',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">a Carpaților </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a11-ex2-textline-5", type: 'text', max: 50,regexp: '^Orientali$',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">.</div></li></ul><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a11-ex2-t'});
}
}, {id: 'art-g4v2-a11-ex2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<ul class=\"art-g4-v2\"><li>Carpații Occidentali au înălțimile cele mai mari în Munții Banatului.</li><li>Munții Călimani sunt cei mai înalți munți din grupa Parâng.</li><li>Locuitorii din zona montană se ocupă cu cultivarea plantelor, exploatarea și prelucrarea lemnului, exploatarea resurselor de subsol.</li></ul>");
}
}, 3, "Reformulează enunțurile următoare astfel încât să devină adevărate.");
}
}, {id: 'art-g4v2-a11-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](4, "Râurile Olt și Mureș izvorăsc din Munții Hășmașu Mare, dar curg în direcții diferite. Din ce ramură carpatică izvorăsc aceste râuri? Numește râul care traversează de la nord la sud Carpații Meridionali și se varsă în Dunăre.");
}
}, {id: 'art-g4v2-a11-ex4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](5, "Cum sunt temperaturile, precipitațiile și vânturile în Carpați, comparativ cu dealurile și câmpiile?");
}
}, {id: 'art-g4v2-a11-ex5'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](6, "Pe harta de contur a României, desenează și colorează Munții Carpați, respectând culorile convenționale. Scrie apoi denumirea grupelor de munți și a celor mai înalți munți din fiecare grupă.");
}
}, {id: 'art-g4v2-a11-ex6'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Explică  </div></div>");
}
}, {id: 'art-g4v2-a11-explica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Datorită cărui element cei mai înalți și mai masivi munți se găsesc în Carpații Meridionali?");
}
}, {id: 'art-g4v2-a11-ex1-explica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Din ce cauză cea mai numeroasă populație din zona montană se găsește în Carpații Occidentali?");
}
}, {id: 'art-g4v2-a11-ex2-explica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Portofoliu</div></div>");
}
}, {id: 'art-g4v2-a11-portofoliu-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Adună din cărți, din reviste, din enciclopedii sau de pe internet imagini și informații despre locuri deosebite din Carpații Românești. Realizează o fișă cu imagini și scurte informații pentru fiecare ramură carpatică. Atașează aceste materiale la portofoliu.</div>");
}
}, {id: 'art-g4v2-a11-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});