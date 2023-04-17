registerChapter({ chapter: "v2-ch01-p38-39", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]('Paginile 38 - 39');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a38-ex1',
          top: 14.9302,
          left: 5,
          width: 90,
          height: 13.9535,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a38-ex2',
          top: 29.5349,
          left: 5,
          width: 90,
          height: 54.3256,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a38-ex3',
          top: 84.3256,
          left: 5,
          width: 90,
          height: 4.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a38-ex4',
          top: 89.7209,
          left: 5,
          width: 90,
          height: 6.8837,
          type: 'blank'
        }
      ],
      image: 'v2/p38.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a39-chenar',
          top: 13.1628,
          left: 5,
          width: 90,
          height: 15.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a39-chestionar',
          top: 29.3488,
          left: 5,
          width: 90,
          height: 53.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a39-grila',
          top: 84.2326,
          left: 5,
          width: 90,
          height: 12.2791,
          type: 'blank'
        }
      ],
      image: 'v2/p39.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('&nbsp;&nbsp;&nbsp;', "Recapitulare",'Organizarea administrativă a României');
}
}, {id: 'art-g4v2-a38-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Completează în căsuțe informațiile corespunzătoare:");
}
}, "v2/s2_p38_recapitulare_01");
buf.push("<ol class=\"art-g4-lowercase-v2 row\"><li>Unitățile administrativ-teritoriale din țara noastră sunt:</li>");
jade_mixins["multiRegex"]({
            name: 'art-g4v2-a38-ex1-regEx-1',
            hasIsDoneBox: false,
            regexps: [
              ["^comune$","^comunele$","^comun[a|ă]$" ],
              ["^jude[t|ț]e$","^jude[t|ț]$","^jude[t|ț]ul$","^jude[t|ț]ele$"],
              ["^municipii$", "^municipiile$","^municipiul$","^municipiu$"],
              ["^ora[s|ș]e$","^ora[s|ș]ele$","^ora[s|ș]$","^ora[s|ș]ul$"],
              ["^sate$", "^satele$","^satul$","^sat$"],
            ],
            textlines: [
              {placeholder: '...', className: 'col-md-4', size: '15'},
              {placeholder: '...', className: 'col-md-4', size: '15'},
              {placeholder: '...', className: 'col-md-4', size: '15'},
              {placeholder: '...', className: 'col-md-4', size: '15'},
              {placeholder: '...', className: 'col-md-4', size: '15'},
            ],
            statementClassName: 'row',
            containerClassName: 'row'
          });
buf.push("<li><span class=\"inline-block\">Cele mai mari unități administrativ-teritoriale sunt:</span><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a38-ex1-t-1", type: 'text', max: 50,regexp: '^jude[t|ț]ele$',size:'15', placeholder: '...'});
buf.push("</div></li><li> <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a38-ex1-t-2", type: 'text', max: 50,regexp: '^[C|c]omuna$',size:'15', placeholder: '...'});
buf.push("</div><span class=\"inline-block\">este formată din mai multe sate învecinate.</span></li></ol><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a38-ex1-regEx'});
}
}, {id: 'art-g4v2-a38-ex1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Precizează:");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>numele unui județ situat predominant în zona montană;</li><li>numele județului pe teritoriul căruia se află Delta Dunării;</li><li>numele județului al cărui oraș-municipiu reședință de județ se numește Baia Mare.</li>");
jade_mixins["img"]("img/v2/v2_p38_harta.png");
buf.push("</ol>");
}
}, {id: 'art-g4v2-a38-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Explică afirmația: <em>București este cel mai important oraș al României</em>.");
}
}, {id: 'art-g4v2-a38-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<div>Lista de termeni: <em>activități economice, climă, comună, faună, hidrografie, oraș, relief, resurse, sat, vegetație.</em></div>");
}
}, 4, "Realizează un text geografic de maxim 10 rânduri, în care să caracterizezi județul în care este situat orizontul local. Folosește în caracterizare termenii geografici din lista următoare.");
}
}, {id: 'art-g4v2-a38-ex4'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Autoevaluare</div>");
}
}, {id: 'art-g4v2-a39-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-chenar-v2\"><div class=\"indent\">Astăzi ești jurnalist de investigație și ai de realizat un articol pe tema: <em>„Cunosc elevii din clasa a IV-a organizarea administrativă a României?”. </em>Pentru această investigație jurnalistică vei oferi colegilor un chestionar, care cuprinde o serie de cerințe la care aceștia trebuie să răspundă. Centralizând răspunsurile date de colegi, vei putea realiza articolul solicitat.</div><div class=\"indent\">Specialiștii susțin că întotdeauna cel care pune întrebările trebuie să cunoască răspunsurile. Numai în acest mod poate să evalueze răspunsurile primite de la persoanele chestionate. Dovedește că ești un competent jurnalist de investigație și răspunde la cerințele chestionarului.</div></div>");
}
}, {id: 'art-g4v2-a39-chenar'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-v2-chestionar\"><p class=\"title\">CHESTIONAR </p><div class=\"indent\"><em>Realizăm o investigație jurnalistică prin care dorim să demonstrăm faptul că elevii claselor a IV-a cunosc aspectele legate de organizarea administrativă a României. Te rugăm să răspunzi la următoarele cerințe:</em></div><div class=\"art-g4-text-green-v2\">A.  </div> Demonstrează că ai înțeles organizarea administrativă a României. Alege varianta corectă de răspuns:<br/><div class=\"art-g4-text-green-v2\">1. </div> Numărul de județe din România este:<ol class=\"art-g4-lowercase-v2\"><li class=\"col-sm-4\">39;</li><li class=\"col-sm-4\">40;</li><li class=\"col-sm-4\">41.</li></ol><div class=\"art-g4-text-green-v2\">2. </div> Cel mai important oraș dintr-un județ, în care se află prefectura, este declarat:<ol class=\"art-g4-lowercase-v2\"><li class=\"col-sm-4\">comună;</li><li class=\"col-sm-4\">oraș-municipiu cu prefectură;</li><li class=\"col-sm-4\">oraș-municipiu reș</li></ol><br/><br/><div class=\"art-g4-text-green-v2\">3. </div> Mai multe sate vecine pot forma: <ol class=\"art-g4-lowercase-v2\"><li class=\"col-sm-4\">o comună; </li><li class=\"col-sm-4\">un județ; </li><li class=\"col-sm-4\">un oraș.</li></ol><br/><div class=\"art-g4-text-green-v2\">B.  </div> Dovedește că îți cunoști județul natal. Completează spațiile libere cu informația corespunzătoare:<ol class=\"art-g4-v2\"><li>Județul meu se numește ... și este situat în partea de ... a României.</li><li>Cea mai înaltă treaptă de relief din județ este reprezentată de ... .</li><li>Cel mai important râu din județ este ..., care se varsă în ... .</li><li>Orașul-municipiu reședință de județ se numește ... .</li></ol><br/><div class=\"art-g4-text-green-v2\">C.  </div> Demonstrează că, indiferent de regiunea în care trăiești, ești un adevărat român și cunoști cele mai importante date geografice despre capitala țării tale. Reformulează enunțurile următoare astfel încât să corespundă realității geografice din România.<ol class=\"art-g4-v2\"><li>Capitala României este orașul București, situat în Podișul Moldovei.</li><li>Orașul București este traversat de râul Argeș.</li><li>București reprezintă un centru politic, economic, cultural și turistic la fel ca toate orașele României.</li></ol><div class=\"left\">Îți mulțumim pentru colaborare.</div></div>");
}
}, {id: 'art-g4v2-a39-chestionar'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"center\"> <div class=\"art-g4-green-text text-uppercase\">Grilă de autoevaluare</div></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare-u2\"><tr><th></th><th>Itemul A </th><th>Itemul B </th><th>Itemul C </th></tr><tr><td>Foarte bine</td><td>3 răspunsuri corecte</td><td>5-6 răspunsuri corecte</td><td>3 răspunsuri corecte</td></tr><tr><td>Bine</td><td>două răspunsuri corecte</td><td>3-4 răspunsuri corecte</td><td>două răspunsuri corecte</td></tr><tr><td>Suficient </td><td>un răspuns corect</td><td>două răspunsuri corecte</td><td>un răspuns corect</td></tr></table></div>");
}
}, {id: 'art-g4v2-a39-grila'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});