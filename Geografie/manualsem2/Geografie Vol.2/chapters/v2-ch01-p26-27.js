registerChapter({ chapter: "v2-ch01-p26-27", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Caracterizarea regiunii (sau a regiunilor) din jurul orizontului local');
jade_mixins["subtitle"]('Paginile 26 - 27');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a26-aminteste-ti',
          top: 19.0233,
          left: 5,
          width: 90,
          height: 5.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a26-observa',
          top: 30.3721,
          left: 5,
          width: 57,
          height: 32.8372,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a26-descopera-exercitii',
          top: 68.6047,
          left: 5,
          width: 90,
          height: 18.6977,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a26-explica',
          top: 92.6977,
          left: 5,
          width: 90,
          height: 4.093,
          type: 'blank'
        }
      ],
      image: 'v2/p26.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a27-aminteste-ti',
          top: 9.5349,
          left: 5,
          width: 90,
          height: 5.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-retine',
          top: 16.6977,
          left: 5,
          width: 31,
          height: 59.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-descopera',
          top: 20.9767,
          left: 37,
          width: 58,
          height: 11.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-aplica-ex1',
          top: 38.3721,
          left: 37,
          width: 58,
          height: 3.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-aplica-ex2',
          top: 41.907,
          left: 37,
          width: 58,
          height: 1.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-aplica-ex3',
          top: 43.9535,
          left: 37,
          width: 58,
          height: 3.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-aplica-ex4',
          top: 47.6744,
          left: 37,
          width: 58,
          height: 27.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-explica-ex1',
          top: 81.7209,
          left: 5,
          width: 90,
          height: 9.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a27-explica-ex2',
          top: 91.3023,
          left: 5,
          width: 90,
          height: 5.4884,
          type: 'blank'
        }
      ],
      image: 'v2/p27.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('5.', "Caracterizarea regiunii (sau a regiunilor) din jurul orizontului local",'Caracteristici geografice ale regiunii în care este situat orizontul local');
}
}, {id: 'art-g4v2-a26-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Amintește-ți </div></div>");
}
}, {id: 'art-g4v2-a26-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Nicolas știe că prietenul său George locuiește în satul Cobadin din Podișul Dobrogei și, fiind pasionat de geografie, dorește să afle mai multe caracteristici ale regiunii din jurul orizontului local în care trăiește prietenul său din România.</div>");
}
}, {id: 'art-g4v2-a26-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă</div></div>");
}
}, {id: 'art-g4v2-a26-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-8\"><div class=\"indent\">George a răspuns dorinței prietenului său și i-a caracterizat regiunea în care este situat orizontul local. De asemenea, i-a trimis lui Nicolas harta alăturată și fotografiile de mai jos.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p26_foto_1.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p26_foto_3.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p26_foto_2.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p26_foto_4.png");
buf.push("</div></div><div class=\"indent\">Ce elemente de prezentare ale regiunii Podișul Dobrogei le-a observat Nicolas prin studierea hărții și a fotografiilor trimise de George?</div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v2/v2_p26_harta.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a26-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a26-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Consideră că locuiești în satul Cobadin și scrie o scurtă scrisoare pentru Nicolas, în care să caracterizezi regiunea din jurul orizontului local. Scrisoarea să cuprindă și răspunsurile la următoarele cerințe:</div>");
jade_mixins["art-g4-ex-v2"](1, "Ce ape limitează la vest, la nord și la est Podișul Dobrogei?");
jade_mixins["art-g4-ex-v2"](2, "Ce forme de relief sunt în Podișul Dobrogei? În ce parte a podișului se află cele mai mari înălțimi?");
jade_mixins["art-g4-ex-v2"](3, "Ce fel de vegetație este specifică acestei regiuni? De ce pădurile ocupă suprafețe foarte reduse? Comparativ cu regiunile muntoase cum sunt temperaturile în Podișul Dobrogei? Dar precipitațiile?");
jade_mixins["art-g4-ex-v2"](4, "Numește principalul râu din această regiune. În ce lac se varsă acest râu?");
jade_mixins["art-g4-ex-v2"](5, "Numește cele mai importante orașe din jurul orizontului local al lui George.");
jade_mixins["art-g4-ex-v2"](6, "Numește principalele activități agricole din această regiune. Ce produse agricole se obțin în urma acestor activități?");
}
}, {id: 'art-g4v2-a26-descopera-exercitii'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Explică </div></div>");
}
}, {id: 'art-g4v2-a26-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Centralele eoliene folosesc forța vântului și produc energie electrică. De ce se consideră că aceste instalații produc o <em>energie curată</em>? Numește și alte surse de energie considerate <em>curate</em>.</div>");
}
}, {id: 'art-g4v2-a26-explica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Amintește-ți </div></div>");
}
}, {id: 'art-g4v2-a27-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Datorită varietății reliefului și așezării sale în trepte, aspectul liniei orizontului și distanța la care aceasta pare a fi situată diferă de la un loc la altul. În funcție de locul în care ne aflăm, linia orizontului poate să aibă un aspect liniar și să fie situată la o distanță mare sau poate să aibă o formă vălurită și să pară a fi foarte apropiată.</div>");
}
}, {id: 'art-g4v2-a27-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Spațiul în care este situat orizontul local poate avea o înfățișare și caracteristici asemănătoare pe toată întinderea sau poate prezenta aspecte diferite în raport cu cele patru direcții cardinale. Orice caracterizare a acestui spațiu începe cu localizarea orizontului local. Spațiul lărgit al orizontului local poate să acopere una sau mai multe regiuni. Astfel, când spațiul din jurul orizontului local prezintă caracteristici naturale asemănătoare, orizontul nostru local este situat într-o singură regiune (de câmpie, deluroasă sau montană). Când aceste caracteristici naturale, îndeosebi cele legate de relief, diferă pe una sau mai multe direcții cardinale, orizontul local se situează la limita dintre două sau trei unități geografice învecinate sau în apropierea acestei limite și reunește caracteristici ale acestor unități.</div>");
}
});
}
}, {id: 'art-g4v2-a27-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a27-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Descrie trăsăturile naturale ale spațiului din jurul orizontului local pe care le-ai observat în timpul excursiilor cu colegii sau în timpul deplasărilor făcute cu familia. Înfățișarea reliefului din jurul orizontului local este aceeași spre toate direcțiile cardinale? Spațiul din jurul orizontului local face parte dintr-o singură regiune sau cuprinde porțiuni din mai multe regiuni?</div>");
}
}, {id: 'art-g4v2-a27-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a27-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Identifică și localizează pe harta murală a României orizontul local. În ce parte a țării este situat?");
}
}, {id: 'art-g4v2-a27-aplica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Numește regiunea (sau regiunile) din jurul orizontului tău local.");
}
}, {id: 'art-g4v2-a27-aplica-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Identifică în Atlasul geografic harta care prezintă regiunea (sau regiunile) din jurul orizontului tău local.");
}
}, {id: 'art-g4v2-a27-aplica-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
jade_mixins["img"]("img/v2/v2_p27_foto.png");
buf.push("<div class=\"small-text\">Trepte de relief în Podișul Dobrogei (între Dunăre și Munții Măcinului)</div>");
}
}, 4, "Caracterizează regiunea din jurul orizontului local pe baza elementelor de prezentare învățate.");
}
}, {id: 'art-g4v2-a27-aplica-ex4'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Explică </div></div>");
}
}, {id: 'art-g4v2-a27-explica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Îți mai amintești de Daniel? El locuiește în orașul Timișoara și a făcut cu colegii de clasă mai multe excursii în jurul orizontului local. Daniel și colegii săi au observat că mergând spre vest față de Timișoara, linia orizontului este mereu foarte netedă, liniară. Dar mergând spre nord-est sau spre est linia orizontului devine foarte vălurită și uneori chiar pare a fi foarte aproape de locul în care se aflau. Explică aceste fapte. Orizontul local al lui Daniel acoperă una sau mai multe regiuni?");
}
}, {id: 'art-g4v2-a27-explica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Mama lui George este medic și lucrează în orașul Constanța. Într-o zi, i-a pus lui George următoarea întrebare: de ce spre est Podișul Dobrogei are o întindere limitată, deși linia orizontului apare la un moment dat chiar dreaptă și foarte îndepărtată? Tu știi răspunsul la această întrebare?");
}
}, {id: 'art-g4v2-a27-explica-ex2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});