registerChapter({ chapter: "v1-ch01-p18-19", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Orizontul, linia orizontului, punctele cardinale');
jade_mixins["subtitle"]('Paginile 18 - 19');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a18-observa',
          top: 15.0233,
          left: 5.5,
          width: 92,
          height: 30.6047,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a18-aplica',
          top: 46.186,
          left: 5.5,
          width: 92,
          height: 9.7674,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a18-retine',
          top: 56.5116,
          left: 5.5,
          width: 48,
          height: 41.5814,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a18-descopera-1',
          top: 56.5116,
          left: 54.2217,
          width: 43.3255,
          height: 41.5814,
          type: 'exercise'
        }
      ],
      image: 'v1/p18.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a19-aplica-1',
          top: 4.9767,
          left: 5.5,
          width: 92,
          height: 34.5116,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a19-descopera',
          top: 40.1395,
          left: 5.5,
          width: 92,
          height: 17.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a19-retine',
          top: 59.7674,
          left: 5.5,
          width: 48,
          height: 38.5116,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a19-aplica-2',
          top: 59.7674,
          left: 54.2217,
          width: 43.35,
          height: 38.5116,
          type: 'blank'
        }
      ],
      image: 'v1/p19.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('4.','Orizontul, linia orizontului,<br> punctele cardinale','Orizontul local');
}
}, {id: 'art-g4v1-a18-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a18-observa-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div>Privește imaginile de mai jos și răspunde apoi următoarelor cerințe:</div><div class=\"row\"> <div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p18_observa_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p18_observa_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p18_observa_3.png");
buf.push("</div></div>");
jade_mixins["art-g4-ex"](1,'Pentru fiecare imagine descrie locul în care se află Ionel și tot ceea ce el vede. În care dintre cele trei imagini spațiul pe care îl cuprinde cu privirea este mai extins?');
jade_mixins["art-g4-ex"](2,'Ce vede Ionel în depărtare? Dacă ajunge în vârful muntelui, poate să atingă soarele și norii cu mâna? <br> Cum apar obiectele din imediata apropiere, în comparație cu cele aflate în depărtare?');
jade_mixins["art-g4-ex"](3,' Urmărește, în fiecare imagine, acea linie unde pare că cerul se unește cu pământul. Are aceeași formă?');
}
}, {id: 'art-g4v1-a18-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a18-aplica-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Ieși în curtea școlii și privește în jur. Spațiul pe care îl cuprinzi cu privirea are aceeași extindere în orice loc te-ai afla? Argumentează răspunsul tău. Observă forma liniei care se formează acolo unde pare că cerul se unește cu pământul. Este la fel peste tot în jurul tău?</div>");
}
}, {id: 'art-g4v1-a18-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p18_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a18-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Linia imaginară pe care o vedem de jur împrejurul nostru unde ni se pare că cerul se unește cu pământul se numește <strong>linia orizontului </strong>sau <strong>zare</strong>.</div><div class=\"indent\">Întregul spațiu pe care putem să-l cuprindem cu privirea până la linia orizontului alcătuiește <strong>orizontul</strong>.</div><div class=\"indent\">Mărimea orizontului și forma liniei orizontului se modifică în funcție de locul în care ne aflăm și de înălțimea acestui loc. Dacă privim dintr-un loc mai înalt, spațiul pe care îl vedem este mai întins și linia orizontului pare mai îndepărtată. Dimpotrivă, dacă ne aflăm într-un loc jos sau pe stradă, între clădiri, cuprindem cu privirea un spațiu mai mic, iar linia orizontului pare mai apropiată.</div><div class=\"indent\">Într-o zonă de câmpie linia orizontului poate să fie la distanță mare și să aibă o formă liniară (mai dreaptă); într-o zonă muntoasă aceasta poate avea o formă vălurită și să pară a fi la o distanță mai mică de locul în care ne aflăm.</div>");
}
});
}
}, {id: 'art-g4v1-a18-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v1-a18-descopera-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a18-descopera-1Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Alege varianta corectă: </div>");
}
}, "v1/p18_descopera");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\">");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<li><div class=\"btn btn-lg bad\">într-o încăpere;</div></li><li><div class=\"btn btn-lg good\">la exteriorul unei clădiri.</div></li><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a18-descopera-1-ex1'});
buf.push("</ol>");
}
}, 1, "Spațiul pe care îl cuprindem cu privirea este mai extins atunci când ne aflăm:");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\">");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<li><div class=\"btn btn-lg good\">pe un câmp liber sau într-un loc drept, fără clădiri în jur;</div></li><li><div class=\"btn btn-lg bad\">la poalele unui munte, în fața cărării ce urcă spre culme.</div></li><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a18-descopera-1-ex2'});
buf.push("</ol>");
}
}, 2, "Putem privi la o distanță mai mare atunci când ne aflăm:");
buf.push("<div class=\"is-done-box\"></div>");
}
});
jade_mixins["img"]("img/v1/v1_p18_descopera.png");
buf.push("</div>");
}
}, {name: 'art-g4v1-a18-descopera-1-ex'});
}
}, {id: 'art-g4v1-a18-descopera-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a19-aplica-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Ionel a făcut în vacanță aceste fotografii, pe care a marcat cu roșu linia orizontului.</div>");
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push(" ");
}
}, 1,"Stabilește în care dintre imagini linia orizontului nu este marcată corect și argumentează răspunsul tău.");
jade_mixins["art-g4-ex"](2, "Descrie aspectul liniei orizontului pentru fiecare fotografie și explică motivul pentru care acesta este diferit.");
jade_mixins["art-g4-ex"](3, "Fotografia marcată cu litera <strong><em>b</em></strong> este făcută de Ionel, de pe malul mării, înainte de a se plimba cu vaporașul. În timpul plimbării cu vaporașul în largul mării, Ionel a observat că pe măsură ce se îndepărta de țărm linia orizontului părea să fie tot mai departe. Explică acest fapt.");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p19_aplica_a.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"].call({
block: function(){
buf.push(" ");
}
}, "img/v1/v1_p19_aplica_b.png");
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p19_aplica_c.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"].call({
block: function(){
buf.push(" ");
}
}, "img/v1/v1_p19_aplica_d.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a19-aplica-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v1-a19-descopera-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Ionel a făcut o mare descoperire când a fost la bunici, în vacanță. Dimineața obișnuia să facă mici drumeții cu bunicul prin împrejurimile localității. Niciodată nu s-au rătăcit. Bunicul știa mereu drumul de întoarcere. Întotdeauna îi spunea: <em>„Ionele, uită-te după Soare, vezi din ce parte răsare și vei ști încotro să te îndrepți“. </em>Dar, mereu, lui Ionel i se părea că Soarele răsare din diferite direcții. Când a plecat spre casă, Ionel era tare mândru. Acum știa adevărul.</div><div class=\"indent\">Are importanță din ce parte răsare Soarele? De ce Ionel are impresia că Soarele răsare din diferite direcții? Te poți orienta cunoscând poziția Soarelui pe cer?</div>");
}
}, {id: 'art-g4v1-a19-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p19_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a19-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Pentru a ne orienta și a ști în ce direcție să ne deplasăm ca să ajungem în locul dorit, urmărim poziția Soarelui pe bolta cerească. Soarele <strong>răsare</strong>, în fiecare dimineață, din aceeași parte a orizontului, numită <strong>răsărit </strong>sau <strong>est </strong>(prescurtat <strong>E</strong>). Treptat, Soarele se înalță pe cer, ajungând la <strong>amiază </strong>în cel mai înalt punct deasupra liniei orizontului, în partea numită <strong>miazăzi </strong>sau <strong>sud </strong><strong>(S)</strong>. De la amiază Soarele coboară treptat spre partea opusă răsăritului, până dispare, seara, sub linia orizontului. Spunem că Soarele <strong>apune</strong>. Această parte de orizont se numește <strong>apus </strong>sau <strong>vest </strong><strong>(V)</strong>. Partea de orizont opusă celei de miazăzi se numește <strong>miazănoapte </strong>sau <strong>nord (N).</strong></div><div class=\"indent\"> <strong>Răsăritul, apusul, miazăzi și miazănoapte </strong>se află întotdeauna în aceleași părți ale orizontului și ne ajută să ne orientăm. Aceste puncte principale de orientare se numesc <strong>puncte cardinale</strong>.</div>");
}
});
}
}, {id: 'art-g4v1-a19-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a19-aplica-2-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Ajut-o pe Alice să se orienteze în labirint și să-l găsească pe iepuraș. Precizează direcțiile în care trebuie să se deplaseze Alice prin labirint până la iepuraș.</div>");
jade_mixins["img"]("img/v1/v1_p19_aplica_jos.png");
}
}, {id: 'art-g4v1-a19-aplica-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});