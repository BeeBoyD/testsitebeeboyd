registerChapter({ chapter: "v2-ch01-p28-29", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]('Paginile 28 - 29');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a28-ex1',
          top: 14.7442,
          left: 5,
          width: 90,
          height: 52.186,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a28-ex2',
          top: 68.0465,
          left: 5,
          width: 90,
          height: 8.3721,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a28-ex3',
          top: 77.1628,
          left: 5,
          width: 90,
          height: 12.2791,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a28-ex4',
          top: 90.186,
          left: 5,
          width: 90,
          height: 6.6047,
          type: 'blank'
        }
      ],
      image: 'v2/p28.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a29-ex1',
          top: 14.4651,
          left: 5,
          width: 59.6698,
          height: 9.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a29-ex2',
          top: 24.2326,
          left: 5,
          width: 90,
          height: 49.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a29-ex3',
          top: 74.186,
          left: 5,
          width: 90,
          height: 8.3721,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a29-grila',
          top: 84.0465,
          left: 5,
          width: 90,
          height: 12.5581,
          type: 'blank'
        }
      ],
      image: 'v2/p29.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('&nbsp;&nbsp;&nbsp;', "Recapitulare",'Caracteristici geografice ale regiunii în care este situat orizontul local');
}
}, {id: 'art-g4v2-a28-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>care este denumirea acestei regiuni (sau a regiunilor);</li><li>ce poziție geografică are în cadrul țării;</li><li>numește regiunile sau unitățile geografice cu care se învecinează.</li></ol>");
jade_mixins["img"]("img/v2/v2_p28_harta.png");
}
}, 1, "Identifică pe harta de mai jos regiunea (sau regiunile) în care este situat orizontul local și scrie pe caiet răspunsurile la următoarele cerințe:");
}
}, {id: 'art-g4v2-a28-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Realizează un text geografic, de maxim 10 rânduri, în care să prezinți caracteristicile naturale ale regiunii (sau ale regiunilor) din jurul orizontului local, folosind termenii geografici din lista următoare. Lista de termeni: <em>animale, forme de relief, lacuri, precipitații, râuri, temperaturi medii anuale, trepte de relief, unități geografice, vânturi, vegetație</em>.");
}
}, {id: 'art-g4v2-a28-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<em>În regiunea în care este situat orizontul local populația este foarte numeroasă. Aici se găsesc multe așezări urbane și rurale. Cel mai mare oraș din regiune este Alexandria. Fiind o regiune cu relief de câmpie, satele au gospodăriile situate la distanțe mici unele de celelalte. Principala resursă naturală a regiunii sunt terenurile arabile, dar foarte importante sunt și resursele de petrol și gaze naturale care se exploatează în vecinătate.</em>");
}
}, 3, "Reformulează enunțurile din textul următor astfel încât să corespundă realității geografice din jurul orizontului local. Scrie, pe caiet, textul cu enunțurile corecte.");
}
}, {id: 'art-g4v2-a28-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](4, "Realizează o planșă care să cuprindă informații și imagini reprezentative pentru activitățile economice specifice regiunii (sau regiunilor) din jurul orizontului local. Folosește materialele pe care le-ai adunat în portofoliul personal.");
}
}, {id: 'art-g4v2-a28-ex4'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Autoevaluare</div>");
}
}, {id: 'art-g4v2-a29-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>numele regiunii (sau a regiunilor) din jurul orizontului local;</li><li>poziția sa geografică;</li><li>o regiune sau o unitate geografică învecinată.</li></ol>");
}
}, 1, "Scrie pe caiet:");
}
}, {id: 'art-g4v2-a29-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>forma de relief predominantă din regiune;</li><li>categoria de ape predominantă din regiune;</li><li>vegetația specifică regiunii.</li></ol>");
}
}, 2, "Privește, cu atenție, imaginile de mai jos. Scrie pe caiet cifra corespunzătoare imaginii care prezintă:");
buf.push("<ol class=\"art-g4-lowercase-v2 row\"><li class=\"col-sm-4\">forma de relief predominantă");
jade_mixins["img"]("img/v2/v2_p29_foto_1.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p29_foto_2.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p29_foto_3.png");
buf.push("</li><li class=\"col-sm-4\"> <br/><br/><br/><span>categoria predominantă de ape</span>");
jade_mixins["img"]("img/v2/v2_p29_foto_4.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p29_foto_5.png");
buf.push("</li><li class=\"col-sm-4\">vegetația specifică");
jade_mixins["img"]("img/v2/v2_p29_foto_6.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p29_foto_7.png");
buf.push("<br/>");
jade_mixins["img"]("img/v2/v2_p29_foto_8.png");
buf.push("</li></ol>");
}
}, {id: 'art-g4v2-a29-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>Cea mai importantă resursă naturală din regiunea în care este situat orizontul local este ... .</li><li>Această resursă naturală este folosită pentru producerea ... .</li><li>Principalele activități agricole din regiune sunt legate de ... .</li></ol>");
}
}, 3, "Copiază, pe caiet, enunțurile următoare și completează-le cu răspunsurile corecte:");
}
}, {id: 'art-g4v2-a29-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"center\"> <div class=\"art-g4-green-text text-uppercase\">Grilă de autoevaluare</div></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare-u2\"><tr><th></th><th>Itemul 1</th><th>Itemul 2</th><th>Itemul 3</th></tr><tr><td>Foarte bine</td><td>3 răspunsuri corecte</td><td>3 răspunsuri corecte</td><td>3 răspunsuri corecte</td></tr><tr><td>Bine</td><td>două răspunsuri corecte</td><td>două răspunsuri corecte</td><td>două răspunsuri corecte</td></tr><tr><td>Suficient </td><td>un răspuns corect</td><td>un răspuns corect</td><td>un răspuns corect</td></tr></table></div>");
}
}, {id: 'art-g4v2-a29-grila'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});