registerChapter({ chapter: "v1-ch01-p38-39", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Localitatea natală. Regiunea înconjurătoare. Țara');
jade_mixins["subtitle"]('Paginile 38 - 39');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a38-observa',
          top: 14,
          left: 4,
          width: 93,
          height: 10.0465,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a38-descopera',
          top: 24.5116,
          left: 4,
          width: 93,
          height: 46.9767,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a38-vocabular',
          top: 71.9535,
          left: 4,
          width: 32.8302,
          height: 25.0233,
          type: 'audio'
        }
      ],
      image: 'v1/p38.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a39-retine',
          top: 5.1628,
          left: 4,
          width: 70.1226,
          height: 24.8372,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a39-aplica-1',
          top: 74.4651,
          left: 4,
          width: 48,
          height: 9.314,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a39-aplica-2',
          top: 83.9535,
          left: 4,
          width: 48,
          height: 13.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a39-activitate-perechi',
          top: 68.5116,
          left: 52.6509,
          width: 45,
          height: 28.6512,
          type: 'blank'
        }
      ],
      image: 'v1/p39.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('10.', "Localitatea natală.<br>Regiunea înconjurătoare. Țara",'De la orizontul local la țară');
}
}, {id: 'art-g4v1-a38-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Observă </div><div>Dacă cel mai mic cerc, marcat cu 1, reprezintă localitatea natală, cu ce număr este marcată regiunea înconjurătoare? Dar țara în care trăim?</div>");
}
}, "v1/p38_observa");
buf.push("<div class=\"art-g4-img-50\">");
jade_mixins["img"]('img/v1/v1_p38_observa.png');
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a38-observa', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v1-a38-descoperaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">George este prieten cu Nicolas, un băiat dintr-o altă țară europeană. Citește scrisoarea trimisă de George prietenului său, analizează hărțile și răspunde la cerințele următoare.</div><div class=\"indent\"><em>„Dragă Nicolas,</em></div><div class=\"indent\"><em>Așa cum ți-am promis, îți trimit câteva hărți, pentru a afla mai multe informații despre locurile în care trăiesc. Localitatea mea natală este un sat situat într-o regiune frumoasă, cu dealuri joase, care se întinde până la mare. În regiune sunt mai multe orașe. Cel mai mare este Constanța, orașul pe care l-ai vizitat și tu. Regiunea mea este situată în sud-estul țării mele. Așa cum știi, țara mea se numește România și este situată, ca și țara ta, în Europa.“</em></div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/v1_p38_descopera_1.png');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v1/v1_p38_descopera_2.png');
buf.push("</div><div class=\"col-sm-12\">");
jade_mixins["img"]('img/v1/v1_p38_descopera_3.png');
buf.push("</div></div><br/>");
jade_mixins["art-g4-ex"](1,'Cum se numește satul în care locuiește George? În ce regiune a țării se află această localitate? Localizează satul lui George pe harta regiunii și pe harta României.');
jade_mixins["art-g4-ex"](2,'Din ce cauză, modul de reprezentare a localității Cobadin diferă pe cele trei hărți?');
jade_mixins["art-g4-ex"](3,'Pe care hartă poți localiza orașul în care locuiești sau cel mai apropiat oraș de localitatea natală? Dar dacă locuiești în Dobrogea?');
}
}, {id: 'art-g4v1-a38-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular</div><div class=\"terms\"> regiune – </div>&nbsp; teritoriu mai întins, în care se află orizontul local. Regiunea are limite clare, iar elementele mediului (relief, climă, ape, soluri, resurse naturale, populație, așezări) sunt relativ omogene, conferind regiunii respective un caracter distinct, diferit de cel al regiunilor vecine");
}
}, "v1/p38_vocabular");
buf.push("<div class=\"row\"><div class=\"col-sm-5 no-padding\">");
jade_mixins["img"]("img/v1/p38_vocabular_1.png");
buf.push("<div class=\"center\">Regiune geografică și istorică </div></div><div class=\"col-sm-7\">");
jade_mixins["img"]("img/v1/p38_vocabular_2.png");
buf.push("<div class=\"center\">Regiune administrativă (regiune de dezvoltare)</div></div></div></div>");
}
}, {id: 'art-g4v1-a38-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p39_retine_out.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a39-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Spațiul extins din jurul localității natale este reprezentat de <strong>regiunea </strong>în care trăiești. Dincolo de această regiune se întind alte regiuni. Fiecare regiune are însușiri proprii legate de relief, ape, vegetație, așezări omenești, resurse naturale, caracteristici îi dau o înfățișare aparte și o deosebesc de alte regiuni.</div><div class=\"indent\">Mai multe regiuni formează un teritoriu numit <strong>țară</strong>, în care trăiesc oameni ce vorbesc aceeași limbă, care au aceleași obiceiuri și care respectă aceleași reguli, numite legi. Țara noastră se numește <strong>România</strong>. Ea se învecinează cu alte țări, care, la rândul lor, au alte țări vecine. Întinderea mare de uscat pe care se află mai multe țări reprezintă un <strong>continent</strong>. România se află pe continentul numit <strong>Europa</strong>.</div>");
}
});
buf.push("<em>1 – planul unei locuințe;</em><br/><em>2 – poziția unei case într-un cartier;</em><br/><em>3 – poziția cartierului în oraș;</em><br/><em>4 – poziția orașului în orizontul local;</em><br/><em>5 – poziția orașului în regiune (județ);</em><br/><em>6 – poziția orașului în cadrul țării.</em><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p39_retine_1.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p39_retine_2.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p39_retine_3.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p39_retine_4.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p39_retine_5.png');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]('img/v1/v1_p39_retine_6.png');
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a39-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div><div class=\"indent\">Răspunde următoarelor cerințe:</div>");
}
}, {id: 'art-g4v1-a39-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1,'Cum se numește regiunea în care este situată localitatea ta natală? În ce parte a țării este situată? Ce forme de relief predomină? Numește două ape (râuri sau lacuri) din regiune. Numește cele mai importante orașe.');
}
}, {id: 'art-g4v1-a39-aplica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2,'Caută în Atlasul geografic hărți pe care se află marcată localitatea natală. Notează în caiet titlul fiecărei hărți și scara la care este realizată. Compară aceste hărți din punct de vedere al suprafeței reprezentate și al elementelor marcate. Compară aceste hărți din punct de vedere al scării. Pe care hărți suprafețele și elementele din realitate au fost micșorate de mai multe ori?');
}
}, {id: 'art-g4v1-a39-aplica-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox"].call({
block: function(){
buf.push("<div class=\"indent\">Împreună cu colegii tăi realizează un colaj cu imagini, având titlul <em>„De la localitatea natală la țara mea“</em>. Imaginile să fie reprezentative pentru orizontul local, pentru regiune și pentru țară.</div>");
}
}, 'Activitate în perechi');
}
}, {id: 'art-g4v1-a39-activitate-perechi'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});