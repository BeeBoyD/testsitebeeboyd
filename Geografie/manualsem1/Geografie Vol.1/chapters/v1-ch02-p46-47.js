registerChapter({ chapter: "v1-ch02-p46-47", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Relieful. Caracteristici generale și trepte de relief');
jade_mixins["subtitle"]("Paginile 46 - 47");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      number: '46',
      hotspots: [
        {
          atom: 'art-g4v1-a46-aminteste-ti',
          top: 15.0233,
          left: 4.5,
          width: 92,
          height: 16,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a46-decopera',
          top: 31.7674,
          left: 4.5,
          width: 92,
          height: 18.7907,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a46-retine',
          top: 51.2093,
          left: 4.5,
          width: 52.6415,
          height: 46.7907,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a46-aplica-1',
          top: 51.3023,
          left: 57.7594,
          width: 38.8443,
          height: 20.3721,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a46-aplica-2',
          top: 72.1395,
          left: 57.7594,
          width: 38.6844,
          height: 25.4884,
          type: 'blank'
        }
      ],
      image: 'v1/p46.jpg'
    },
    {
      number: '47',
      hotspots: [
        {
          atom: 'art-g4v1-a47-exerseaza',
          top: 5.1628,
          left: 4.5,
          width: 92,
          height: 10.1395,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a47-observa',
          top: 16.0465,
          left: 4.5,
          width: 92,
          height: 54.2326,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a47-vocabular-1',
          top: 71.6744,
          left: 4.2642,
          width: 38.3726,
          height: 9.4884,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a47-vocabular-2',
          top: 81.3488,
          left: 4.2642,
          width: 38.3726,
          height: 4.6512,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a47-retine',
          top: 71.1163,
          left: 43.4906,
          width: 53.5849,
          height: 26.6047,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a47-explica',
          top: 86.8372,
          left: 4.264,
          width: 38.37,
          height: 10.2326,
          type: 'blank'
        }
      ],
      image: 'v1/p47.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-u2"]('12.', "Relieful. Caracteristici generale<br>și trepte de relief",'România – caracteristici naturale');
}
}, {id: 'art-g4v1-a46-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Amintește-ți </div></div>");
}
}, {id: 'art-g4v1-a46-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4-u2\"><li>Ce formează ridicăturile și adânciturile existente la suprafața Pământului?</li><li>Citește formele de relief din reprezentarea grafică alăturată, de la cea mai joasă la cea mai înaltă.</li></ul><div class=\"row\"><div class=\"col-sm-5\"><ul class=\"art-g4-u2\"><li>Cu ce le putem asemăna?</li></ul><ol class=\"art-g4-lowercase-u2\"><li>cu dinții unui fierăstrău;</li><li>cu treptele unei scări.</li></ol></div><div class=\"col-sm-7\">");
jade_mixins["img"]("img/v1/v1_p46_aminteste-ti.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a46-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v1-a46-decopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Citește textul de mai jos, apoi răspunde următoarelor întrebări:</div><div class=\"indent\"> <em>„O examinare atentă a hărții pământului românesc nu poate să nu impună oricui [...] că el se încheagă într-un tot de o armonie aproape unică, pe cât de variat în structura lui de amănunt, pe atât de unitar [...]: un mare podiș în mijloc, închis într-o centură de munți care cad spre exterior în trepte [...] din ce în ce mai joase ...</em></div><div class=\"right\">(Ion Conea – <em>Geopolitica și Geoistoria</em>)</div><ul class=\"art-g4-u2\"><li>Cum este descris relieful țării noastre?</li><li>Numește cea mai înaltă formă de relief prezentată în text?</li><li>Cum sunt așezate formele de relief?</li></ul>");
}
}, {id: 'art-g4v1-a46-decopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p46_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a46-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Pe teritoriul României se găsesc toate marile forme de relief: <strong>munți</strong>, <strong>dealuri</strong>, <strong>podișuri </strong>și <strong>câmpii</strong>. Ca urmare, <strong>relieful țării noastre este variat</strong>. Varietatea reliefului are o mare importanță pentru țara noastră. Fiecare formă de relief oferă condiții de viață prielnice pentru diferite plante și animale, dar și pentru oameni. De asemenea, oferă resurse (bogății) naturale folosite de oameni pentru practicarea agriculturii și a altor activități economice.</div><div class=\"indent\">Munții, dealurile, podișurile și câmpiile sunt așezate <strong>în trepte</strong>, de la mijlocul (centrul) țării spre margini. În partea centrală a țării sunt situați munții, treapta de relief cea mai înaltă, care se desfășoară sub forma unui inel uriaș. În interiorul munților se află o zonă mai joasă, cu relief de dealuri și podișuri. Spre exterior, munții sunt înconjurați de dealuri și podișuri, care formează treapta de relief cu înălțimi mijlocii. Dincolo de dealuri și podișuri se întind câmpiile, treapta de relief cea mai joasă. Înălțimea treptelor de relief scade dinspre centru spre margini.</div><div class=\"indent\">Cele trei trepte de relief (munții, dealurile și podișurile, câmpiile) ocupă <strong>suprafețe aproximativ egale</strong>.</div>");
}
});
}
}, {id: 'art-g4v1-a46-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v1-a46-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<ul class=\"art-g4-u2\"><li>Relieful României este uniform, deoarece pe teritoriul țării noastre predomină câmpiile.</li><li>Relieful este așezat în trepte, a căror înălțime crește dinspre centru spre margini.</li></ul>");
}
}, 1, "Reformulează enunțurile următoare astfel încât să devină adevărate. Scrie, pe caiet, enunțurile adevărate.");
}
}, {id: 'art-g4v1-a46-aplica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-u2"].call({
block: function(){
buf.push("<div class=\"center\">1 240 + 1 304 = ?</div><div class=\"indent\">Acest vârf aparține unui deal sau unui munte?</div>");
jade_mixins["img"]("img/v1/v1_p46_aplica.png");
buf.push("<em>Vârful Moldoveanu</em>");
}
}, 2, "Efectuează calculul și vei afla câți metri are cel mai înalt vârf din țara noastră.");
}
}, {id: 'art-g4v1-a46-aplica-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Exersează </div></div>");
}
}, {id: 'art-g4v1-a47-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a47-exerseazaInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Analizează diagrama alăturată și alege varianta corectă de răspuns.</div><div class=\"indent\">Fiecare formă de relief ocupă din suprafața țării: </div>");
}
}, "v1/p47_exerseaza");
buf.push("<div class=\"inline-block\"><strong>Răspuns: &nbsp; </strong></div><div class=\"inline-block\">");
jade_mixins["pickone"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, 2, ['o jumătate','a treia parte','a patra parte'], {name: 'art-g4v1-a47-exerseaza-pick',ignoreAvatar: false,placement:'right'});
buf.push("</div><div class=\"art-g4-width-50\">");
jade_mixins["img"]("img/v1/v1_p47_exerseaza.png");
buf.push("</div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a47-exerseazaex'});
}
}, {id: 'art-g4v1-a47-exerseaza', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a47-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Urmărește harta de mai jos și citește cu atenție legenda. Răspunde apoi cerințelor.</div>");
jade_mixins["img"]("img/v1/v1_p47_observa.png");
buf.push("<ul class=\"art-g4-u2\"><li>În ce parte a țării sunt situate câmpiile? Dar munții? Ce forme de relief înconjoară munții?</li><li>Dacă privim din centrul țării spre margini, în ce ordine sunt situate formele de relief:</li></ul><ol class=\"art-g4-lowercase-u2\"><li>dealuri – munți – câmpii;</li><li> munții – câmpii – dealuri; </li><li>munți – dealuri – câmpii?</li></ol>");
}
}, {id: 'art-g4v1-a47-observa-webview'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Observă</div><div>Urmărește harta și citește cu atenție legenda. Cu verde sunt colorate câmpiile, cu galben dealurile și podișurile, iar cu maro sunt colorați Munții Carpați. Munții, dealurile și podișurile și câmpiile reprezintă cele trei trepte majore ale reliefului României. Observă diferențele dintre relieful de munte, relieful de deal și podiș și relieful de câmpie!</div>");
}
}, "v1/p47_observa");
jade_mixins["img"]("img/v1/p47_observa.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a47-observa', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular</div><div class=\"terms\">depresiune – </div>&nbsp; formă de relief cu înălțimi mai joase, înconjurată de forme de relief mai înalte");
}
}, "v1/p47_vocabular_1");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p48_vocabular_1_1.jpg");
buf.push("<div class=\"center\">Corvul Mare </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p48_vocabular_1_2.jpg");
buf.push("<div class=\"center\">Depresiunea Brașov </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p48_vocabular_1_3.jpg");
buf.push("<div class=\"center\">Depresiunea Cracău-Bistrița</div></div></div></div>");
}
}, {id: 'art-g4v1-a47-vocabular-1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular</div><div class=\"terms\">colină – </div>&nbsp; deal; <div class=\"terms\">colinar – </div>&nbsp; format din mai multe coline");
}
}, "v1/p47_vocabular_2");
jade_mixins["img"]("img/v1/p47_vocabular_2.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a47-vocabular-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-u2\"><div>Explică </div></div>");
}
}, {id: 'art-g4v1-a47-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Ce importanță prezintă pentru viața oamenilor faptul că pe teritoriul țării sunt prezente forme de relief variate.</div>");
}
}, {id: 'art-g4v1-a47-explica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p47_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a47-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">În comparație cu alte țări, România are un relief de <strong>înălțime mijlocie</strong>.</div><div class=\"indent\">Formele de relief se constituie în unități mai mari, fiecare dintre acestea având caracteristici proprii.</div><div class=\"indent\">Aceste <strong>unități de relief </strong>sunt:</div><ul class=\"art-g4-orange\"><li> <em>Depresiunea Colinară a Transilvaniei;</em></li><li> <em>Munții Carpați;</em></li><li> <em>Dealurile subcarpatice (Subcarpații), Dealurile de Vest;</em></li><li> <em>Podișul Moldovei, Podișul Getic, Podișul Mehedinți, Podișul Dobrogei;</em></li><li> <em>Câmpia Română, Câmpia de Vest și Delta Dunării.</em></li></ul>");
}
});
}
}, {id: 'art-g4v1-a47-retine-web'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});