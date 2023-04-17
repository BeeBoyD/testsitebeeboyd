registerChapter({ chapter: "v2-ch02-p58-59", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]("Paginile 58 - 59");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a58-intro',
          top: 13.3488,
          left: 5,
          width: 90,
          height: 10.4186,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a58-ex-1',
          top: 25.0698,
          left: 5,
          width: 90,
          height: 10.1395,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a58-ex-2',
          top: 35.9535,
          left: 5,
          width: 90,
          height: 10.1395,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a58-ex-3',
          top: 46.6512,
          left: 5,
          width: 90,
          height: 6.9767,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a58-ex-4',
          top: 53.907,
          left: 5,
          width: 90,
          height: 23.5349,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a58-ex-5',
          top: 78.093,
          left: 5,
          width: 90,
          height: 10.2326,
          type: 'blank'
        }
      ],
      image: 'v2/p58.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a59-intro',
          top: 13.6279,
          left: 5,
          width: 90,
          height: 13.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a59-ex-1',
          top: 27.9535,
          left: 5,
          width: 90,
          height: 14.5116,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a59-ex-2',
          top: 42.8372,
          left: 5,
          width: 90,
          height: 8.5581,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a59-ex-3',
          top: 52.0465,
          left: 5,
          width: 90,
          height: 29.9535,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a59-grila',
          top: 84.1395,
          left: 5,
          width: 90,
          height: 12.9302,
          type: 'blank'
        }
      ],
      image: 'v2/p59.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('&nbsp;&nbsp;&nbsp;',"Recapitulare",'România în Europa și pe glob');
}
}, {id: 'art-g4v2-a58-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-chenar-v2-purple\"><div class=\"indent\"><em>S-a întâmplat un lucru îngrozitor!!! Cipul de memorie al lui <em><strong>Zoom </strong></em>s-a blocat. Săracul <em><strong>Zoom.</strong></em>.. ne-a prezentat tot anul școlar numai informații deosebite, dar acum are pierderi de memorie și se încurcă rău de tot. Vorbește despre România în Europa și pe glob, dar face multe greșeli geografice. Ajută-l pe <em><strong>Zoom </strong></em>să-și recapete memoria, oferindu-i informațiile adevărate din punct de vedere geografic și corectându-i informațiile greșite.</em></div></div>");
}
}, {id: 'art-g4v2-a58-intro'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"indent\"><em>Țara noastră se numește Uniunea Europeană. Este așezată în nordul Europei, având ieșire la Marea Neagră. Se învecinează la nord cu Ucraina, la vest cu Ungaria și Serbia și la sud cu Republica Moldova. La est, fluviul Dunărea formează granița României cu Bulgaria. Capitala statului Bulgaria este orașul Budapesta.</em></div>");
}
}, 1, "Reformulează enunțurile de mai jos, scrise de <em><strong>Zoom</strong></em>, astfel încât să corespundă realității geografice studiate. Scrie, pe caiet, enunțurile corecte.");
}
}, {id: 'art-g4v2-a58-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"indent\">Lista de termeni: <em>păduri, populație, relief, state, temperată, Câmpia Europei de Est, Dunărea, Munții Alpi, Munții Carpați, Volga.</em></div>");
}
}, 2, "Amintește-i lui <em><strong>Zoom</strong></em> principalele caracteristici geografice ale Europei. Realizează un text geografic, de maxim 10 rânduri, în care să caracterizezi, pe scurt, continentul Europa, folosind termenii și denumirile geografice din lista următoare.");
}
}, {id: 'art-g4v2-a58-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](3, "Ajută-l pe <em><strong>Zoom</strong></em> să-și recapete memoria. Amintește-i ce reprezintă Uniunea Europeană, care sunt statele membre. Folosește tabelul din caiet cu statele membre din Uniunea Europeană și planșa realizată pentru portofoliu, cu imagini din aceste state.");
}
}, {id: 'art-g4v2-a58-ex-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a42-exercitii-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
buf.push(" ");
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](4, "Când a avut cipul de memorie stricat, <em><strong>Zoom</strong></em> a realizat aceste desene. Încearcă să-și amintească elementele geografice de bază, dar nu mai știe care desen este corect. Alege desenul care prezintă corect aceste elemente.");
}
}, "v2/s2_p58_recapitulare_ex_4");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-4 btn btn-lg bad\"> ");
jade_mixins["img"]("img/v2/v2_p58_ex4-a.png");
buf.push("</div><div class=\"col-sm-4 btn btn-lg bad\"> ");
jade_mixins["img"]("img/v2/v2_p58_ex4-b.png");
buf.push("</div><div class=\"col-sm-4 btn btn-lg good\">");
jade_mixins["img"]("img/v2/v2_p58_ex4-c.png");
buf.push("</div></div>");
}
}, {name: 'art-g4v2-a58-ex-4-select'});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a58-ex-4-select'});
}
}, {id: 'art-g4v2-a58-ex-4', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](5, "<em><strong>Zoom</strong></em> își amintește următoarele denumiri geografice de continente, oceane și planete: <em>Mercur, Africa, Pacific, Antarctica, Arctic, Marte, Asia, Jupiter, Atlantic, Australia, Indian, Saturn</em>. Dar nu mai știe ce reprezintă fiecare denumire! Copiază în caiet aceste denumiri geografice sub formă de coloane: în prima coloană notează continentele, în a doua coloană oceanele și în a treia coloană planetele Sistemului Solar.");
}
}, {id: 'art-g4v2-a58-ex-5'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Autoevaluare </div>");
}
}, {id: 'art-g4v2-a59-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-chenar-v2-purple\"><div class=\"indent\"><em>În săptămâna dedicată activităților extracurriculare și extrașcolare din cadrul programului numit „Școala altfel: Să știi mai multe, să fii mai bun!”, în școala unde învață Daria s-a organizat pentru elevii claselor a IV-a concursul „România – Europa – Terra”. Daria a participat cu mult drag la acest concurs și, spre marea ei bucurie, a câștigat premiul I. Subiectele nu au fost dificile, iar tot efortul depus pentru realizarea proiectelor și a portofoliului i-a fost din plin răsplătit. Iată subiectele primite de Daria la concurs. Demonstrează că meritai și tu premiul I dacă ai fi participat la acest concurs.</em></div></div>");
}
}, {id: 'art-g4v2-a59-intro'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Completează propozițiile cu răspunsurile corecte:");
}
}, "v2/s2_p59_autoevaluare_ex_1");
buf.push("<ol class=\"art-g4-lowercase-v2-c9\"><li>România se aseamănă prin climă, vegetație, faună cu partea <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-1-t-1", type: 'text', max: 50,regexp: '^central[a|ă]$',size:'15', placeholder: '...'});
buf.push("</div>a Europei.</li><li>România se învecinează la vest cu Ungaria, stat cu capitala în orașul numit <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-1-t-2", type: 'text', max: 50,regexp: '^Budapesta$',size:'15', placeholder: '...'});
buf.push("</div>.</li><li>Europa are, în partea de vest, o largă deschidere la Oceanul <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-1-t-3", type: 'text', max: 50,regexp: '^Atlantic$',size:'15', placeholder: '...'});
buf.push("</div>.</li><li>Continentul cu cea mai mare întindere se numește <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-1-t-4", type: 'text', max: 50,regexp: '^Asia$',size:'15', placeholder: '...'});
buf.push("</div>.</li><li>Oceanul cu cea mai mare întindere se numește <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-1-t-5", type: 'text', max: 50,regexp: '^Pacific$',size:'15', placeholder: '...'});
buf.push("</div>.</li><li> <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-1-t-6", type: 'text', max: 50,regexp: '^Planiglobul|Planisfera$',size:'15', placeholder: '...'});
buf.push("</div>este o hartă care prezintă întrega suprafață a Terrei.</li></ol><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a59-ex-1-t'});
}
}, {id: 'art-g4v2-a59-ex-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9\"><li>Ce formă are planeta noastră?</li><li>Care sunt corpurile cerești care alcătuiesc Sistemul Solar?</li><li>Ce reprezintă Uniunea Europeană?</li></ol>");
}
}, 2, "Scrie, pe caiet, răspunsurile la următoarele cerințe:");
}
}, {id: 'art-g4v2-a59-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](3, "Îți propunem o călătorie imaginară pe traseul marcat, pe hartă, cu linie roșie. Săgețile indică direcția de deplasare. Plecăm din orașul București, marcat cu <strong>A</strong> și dorim să ajungem în localitatea marcată cu litera <strong>B</strong>.");
buf.push("<span>Urmărește traseul și înlocuiește literele din paranteze cu denumirea corespunzătoare a continentului sau a oceanului traversat, conform sensului de deplasare. Scrie traseul complet al acestei călătorii.</span>");
}
}, "v2/s2_p59_autoevaluare_ex_3");
jade_mixins["img"]("img/v2/v2_p59_harta.png");
buf.push("<span>Conform traseului, în această călătorie urmează să traversăm, continente și oceane. Ordinea acestora este: Europa </span><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-3-t-1", type: 'text', max: 50,regexp: '^Oceanul Arctic$',size:'25', placeholder: '...(a)...'});
buf.push("</div><span>– </span><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-3-t-2", type: 'text', max: 50,regexp: '^America de Nord$',size:'25', placeholder: '...(b)...'});
buf.push("</div><span>–  Oceanul Pacific – America de Sud – </span><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-3-t-3", type: 'text', max: 50,regexp: '^Oceanul Atlantic$',size:'25', placeholder: '...(c)...'});
buf.push("</div><span>– Antarctica – </span><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-3-t-4", type: 'text', max: 50,regexp: '^Oceanul Indian$',size:'25', placeholder: '...(d)...'});
buf.push("</div><span>– </span><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-3-t-5", type: 'text', max: 50,regexp: '^Africa$',size:'25', placeholder: '...(e)...'});
buf.push("</div><span>– Asia – Oceanul Pacific – </span><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a59-ex-3-t-6", type: 'text', max: 50,regexp: '^Australia$',size:'25', placeholder: '...(c)...'});
buf.push("</div><span>.</span><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a59-ex-3-t'});
}
}, {id: 'art-g4v2-a59-ex-3', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"center\"> <div class=\"art-g4-purple-text text-uppercase\">Grilă de autoevaluare</div></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare-v2-c9\"><tr><th></th><th>Itemul A </th><th>Itemul B </th><th>Itemul C </th></tr><tr><td>Foarte bine</td><td>5-6 răspunsuri corecte</td><td>3 răspunsuri corecte</td><td>5-6 răspunsuri corecte</td></tr><tr><td>Bine</td><td>3-4 răspunsuri corecte</td><td>două răspunsuri corecte</td><td>3-4 răspunsuri corecte</td></tr><tr><td>Suficient </td><td>două răspunsuri corecte</td><td>un răspuns corect</td><td>două răspunsuri corecte</td></tr></table></div>");
}
}, {id: 'art-g4v2-a59-grila'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});