registerChapter({ chapter: "v1-ch01-p28-29", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Populație, așezări, activități ale oamenilor');
jade_mixins["subtitle"]('Paginile 28 - 29');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a28-observa',
          top: 14,
          left: 4,
          width: 93,
          height: 28.186,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a28-activitate-perechi',
          top: 42.6512,
          left: 4,
          width: 35,
          height: 22.4186,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a28-retine',
          top: 42.7442,
          left: 39.717,
          width: 57,
          height: 22.3256,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a28-descopera-1',
          top: 66.093,
          left: 4,
          width: 93,
          height: 13.7674,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a28-descopera-2',
          top: 80.5116,
          left: 4,
          width: 93,
          height: 15.7209,
          type: 'blank'
        }
      ],
      image: 'v1/p28.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a29-exerseaza-1',
          top: 4.9767,
          left: 4,
          width: 93,
          height: 23.7209,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a29-exerseaza-2',
          top: 29.3488,
          left: 4,
          width: 93,
          height: 27.3488,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a29-retine',
          top: 57.2558,
          left: 4,
          width: 93,
          height: 40.2791,
          type: 'video'
        }
      ],
      image: 'v1/p29.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('7.', "Populație, așezări, activități ale oamenilor",'Caracteristici generale observabile ale orizontului local');
}
}, {id: 'art-g4v1-a28-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a28-observaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Privește imaginile alăturate și răspunde următoarelor cerințe:</div>");
jade_mixins["art-g4-ex"](1,'Ce reprezintă aceste imagini? Descrie fiecare imagine.');
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"> <strong><em>a </em></strong>cu <strong><em>b </em></strong>și <strong><em>c </em></strong>cu <strong><em>d</em></strong>;</div><div class=\"indent\"> <strong><em>a </em></strong>cu <strong><em>c </em></strong>și <strong><em>b </em></strong>cu <strong><em>d</em></strong>;</div><div class=\"indent\"> <strong><em>a </em></strong>cu <strong><em>d </em></strong>și <strong><em>b </em></strong>cu <strong><em>c</em></strong>.</div><div class=\"indent\">Explică răspunsul dat.</div>");
}
}, 2,'Aceste imagini se pot grupa în perechi. Alege perechile corecte:');
jade_mixins["art-g4-ex"](3,'Care imagini sunt asemănătoare cu așezarea ta natală?');
buf.push("<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p28_observa_a.png');
buf.push("</div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p28_observa_c.png');
buf.push("</div></div><div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p28_observa_b.png');
buf.push("</div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p28_observa_d.png');
buf.push("</div></div><br/>");
}
}, {id: 'art-g4v1-a28-observa'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox"].call({
block: function(){
buf.push("<div class=\"indent\">Citește cuvintele din casetă și notează-le pe caiet. Împreună cu un coleg, formulați propoziții cu aceste cuvinte. Ce fel de așezare omenească poate fi descrisă cu aceste cuvinte?</div><br/><div style=\"width:auto;\" class=\"art-g4-blue-border\"><em>aglomerație, blocuri, fabrici, peste 15.000 locuitori, magazine, mașini, muzee, parcuri, străzi largi.</em></div>");
}
}, 'Activitate în perechi');
}
}, {id: 'art-g4v1-a28-activitate-perechi'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Reține</div></div>");
}
}, {id: 'art-g4v1-a28-retine-t2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține </div><div>Orizontul local se caracterizează prin însușirile sale naturale (relief, hidrografie, vegetație), dar și prin însușiri legate de populație, așezări și activități ale oamenilor. </div><span>Toți locuitorii unei așezări omenești formează  populația.</span>");
}
}, "v1/p28_retine");
jade_mixins["img"].call({
block: function(){
buf.push("\n");
}
}, "img/v1/p28_retine.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a28-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v1-a28-descoperaT'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<em>Așezările omenești sunt „grupări de locuințe [...] și de oameni ce își desfășoară activitatea pe un anumit teritoriu...“</em><div class=\"text-right\">(Simion Mehedinți – <em>Terra. Introducere în geografie ca știință</em>)</div><ul class=\"art-g4\"><li>Cum definește Simion Mehedinți așezările omenești?</li><li>De câte feluri sunt așezările?</li></ul>");
}
}, 1,'Citește textul de mai jos și răspunde cerințelor:');
}
}, {id: 'art-g4v1-a28-descopera-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"><em> Ascuns între două dealuri și înconjurat de o pădure deasă, se întinde satul în care locuiesc bunicii mei. Este o așezare rurală mică, cu vreo 300 de locuitori, toți oameni harnici care, de la primul freamăt al primăverii până la prima ninsoare, lucrează pe ogorul situat la marginea satului. Aerul curat, cântatul cocoșilor, măcănitul rațelor, mugetul vacilor fac din curtea bunicilor mei o adevărată lume de basm.</em></div><ul class=\"art-g4\"><li>Cu care imagini asociezi descrierea din text?</li><li>Câți oameni formează populația acestei așezări?</li><li>Cu ce se ocupă locuitorii acestei așezări?</li></ul>");
}
}, 2,'Identifică termenii care desemnează așezarea descrisă în textul următor:');
}
}, {id: 'art-g4v1-a28-descopera-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a29-exerseaza-web'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a29-exerseaza-1Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](1,'Privește cu atenție imaginile. Care dintre activități sunt specifice locuitorilor din așezările rurale?');
}
}, "v1/p29_exerseaza_01");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-3 col-xs-6 btn btn-lg good\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_a.png');
buf.push("</div><div class=\"col-sm-3 col-xs-6 btn btn-lg bad\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_b.png');
buf.push("</div><div class=\"col-sm-3 col-xs-6 btn btn-lg bad\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_c.png');
buf.push("</div><div class=\"col-sm-3 col-xs-6 btn btn-lg bad\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_d.png');
buf.push("</div><div class=\"col-sm-3 col-xs-6 btn btn-lg bad\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_e.png');
buf.push("</div><div class=\"col-sm-3 col-xs-6 btn btn-lg bad\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_f.png');
buf.push("</div><div class=\"col-sm-3 col-xs-6 btn btn-lg bad\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_g.png');
buf.push("</div><div class=\"col-sm-3 col-xs-6 btn btn-lg good\">");
jade_mixins["img"]('img/v1/v1_p29_exerseaza_h.png');
buf.push("</div></div>");
}
}, {name: 'art-g4v1-a29-exerseaza-1-select',ignoreAvatar: false});
}
});
buf.push("<div class=\"is-done-box\"></div></div>");
}
}, {name: 'art-g4v1-a29-exerseaza-1ex'});
}
}, {id: 'art-g4v1-a29-exerseaza-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a29-exerseaza-2Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](2,'Casetele de mai jos prezintă caracteristici specifice celor două tipuri de așezări omenești: A - orașe, B - sate. Realizează corespondențele corecte pentru fiecare tip de așezare. ');
}
}, "v1/p29_exerseaza_02");
jade_mixins["drag-to-bucket"].call({
block: function(){
buf.push("<div class=\"row buckets\"><div data-name=\"unassigned\" class=\"bucket col-xs-12\"><div class=\"items well well-lg\"><span data-index='1' data-target=\"orase\" class=\"item\">Sunt așezări cu o populație mai numeroasă.</span><span data-index='4' data-target=\"sate\" class=\"item\">Oamenii trăiesc în gospodării alcătuite din case înconjurate de grajduri, hambare, grădini, livezi.</span><span data-index='2' data-target=\"orase\" class=\"item\">Oamenii lucrează în întreprinderi, fabrici, pe șantiere de construcție, în comerț, transporturi etc.</span><span data-index='5' data-target=\"sate\" class=\"item\">Sunt așezări cu o populație mai puțin numeroasă.</span><span data-index='3' data-target=\"orase\" class=\"item\">Oamenii locuiesc în blocuri sau în case.</span><span data-index='6' data-target=\"sate\" class=\"item\">Oamenii se ocupă mai ales cu cultivarea plantelor și creșterea animalelor.</span></div></div><div data-name=\"orase\" class=\"bucket col-xs-6\"><strong><em>Orașe</em></strong><div class=\"items well well-lg\"></div></div><div data-name=\"sate\" class=\"bucket col-xs-6\"><strong><em>Sate</em></strong><div class=\"items well well-lg\"></div></div></div>");
}
}, {orderInBuckets: false, bucketsSortable: true});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a29-exerseaza-2ex'});
}
}, {id: 'art-g4v1-a29-exerseaza-2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p29_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a29-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Așezările omenești sunt de două feluri: <strong>rurale </strong>și <strong>urbane</strong>. Așezările rurale sunt reprezentate de <strong>sate</strong>și așezările urbane de <strong>orașe</strong>. <em>Satele </em>au o populație mai puțin numeroasă. Locuitorii satelor au pe lângă casa în care locuiesc o grădină, o curte cu adăposturi pentru animale, formând împreună gospodăria. În centrul satului se găsesc, de obicei, clădirile cele mai importante: școala, biserica, dispensarul, primăria ș.a. O mare parte din suprafața satului este ocupată de terenurile pe care oamenii cultivă diferite plante sau de livezi, pășuni, păduri. Locuitorii satului se ocupă mai ales cu <strong>cultivarea plantelor </strong>și cu <strong>creșterea animalelor</strong>.</div><div class=\"indent\">În <em>orașe </em>populația este mai numeroasă. Aici se află multe străzi, case și blocuri în care locuiesc oamenii și multe clădiri în care ei muncesc: fabrici, uzine, magazine, muzee, teatre, instituții de învățământ, instituții medicale etc. Locuitorii orașelor desfășoară activități de natură <strong>industrială</strong>, <strong>comercială</strong>, <strong>culturală</strong>, <strong>educativă</strong>, <strong>sportivă</strong>, <strong>medicală </strong>ș.a.</div><div class=\"indent\">Așezările omenești pot fi reprezentate, pe hărți, prin următoarele <strong>semne convenționale</strong>:</div>");
jade_mixins["img"]('img/v1/v1_p29_retine_jos.png');
}
});
}
}, {id: 'art-g4v1-a29-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p29_retine_1.png');
buf.push("<em>Sat în Maramureș, cu casele adunate în jurul bisericii</em></div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p29_retine_2.png');
buf.push("<em>Activitate tipic urbană, în centrul orașului București</em></div></div>");
}
}, {id: 'art-g4v1-a29-retine-web-imaginile'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});