registerChapter({ chapter: "v2-ch02-p40-41", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Unitatea 4');
jade_mixins["subtitle"]('România în Europa și pe glob');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a40-exercitii',
          top: 13.4419,
          left: 5,
          width: 90,
          height: 38.9767,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a40-chenar-verde',
          top: 53.6279,
          left: 5,
          width: 90,
          height: 17.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a40-chenar2',
          top: 72.8837,
          left: 5,
          width: 90,
          height: 13.1163,
          type: 'blank'
        }
      ],
      image: 'v2/p40.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a41-video',
          top: 27.8604,
          left: 0.684,
          width: 97.9245,
          height: 4.0931,
          type: 'video'
        }
      ],
      image: 'v2/p41.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('&nbsp;&nbsp;&nbsp;', "Test de evaluare sumativă",'România – elemente de geografie regională');
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a42-exercitii-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
buf.push(" ");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Citește cu atenție enunțurile următoare și alege răspunsul corect.</div>");
}
}, "v2/s2_p40_test_sumativ");
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](1, "Cei mai înalți munți din Carpații Românești sunt:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">Munții Apuseni; </li><li class=\"col-sm-4 btn btn-lg good\">Munții Făgăraș; </li><li class=\"col-sm-4 btn btn-lg bad\">Munții Rodnei.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-1'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](2, "Mureșul și Oltul izvorăsc din:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">Carpații Meridionali; </li><li class=\"col-sm-4 btn btn-lg bad\">Carpații Occidentali; </li><li class=\"col-sm-4 btn btn-lg good\">Carpații Orientali.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-2'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](3, "La marginea Carpaților Orientali și a Carpaților Meridionali se întinde unitatea geografică numită:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">Dealurile de Vest; </li><li class=\"col-sm-4 btn btn-lg bad\">Podișul Mehedinți; </li><li class=\"col-sm-4 btn btn-lg good\">Subcarpații.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-3'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](4, "Prezintă un relief de dealuri foarte netede și cu înălțimi care scad spre sud unitatea geografică numită:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">Podișul Dobrogei; </li><li class=\"col-sm-4 btn btn-lg good\">Podișul Getic; </li><li class=\"col-sm-4 btn btn-lg bad\">Podișul Moldovei.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-4'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](5, "Vegetația naturală de stepă a fost înlocuită de culturi agricole în unitatea geografică numită:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">Carpații Occidentali; </li><li class=\"col-sm-4 btn btn-lg good\">Câmpia Română; </li><li class=\"col-sm-4 btn btn-lg bad\">Dealurile de Vest.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-5'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](6, "Dealurile subcarpatice sunt prielnice pentru cultura:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">cerealelor; </li><li class=\"col-sm-4 btn btn-lg good\">pomilor fructiferi; </li><li class=\"col-sm-4 btn btn-lg bad\">sfeclei de zahăr.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-6'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](7, "Din subsolul celor două unități geografice de câmpie se exploatează:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg good\">gaze naturale și petrol; </li><li class=\"col-sm-4 btn btn-lg bad\">petrol și minereuri feroase; </li><li class=\"col-sm-4 btn btn-lg bad\">minereuri feroase și sare.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-7'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](8, "Județul care înconjoară capitala României se numește:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">Argeș; </li><li class=\"col-sm-4 btn btn-lg bad\">Dâmbovița; </li><li class=\"col-sm-4 btn btn-lg good\">Ilfov.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-8'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](9, "Este situat în vestul țării județul numit:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">Bacău; </li><li class=\"col-sm-4 btn btn-lg bad\">Constanța; </li><li class=\"col-sm-4 btn btn-lg good\">Timiș.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-9'});
jade_mixins["select-to-highlight"].call({
block: function(){
jade_mixins["art-g4-ex-orange"](10,"&nbsp; Cele mai mici unități administrativ-teritoriale din România sunt:");
buf.push("<ol class=\"art-g4-lowercase-orange row\"><li class=\"col-sm-4 btn btn-lg bad\">comunele; </li><li class=\"col-sm-4 btn btn-lg bad\">orașele; </li><li class=\"col-sm-4 btn btn-lg good\">satele.</li></ol><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a64-exercitii-select-1-10'});
}
});
buf.push("<div class=\"is-done-box\"></div></div>");
}
}, {name: 'art-g4v2-a40-exercitii-select'});
}
}, {id: 'art-g4v2-a40-exercitii', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-chenar-v2\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\"><em>Am terminat și eu de rezolvat acest test. A fost ușor, nu-i așa?</em></div><div class=\"indent\"><em>Geografia este materia mea preferată. Cred că și ție îți place. Proiectele și toate materialele strânse în portofoliu ne ajută să înțelegem realitatea din jur și să cunoaștem țara în care trăim.</em></div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p40_foto.png");
buf.push("</div></div></div>");
}
}, {id: 'art-g4v2-a40-chenar-verde'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">„Multe din locurile frumoase pe care le-am văzut îmi revin acum, învăluite în farmecul depărtării, și parcă mă dojenesc, unele că n-am spus destul, altele că n-am spus nimic de ele. Multe vor fi iarăși pe care nu le-am văzut încă. Dar ceea ce se ridică mai luminos și mai sfânt în mijlocul amintirilor mele, podoaba cea mai aleasă și mai mândră-ntre podoabele țării, este poporul românesc. În sufletu-i larg, nespus de duios, lămurit în focul atâtor suferinți, am găsit izvorul curat al frumoaselor lui cântece și înțelesul istoric al trăiniciei și stăruinții noastre pe acest pământ.”</div><div class=\"v2-text-right\">(Alexandru Vlahuță – România pitorească)</div><br/>");
}
}, {id: 'art-g4v2-a40-chenar2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-background-u4\"><div class=\"art-g4-unit-h\">UNITATEA TEMATICĂ<br/><span>4</span></div><div class=\"art-g4-unit-first-ct\"><div class=\"art-g4-unit-first-1\">U4</div><div class=\"art-g4-unit-first-2\">România în Europa și pe glob</div></div><div class=\"row\"><div class=\"col-xs-5 images-left\">");
jade_mixins["img"]('img/v2/v2-p-41-a.png');
jade_mixins["img"]('img/v2/v2-p-41-b.png');
jade_mixins["img"]('img/v2/v2-p-41-c.png');
buf.push("</div><div class=\"col-xs-7\"><div class=\"art-g4-unit-subt2\">CONȚINUTURI:</div><ul class=\"art-g4-unit1\"><li>ROMÂNIA ÎN EUROPA</li><li>EUROPA – UN CONTINENT AL PLANETEI</li><li>TERRA – PLANETA NOASTRĂ</li><li>TERRA – O PLANETĂ A SISTEMULUI SOLAR</li></ul><div class=\"art-g4-border-ct-u1\"><strong class=\"art-g4-purple-text\">  Termeni geografici:</strong><ul class=\"art-g4-v2-c9\"><li>continent, insulă;</li><li>ocean, mare;</li><li>organizație europeană;</li><li>axa Pământului;</li><li>poli, Ecuator, emisferă;</li><li>Sistem Solar;</li><li>planetă, stea;</li><li>glob geografic; planiglob.</li></ul></div></div></div><div class=\"art-g4-unit-h\"></div></div>");
}
}, {id: 'art-g4v2-a41-cover'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p41_deschidere_U_04.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a41-video', class: 'art-g4-video'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});