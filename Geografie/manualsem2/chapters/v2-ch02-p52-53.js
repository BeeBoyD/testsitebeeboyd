registerChapter({ chapter: "v2-ch02-p52-53", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Terra – caracteristici generale');
jade_mixins["subtitle"]("Paginile 52 - 53");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a52-aminteste-ti',
          top: 19.0233,
          left: 5,
          width: 90,
          height: 13.3953,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a52-observa',
          top: 37.5349,
          left: 5,
          width: 43,
          height: 45.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a52-descopera',
          top: 37.6279,
          left: 49.033,
          width: 46.8632,
          height: 45.7674,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a52-retine',
          top: 83.7674,
          left: 5,
          width: 90,
          height: 13.6744,
          type: 'audio'
        }
      ],
      image: 'v2/p52.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a53-aplica',
          top: 9.4419,
          left: 5,
          width: 90,
          height: 17.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a53-descopera',
          top: 30.7442,
          left: 5,
          width: 90,
          height: 28,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a53-aminteste-ti',
          top: 59.1163,
          left: 43.1368,
          width: 52,
          height: 16.3721,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a53-explica',
          top: 83.1163,
          left: 5,
          width: 38,
          height: 13.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a53-retine',
          top: 75.8605,
          left: 43.1368,
          width: 52,
          height: 21.9535,
          type: 'video'
        }
      ],
      image: 'v2/p53.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('14.', "Terra - caracteristici generale",'Terra – planeta noastră');
}
}, {id: 'art-g4v2-a52-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Amintește-ți</div>");
}
}, {id: 'art-g4v2-a52-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">În clasa a II-a, la <em>Matematică și explorarea mediului</em>, și acum, în clasa a IV-a, la <em>Științe</em>, ai aflat multe lucruri interesante despre planeta noastră. Citește enunțurile următoare și alege varianta corectă de răspuns pentru fiecare:</div><ol class=\"art-g4-v2-c9\"><li>Planetele sunt corpuri cerești:<ol class=\"art-g4-lowercase-v2-c9 row\"><li class=\"col-sm-6\">cu lumină și căldură proprie; </li><li class=\"col-sm-6\">fără lumină și căldură proprie.</li></ol></li><li>Planeta noastră se numește:<ol class=\"art-g4-lowercase-v2-c9 row\"><li class=\"col-sm-6\">Pământ sau Lună; </li><li class=\"col-sm-6\">Pământ sau Terra.</li></ol></li></ol>");
}
}, {id: 'art-g4v2-a52-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Observă </div>");
}
}, {id: 'art-g4v2-a52-observa-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](1, "Numește obiectele din imaginea <strong>1</strong>. Cu care dintre aceste obiecte se aseamănă ca formă planeta noastră? Ce formă are Pământul?");
jade_mixins["art-g4-ex-v2-c9"](2, "Imaginile <strong>2</strong> și <strong>3</strong> prezintă un vapor apropiindu-se de țărm, respectiv un vapor la țărm. De ce atunci când vapoarele se apropie de țărm mai întâi observăm părțile de sus ale vaporului și apoi, pe măsură ce se apropie, observăm vaporul în întregime ?");
jade_mixins["img"]("img/v2/v2_p52_observa_1.png");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p52_observa_2.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p52_observa_3.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a52-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a52-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"indent\">Știind ce punct cardinal indică Steaua Polară, alege enunțul care prezintă corect realitatea geografică:</div><ol class=\"art-g4-lowercase-v2-c9\"><li>Polul situat spre Steaua Polară se numește <em>Polul Nord</em>, iar cel opus, <em>Polul Sud</em>;</li><li>Polul situat spre Steaua Polară se numește <em>Polul Sud</em>, iar cel opus, <em>Polul Nord</em>.</li></ol>");
}
}, 1, "Să ne închipuim că prin centrul Pământului, de la nord la sud, trece o linie imaginară. Aceasta se numește <em>axa terestră</em> sau <em>axa Pământului</em> (imaginea A). Punctele imaginare situate acolo unde axa străpunge suprafața Pământului se numesc <em>polii geografici</em>.");
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9\"><li>Ecuatorul împarte Pământul în două părți egale numite <em>emisfere</em>;</li><li>Ecuatorul împarte Pământul în trei părți egale numite <em>emisfere</em>.</li></ol>");
jade_mixins["img"]("img/v2/v2_p52_descopera.png");
}
}, 2, "Cercul imaginar situat la mijlocul suprafeței Pământului, la distanță egală între cei doi poli se numește <em>Ecuator</em> (imaginea B). Alege enunțul care prezintă corect realitatea geografică:");
}
}, {id: 'art-g4v2-a52-descopera'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Planeta Pământ, numită și Terra, are o formă de sferă, puțin turtită la poli și bombată la mijloc (la Ecuator). Datorită formei sale, Pământul este încălzit diferit. Temperatura aerului scade de la Ecuator spre poli. Încălzirea diferențiată a Pământului este de foarte mare importanță atât pentru viața oamenilor, a plantelor și a animalelor, cât și pentru desfășurarea multor fenomene pe Pământ.</div>");
}
}, 'v2/s2_p52_retine');
buf.push("<div class=\"art-g4-width-50\">");
jade_mixins["img"]('img/v2/v2_p52_retine.png');
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a52-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Aplică  </div>");
}
}, {id: 'art-g4v2-a53-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\">Amintește-ți de la orele de <em>Matematică </em>noțiunile de „paralel” și de „perpendicular” și, de asemenea, noțiunile învățate despre unghiuri. Privește imaginea marcată cu litera <strong>A</strong>. Razele Soarelui, care pot fi considerate ca niște drepte paralele, cad perpendicular pe suprafața Pământului în zona Ecuatorului. Ce fel de unghiuri formează cu suprafața terestră? În această zonă temperatura este mai ridicată.</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p53_A.png");
buf.push("</div></div><div class=\"indent\">Ce fel de unghiuri formează razele Soarelui cu suprafața Pământului pe măsură ce ne îndepărtăm de Ecuator spre poli? Spre poli căldura primită de suprafața Pământului crește sau scade?</div>");
}
}, {id: 'art-g4v2-a53-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a53-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](1, "În imaginea marcată cu litera <strong>B</strong> sunt prezentate planetele Sistemului Solar, ordonate de la cea mai mare la cea mai mică. Ce loc ocupă Terra, după mărime, între planetele din Sistemul Solar?");
buf.push("<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\">");
jade_mixins["img"]("img/v2/v2_p53_B.png");
buf.push("</div></div>");
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"center\">8 015 x 5 = ? </div>");
}
}, 2, "În comparație cu cele mai mari planete din Sistemul Solar, Terra pare foarte mică. În realitate, Terra este o planetă de mărime medie. Să ne imaginăm o linie care înconjoară Pământul la mijloc, adică la Ecuator. Efectuează calculul și vei afla câți kilometri măsoară această linie.");
buf.push("<div class=\"row\"><div class=\"col-sm-8\">");
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"center\">250 x 2 + 10 = ?</div>");
}
}, 3, "Ai învățat la <em>Matematică</em> despre aria unei suprafețe. Să presupunem că acoperim planeta noastră cu o rețea de pătrate, ca în imaginea C. Fiecare pătrat are latura de 10 km. Efectuează calculul și vei afla câte sute de mii de pătrate cu latura de 10 km îmbracă planeta. Aceasta este suprafața (sau aria) Pământului.");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p53_C.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a53-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Amintește-ți</div>");
}
}, {id: 'art-g4v2-a53-aminteste-ti-T'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Amintește-ți</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Mult timp, oamenii au crezut că Pământul stă fix și că atât Soarele, cât și planetele se rotesc în jurul său. Tu ai aflat că această părere era greșită și că, de fapt, Pământul și celelalte planete se rotesc în jurul Soarelui. <strong>Mișcarea de rotație </strong>se referă la rotația Pământului în jurul axei sale, în timp ce deplasarea planetei noastre în jurul Soarelui poartă numele de <strong>mișcare de revoluție.</strong></div>");
}
}, 'v2/s2_p53_aminteste-ti');
jade_mixins["img"]('img/v2/v2_p53_aminteste-ti-audio.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a53-aminteste-ti', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Explică </div>");
}
}, {id: 'art-g4v2-a53-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">În secolul al XVI-lea, un mare navigator, numit Magellan, a organizat o expediție. Cinci corăbii au plecat dintr-un port european și au înconjurat planeta, străbătând mai multe mări și oceane. După trei ani plini de peripeții, o corabie a revenit în același port. A fost prima expediție în jurul lumii. Ce a demonstrat?</div>");
}
}, {id: 'art-g4v2-a53-explica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p53_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a53-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Pământul este o planetă de mărime medie. Ca și celelalte planete ale Sistemului Solar, Pământul efectuează o mișcare de rotație în jurul axei sale și o mișcare de rotație în jurul Soarelui. Datorită formei și a mișcării sale în jurul Soarelui, suprafața Pământului este neuniform încălzită. Astfel, în fiecare emisferă se formează o zonă caldă în vecinătatea Ecuatorului, o zonă rece în jurul polului și între ele o zonă temperată.</div>");
}
});
}
}, {id: 'art-g4v2-a53-retine-web'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});