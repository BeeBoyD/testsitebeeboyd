registerChapter({ chapter: "v2-ch01-p30-31", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Organizarea administrativă actuală');
jade_mixins["subtitle"]('Paginile 30 - 31');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a30-observa',
          top: 19.3023,
          left: 5,
          width: 66,
          height: 22.6047,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a30-descopera',
          top: 46.8372,
          left: 5,
          width: 90,
          height: 13.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a30-retine',
          top: 61.3488,
          left: 5,
          width: 42,
          height: 20,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a30-exerseaza-exercitii',
          top: 87.2093,
          left: 5,
          width: 90,
          height: 9.4884,
          type: 'blank'
        }
      ],
      image: 'v2/p30.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a31-retine',
          top: 4.9767,
          left: 5,
          width: 90,
          height: 20,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a31-aplica-ex1',
          top: 29.6279,
          left: 5,
          width: 90,
          height: 13.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a31-aplica-ex2',
          top: 42.9302,
          left: 5,
          width: 90,
          height: 8.7442,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a31-aplica-ex3',
          top: 51.9535,
          left: 5,
          width: 90,
          height: 8.8372,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a31-aplica-ex4',
          top: 60.9767,
          left: 5,
          width: 90,
          height: 3.907,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a31-exerseaza',
          top: 70.6512,
          left: 5,
          width: 67,
          height: 7.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a31-explica',
          top: 83.1163,
          left: 5,
          width: 67,
          height: 2.4186,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a31-portofoliu',
          top: 90.6512,
          left: 5,
          width: 90,
          height: 5.8605,
          type: 'blank'
        }
      ],
      image: 'v2/p31.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('6.', "Organizarea administrativă actuală",'Organizarea administrativă a României');
}
}, {id: 'art-g4v2-a30-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v2-a30-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-8\"><div class=\"indent\">George îndrăgește orele de geografie pentru că află mereu informații noi, care îi sunt de folos în viața de zi cu zi. Pentru tine, George a pregătit aceste imagini, cu două mașini identice, ca marcă și culoare, pe care le-a fotografiat într-o parcare.</div><div class=\"indent\">Observi plăcuțele de la mașini? Și George s-a amuzat, spunându-și că GEO poate fi prescurtarea de la <strong>Geo</strong>rge sau de la <strong>geo</strong>grafie! El știe că proprietarii acestor mașini trăiesc în regiunea Podișul Dobrogei, dar în localități diferite, ce aparțin celor două județe din regiune.</div><ul class=\"art-g4-v2\"><li>Ai observat primele două litere scrise pe plăcuțele mașinilor din localitatea natală? Care sunt aceste litere? Ce indică aceste litere?</li><li>Ai observat pe plăcuțele mașinilor care trec prin localitatea ta natală și alte litere? Înseamnă că proprietarii mașinilor nu locuiesc în județul tău!</li></ul></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p30_observa_1.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p30_observa_2.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a30-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a30-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Citește textul următor:</div><div class=\"indent\"><em>Pentru o mai bună organizare, gospodărire și dezvoltare economică, teritoriul țării noastre este împărțit în suprafețe mai mici numite unități administrativ-teritoriale. Cele mai întinse unități administrativ-teritoriale sunt județele. Împărțirea în județe este atestată documentar din anul 1392, când Mircea cel Bătrân, domnul Țării Românești, numește ca județ Ținutul Vâlcii. Astfel, județul Vâlcea, reprezintă primul județ atestat documentar de pe teritoriul României.</em></div><div class=\"indent\">Observă harta de mai jos. Cum se numește această hartă? Identifică pe hartă județul Vâlcea.</div>");
jade_mixins["img"]("img/v2/v2_p30_harta.png");
}
}, {id: 'art-g4v2-a30-descopera'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Teritoriul României este organizat, sub aspect administrativ, în unități administrativ-teritoriale numite județe, orașe, municipii, comune și sate. Țara noastră este alcătuită din 41 de județe, la care se adaugă orașul București, capitala țării, cu importanță (rang) de județ.</div>");
}
}, 'v2/s2_p30_retine');
jade_mixins["img"]('img/v2/v2_p30_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a30-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v2-a30-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Răspunde următoarelor cerințe:</div>");
jade_mixins["art-g4-ex-v2"](1, "Cum sunt marcate, pe hartă, județele țării noastre? Județele sunt egale ca întindere?");
jade_mixins["art-g4-ex-v2"](2, "Câte județe se află în regiunea Podișul Dobrogei? Cum se numesc aceste județe? Asociază prescurtările convenționale TL și CT cu denumirea județelor.");
jade_mixins["art-g4-ex-v2"](3, "Numește județul de care aparține localitatea natală. Localizează pe hartă acest județ.");
}
}, {id: 'art-g4v2-a30-exerseaza-exercitii'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p31_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a31-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Județele sunt alcătuite din <strong>municipii</strong>, <strong>orașe</strong>, <strong>comune</strong> și <strong>sate</strong>.</div><div class=\"indent\"> <strong>Orașele </strong>care au un număr mai mare de locuitori, o industrie dezvoltată, mai multe școli, spitale, instituții de cultură sunt declarate prin lege <strong>orașe-municipii</strong>. Cel mai important <strong>municipiu</strong>, în care se află prefectura (instituția care gospodărește întregul județ), este declarat <strong>municipiu reședință de județ</strong>.</div><div class=\"indent\"> <strong>Satele </strong>sunt cele mai mici unități administrativ-teritoriale ale României. Mai multe sate învecinate formează o <strong>comună</strong>. Satul în care se află primăria (instituția de conducere a comunei) este <strong>sat reședință de comună</strong>.</div>");
}
});
}
}, {id: 'art-g4v2-a31-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v2-a31-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Copiază pe caiet propozițiile următoare și scrie A (dacă propoziția este „adevărată”) sau F (dacă este „falsă”), pentru fiecare enunț:");
buf.push("<ul class=\"art-g4-v2\"><li>Cele mai întinse unități administrativ-teritoriale sunt satele.</li><li>Județele sunt diferite ca întindere și număr de locuitori.</li><li>Mai multe comune învecinate formează un sat.</li><li>Toate orașele dintr-un județ sunt declarate prin lege orașe-municipii.</li><li>Într-un județ pot fi două sau mai multe orașe-municipii reședință de județ.</li></ul>");
}
}, {id: 'art-g4v2-a31-aplica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
jade_mixins["img"]("img/v2/v2-p31-schema.png");
}
}, 2, "Completează casetele libere din schema de mai jos cu unitățile administrativ-teritoriale corespunzătoare:");
}
}, {id: 'art-g4v2-a31-aplica-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>poziția geografică în cadrul țării;</li><li>numele orașului-municipiu reședință de județ;</li><li>forma de relief predominantă.</li></ol>");
}
}, 3, "Identifică pe harta administrativă a României următoarele județe: Arad, Botoșani, Caraș-Severin, Mureș, Teleorman. Pentru fiecare județ precizează:");
}
}, {id: 'art-g4v2-a31-aplica-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](4, "Identifică pe harta administrativă cinci orașe-municipiu reședință de județ care au același nume cu al județului și cinci orașe-municipiu reședință de județ cu nume diferit de numele județului.");
}
}, {id: 'art-g4v2-a31-aplica-ex4'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Exersează </div></div>");
}
}, {id: 'art-g4v2-a31-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-8\"><div class=\"indent\">Ce prezintă harta alăturată? Câte sate cuprinde această unitate administrativteritorială a județului Bihor? Cum se numește satul care reprezintă reședința aceastei comune? Ce sat este traversat de râul Crișul Repede? Cum se numește cel mai sudic sat din această comună?</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p31_exerseaza_harta.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a31-exerseaza'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Explică</div></div>");
}
}, {id: 'art-g4v2-a31-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Explică de ce a fost nevoie de o organizare administrativă a teritoriului României.</div>");
}
}, {id: 'art-g4v2-a31-explica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Portofoliu </div></div>");
}
}, {id: 'art-g4v2-a31-portofoliu-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Folosind harta administrativă, întocmește o listă cu județele țării. Pentru fiecare județ, notează orașulmunicipiu reședință de județ. Subliniază apoi cu maro județele situate în regiuni muntoase, cu galben județele situate în regiuni deluroase și cu verde județele de câmpie.</div>");
}
}, {id: 'art-g4v2-a31-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});