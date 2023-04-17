registerChapter({ chapter: "v1-ch01-p34-35", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Modificări observabile în realitatea înconjurătoare');
jade_mixins["subtitle"]('Paginile 34 - 35');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a34-aminteste-ti',
          top: 14.186,
          left: 4,
          width: 93,
          height: 10.9767,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a34-observa-1',
          top: 25.7209,
          left: 4,
          width: 32.8302,
          height: 11.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a34-observa-2',
          top: 37.6279,
          left: 4,
          width: 93,
          height: 9.3953,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a34-retine',
          top: 47.5814,
          left: 4,
          width: 93,
          height: 17.8605,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a34-aplica',
          top: 68.0465,
          left: 4,
          width: 93,
          height: 9.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a34-descopera',
          top: 77.5349,
          left: 4,
          width: 93,
          height: 18.7907,
          type: 'blank'
        }
      ],
      image: 'v1/p34.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a35-retine-1',
          top: 4.9767,
          left: 4,
          width: 93,
          height: 21.8605,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a35-observa',
          top: 26.8372,
          left: 4,
          width: 93,
          height: 17.4884,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a35-retine-2',
          top: 44.5116,
          left: 4,
          width: 93,
          height: 21.6744,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a35-club',
          top: 67.1163,
          left: 4,
          width: 48.2783,
          height: 29.3953,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a35-aplica-1',
          top: 66.4651,
          left: 53,
          width: 44,
          height: 9.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a35-aplica-2',
          top: 76.5116,
          left: 53,
          width: 44,
          height: 20,
          type: 'blank'
        }
      ],
      image: 'v1/p35.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('8.', "Modificări observabile<br>în realitatea înconjurătoare",'Modificări observabile și repere de timp');
}
}, {id: 'art-g4v1-a34-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Amintește-ți</div></div><div>Pământul, planeta noastră, se rotește atât în jurul propriei axe, cât și în jurul Soarelui. Mișcarea Pământului în jurul propriei axe se numește mișcare de rotație, iar principala consecință a acestei mișcări este succesiunea zilelor și a nopților sau ciclul zi-noapte.</div>");
}
}, {id: 'art-g4v1-a34-aminteste-tiT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Amintește-ți </div><div>Pământul, planeta noastră, se rotește atât în jurul propriei axe, cât și în jurul Soarelui. Mișcarea Pământului în jurul propriei axe se numește mișcare de rotație, iar principala consecință a acestei mișcări este succesiunea zilelor și a nopților sau ciclul zi-noapte.</div>");
}
}, "v1/p34_aminteste-ti");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p34_aminteste-ti_1.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p34_aminteste-ti_2.png");
buf.push("</div></div></div>");
}
}, {id: 'art-g4v1-a34-aminteste-ti', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă</div></div>");
}
}, {id: 'art-g4v1-a34-observaT'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1,'Privește în jurul tău. Este lumină sau întuneric? Este zi sau noapte? Pe cer strălucește Soarele sau este acoperit de nori?');
}
}, {id: 'art-g4v1-a34-observa-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p34_observa_A.png');
buf.push("</div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p34_observa_B.png');
buf.push("</div></div>");
}
}, 2,'Analizează imaginile A și B. Care dintre imagini ilustrează momentul numit zi? De ce după zi vine noapte? Observă termometrele de pe fiecare imagine. Este mai cald ziua sau noaptea? Ce schimbări aduce în activitatea oamenilor ciclul zi-noapte? Dar în viața plantelor și animalelor?');
}
}, {id: 'art-g4v1-a34-observa-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p34_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a34-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><br/>");
jade_mixins["img"]('img/v1/v1_p34_retine.png');
buf.push("</div><div class=\"col-sm-6\"><div class=\"indent\">Pământul se rotește <em>în jurul axei sale </em>de la vest la est.</div><div class=\"indent\">Partea Pământului îndreptată spre Soare este luminată, aici fiind zi și temperaturi mai mari. În partea opusă este întuneric, acolo fiind noapte și temperaturi mai scăzute.</div></div></div><div class=\"indent\">Ciclul zi-noapte are o durată totală de 24 de ore, adică durata unei rotații complete a Pământului în jurul axei sale.</div>");
}
});
}
}, {id: 'art-g4v1-a34-retine-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a34-aplicaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Numește două modificări din realitatea înconjurătoare determinate de mișcarea Pământului în jurul axei sale.</div>");
}
}, {id: 'art-g4v1-a34-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v1-a34-descoperaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Citește textul următor:</div><div class=\"indent\"><em>În fiecare zi, parcul își primește vizitatorii. Astăzi iarba este veselă, florile se alintă la soare și păsărelele ciripesc gălăgioase printre frunzele arborilor. Dar nu este tot timpul anului la fel. A fost o vreme când parcul era trist și gol, fără iarbă sau flori, cu mormane de zăpadă adunate în unele locuri. Arborii își pierduseră frunzele de mult, tremurau neajutorați în calea vântului puternic și nicio pasăre nu se mai auzea, doar vuietul vântului și goana fulgilor de nea care cădeau din cerul supărat. Zile întregi a fost așa, până la un moment dat, când Soarele a început să încălzească iară și totul s-a schimbat. Timizi au apărut ghioceii, apoi iarba a început să crească, arborii s-au înveșmântat cu frunzele lor bogate și din nou păsărelele au început să cânte.</em></div><div class=\"indent\">Identifică schimbările petrecute în parc. Explică faptul că parcul nu arată mereu la fel.</div><br/>");
}
}, {id: 'art-g4v1-a34-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p35_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a35-retine-1', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><br/>");
jade_mixins["img"]('img/v1/v1_p35_retine-1.png');
buf.push("</div><div class=\"col-sm-6\"><div class=\"indent\">În afară de mișcarea de rotație în jurul propriei sale axe, Pământul se rotește și în jurul Soarelui. O rotație completă a Pământului <em>în jurul Soarelui </em>se produce într-un an. În timpul mișcării, Pământul își schimbă mereu poziția față de Soare, de aceea nu primește peste tot aceleași cantități de lumină și de căldură. Acest fapt duce la formarea, în zona în care se găsește situată țara noastră, a <em>patru anotimpuri: primăvara, vara, toamna și iarna.</em></div></div></div>");
}
});
}
}, {id: 'art-g4v1-a35-retine-1-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă</div></div>");
}
}, {id: 'art-g4v1-a35-observaT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Privește imaginile alăturate și răspunde următoarelor cerințe:</div>");
jade_mixins["art-g4-ex"](1,'Ce anotimp este în fiecare dintre cele patru imagini?');
jade_mixins["art-g4-ex"](2,'Cunoscând faptul că anotimpurile se repetă în fiecare an în aceeași ordine, stabilește ordinea corectă a fotografiilor.');
jade_mixins["art-g4-ex"](3,'Descrie fiecare anotimp. Urmărește și schimbările de temperatură marcate pe termometrele din dreapta imaginilor.');
buf.push("<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p35_observa_a.png');
buf.push("</div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p35_observa_b.png');
buf.push("</div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p35_observa_c.png');
buf.push("</div><div class=\"col-xs-6\">");
jade_mixins["img"]('img/v1/v1_p35_observa_d.png');
buf.push("</div></div>");
}
}, {id: 'art-g4v1-a35-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p35_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a35-retine-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-7\"><div class=\"indent\">Între 21 martie și 23 septembrie este mai luminată și încălzită jumătatea de nord a planetei, unde ne aflăm și noi. Dacă la noi este primăvară urmată de vară, în jumătatea de sud a Pământului este toamnă și apoi iarnă. Din 23 septembrie până pe 21 martie, Soarele încălzește și luminează mai puțin jumătatea nordică și mai mult cea sudică. În partea nordică a Pământului este toamnă și urmează iarna, spre deosebire de jumătatea sudică unde este primăvară și urmează vara.</div></div><div class=\"col-sm-5\"><br/>");
jade_mixins["img"]('img/v1/v1_p35_retine_2.png');
buf.push("</div></div>");
}
});
}
}, {id: 'art-g4v1-a35-retine-2-web'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-bluebox"].call({
block: function(){
buf.push("<div class=\"indent\">Pe lângă schimbările care au loc în natură, în jurul nostru se mai produc și schimbări datorate activităților oamenilor. Prin unele acțiuni, oamenii au o influență negativă asupra mediului din jurul nostru: tăierea pădurilor, eliberarea în aer, în ape și în sol a unor substanțe toxice, vânătoarea necontrolată a animalelor sălbatice etc.</div><div class=\"indent\">Pământul oferă condiții prielnice pentru viața oamenilor, a plantelor și a animalelor: aer, apă, hrană. Noi, oamenii, trebuie să avem grijă de mediul în care trăim, să păstrăm aerul, apa și solurile curate, să păstrăm pădurile. Dacă noi avem grijă de Pământ, și el va avea grijă de noi, oferindu-ne cele necesare vieții.</div>");
}
}, 'Clubul „Prietenii naturii“');
}
}, {id: 'art-g4v1-a35-club'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a35-aplicaT'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1,'Numește două modificări din realitatea înconjurătoare determinate de mișcarea Pământului în jurul Soarelui.');
}
}, {id: 'art-g4v1-a35-aplica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Multe schimbări pe care le observăm în jurul nostru sunt legate de mișcările Soarelui.</li><li>În cursul unui an, Pământul primește de la Soare aceeași cantitate de lumină și căldură.</li><li>Mișcarea Pământului în jurul propriei axe determină formarea anotimpurilor.</li><li>Ziua și noaptea au o durată egală pe tot parcursul anului.</li></ul>");
}
}, 2,'Reformulează enunțurile următoare astfel încât să devină adevărate. Scrie, pe caiet, enunțurile adevărate.');
}
}, {id: 'art-g4v1-a35-aplica-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});