registerChapter({ chapter: "v2-ch02-p46-47", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Europa – scurtă caracterizare geografică');
jade_mixins["subtitle"]("Paginile 46 - 47");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a46-observa',
          top: 16.8837,
          left: 5,
          width: 90,
          height: 15.5349,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a46-retine-1',
          top: 32.8837,
          left: 5,
          width: 38,
          height: 21.1163,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a46-vocabular',
          top: 54.2791,
          left: 5,
          width: 38,
          height: 11.814,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a46-descopera',
          top: 36.8837,
          left: 43.7264,
          width: 52,
          height: 28.2791,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a46-retine-2',
          top: 65.6279,
          left: 56.3443,
          width: 39.6698,
          height: 32.2791,
          type: 'audio'
        }
      ],
      image: 'v2/p46.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a47-descopera-1',
          top: 9.3488,
          left: 5,
          width: 90,
          height: 27.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a47-descopera-T2-ex-1',
          top: 42.4651,
          left: 5,
          width: 54,
          height: 18.1395,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a47-descopera-T2-ex-2',
          top: 60.9767,
          left: 5,
          width: 54,
          height: 36.4651,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a47-retine-1',
          top: 38.4651,
          left: 59.5896,
          width: 36,
          height: 28.093,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a47-retine-2',
          top: 67.4884,
          left: 59.5896,
          width: 36,
          height: 29.9535,
          type: 'audio'
        }
      ],
      image: 'v2/p47.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('11.', "Europa – scurtă caracterizare geografică",'Europa – un continent al planetei');
}
}, {id: 'art-g4v2-a46-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Observă </div>");
}
}, {id: 'art-g4v2-a46-observa-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a12-observa-interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Observă imaginile, apoi scrie A („adevărat“) sau F („fals“) pentru fiecare enunț.</div>");
}
}, "v2/s2_p46_observa");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>Continentul Europa este situat în Emisfera Nordică, adică în jumătatea de nord a planetei Pământ.<div class=\"inline-block\">");
jade_mixins["yesno"]({answer: true, name:'art-g4v2-a46-observa-yes-1', yes: 'A', no: 'F'});
buf.push("</div></li><li>Continentul Europa este strâns legat de Africa, unul dintre continentele vecine, cu care formează o singură suprafață de uscat.<div class=\"inline-block\">");
jade_mixins["yesno"]({answer: false, name:'art-g4v2-a46-observa-yes-yes-2', yes: 'A', no: 'F'});
buf.push("</div></li></ol><div class=\"si-done-box\"></div>");
}
});
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p46_observa_1.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p46_observa_2.png");
buf.push("</div></div></div>");
}
}, {name: 'art-g4v2-a46-observa-yes'});
}
}, {id: 'art-g4v2-a46-observa', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p46_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a46-retine-1', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Continentul <strong>Europa </strong>este situat în <strong>Emisfera Nordică </strong>și formează, împreună cu <strong>Asia</strong>, continentul vecin, o singură suprafață de uscat. Limita convențională dintre cele două continente este dată de Munții Ural, de fluviul Ural, de Marea Caspică și de Munții Caucaz.</div>");
}
});
}
}, {id: 'art-g4v2-a46-retine-1-web'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> <strong>strâmtoare </strong>– porțiune îngustă de apă care leagă două mări sau oceane (uneori, pe hărți, se prescurtează str.)</div>");
}
}, 'v2/s2_p46_vocabular');
jade_mixins["img"]('img/v2/v2_p46_vocabular.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a46-vocabular', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a46-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Analizează harta de mai jos și răspunde cerințelor:</div>");
jade_mixins["img"]("img/v2/v2_p46_harta.png");
jade_mixins["art-g4-ex-v2-c9"](1, "Numește întinderile mari de apă care mărginesc la nord, la vest și la sud continentul Europa.");
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ul class=\"art-g4-v2-c9\"><li>În relieful Europei predomină (<em>câmpiile, munții</em>).</li><li>Cei mai mulți munți sunt situați în partea de (<em>sud, nord</em>) a Europei.</li></ul>");
}
}, 2, "Citește următoarele enunțuri. Alege din paranteze termenii care exprimă realitatea geografică reprezentată pe hartă.");
jade_mixins["art-g4-ex-v2-c9"](3, "Câteva dintre fluviile Europei sunt: Volga, Dunărea, Rinul, Niprul. Localizează pe hartă aceste fluvii. Care dintre aceste fluvii se varsă în Marea Neagră?");
jade_mixins["art-g4-ex-v2-c9"](4, "Cele mai mari lacuri din Europa sunt Ladoga și Onega. Localizează-le pe hartă. În ce parte a Europei sunt situate aceste lacuri?");
}
}, {id: 'art-g4v2-a46-descopera'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> <strong>Europa </strong>este mărginită de <strong>Oceanul Arctic </strong>(la nord), de <strong>Oceanul Atlantic </strong>(la vest) și de <strong>Marea Mediterană </strong>și <strong>Marea Neagră </strong>(la sud). Continentul Europa are un relief variat, în care predomină câmpiile, dealurile și podișurile joase, adică formele de relief cu altitudini mici.</div>");
}
}, 'v2/s2_p46_retine');
jade_mixins["img"]('img/v2/v2_p46_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a46-retine-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a47-descopera-T1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Citește textul următor, apoi copiază pe caiet tabelul de mai jos și completează spațiile punctate.</div><div class=\"indent\"><em>Ținuturile din extremitatea nordică a Europei au o climă rece, cu ierni lungi și geroase. Aici trăiesc ursul alb, vulpea polară, iepurele polar, dar și turme de reni. De multe ori, în căutarea hranei, renii cutreieră și pădurile de conifere situate mai la sud, în regiunile cu climă temperată mai friguroasă, unde se întâlnesc cu elani sau cu urși. Pădurile de foioase ocupă vestul și centrul Europei și sunt populate de cerbi, lupi, vulpi și mistreți. La est, clima temperată este mai uscată, iar pădurile lasă locul silvostepei și stepei, unde, printre ierburile mărunte se ascund popândăii, hârciogii sau iepurii. În sudul Europei clima temperată este mai caldă, inclusiv iarna, fapt pentru care aici se întâlnesc păduri și tufișuri veșnic verzi și animale deosebite, precum țestoasele, șacalii, scorpionii.</em></div><div class=\"responsive-tb\"><table class=\"art-g4-p47-c9-table\"><tr> <th>Clima </th><th>Vegetație </th><th>Faună </th><th>Localizare</th></tr><tr> <td>rece </td><td>tundră (mușchi, licheni) </td><td>... </td><td>extremitatea nordică</td></tr><tr> <td>temperată mai friguroasă </td><td>păduri de conifere </td><td>urși, elani, hermeline </td><td>nordul Europei</td></tr><tr> <td>temperată mai uscată </td><td>stepă și silvostepă </td><td>.... </td><td>estul Europei</td></tr><tr> <td>temperată mai caldă </td><td>... </td><td>... </td><td>sudul Europei</td></tr></table></div>");
}
}, {id: 'art-g4v2-a47-descopera-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a47-descopera-T2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](1, "Completează fiecare enunț selectând răspunsul corect dintre cuvintele aflate în paranteză:");
buf.push("<ul class=\"art-g4-v2-c9\"><li>Datorită reliefului și climei variate, populația Europei este răspândită (uniform, neuniform) pe teritoriul continentului.</li><li>Cea mai numeroasă populație trăiește în regiunile (<em>joase, înalte</em>) și cu climă (rece, temperată).</li><li>Popoarele Europei vorbesc ( <em>o singură limbă, numeroase limbi</em>).</li><li>În Europa există (<em>un singur stat, mai multe state</em>).</li></ul>");
}
}, {id: 'art-g4v2-a47-descopera-T2-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"](2, "Citește textul următor:");
buf.push("<div class=\"indent\"><em>„Bătrânul continent” oferă toate resursele necesare vieții a sute de milioane de oameni. Din măruntaiele sale se exploatează minereuri feroase și neferoase, cărbuni, petrol și gaze naturale. Apele și pădurile completează aceste bogății atât de folositoare industriei. Câmpiile, dealurile și podișurile poartă o dulce povară: grâne aurii, sfeclă de zahăr, floarea-soarelui și livezi doldora de fructe. În partea sa sudică, se întind mândre plantații de viță-de-vie, alături de măslini, portocali, lămâi.</em></div><ul class=\"art-g4-v2-c9\"><li>Numește resursele naturale menționate în text.</li><li>Numește ramurile industriale care se dezvoltă pe baza acestor resurse naturale.</li><li>Ce plante se cultivă în Europa?</li></ul><div class=\"row\"><div class=\"col-sm-7\">");
jade_mixins["img"]("img/v2/v2_p47_descopera_1.png");
buf.push("<div class=\"small-text\">Plantație de măslini</div></div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p47_descopera_2.png");
buf.push("<div class=\"small-text\">Măsline și ulei de măsline</div></div></div>");
}
}, {id: 'art-g4v2-a47-descopera-T2-ex-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Datorită poziției sale geografice, Europa are pe cea mai mare întindere o </div><strong>climă temperată</strong>, călduroasă în sud și friguroasă în nord, mai ploioasă în vest și mai uscată în est. În extremitatea nordică, are o <strong>climă rece</strong>, cu veri scurte și cu ierni lungi și geroase.<div class=\"indent\">În Europa sunt numeroase <strong>fluvii</strong>, <strong>râuri </strong>și <strong>lacuri</strong>. Cele mai importante fluvii sunt Volga, Dunărea și Rinul.</div><div class=\"indent\"> <strong>Vegetația </strong>și <strong>fauna </strong>sunt în strânsă legătură cu clima și relieful.</div>");
}
}, 'v2/s2_p47_retine_01');
jade_mixins["img"]('img/v2/v2_p47_retine_1.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a47-retine-1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div><strong>Europa </strong>este un continent bine populat, cea mai numeroasă popu­lație înregistrându-se în partea sa centrală și în cea de vest. Popoarele Europei vorbesc numeroase limbi și aparțin mai multor religii. În Europa sunt peste 40 de țări, foarte diferite ca întindere și număr de locuitori.</div>");
}
}, 'v2/s2_p47_retine_02');
jade_mixins["img"]('img/v2/v2_p47_retine_2.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a47-retine-2', class:'art-g4-audio'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});