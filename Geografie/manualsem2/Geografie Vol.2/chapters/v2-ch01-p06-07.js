registerChapter({ chapter: "v2-ch01-p06-07", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Munții Carpați');
jade_mixins["subtitle"]('Paginile 6 - 7');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a06-ex1',
          top: 18.8372,
          left: 5,
          width: 53,
          height: 5.7675,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a06-ex2',
          top: 24.7907,
          left: 5,
          width: 53,
          height: 3.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a06-retine',
          top: 29.2558,
          left: 5,
          width: 53,
          height: 9.8837,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a06-ex1-descopera',
          top: 53.7209,
          left: 55.5,
          width: 40,
          height: 5.4884,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a06-ex2-descopera',
          top: 59.4884,
          left: 55.5,
          width: 40,
          height: 16.6512,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a06-retine-1',
          top: 39.2093,
          left: 5,
          width: 53,
          height: 9.6744,
          type: 'video'
        }
      ],
      image: 'v2/p06.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a07-retine',
          top: 4.9767,
          left: 5,
          width: 90,
          height: 12.2791,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a07-exerseaza-cerinte',
          top: 49.0698,
          left: 6,
          width: 59,
          height: 33.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a07-retine2',
          top: 83.0233,
          left: 5,
          width: 90,
          height: 14.2326,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a07-retine-extra',
          top: 17.2558,
          left: 5,
          width: 90,
          height: 8.7442,
          type: 'video'
        }
      ],
      image: 'v2/p07.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('1.', "Munții Carpați",'Marile unități geografice ale României');
}
}, {id: 'art-g4v2-a06-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă</div></div>");
}
}, {id: 'art-g4v2-a06-observa'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Observă</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Observă pe harta alăturată întinderea Munților Carpați. Acești munți se găsesc numai pe teritoriul României? Numește țările străbătute de Munții Carpați. Ele se numesc <strong>țări carpatice.</strong></div>");
}
}, 'v2/s2_p6_observa');
jade_mixins["img"]('img/v2/v2_p6_observa-carpati.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a06-ex1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Cum se numesc cele trei ramuri care alcătuiesc Munții Carpați din România?");
}
}, {id: 'art-g4v2-a06-ex2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p6_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a06-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p6_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a06-retine-1', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\"> <strong>Munții Carpați </strong>reprezintă cea mai înaltă treaptă de relief din țara noastră. Ei fac parte dintr-un grup mai mare de munți, care se întind pe teritoriul mai multor țări.</div><div class=\"indent\">După poziția față de Depresiunea Transilvaniei, Munții Carpați din România sau Carpații Românești sunt formați din trei ramuri: <strong>Carpații Orientali </strong>(la est), <strong>Carpații Meridionali </strong>(la sud) și <strong>Carpații Occidentali </strong>(la vest).</div>");
}
});
}
}, {id: 'art-g4v2-a06-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a06-descopera'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut\">");
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Analizează harta Carpaților Orientali. Cu ce unități de relief se învecinează Carpații Orientali la est, la sud și la vest?");
}
}, "v2/s2_p6_descopera_01");
jade_mixins["validator"].call({
block: function(){
jade_mixins["multiRegex"].call({
block: function(){
buf.push("<div class=\"indent statement\">La est: </div>");
}
}, {
          name: 'art-g4v2-a06-ex1-descopera-t-1',
          hasIsDoneBox: false,
          regexps: [
            ["^podi[ș|s]ul moldovei$"],
            ["^subcarpa[t|ț]ii$", "^subcarpa[t|ț]ii moldovei$"]
          ],
          textlines: [
            {placeholder: '....', max:'33', className: 'col-md-6'},
            {placeholder: '....', max:'33', className: 'col-md-6'}
          ],
          statementClassName: 'row',
          containerClassName: 'row'
        });
jade_mixins["multiRegex"].call({
block: function(){
buf.push("<div class=\"indent statement\">La sud: </div>");
}
}, {
          name: 'art-g4v2-a06-ex1-descopera-t-2',
          hasIsDoneBox: false,
          regexps: [
            ["^subcarpa[t|ț]ii$", "^subcarpa[t|ț]ii curburii$"]
          ],
          textlines: [
            {placeholder: '....', max:'33', className: 'col-md-6'},
          ],
          statementClassName: 'row',
          containerClassName: 'row'
        });
jade_mixins["multiRegex"].call({
block: function(){
buf.push("<div class=\"indent statement\">La vest: </div>");
}
}, {
          name: 'art-g4v2-a06-ex1-descopera-t-3',
          hasIsDoneBox: false,
          regexps: [
            ["^carpa[t|ț]ii meridionali$"],
            ["^depresiunea colinar[a|ă] a transilvaniei$"]
          ],
          textlines: [
            {placeholder: '....', max:'33', className: 'col-md-6'},
            {placeholder: '....', max:'33', className: 'col-md-6'}
          ],
          statementClassName: 'row',
          containerClassName: 'row'
        });
}
});
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p6_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a06-ex1-descopera-t'});
}
}, {id: 'art-g4v2-a06-ex1-descopera', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a17-ex2-pickoneInteractiv\">");
jade_mixins["validator"].call({
block: function(){
buf.push(" ");
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Citește următoarele enunțuri. Alege din paranteze cuvintele care exprimă realitatea geografică reprezentată pe hartă.");
}
}, "v2/s2_p6_descopera_02");
buf.push("<div class=\"indent\">Carpații Orientali se desfășoară de la granița de (<div class=\"inline-block\">");
jade_mixins["pickone"](2, ['est','nord'], { name: 'art-g4v2-a06-ex2-descopera-t-pick-1',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">) cu Ucraina până la Valea (</span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['Oltului','Prahovei'], { name: 'art-g4v2-a06-ex2-descopera-t-pick-2',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">). Sunt alcătuiți din șiruri de (</span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['dealuri','munți'], { name: 'art-g4v2-a06-ex2-descopera-t-pick-3',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">) despărțite de numeroase văi și (</span><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['depresiuni','vârfuri'], { name: 'art-g4v2-a06-ex2-descopera-t-pick-4',  ignoreAvatar: false, placement:'top'});
buf.push("</div>). Cei mai înalți sunt Munții <br/><span>(</span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['Călimani','Rodnei'], { name: 'art-g4v2-a06-ex2-descopera-t-pick-5',  ignoreAvatar: false, placement:'right'});
buf.push("</div><span class=\"triger\">).</span></div><div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v2/v2_p6_descopera_harta.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a06-ex2-descopera-t-pick'});
}
}, {id: 'art-g4v2-a06-ex2-descopera', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p7_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a07-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p7_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a07-retine-extra', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\"> <strong>Carpații Orientali </strong>se desfășoară de la granița de nord a țării până la Valea Prahovei. Cuprind șiruri de munți despărțite de numeroase văi și depresiuni. Sunt alcătuiți din roci diferite, cele mai dure fiind în partea lor de mijloc. Culmile muntoase au înălțimi mijlocii, depășind 2 000 m doar în <strong>Munții Rodnei </strong>(cei mai înalți) și în Munții Călimani. Din Carpații Orientali izvorăsc multe râuri, cele mai mari fiind <strong>Mureșul </strong>și <strong>Oltul</strong>. Au multe lacuri, unele naturale, altele create de om pentru producerea de energie electrică. Sunt acoperiți cu păduri de fag și, în zonele mai înalte, cu păduri de conifere. Au importante resurse naturale (minereuri de cupru, de aur, de argint, lemn, izvoare cu ape folositoare pentru tratarea unor boli).</div><div class=\"indent\">Carpații Orientali sunt împărțiți în trei grupe: <strong>Grupa Nordică</strong>, <strong>Grupa Centrală </strong>și <strong>Grupa Sudică</strong>.</div>");
}
});
}
}, {id: 'art-g4v2-a07-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p7_foto_1.png");
buf.push("<div class=\"small-text\">Munții Rodnei, Vârful Pietrosu</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p7_foto_2.png");
buf.push("<div class=\"small-text\">Munții Ceahlău, Vârful Toaca</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p7_foto_3.png");
buf.push("<div class=\"small-text\">Munții Ciucaș</div></div></div>");
}
}, {id: 'art-g4v2-a07-poze'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v2-a07-exerseaza'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-8\"><ul class=\"art-g4-v2\"><li>Urmărește, pe harta Carpaților Orientali, linia întreruptă de culoare galbenă, care marchează limitele fiecărei grupe din cadrul acestei ramuri montane. Citește munții și depresiunile din fiecare grupă.</li><li>Identifică, pentru fiecare grupă, cei mai înalți munți și notează-i în caiet. Subliniază cu roșu numele celor mai înalți munți din Carpații Orientali. Imaginea 1 prezintă cel mai înalt vârf din acești munți. Ce înălțime are?</li><li>În ce grupă sunt situați munții din imaginea 2?</li><li>Ce importanță prezintă munții din imaginea 3?</li><li>În ce grupă este situată depresiunea din imaginea 5?</li><li>Identifică râurile care izvorăsc din Carpații Orientali. Notează-le în caiet.</li></ul></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p7_foto_4.png");
buf.push("<div class=\"small-text\">Lacul Roșu</div>");
jade_mixins["img"]("img/v2/v2_p7_foto_5.png");
buf.push("<div class=\"small-text\">Depresiunea Brașov</div></div></div><ul class=\"art-g4-v2\"><li>Localizează pe hartă lacul din imaginea 4. Al cui afluent este râul pe care se află acest lac? Identifică și alte lacuri din această ramură carpatică.</li><li>Ce vegetație crește în acești munți? Ce fel de păduri acoperă coastele Munților Ceahlău până spre vârfuri? De ce pe crestele Munților Rodnei crește o vegetație de ierburi mărunte?</li></ul>");
}
}, {id: 'art-g4v2-a07-exerseaza-cerinte'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Carpații Orientali sunt intens populați, așezările fiind situate mai ales în lungul râurilor și în depresiuni. Foarte populată este Depresiunea Brașov, cea mai întinsă depresiune din Carpații Românești.</div><div>Pentru protejarea plantelor și a animalelor rare care trăiesc în Carpații Orientali, dar și pentru a feri peisajele naturale deosebite de activitățile negative ale oamenilor, o parte din teritoriile ocupate de acești munți au fost declarate arii naturale protejate.</div>");
}
}, 'v2/s2_p7_retine');
jade_mixins["img"]('img/v2/v2_p7_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a07-retine2', class:'art-g4-audio'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});