registerChapter({ chapter: "v2-ch02-p48-49", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Europa și România – elemente comune');
jade_mixins["subtitle"]("Paginile 48 - 49");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a48-aminteste-ti',
          top: 19.0233,
          left: 5,
          width: 90,
          height: 8,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a48-descopera-ex-1',
          top: 32.0465,
          left: 5,
          width: 90,
          height: 12.9302,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a48-descopera-ex-2',
          top: 45.2558,
          left: 5,
          width: 90,
          height: 14.8837,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a48-vocabular',
          top: 84.7907,
          left: 53.6321,
          width: 42.2642,
          height: 12.093,
          type: 'audio'
        }
      ],
      image: 'v2/p48.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a49-retine',
          top: 5.4419,
          left: 5,
          width: 90,
          height: 26.3256,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a49-aplica-ex-1',
          top: 37.5349,
          left: 5,
          width: 49.3208,
          height: 20,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a49-aplica-ex-2',
          top: 57.7209,
          left: 5,
          width: 49.8113,
          height: 11.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a49-exerseaza',
          top: 74.5581,
          left: 5,
          width: 47.5708,
          height: 23.2558,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a49-portofoliu',
          top: 85.1628,
          left: 53.1604,
          width: 42.1462,
          height: 12.186,
          type: 'blank'
        }
      ],
      image: 'v2/p49.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('12.', "Europa și România - elemente comune",'Europa – un continent al planetei');
}
}, {id: 'art-g4v2-a48-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Amintește-ți</div>");
}
}, {id: 'art-g4v2-a48-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4-v2-c9\"><li>Care este cea mai înaltă treaptă de relief din țara noastră? Unde se varsă majoritatea râurilor din țara noastră? Ce legătură există între Marea Neagră și România?</li><li>Reformulează următorul enunț, astfel încât să corespundă realității geografice: Prin poziția sa geografică în cadrul Europei, România este o țară est-europeană.</li></ul>");
}
}, {id: 'art-g4v2-a48-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a48-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ul class=\"art-g4-v2-c9\"><li>Ca urmare a poziției sale geografice, pe teritoriul României predomină caracteristicile central-europene de climă și vegetație.</li><li>Munții Carpați reprezintă un important lanț muntos european, cuprins între Munții Alpi și Munții Balcani.</li><li>Dunărea străbate Europa de la est la vest și se varsă în Marea Neagră printr-o deltă.</li></ul>");
}
}, 1, "Copiază în caiet propozițiile următoare. Analizează hărțile de mai jos și scrie A („adevărat“) sau F („fals“) pentru fiecare enunț.");
}
}, {id: 'art-g4v2-a48-descopera-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"indent\"><em>„Lanțul Munților Carpați îmbracă o parte din Europa Centrală. Acești munți alcătuiesc o parte din relieful mai multor țări, care au în acest fel un caracter carpatic.”</em></div><div class=\"indent\"><em>Dunărea „este partea care ne ține în legătură cu popoarele din apusul și centrul Europei și tot ea ne deschide calea [...], pentru schimbul produselor țării și muncii poporului, cu produsele țărilor celor mai îndepărtate.“</em></div><div class=\"v2-text-right\">(Grigore Antipa – <em>Dunărea și problemele ei științifice, economice și politice</em>)</div><ul class=\"art-g4-v2-c9\"><li>Ce înseamnă țară carpatică?</li><li>Cum realizează Dunărea legătura României cu țările din vestul și centrul Europei?</li></ul><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p48_harta_1.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p48_harta_2.png");
buf.push("</div></div>");
}
}, 2, "Citește textele de mai jos și răspunde următoarelor cerințe:");
}
}, {id: 'art-g4v2-a48-descopera-ex-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div><strong> <em>lanţ muntos </em></strong>– șir neîntrerupt de munţi care se desfăşoară pe o suprafață întinsă, pe o anumită direcţie</div>");
}
}, 'v2/s2_p48_vocabular');
jade_mixins["img"]('img/v2/v2_p48_vocabular.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a48-vocabular', class:'art-g4-audio'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div><strong>Spațiul geografic românesc </strong>face parte din <strong>spațiul geografic european</strong>. Ca urmare, <strong>România </strong>prezintă o serie de <strong>elemente comune cu Europa</strong>, atât din punct de vedere al caracteristicilor sale naturale, cât și sub aspect economic, social, cultural etc. Prin <strong>Carpați </strong>și <strong>Dunăre </strong>se realizează legătura strânsă a României cu vestul și centrul Europei.</div>");
}
}, 'v2/s2_p49_retine');
jade_mixins["img"]('img/v2/v2_p49_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a49-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Aplică </div>");
}
}, {id: 'art-g4v2-a49-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v2/v2_p49_aplica.png");
buf.push("</div>");
}
}, 1, "Analizează cele două grafice de mai jos și precizează cu ce literă este marcat graficul care indică faptul că două treimi din Munții Carpați se află pe teritoriul României.");
}
}, {id: 'art-g4v2-a49-aplica-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9 row\"><li class=\"col-sm-4\">25%; </li><li class=\"col-sm-4\">între 25% și 50%; </li><li class=\"col-sm-4\">50%.</li></ol>");
}
}, 2, "Fluviul Dunărea are o lungime totală de 2 860 km. Întră în țară la vest de localitatea Baziaș și se varsă în Marea Neagră printr-o frumoasă deltă. Traseul Dunării pe teritoriul României are o lungime de 1 075 km. În România, Dunărea parcurge din lungimea sa totală:");
}
}, {id: 'art-g4v2-a49-aplica-ex-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Exersează </div>");
}
}, {id: 'art-g4v2-a49-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">România este un stat european cu o întindere de mărime medie. Să presupunem că reprezentăm suprafața Europei printr-un pătrat galben și suprafața României printr-un pătrat roșu, ca în desenele de mai jos. Având în vedere întinderea Europei și a României, care desen ar reprezenta corect cele două spații geografice?</div><div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v2/v2_p49_exerseaza.png");
buf.push("</div><br/>");
}
}, {id: 'art-g4v2-a49-exerseaza'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-purplebox-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Realizează pentru portofoliu o compunere cu titlul <em>România, țară europeană</em>, în care să prezinți elementele comune celor două spații geografice: Europa și România.</div>");
}
}, "Portofoliu");
}
}, {id: 'art-g4v2-a49-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});