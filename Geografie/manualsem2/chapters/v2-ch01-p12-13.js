registerChapter({ chapter: "v2-ch01-p12-13", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Dealurile și podișurile');
jade_mixins["subtitle"]('Paginile 12 - 13');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a12-observa',
          top: 19.3023,
          left: 5,
          width: 90,
          height: 20.5581,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a12-descopera-ex1',
          top: 45.4419,
          left: 5,
          width: 47,
          height: 23.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a12-descopera-ex2',
          top: 69.5349,
          left: 5,
          width: 47,
          height: 3.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a12-retine',
          top: 74.5581,
          left: 5,
          width: 90,
          height: 9.7674,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a12-retine-video-2',
          top: 84.4186,
          left: 5,
          width: 90,
          height: 12.5581,
          type: 'video'
        }
      ],
      image: 'v2/p12.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a13-aplica-ex1',
          top: 9.4419,
          left: 5,
          width: 56,
          height: 5.6744,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a13-aplica-ex2',
          top: 15.2093,
          left: 5,
          width: 56,
          height: 13.7674,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a13-ex1',
          top: 35.1163,
          left: 5,
          width: 90,
          height: 2.2326,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a13-ex2',
          top: 37.4419,
          left: 5,
          width: 90,
          height: 8.8372,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a13-ex3',
          top: 46.4651,
          left: 5,
          width: 90,
          height: 3.907,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a13-retine',
          top: 51.0233,
          left: 51,
          width: 44,
          height: 13.4884,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a13-retine-video-2',
          top: 64.6047,
          left: 51,
          width: 44,
          height: 16.4651,
          type: 'video'
        }
      ],
      image: 'v2/p13.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('2.', "Dealurile și podișurile",'Marile unități geografice ale României');
}
}, {id: 'art-g4v2-a12-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v2-a12-observa-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a12-observa-interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Observă imaginile. Alege, pentru fiecare enunț, (A) dacă propoziția este „adevărată” sau (F), dacă este „falsă”.</div>");
}
}, "v2/s2_p12_observa");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>Imaginea 1 prezintă un deal cu culme domoală, rotunjită. <div class=\"inline-block\">");
jade_mixins["yesno"]({answer: true, name:'art-g4v2-a12-observa-yes-1', yes: 'A', no: 'F'});
buf.push("</div></li><li>Imaginea 2 prezintă dealuri cu culmi late, netede numite podișuri. <div class=\"inline-block\">");
jade_mixins["yesno"]({answer: true, name:'art-g4v2-a12-observa-yes-2', yes: 'A', no: 'F'});
buf.push("</div></li><li>Dealurile și podișurile au înălțimi asemănătoare, fiind mai înalte decât câmpiile, dar mai joase decât munții.<div class=\"inline-block\">");
jade_mixins["yesno"]({answer: true, name:'art-g4v2-a12-observa-yes-3', yes: 'A', no: 'F'});
buf.push("</div></li></ol><div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v2/v2_p12_foto.png");
buf.push("</div>");
}
}, {name: 'art-g4v2-a12-observa-yes'});
}
}, {id: 'art-g4v2-a12-observa', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a12-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<div class=\"indent\"> <em>La marginea lor exterioară, Carpații Orientali și cei Meridionali sunt însoțiți de Subcarpați, un brâu continuu de dealuri, care s-au format la fel ca și munții, dar au înălțimile mai mici, iar rocile care le compun sunt mai moi, deci mai puțin rezistente. Printre șirurile de dealuri se ascund depresiunile, locurile mai joase, în care s-au dezvoltat sate și orașe. Pe culmile dealurilor mai înalte se înalță zvelt fagul, însoțit de stejar sau alte foioase, iar pe culmile mai joase se răsfață la soare întinse livezi, la concurență cu viile împovărate de dulceața strugurilor.</em></div><div class=\"indent\">Cum se numește unitatea de relief prezentată în text? Ce forme de relief alcătuiesc această unitate?</div>");
}
}, 1, "Citește textul următor:");
}
}, {id: 'art-g4v2-a12-descopera-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
jade_mixins["img"]("img/v2/v2_p12_harta.png");
}
}, 2, "Analizează harta acestei unități de relief. Numește unitățile de relief vecine.");
}
}, {id: 'art-g4v2-a12-descopera-ex2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p12_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a12-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p12_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a12-retine-video-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">La marginea Carpaților Orientali și a Carpaților Meridionali, de la Valea Moldovei până la Valea Motrului, se întind <strong>Subcarpații</strong>, o unitate de relief aparte, care face trecerea de la munți spre podișuri sau spre câmpii. Subcarpații sunt formați din șiruri de dealuri care se aseamănă cu munții prin modul în care s-au format. Dealurile subcarpatice au înălțimi care rareori depășesc 1 000 m și sunt acoperite cu păduri de foioase. Între dealuri și la poalele munților se găsesc numeroase depresiuni, bine populate și cu importante zăcăminte de petrol, gaze naturale, cărbuni și sare. Ocupațiile locuitorilor sunt legate de cultura pomilor fructiferi și a viței-de-vie, de creșterea animalelor, de exploatarea și prelucrarea lemnului și a resurselor de subsol. Subcarpații sunt alcătuiți din trei grupe de dealuri și depresiuni: <strong>Subcarpații Moldovei </strong>(între râurile Moldova și Trotuș), <strong>Subcarpații Curburii </strong>(între Trotuș și Dâmbovița) și <strong>Subcarpații Getici </strong>(între Dâmbovița și Motru).</div>");
}
});
}
}, {id: 'art-g4v2-a12-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a13-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Citește de pe harta Subcarpaților numele celor mai importante râuri și orașe din această unitate de relief. Ce importanță au râurile Moldova și Motru pentru această unitate de relief?");
}
}, {id: 'art-g4v2-a13-aplica-ex1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-8\">");
jade_mixins["art-g4-ex-v2"](2, "Cu ce se ocupă locuitorii din această regiune?");
jade_mixins["img"]("img/v2/v2_p13_aplica_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p13_aplica_2.png");
buf.push("<div class=\"small-text\">Imagini din Subcarpații Curburii</div></div></div>");
}
}, {id: 'art-g4v2-a13-aplica-ex2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a13-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Analizează harta Dealurilor de Vest. Numește unitățile de relief vecine.");
}
}, {id: 'art-g4v2-a13-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Dealurile de Vest reprezintă unitatea de relief care face trecerea de la Carpații (<em>Orientali, Occidentali</em>) la Câmpia de Vest. Această fâșie de (<em>dealuri, depresiuni</em>) nu este continuă, pe alocuri munții ajungând chiar până la (<em>câmpie, podiș</em>). Dealurile sunt despărțite de văile largi ale (<em>râurilor, lacurilor</em>) care izvorăsc din munți.</div>");
}
}, 2, "Citește următoarele enunțuri. Alege din paranteze cuvintele care exprimă realitatea geografică reprezentată pe hartă.");
}
}, {id: 'art-g4v2-a13-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
jade_mixins["img"]("img/v2/v2_p13_descopera_harta.png");
}
}, 3, "Citește de pe hartă numele celor mai importante râuri și orașe din această unitate de relief. Ce importanță au râurile Nera și Someș pentru această unitate de relief?");
}
}, {id: 'art-g4v2-a13-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p13_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a13-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p13_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a13-retine-video-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">La marginea Carpaților Occidentali se întind <strong>Dealurile de Vest</strong>, care fac trecerea spre Câmpia de Vest. Acest șir de dealuri nu este continuu, deoarece, pe alocuri, munții ajung chiar până la câmpie (de exemplu, Munții Zarandului). Culmile acestor dealuri sunt domoale și numai rareori trec de 300 m înălțime. Datorită climei prielnice, dealurile sunt cultivate cu viță-de-vie și pomi fructiferi. Partea de dealuri situată la sud de râul Mureș formează <strong>Dealurile Banatului</strong>. La nord de Mureș, între cele trei Crișuri se află <strong>Dealurile Crișurilor </strong>și dincolo de Barcău până la Someș, se întind <strong>Dealurile Silvaniei</strong>.</div>");
jade_mixins["img"]("img/v2/v2_p13_retine.png");
buf.push("<div class=\"small-text\">Dealurile Banatului</div>");
}
});
}
}, {id: 'art-g4v2-a13-retine-web'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});