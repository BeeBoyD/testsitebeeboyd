registerChapter({ chapter: "v1-ch01-p20-21", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Orizontul, linia orizontului, punctele cardinale');
jade_mixins["subtitle"]('Paginile 20 - 21');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a20-exerseaza-1',
          top: 5.3488,
          left: 5.3821,
          width: 92,
          height: 14.6047,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a20-exerseaza-2',
          top: 20.0465,
          left: 2.5708,
          width: 94.6226,
          height: 17.6744,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a20-activitate-perechi',
          top: 39.8605,
          left: 5.3,
          width: 28.9387,
          height: 51.8139,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a20-aplica-1',
          top: 38.8372,
          left: 35,
          width: 62,
          height: 28.8372,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a20-aplica-2',
          top: 67.9535,
          left: 35,
          width: 62,
          height: 8.9302,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a20-aplica-3',
          top: 77.0698,
          left: 35,
          width: 62,
          height: 13.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a20-aplica-4',
          top: 91.7674,
          left: 5.7547,
          width: 91.2028,
          height: 5.2093,
          type: 'blank'
        }
      ],
      image: 'v1/p20.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a21-aplica-5',
          top: 4.6977,
          left: 5.3,
          width: 92,
          height: 27.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a21-activitate-practica',
          top: 31.9535,
          left: 5.3,
          width: 42.2642,
          height: 22.6047,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a21-retine',
          top: 32.5116,
          left: 48.6792,
          width: 48.7075,
          height: 2.6977,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-explica',
          top: 57.8139,
          left: 5.3,
          width: 92,
          height: 38.6047,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a21-retine-1',
          top: 35.3953,
          left: 48.68,
          width: 48.71,
          height: 1.7674,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-2',
          top: 37.4419,
          left: 48.68,
          width: 48.71,
          height: 1.7674,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-3',
          top: 39.3954,
          left: 48.68,
          width: 48.71,
          height: 1.8605,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-4',
          top: 41.2558,
          left: 48.68,
          width: 48.71,
          height: 1.7674,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-5',
          top: 43.1163,
          left: 48.68,
          width: 48.71,
          height: 1.7674,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-6',
          top: 44.9767,
          left: 48.68,
          width: 48.71,
          height: 2.1395,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-7',
          top: 47.3953,
          left: 48.68,
          width: 48.71,
          height: 1.7674,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-8',
          top: 49.4419,
          left: 48.68,
          width: 48.71,
          height: 1.6744,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-9',
          top: 51.9535,
          left: 48.68,
          width: 48.71,
          height: 1.7674,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-10',
          top: 53.814,
          left: 48.68,
          width: 48.71,
          height: 1.7674,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a21-retine-11',
          top: 55.8605,
          left: 48.68,
          width: 48.71,
          height: 2.3256,
          type: 'audio'
        }
      ],
      image: 'v1/p21.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a20-exerseaza-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div> <em>Dimineața, când mă trezesc,</em></div><div> <em>Cu răsăritul te înveselesc!</em></div><br/><div> <em>Obosit, de-atâta treabă,</em></div><div> <em>La apus mă culc cu grabă!</em></div></div><div class=\"col-sm-6\"><div> <em>Miazănoapte mă numesc</em></div><div><em>Și de Soare mă feresc!</em></div><br/><div> <em>Sus pe cer când mă rotesc,</em></div><div> <em>Miazăzi eu îți vestesc!</em></div></div></div>");
}
}, 1,'Identifică punctul cardinal. Formulează propoziții cu fiecare punct cardinal identificat.');
}
}, {id: 'art-g4v1-a20-exerseaza-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a20-exerseaza-2Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](2, "Completează spațiile punctate selectând răspunsul corect dintre cuvintele aflate în casetă:");
}
}, "v1/p20_exerseaza_ex_2");
buf.push("<div class=\"art-g4-img-80\">");
jade_mixins["img"]("img/v1/p21_retine_01.png");
buf.push("</div><br/><span><strong>Varianta 1 : </strong></span><div class=\"art-g4-blue-border\">dreaptă, stângă, fața, spate</div><br/><span>Când Ionel stă cu <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-a", type: 'text', max: 10,regexp: '^fa[ț|t]a$',size:'7', placeholder: '...'});
buf.push("</div> spre sud, în partea sa <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-b", type: 'text', max: 10,regexp: '^st[â|a]ng[ă|a]$',size:'7', placeholder: '...'});
buf.push("</div> se află punctul cardinal numit est, în partea sa <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-c", type: 'text', max: 10,regexp: '^dreapt[ă|a]$',size:'7', placeholder: '...'});
buf.push("</div> este punctul cardinal numit vest și în <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-d", type: 'text', max: 10,regexp: '^spate$',size:'7', placeholder: '...'});
buf.push("</div> este punctul cardinal numit nord.</span><br/><span><strong>Varianta 2 : </strong></span><div class=\"art-g4-blue-border\">față, dreaptă, spatele, stângă</div><br/><span>Când Ionel stă cu <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-a1", type: 'text', max: 10,regexp: '^spatele$',size:'7', placeholder: '...'});
buf.push("</div> spre sud, în partea sa <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-b1", type: 'text', max: 10,regexp: '^dreapt[ă|a]$',size:'7', placeholder: '...'});
buf.push("</div> se află punctul cardinal numit est, în partea sa <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-c1", type: 'text', max: 10,regexp: '^st[â|a]ng[ă|a]$',size:'7', placeholder: '...'});
buf.push("</div> este punctul cardinal numit vest și în <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a20-exerseaza-2ex-d1", type: 'text', max: 10,regexp: '^fa[ț|t][a|ă]$',size:'7', placeholder: '...'});
buf.push("</div> este punctul cardinal numit nord.</span><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a20-exerseaza-2ex'});
}
}, {id: 'art-g4v1-a20-exerseaza-2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox"].call({
block: function(){
buf.push("<div class=\"indent\">Informează-te în ce parte a clasei se află nordul. Așază manualul de geografie pe bancă, cu marginea de sus orientată spre nord. Discută cu colegul de bancă și stabiliți ce punct cardinal corespunde marginii de jos a manualului? Care este marginea dinspre est?</div>");
}
}, 'Activitate în perechi');
}
}, {id: 'art-g4v1-a20-activitate-perechi'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a20-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Completează în locul cifrelor din căsuțe punctele intercardinale după modelul dat de Ionel. Citește numele punctelor intercardinale. Desenează în caiet roza vânturilor și notează numele punctelor cardinale și intercardinale.</li></ul><div class=\"art-g4-img-60\">");
jade_mixins["img"]("img/v1/v1_p20_aplica_1.png");
buf.push("</div>");
}
}, 1, "Ionel a desenat punctele cardinale. Desenul său poartă numele de <strong>roza vânturilor</strong> și ne indică poziția punctelor cardinale. Ionel a învățat că între punctele cardinale principale se află <strong> punctele intercardinale </strong> .");
}
}, {id: 'art-g4v1-a20-aplica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](2, "Ionel s-a așezat, în momente diferite, pe cele opt direcții ale punctelor cardinale și intercardinale, ca în desenul alăturat. Dacă poziția cu numărul 1 indică direcția nord, stabilește punctele cardinale și intercardinale corespunzătoare pozițiilor numerotate de la 2 la 8.");
buf.push("<div class=\"art-g4-img-60\">");
jade_mixins["img"]("img/v1/v1_p20_aplica_2.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a20-aplica-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Între est și sud se află punctul intercardinal est-sud.</li><li>Punctul intercardinal nord-vest este situat între nord și sud.</li><li>Dacă stau cu fața spre nord atunci în spatele meu este estul.</li><li>Când în dreapta este vestul în fața mea se află estul.</li><li>Punctul cardinal sud-vest este situat între vest și nord.</li></ul>");
}
}, 3, "Reformulează următoarele enunțuri astfel încât acestea să fie corecte:");
}
}, {id: 'art-g4v1-a20-aplica-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](4, "Presupunând că tabla clasei tale este fixată pe peretele dinspre nord, stabilește împreună cu colegul de bancă cum sunt așezate obiectele din clasă. Notează pe caiet punctele cardinale pentru poziția ușii și a ferestrelor.");
}
}, {id: 'art-g4v1-a20-aplica-4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"indent\"><em>„În partea centrală a satului este un parc, iar la vest de acesta este situată primăria. Școala mea este situată la nord de parc, pe strada Nalbei. La est de școală este poșta. Eu locuiesc în partea de est a satului, spre deosebire de Ionel care locuiește în partea de vest. Oamenii din sat lucrează la livada din nordul satului și la grădina de legume situată în partea de vest a localității.“</em></div><ol class=\"art-g4-lowercase\"><li>Identifică greșelile făcute de Maria în prezentarea localității natale.</li><li>Pentru care dintre cei doi colegi traseul de acasă spre școală urmărește direcțiile: E &rarr; NE &rarr; E?</li></ol>");
jade_mixins["img"]("img/v1/v1_p21_aplica_5.png");
}
}, 5, "Ionel locuiește în satul Mălăiești și acesta este planul localității sale. La ora de geografie, Maria, colega de bancă a lui Ionel, a făcut următoarea prezentare a localității natale:");
}
}, {id: 'art-g4v1-a21-aplica-5'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox"].call({
block: function(){
buf.push("<div class=\"indent\">Construiește-ți propria busolă în trei pași:</div><ol class=\"art-g4\"><li>lipește un ac de un magnet timp de aproximativ 30 minute;</li><li>așază un dop de plută pe suprafața apei dintr-un vas;</li><li>așază acul magnetizat pe dop.</li></ol><div class=\"indent\">Acul se va alinia pe direcția N-S. Stabilește poziția obiectelor din jurul tău față de punctele cardinale.</div>");
}
}, 'Activitate practică');
}
}, {id: 'art-g4v1-a21-activitate-practica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"indent\">Când este noapte sau cerul este acoperit de nori și nu ne putem orienta cu ajutorul Soarelui, pentru a stabili punctele cardinale putem folosi și alte mijloace de orientare, de exemplu Steaua Polară și mușchiul copacilor care ne indică nordul. Instrumentul utilizat pentru determinarea punctelor cardinale se numește <strong>busolă</strong>. Există însă și alte modalități, neconvenționale, pentru a afla punctele cardinale.</div>");
}
});
}
}, {id: 'art-g4v1-a21-retine-webview'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul Soarelui </div><div>Soarele răsare dinspre punctul cardinal est și apune spre punctul cardinal vest. În general, la orele dimineții (06:00 - 07:00), dacă este senin, Soarele poate fi observat spre est. La prânz (între orele 12:00 - 12:30), dacă stai cu fața spre Soare, înseamnă că privești spre sud, iar în spate ai nordul (în stânga este estul, iar în dreapta vestul). La orele serii, între 18:00 - 19:00 (în funcție de anotimp chiar și la ore mai târzii), Soarele apune către vest.</div>");
}
}, "v1/p21_retine_01");
buf.push("<div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/v1_p20_exerseaza.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a21-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul Stelei Polare</div><div>În emisfera nordică (adică în jumătatea  de nord a Pământului), Steaua Polară indică întotdeauna punctul cardinal nord.</div>");
}
}, "v1/p21_retine_02");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p21_retine_02_copil.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p21_retine_02_car.jpg");
buf.push("</div></div></div>");
}
}, {id: 'art-g4v1-a21-retine-1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul Lunii</div><div>Pentru a te putea orienta cu ajutorul Lunii trebuie îndeplinite două condiții: cerul să fie senin și să fie Lună Plină. În aceste condiții, dacă la ora 18:00 stai cu fața spre Lună privești spre est, la miezul nopții privești spre sud, iar la ora 06:00 dimineața privești spre vest. Metoda este mai greu de aplicat vara, când Luna nu este vizibilă la ora 18:00, dar este valabilă pentru celelalte ore indicate.</div>");
}
}, "v1/p21_retine_03");
buf.push("<div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/p21_retine_03_luna.jpg");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a21-retine-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Alte mijloace naturale de aflare a punctelor cardinale </div>");
}
}, "v1/p21_retine_04");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p21_retine_04_1.jpg");
buf.push("<div class=\"center\">mușuroaiele de furnici  au intrarea orientată  spre sud </div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p21_retine_04_2.jpg");
buf.push("<div class=\"center\">mușuroaiele de cârtiță  au intrările și ieșirile  orientate spre nord</div></div></div><div class=\"row\"><div class=\"col-sm-offset-3 col-sm-6\">");
jade_mixins["img"]("img/v1/p21_retine_04_3.jpg");
buf.push("<div class=\"center\">arborii izolați au coroana  mai bogadă spre sud  (regula nu se aplică în pădure)</div></div></div></div>");
}
}, {id: 'art-g4v1-a21-retine-3', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul busolei</div><div>Busola este un instrument cu ajutorul căruia ne putem orienta cu o precizie mult mai mare decât dacă ne-am ghida după mijloacele naturale. Acum magnetic este, de obicei, colorat în roșu și negru, capătul roșu indicând Polul Nord, iar cel negru Polul Sud.</div>");
}
}, "v1/p21_retine_05");
buf.push("<div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v1/p21_retine_05.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a21-retine-4', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul hărții</div><div>Pentru a te orienta cu ajutorul hărților, trebuie să știi să citești informațiile marcate pe acestea. Hărțile sunt folositoare atât în orașe, atunci când vrei să vizitezi, de exemplu un obiectiv turistic, dar și în natură.</div>");
}
}, "v1/p21_retine_06");
jade_mixins["img"]("img/v1/p21_retine_06.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a21-retine-5', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul aparatelor GPS </div><div>Global Positionig System  (GPS, se citește „gi-pi-es”,  înseamnă, în limba română, sistem de poziționare globală) este un sistem global de navigație prin satelit și unde radio. Practic, sistemul poate calcula și afla poziția exactă a oricărui obiect sau a oricărei persoane care are în dotare un receptor GPS.</div>");
}
}, "v1/p21_retine_07");
jade_mixins["img"]("img/v1/p21_retine_07.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a21-retine-6', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul telefoanelor inteligente</div><div>Astăzi, este practic imposibil să te mai rătăcești în marile orașe, mai ales dacă ai un smartphone și o conexiune la internet. Există o sumedenie de aplicații cu ajutorul cărora poți afla, în câteva secunde, unde te afli și ce traseu trebuie să urmezi pentru a ajunge într-un punct dorit.</div>");
}
}, "v1/p21_retine_08");
buf.push("<div class=\"art-g4-img-40\">");
jade_mixins["img"]("img/v1/p21_retine_08.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a21-retine-7', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul Soarelui și a unui ceas cu limbi (în jumătatea nordică a Pământului)</div><div> a) Aflarea nordului </div><div>Așază un băț scurt perpendicular pe cadranul ceasului, în punctul comun al celor două limbi (orar și minutar). Rotește brațul sau învârte-te până când umbra se suprapune peste limba care indică orele (vezi desenul). Observă unghiul pe care umbra (și limba care indică orele) îl formează împreună cu linia imaginară care indică ora 12:00 (marcată în desen cu roșu). Linia imaginară care împarte acest unghi în două părți egale indică punctul cardinal nord (săgeata roșie și roza vânturilor).</div>");
}
}, "v1/p21_retine_09");
jade_mixins["img"]("img/v1/p21_retine_09.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a21-retine-8', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Orientarea cu ajutorul Soarelui și a unui ceas cu limbi (în jumătatea nordică a Pământului)</div><div>b) Aflarea sudului </div><div>Îndreaptă ceasul de mână cu limba care indică orele direct spre Soare. Observă unghiul pe care aceasta îl face cu linia imaginară care indică ora 12:00 (marcată în desen cu roșu). Linia imaginară care împarte acest unghi în două părți egale indică punctul cardinal sud. </div>");
}
}, "v1/p21_retine_10");
jade_mixins["img"]("img/v1/p21_retine_10.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a21-retine-9', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Aflarea punctelor cardinale cu ajutorul umbrei  (în jumătatea nordică a Pământului)</div><div>a) Aflarea direcției nord-sud </div><div>Pentru această metodă trebuie să ai un ceas, care să-ți indice, cu precizie, ora 12:00. Observă umbrele arborilor sau chiar umbra unui băț vertical pe care poți să-l înfigi în pământ. Umbra este pe direcție nord-sud. Capătul umbrei de la baza arborelui sau a bățului indică punctul cardinal sud. </div>");
}
}, "v1/p21_retine_11");
jade_mixins["img"]("img/v1/p21_retine_11.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a21-retine-10', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Aflarea punctelor cardinale cu ajutorul umbrei  (în jumătatea nordică a Pământului)</div><div>b) Aflarea direcției est-vest</div><div>Această metodă nu presupune să știi ce oră este. Alege două bețe drepte, unul de aproximativ un metru lungime, celălalt poate fi și mai scurt. Urmărește desenul.</div>");
}
}, "v1/p21_retine_12");
jade_mixins["img"]("img/v1/p21_retine_12.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a21-retine-11', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Explică </div></div>");
}
}, {id: 'art-g4v1-a21-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Observă imaginile de mai jos și precizează poziția lui Ionel în raport de punctele cardinale. Explică răspunsul tău.</li><li>Observă poziția și lungimea umbrei și explică cum putem să ne orientăm și să stabilim, cu aproximație, ce oră este doar cunoscând poziția Soarelui pe bolta cerească.</li></ul><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p21_explica_ceas1.png");
jade_mixins["img"]("img/v1/v1_p21_explica_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p21_explica_ceas2.png");
jade_mixins["img"]("img/v1/v1_p21_explica_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p21_explica_ceas3.png");
jade_mixins["img"]("img/v1/v1_p21_explica_3.png");
buf.push("</div></div><ul class=\"art-g4\"><li>Explică faptul că mușchiul crește pe trunchiul copacilor din pădure pe direcția nord.</li><li>Explică importanța cunoașterii punctelor cardinale pentru viața oamenilor.</li></ul>");
}
}, {id: 'art-g4v1-a21-explica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});