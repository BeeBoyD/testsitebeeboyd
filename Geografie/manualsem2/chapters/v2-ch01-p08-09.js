registerChapter({ chapter: "v2-ch01-p08-09", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Munții Carpați');
jade_mixins["subtitle"]('Paginile 8 - 9');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a08-ex1',
          top: 9.4419,
          left: 5,
          width: 90,
          height: 2.0465,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a08-ex2',
          top: 11.4884,
          left: 5,
          width: 90,
          height: 7.0698,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a08-ex3',
          top: 18.9302,
          left: 5,
          width: 90,
          height: 3.4419,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a08-ex4',
          top: 22.6512,
          left: 5,
          width: 90,
          height: 42.9768,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a08-retine',
          top: 67.2093,
          left: 5,
          width: 50,
          height: 20.186,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a08-ex1-aplica',
          top: 71.0233,
          left: 55.5,
          width: 39,
          height: 7.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a08-ex2-aplica',
          top: 78.7442,
          left: 55.5,
          width: 39,
          height: 3.907,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a08-retine-video-2',
          top: 87.5814,
          left: 5,
          width: 50,
          height: 9.3953,
          type: 'video'
        }
      ],
      image: 'v2/p08.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a09-retine',
          top: 4.9767,
          left: 5,
          width: 34.5,
          height: 30.9767,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a09-aplica-text',
          top: 36.7907,
          left: 57,
          width: 39,
          height: 17.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a09-retine2',
          top: 76.0465,
          left: 5,
          width: 52,
          height: 8,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a09-ex1',
          top: 80.2326,
          left: 57.5,
          width: 37,
          height: 5.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a09-ex2',
          top: 85.6279,
          left: 57.5,
          width: 37,
          height: 11.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a09-retine-a-1',
          top: 84.0465,
          left: 5,
          width: 52,
          height: 3.3488,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a09-retine-a-2',
          top: 87.5814,
          left: 5,
          width: 52,
          height: 3.6279,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a09-retine-a-3',
          top: 91.4884,
          left: 5,
          width: 52,
          height: 5.4884,
          type: 'audio'
        }
      ],
      image: 'v2/p09.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a08-descopera'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
buf.push(" ");
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Analizează harta Carpaților Meridionali. Cu ce unități de relief se învecinează Carpații Meridionali la nord și la sud? ");
}
}, "v2/s2_p8_descoepra_01");
buf.push("<div class=\"inline-block\"><span>La nord: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex1-textline-1", type: 'text', max: 50,regexp: '^Depresiunea Colinar[a|ă] a Transilvaniei|Depresiunea Transilvaniei',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>La sud: &nbsp; </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex1-textline-2", type: 'text', max: 50,regexp: '^Subcarpa[t|ț]ii|Subcarpa[t|ț]ii Getici$',size:'35', placeholder: '...'});
buf.push("</div><div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v2/v2_p8_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a08-ex1-t'});
}
}, {id: 'art-g4v2-a08-ex1', class:'art-g4-interactiv'});
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
}, "v2/s2_p8_descopera_02");
buf.push("<span>Carpații Meridionali se desfășoară pe direcția (</span><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['est-vest','nord-sud'], { name: 'art-g4v2-a08-ex2-pick-1',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">), între Valea (</span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['Ialomiței','Prahovei'], { name: 'art-g4v2-a08-ex2-pick-2',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">) și văile râurilor (</span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['Timiș și Mureș','Timiș și Cerna'], { name: 'art-g4v2-a08-ex2-pick-3',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">). Sunt munți (</span><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['înalți','scunzi'], { name: 'art-g4v2-a08-ex2-pick-4',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">), cu numeroase vârfuri (</span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['sub','peste'], { name: 'art-g4v2-a08-ex2-pick-5',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">) 2 500 m.</span><div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v2/v2_p8_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a08-ex2-t'});
}
}, {id: 'art-g4v2-a08-ex2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Scrie numele următorilor munți în ordinea așezării lor, de la est spre vest: <em>Cernei, Căpățânii, Făgăraș, Leaota, Parâng, Vâlcan</em>.");
}
}, "v2/s2_p8_descopera_03");
buf.push("<div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex3-textline-6", type: 'text', max: 50,regexp: '^Leaota',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex3-textline-5", type: 'text', max: 50,regexp: '^F[a|ă]g[a|ă]ra[s|ș]',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex3-textline-4", type: 'text', max: 50,regexp: '^C[a|ă]p[a|ă][t|ț][a|â]nii',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex3-textline-3", type: 'text', max: 50,regexp: '^Par[â|a]ng',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex3-textline-2", type: 'text', max: 50,regexp: '^V[a|â]lcan',size:'20', placeholder: '...'});
buf.push("</div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a08-ex3-textline-1", type: 'text', max: 50,regexp: '^Cernei',size:'20', placeholder: '...'});
buf.push("</div><br/><div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v2/v2_p8_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a08-ex3-t'});
}
}, {id: 'art-g4v2-a08-ex3', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](4, "Numește depresiunile din Carpații Meridionali.");
}
}, "v2/s2_p8_descopera_04");
jade_mixins["validator"].call({
block: function(){
jade_mixins["multiRegex"]({
          name: 'art-g4v2-a08-ex4-t-1',
          hasIsDoneBox: false,
          regexps: [
            ["^ha[t|ț]eg$", "^depresiunea ha[t|ț]eg$"],
            ["^lovi[s|ș]tea$", "^depresiunea lovi[s|ș]tei$"],
            ["^petro[s|ș]ani$", "^depresiunea petro[s|ș]ani$"],
          ],
          textlines: [
            {placeholder: '...', className: 'col-md-4'},
            {placeholder: '...', className: 'col-md-4'},
            {placeholder: '...', className: 'col-md-4'},
          ],
          statementClassName: 'row',
          containerClassName: 'row'
        });
}
});
jade_mixins["img"]("img/v2/v2_p8_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a08-ex4-t'});
}
}, {id: 'art-g4v2-a08-ex4', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p8_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a08-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p8_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a08-retine-video-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\"> <strong>Carpații Meridionali </strong>se întind de la Valea Prahovei până la văile râurilor Timiș și Cerna. Cuprind munți formați din roci dure și de aceea au înălțimi ce depășesc 2 500 m. Aici se află cei mai înalți munți din România: <strong>Munții Făgăraș</strong>, care ating în <strong>Vârful Moldoveanu 2 544 m</strong>. Tot datorită durității rocilor, acești munți sunt mai masivi, puține văi și depresiuni despărțind culmile muntoase. Singurul râu care traversează de la nord la sud acești munți este <strong>Oltul</strong>. În Carpații Meridionali se găsesc multe lacuri naturale, de dimensiuni reduse și cu apă foarte rece, dar și lacuri create de om. Acești munți sunt acoperiți cu păduri de conifere, care se continuă cu pășuni întinse.</div>");
}
});
}
}, {id: 'art-g4v2-a08-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v2-a08-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Identifică râurile care izvorăsc din Carpații Meridionali? Notează-le în caiet. Unde se varsă toate râurile care izvorăsc din Carpații Meridionali?");
}
}, {id: 'art-g4v2-a08-ex1-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
jade_mixins["img"]("img/v2/v2_p8_foto.png");
buf.push("<div class=\"small-text\">Barajul de la Vidraru și lacul format în spatele său</div>");
}
}, 2, "Identifică pe hartă lacurile din Carpații Meridionali. În ce scop au fost amenajate?");
}
}, {id: 'art-g4v2-a08-ex2-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-7\">");
jade_mixins["img"]("img/v2/v2_p9_retine_1.png");
buf.push("<div class=\"small-text\">Babele</div><br/>");
jade_mixins["img"]("img/v2/v2_p9_retine_2.png");
buf.push("<div class=\"small-text\">Sfinxul</div></div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p9_retine_3.png");
buf.push("<div class=\"small-text\">Capre negre</div></div></div>");
}
}, {id: 'art-g4v2-a08-poze'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>La bogățiile naturale ale Carpaților Meridionali, reprezentate de păduri, ape curgătoare și cărbuni, se adaugă și peisajele deosebite oferite de acești munți: stânci cu forme deosebite (cum sunt Babele și Sfinxul din Munții Bucegi), creste și vârfuri semețe, plante și animale rare protejate de lege. Datorită acestor frumuseți multe locuri din Carpații Meridionali sunt ocrotite prin lege, fiind declarate rezervații naturale.</div>");
}
}, 'v2/s2_p9_retine_1');
jade_mixins["img"]('img/v2/v2_p9_retine_1-audio.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a09-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v2-a09-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Dă exemple de arbori care formează pădurile de conifere din acești munți. Ce animale trăiesc în aceste păduri? Ce fel de vegetație crește pe crestele înalte, unde temperaturile scăzute și vânturile puternice împiedică dezvoltarea arborilor? Unde trăiește capra neagră?</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p9_foto_1.png");
buf.push("<div class=\"small-text\">Munții Piatra Craiului</div>");
jade_mixins["img"]("img/v2/v2_p9_foto_2.png");
buf.push("<div class=\"small-text\">Munții Retezat</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p9_foto_3.png");
buf.push("<div class=\"small-text\">Păduri de conifere în Munții Făgăraș</div></div></div>");
}
}, {id: 'art-g4v2-a09-aplica-text'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Râurile mari separă Carpații Meridionali în patru grupe de munți. Grupa Bucegi este cea mai mică din punct de vedere al suprafeței, fiind situată între văile râurilor Prahova și Dâmbovița. Include Munții Bucegi, între Prahova și Ialomița, Munții Leaota, între râurile Ialomița și Dâmbovița și Munții Piatra Craiului, în partea nordică. Cea mai mare altitudine a grupei este de 2 505 metri în Vârful Omu, din Munții Bucegi.</div>");
}
}, 'v2/s2_p9_retine_2a');
jade_mixins["img"]('img/v2/v2_p9_retine_2A.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a09-retine2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Grupa <strong>Făgăraș </strong>se întinde între văile râurilor Dâmbovița și Olt. Cuprinde Munții Făgăraș, în partea nordică, și munți mai mici, în sud. Dintre aceștia se remarcă însă Munții Iezer, în est și Munții Cozia, în vest, spre Valea Oltului. Grupa Făgăraș este cea mai înaltă din Carpații Meridionali și din Carpații Românești, aici găsindu-se numeroase vârfuri de peste 2 500 de metri altitudine (Moldoveanu, 2 544 m; Negoiu, 2 535 m etc.). Munții Făgăraș sunt traversați de una dintre cele mai frumoase șosele montane din România și din Europa, Transfăgărășanul, care urcă la peste 2 000 de metri.</div>");
jade_mixins["img"]('img/v2/v2_p9_retine_2B.png');
}
}, 'v2/s2_p9_retine_2b');
buf.push("</div>");
}
}, {id: 'art-g4v2-a09-retine-a-1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Grupa <strong>Parâng </strong>a Carpaților Meridionali se desfășoară între văile Oltului, în est, și Jiului, în vest. Altitudinea maximă a grupei este de 2 519 m, în Vârful Parângul Mare din Munții Parâng. Grupa este traversată de Transalpina, șoseaua care urcă la cea mai mare altitudine din Carpații Românești: 2 145 m!</div>");
jade_mixins["img"]('img/v2/v2_p9_retine_2C.png');
}
}, 'v2/s2_p9_retine_2c');
buf.push("</div>");
}
}, {id: 'art-g4v2-a09-retine-a-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Grupa <strong>Retezat-Godeanu </strong>se întinde între Valea Jiului, în est, și Culoarul Timiș-Cerna, în vest. Deși altitudinile acestor munți sunt ceva mai mici, totuși există vârfuri care trec de 2 500 de metri, altitudinea maximă fiind în vârful Peleaga, din Munții Retezat (2 509 m). Tot aici se găsesc și unele dintre cele mai frumoase lacuri din Carpații Românești: Bucura, Zănoaga etc. Munții Cernei și Munții Mehedinți sunt renumiți pentru formele lor de relief deosebite și pentru spectaculozitatea peisajelor.</div>");
jade_mixins["img"]('img/v2/v2_p9_retine_2D.png');
}
}, 'v2/s2_p9_retine_2d');
buf.push("</div>");
}
}, {id: 'art-g4v2-a09-retine-a-3', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v2-a09-exerseaza'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Numește grupele montane din Carpații Meridionali. Identifică pe hartă aceste grupe de munți.");
}
}, {id: 'art-g4v2-a09-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Citește pe harta Carpaților Meridionali, munții din fiecare grupă. Identifică, pentru fiecare grupă, cei mai înalți munți și notează-i în caiet. Subliniază cu roșu numele celor mai înalți din țara noastră. În ce imagine sunt prezentați acești munți?");
}
}, {id: 'art-g4v2-a09-ex2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});