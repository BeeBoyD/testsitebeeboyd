registerChapter({ chapter: "v1-ch01-p10-11", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Orientarea și distanțele în orizontul apropiat');
jade_mixins["subtitle"]('Paginile 10 - 11');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a10-observa',
          top: 14.9302,
          left: 5.5189,
          width: 56.7689,
          height: 15.907,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a10-descopera',
          top: 31.2093,
          left: 5.5189,
          width: 91.7925,
          height: 42.4186,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a10-vocabular',
          top: 74,
          left: 3.3962,
          width: 28.9387,
          height: 23.2558,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a10-retine',
          top: 74.4651,
          left: 33.2311,
          width: 64.0802,
          height: 23.5349,
          type: 'video'
        }
      ],
      image: 'v1/p10.jpg'
    },
    {
      hotspot: [],
      hotspots: [
        {
          atom: 'art-g4v1-a11-aplica',
          top: 4.7907,
          left: 5.5189,
          width: 91.7925,
          height: 19.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a11-retine',
          top: 24.4186,
          left: 5.5189,
          width: 91.7925,
          height: 34.7907,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a11-exerseaza1',
          top: 63.3953,
          left: 5.5189,
          width: 91.7925,
          height: 7.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a11-exerseaza2',
          top: 70.8372,
          left: 5.5189,
          width: 91.7925,
          height: 5.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a11-exerseaza3',
          top: 76.3256,
          left: 5.5189,
          width: 91.7925,
          height: 4.186,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a11-explica1',
          top: 85.0698,
          left: 5.5189,
          width: 91.7925,
          height: 2.2326,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a11-explica2',
          top: 87.4884,
          left: 5.5189,
          width: 91.7925,
          height: 9.0233,
          type: 'blank'
        }
      ],
      image: 'v1/p11.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('2.','Orientarea și distanțele în orizontul apropiat','Orizontul apropiat');
}
}, {id: 'art-g4v1-a10-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div> Observă</div></div>");
}
}, {id: 'art-g4v1-a10-observa-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Numește clădirile pe care le observi în această imagine.</li><li>În ce parte a imaginii este situată casa lui Dan. Dar blocul în care locuiește Andrei?</li><li>Unde este situat spitalul față de școală? Numește clădirea situată în spatele școlii.</li><li>Care dintre cei doi băieți locuiește mai aproape de școală?</li></ul>");
jade_mixins["img"]("img/v1/v1_p10_observa.png");
}
}, {id: 'art-g4v1-a10-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v1-a10-descopera-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a10-descoperaInteractiv\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Daria a fost în vizită la prietena sa, Ana, care locuiește într-o altă localitate. Pentru a se orienta mai ușor, Ana i-a scris câteva indicații și a făcut un desen prin care i-a arătat Dariei pe unde trebuie să meargă pentru a ajunge rapid la ea acasă. Iată ce i-a scris Ana:</div><div class=\"indent\"><em>„Dragă Daria, pentru a ajunge la mine acasă, urmărește drumul indicat de săgețile roșii. Fii atentă! De la autogară, faci la dreapta și, în dreptul Poliției, traversezi și mergi tot înainte. În drumul tău, vei observa pe partea stângă parcul din centrul orașului. După parc faci la stânga. Treci de școala mea și vei vedea blocurile din cartierul meu și, printre ele, blocul în care locuiesc eu (l-am marcat cu semnul X). Te aștept cu drag, Ana.“</em></div><div class=\"indent\">Privește cele două imagini alăturate și răspunde următoarelor cerințe:</div>");
}
}, 'v1/p10_descopera');
jade_mixins["validator"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["pickone"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, 2, ['A','B'], { name: 'art-g4v1-a10-descopera-ex1',  ignoreAvatar: false,placement:'top'});
buf.push("</div></strong><br/><br/>");
jade_mixins["textline"]({name: "art-g4v1-a10-descopera-ex1b", type: 'multiline', max: 5000, rows: 3,  placeholder: 'Explică răspunsul dat.',ignoreScore: true});
}
}, 1,'Care dintre cele două imagini, marcate cu literele A și B, reprezintă desenul trimis de Ana?');
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ul class=\"art-g4 row\"><li class=\"col-xs-9\">Pentru a ajunge de acasă la Poștă, pe drumul cel mai scurt, Ana trece pe lângă Bancă.</li><div class=\"col-xs-3 no-padding\">");
jade_mixins["yesno"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {answer: false, name:'art-r4v1-a18-ex5-1', yes: 'A', no: 'F'});
buf.push("</div><li class=\"col-xs-9\">Distanța dintre autogară și hotel este egală cu distanța, dintre autogară și piața de legume.</li><div class=\"col-xs-3 no-padding\">");
jade_mixins["yesno"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {answer: false, name:'art-r4v1-a18-ex5-2', yes: 'A', no: 'F'});
buf.push("</div></ul>");
}
}, 2,' Scrie A („adevărat“) sau F („fals“) pentru fiecare enunț: ');
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("<div class=\"row\"><div class=\"col-sm-6\"> ");
jade_mixins["img"]("img/v1/v1_p10_descopera_A.png");
buf.push("</div><div class=\"col-sm-6\"> ");
jade_mixins["img"]("img/v1/v1_p10_descopera_B.png");
buf.push("</div></div></div>");
}
}, {name: 'art-g4v1-a10-descopera-ex'});
}
}, {id: 'art-g4v1-a10-descopera', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">a (te) orienta – &nbsp; </div>a ști încotro să te îndrepți pentru a ajunge într-un anumit loc; a recunoaște sau a stabili direcția; a găsi drumul până la o destinație dorită folosindu-te de diferite repere");
}
}, 'v1/p10_vocabular');
buf.push("<div class=\"row\"><div class=\"col-sm-4\"><br/>");
jade_mixins["img"]("img/v1/p10_vocabular_1.jpg");
buf.push("<div class=\"center\">orientarea cu ajutorul hărții și a busolei </div></div><div class=\"col-sm-4\"><div class=\"art-g4-img-50\">");
jade_mixins["img"]("img/v1/smartphone.png");
buf.push("</div><div class=\"center\">aplicație pentru smartphone</div></div><div class=\"col-sm-4\"><br/>");
jade_mixins["img"]("img/v1/p10_vocabular_3.jpg");
buf.push("<div class=\"center\">dispozitiv GPS pentru autovehicule</div></div></div></div>");
}
}, {id: 'art-g4v1-a10-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p10_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a10-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<br/><div class=\"indent\"><strong>Orientarea </strong>în orizontul apropiat înseamnă să stabilești poziția locului în care te găsești, a locului în care dorești să ajungi și să afli direcția în care trebuie să mergi.</div><div class=\"indent\">În funcție de poziția noastră față de anumite elemente (obiecte, clădiri, străzi etc.) ne putem orienta folosind direcțiile<em>stânga, dreapta, înainte (în față), înapoi (în spate).</em></div><div class=\"indent\">Putem stabili poziția unui element din orizontul apropiat raportându-l la poziția altui element (de exemplu: „casa mea se află pe partea dreaptă a străzii“, „școala este situată în spatele farmaciei“).</div>");
}
});
}
}, {id: 'art-g4v1-a10-retine-web'});
jade_mixins["atom"]({id: 'art-g4v1-a11-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a11-aplica-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Privește imaginea alăturată. Mara, Daniel, Emil și Vlad locuiesc în același cartier și învață la aceeași școală.</div><ul class=\"art-g4\"><li>Stabilește poziția locuinței lui Daniel în raport cu școala.</li><li>Stabilește poziția locuinței lui Emil în raport cu locuința lui Daniel.</li><li>În ce parte este situat semaforul față de locuința Marei?</li><li>Care dintre cei patru copii parcurge o distanță mai mare de acasă până la școală? De ce?</li></ul>");
jade_mixins["img"]("img/v1/v1_p11_aplica.png");
buf.push("<br/>");
}
}, {id: 'art-g4v1-a11-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține </div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Elementele aflate în orizontul apropiat sunt poziționate în apropiere unele față de altele, astfel că măsurarea distanțelor dintre ele se poate face cu instrumente de măsură simple (riglă, metru, ruletă etc.).</div>");
}
}, 'v1/p11_retine');
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p11_retine_1.jpg");
buf.push("<div class=\"center\">camera </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p11_retine_2.jpg");
buf.push("<div class=\"center\">cartierul </div></div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p11_retine_3.jpg");
buf.push("<div class=\"center\">localitatea</div></div></div></div>");
}
}, {id: 'art-g4v1-a11-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-subtitle\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a11-exerseaz-titlu-w'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1,"Într-o zi, Emil și Daniel s-au hotărât să măsoare distanța dintre cele două porți ale terenului de sport cu un instrument numit ruletă. După ce au măsurat și au făcut calculele necesare, cei doi băieți au aflat că distanța este de 40 m. Cum au procedat pentru a măsura distanța dintre cele două porți, știind că lungimea maximă pe care au putut-o măsura o dată cu ruleta este de 10 m?");
}
}, {id: 'art-g4v1-a11-exerseaza1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2, "Emil a vrut să măsoare distanța dintre cele două porți ale terenului de sport și cu pasul. El știe că un pas de-al său măsoară 40 cm. Câți pași a numărat Emil de la o poartă la cealaltă? Explică de ce există posibilitatea ca distanța măsurată cu pasul să fie diferită de distanța măsurată cu un instrument adecvat?");
}
}, {id: 'art-g4v1-a11-exerseaza2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](3, "Care dintre obiectele aflate în clasă poți să le măsori cu rigla? De ce nu poți măsura distanța de la tablă la bancă cu rigla?");
}
}, {id: 'art-g4v1-a11-exerseaza3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Explică </div></div>");
}
}, {id: 'art-g4v1-a11-explica-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1, "Explică poziția școlii tale față de clădirile mai importante din cartierul tău.");
}
}, {id: 'art-g4v1-a11-explica1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>un copac;</li><li>o mașină pe care ai văzut-o dimineață în fața școlii;</li><li>o clădire importantă din vecinătatea locuinței tale;</li><li>numele școlii în care înveți.</li></ol>");
}
}, 2, "Pentru a-i explica unui prieten unde este situată locuința ta, îi dai ca reper:");
}
}, {id: 'art-g4v1-a11-explica2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});