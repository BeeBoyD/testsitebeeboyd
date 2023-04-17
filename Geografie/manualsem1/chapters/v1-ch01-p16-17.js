registerChapter({ chapter: "v1-ch01-p16-17", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]('Paginile 16 - 17');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a16-ex1',
          top: 15.0233,
          left: 5,
          width: 90,
          height: 30.0465,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a16-ex2',
          top: 46,
          left: 5,
          width: 90,
          height: 44.8372,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a16-ex3',
          top: 91.5814,
          left: 5,
          width: 90,
          height: 5.4884,
          type: 'blank'
        }
      ],
      image: 'v1/p16.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a17-ex1',
          top: 14.5581,
          left: 5,
          width: 90,
          height: 67,
          type: 'exercise'
        },
        //- {
        //-   atom: 'art-g4v1-a17-ex2',
        //-   top: 31.4884,
        //-   left: 5,
        //-   width: 90,
        //-   height: 14.7907,
        //-   type: 'exercise'
        //- },
        //- {
        //-   atom: 'art-g4v1-a17-ex3',
        //-   top: 47.0233,
        //-   left: 5,
        //-   width: 90,
        //-   height: 33.9535,
        //-   type: 'exercise'
        //- },
        {
          atom: 'art-g4v1-a17-grila-autoevaluare',
          top: 84.2326,
          left: 5,
          width: 90,
          height: 12.7442,
          type: 'blank'
        }
      ],
      image: 'v1/p17.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-titlu"]('&nbsp;&nbsp;&nbsp;',"Recapitulare",'Orizontul apropiat');
}
}, {id: 'art-g4v1-a16-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><ol class=\"art-g4-lowercase\"><li>Cu ce literă este marcată locuința lui Bogdan?</li><li>În ce direcție se îndreaptă Oana când iese din bloc pentru a merge la școală?</li><li>Unde este situat spitalul față de blocul în care locuiește Oana?</li><li>Strada marcată cu culoarea albastru are, în realitate, o lungime de 600 m. În imagine, lungimea străzii este de 6 cm. De câte ori este micșorată, în imagine, lungimea acestei străzi?</li></ol></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p16_ex1.png");
buf.push("</div></div>");
}
}, 1, "Privește imaginea alăturată. Acesta este cartierul în care locuiesc Oana și Bogdan. Locuința Oanei este marcată cu litera A. În fiecare zi când își face temele, Bogdan vede pe fereastra camerei sale clădirea în care locuiește Oana.");
}
}, {id: 'art-g4v1-a16-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"><em>Eu locuiesc în satul Casian, pe strada Primăverii, la nr. 17. Fiind o localitate mică, are o singură stradă principală în lungul căreia sunt situate case cu grădini de legume sau livezi. În zona centrală a satului se află, pe partea stângă a străzii, Primăria și Poliția, iar pe partea dreaptă, în fața Poliției, cabinetul medical. Școala mea este situată în fața Primăriei. În spatele școlii este terenul de sport, unde eu joc baschet. Casa mea este situată chiar în fața parcului, pe partea dreaptă a străzii.</em></div>");
jade_mixins["img"]("img/v1/v1_p16_ex2.png");
buf.push("<ol class=\"art-g4-lowercase\"><li>Identifică planul corect al localității Casian, după descrierea făcută de Alex. Explică răspunsul dat.</li><li>Localizează, pe plan, școala unde învață Alex și notează, pe caiet, adresa școlii.</li></ol>");
}
}, 2, "Alex, prietenul lui Bogdan, locuiește într-o localitate rurală de mici dimensiuni. Într-o scrisoare, Alex i-a descris prietenului său localitatea natală:");
}
}, {id: 'art-g4v1-a16-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](3, "Realizează un text de maxim 10 rânduri, în care să folosești în mod corect termenii: <em>apropiat, cartier, distanță, locuință, micșorată, orizont, orientare, plan, stradă, școală</em>.");
}
}, {id: 'art-g4v1-a16-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('',"Autoevaluare");
}
}, {id: 'art-g4v1-a17-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut\">");
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4v1-a17-ex1-Interactiv\">");
jade_mixins["monitor"]({number: 1});
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](1, "Bifează varianta corectă de răspuns.");
}
}, "v1/s1_p17_autoevaluare_ex_1");
buf.push("<div class=\"art-g4-blue-text\">A. </div>Spațiul din jurul nostru, în care ne desfășurăm întreaga activitate, reprezintă: <ol class=\"art-g4-lowercase\">");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<li><div class=\"btn btn-lg bad\">orizontul cunoscut;</div></li><li><div class=\"btn btn-lg good\">orizontul apropiat.</div></li><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a17-ex1-1'});
buf.push("</ol><div class=\"art-g4-blue-text\">B. </div>Din orizontul apropiat fac parte:<ol class=\"art-g4-lowercase\">");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<li><div class=\"btn btn-lg bad\">doar elemente naturale;</div></li><li><div class=\"btn btn-lg good\">elemente naturale și elemente create de om.</div></li><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a17-ex1-2'});
buf.push("</ol><div class=\"art-g4-blue-text\">C. </div>Planul este un desen pe care sunt reprezentate elementele dintr-un spațiu, în mărime:<ol class=\"art-g4-lowercase\">");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<li><div class=\"btn btn-lg good\">micșorată față de realitate</div></li><li><div class=\"btn btn-lg bad\">reală.</div></li><div class=\"validator-box\"></div>");
}
}, {name: 'art-g4v1-a17-ex1-3'});
buf.push("</ol></div><br/><div class=\"art-g4v1-a17-ex2-pickoneInteractiv\">");
jade_mixins["monitor"]({number: 2});
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](2, "Citește cu atenție textul, apoi înlocuiește semnele convenționale cu termenii corespunzători, pentru ca propozițiile să fie corecte din punct de vedere științific:");
}
}, "v1/s1_p17_autoevaluare_ex_2");
buf.push("<div class=\"indent\"><em>Localitatea în care trăiește Adriana este străbătută de <div class=\"art-r4-inline-img-rau\"></div><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['pădure','râul','cale ferată','podul','stradă','clădiri'], { name: 'art-g4v1-a17-ex2-pickone-1',  ignoreAvatar: false, placement:'top'});
buf.push("</div>&nbsp; numit Mureș. În drumul său spre școală, ea traversează zilnic <div class=\"art-r4-inline-img-pod\"></div><div class=\"inline-block\">");
jade_mixins["pickone"](4, ['pădure','râul','cale ferată','podul','stradă','clădiri'], { name: 'art-g4v1-a17-ex2-pickone-2',  ignoreAvatar: false, placement:'top'});
buf.push("</div>&nbsp; construit peste Mureș. Școala este situată în mijlocul localității, pe cea mai frumoasă <div class=\"art-r4-inline-img-strada\"> </div><div class=\"inline-block\">");
jade_mixins["pickone"](5, ['pădure','râul','cale ferată','podul','stradă','clădiri'], { name: 'art-g4v1-a17-ex3-pickone-3',  ignoreAvatar: false, placement:'top'});
buf.push("</div>&nbsp; din localitate. Aici se află cele mai importante <div class=\"art-r4-inline-img-cladiri\"></div><div class=\"inline-block\">");
jade_mixins["pickone"](6, ['pădure','râul','cale ferată','podul','stradă','clădiri'], { name: 'art-g4v1-a17-ex2-pickone-4',  ignoreAvatar: false, placement:'top'});
buf.push("</div>:  Primăria, spitalul, biserica. Pe la marginea localității trece o <div class=\"art-r4-inline-img-cale\"> </div><div class=\"inline-block\">");
jade_mixins["pickone"](3, ['pădure','râul','cale ferată','podul','stradă','clădiri'], { name: 'art-g4v1-a17-ex2-pickone-5',  ignoreAvatar: false, placement:'top'});
buf.push("</div>, dincolo de care se află o <div class=\"art-r4-inline-img-padure\"> </div><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['pădure','râul','cale ferată','podul','stradă','clădiri'], { name: 'art-g4v1-a17-ex2-pickone-6',  ignoreAvatar: false, placement:'top'});
buf.push("</div>.<div class=\"validator-box\"></div></em></div></div><br/><div class=\"art-g4v1-a17-ex3-pickoneInteractiv\">");
jade_mixins["monitor"]({number: 3});
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](3, "Completează fiecare enunț, selectând răspunsul corect dintre cuvintele aflate în paranteză:");
}
}, "v1/s1_p17_autoevaluare_ex_3");
buf.push("<ol class=\"art-g4-lowercase\"><li>Într-o școală există mai multe  <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['cartiere','săli de clasă'], { name: 'art-g4v1-a17-ex3-pickone-1a',  ignoreAvatar: false, placement:'right'});
buf.push("</div><span class=\"triger\">. </span></li><li> <div class=\"inline-block\">");
jade_mixins["pickone"](1, ['Cartierul','Școala'], { name: 'art-g4v1-a17-ex3-pickone-2a',  ignoreAvatar: false, placement:'top'});
buf.push("</div><div class=\"inline-block\"><span>reprezintă o parte a unei localități.</span></div></li><li>Instrumentul folosit la măsurarea distanțelor este <div class=\"inline-block\">");
jade_mixins["pickone"](1, ['ruleta','cântarul'], { name: 'art-g4v1-a17-ex3-pickone-3a',  ignoreAvatar: false, placement:'right'});
buf.push("</div><span class=\"triger\">. </span></li><li>Atunci când se întocmește planul <div class=\"inline-block\">");
jade_mixins["pickone"](1, ['localității','școlii'], { name: 'art-g4v1-a17-ex3-pickone-4a',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">&nbsp; dimensiunile obiectelor sunt micșorate de mai multe ori.</span></li><li>În orizontul apropiat putem stabili <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['direcția','poziția'], { name: 'art-g4v1-a17-ex3-pickone-5a',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">&nbsp; unui obiect dacă îl raportăm la poziția altui obiect.</span></li><li>Semnele convenționale folosite la desenarea unui plan se notează în <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['titlu','legendă'], { name: 'art-g4v1-a17-ex3-pickone-6a',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">. </span></li><li>Localitățile rurale sunt reprezentate de <div class=\"inline-block\">");
jade_mixins["pickone"](2, ['orașe','sate'], { name: 'art-g4v1-a17-ex3-pickone-7a',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span class=\"triger\">. </span></li><li>Dacă locuiești într-o localitate rurală de mici dimensiuni, atunci cartierul este reprezentat de <div class=\"inline-block\">");
jade_mixins["pickone"](1, ['întreaga localitate','casele vecinilor'], { name: 'art-g4v1-a17-ex3-pickone-8a',  ignoreAvatar: false, placement:'right'});
buf.push("</div><span class=\"triger\">. </span></li></ol></div>");
}
}, {name: 'art-g4v1-a17-ex1-select'});
buf.push("<br/>");
jade_mixins["assessment-summary"]();
buf.push("</div>");
}
}, {id: 'art-g4v1-a17-ex1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"center\"> <div class=\"art-g4-blue-text text-uppercase\">Grilă de autoevaluare</div></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare\"><tr> <th></th><th>Itemul 1 </th><th>Itemul 2 </th><th>Itemul 3</th></tr><tr> <td>Foarte bine </td><td>3 răspunsuri corecte </td><td>5-6 semne convenționale corecte </td><td>7-8 răspunsuri corecte</td></tr><tr> <td>Bine </td><td>două răspunsuri corecte </td><td>3-4 semne convenționale corecte </td><td>5-6 răspunsuri corecte</td></tr><tr> <td>Suficient </td><td>un răspuns corect </td><td>două semne convenționale corecte </td><td>3-4 răspunsuri corecte</td></tr></table></div>");
}
}, {id: 'art-g4v1-a17-grila-autoevaluare'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});