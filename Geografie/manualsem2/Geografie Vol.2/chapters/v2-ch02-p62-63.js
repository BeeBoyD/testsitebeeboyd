registerChapter({ chapter: "v2-ch02-p62-63", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Știai că…');
jade_mixins["subtitle"]("Paginile 62 - 63");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a62-romania',
          top: 11.8605,
          left: 5,
          width: 45,
          height: 56.3721,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a62-europa',
          top: 68.5116,
          left: 5,
          width: 45,
          height: 28.093,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a62-terra',
          top: 20.7907,
          left: 51,
          width: 45,
          height: 25.6744,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a62-sistemul-solar',
          top: 46.6512,
          left: 51,
          width: 45,
          height: 22.6977,
          type: 'audio'
        }
      ],
      image: 'v2/p62.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a63-A',
          top: 12.6047,
          left: 5,
          width: 45,
          height: 11.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-B',
          top: 24.4186,
          left: 5,
          width: 45,
          height: 7.0698,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-C',
          top: 32.2326,
          left: 5,
          width: 45,
          height: 15.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-D',
          top: 48.6047,
          left: 5,
          width: 45,
          height: 7.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-E',
          top: 56.2326,
          left: 5,
          width: 45,
          height: 5.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-F',
          top: 61.814,
          left: 5,
          width: 45,
          height: 14.5116,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-G',
          top: 76.8837,
          left: 5,
          width: 45,
          height: 12.5581,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-H',
          top: 12.5116,
          left: 51,
          width: 45,
          height: 12,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-I',
          top: 24.8837,
          left: 51,
          width: 45,
          height: 10.6977,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-L',
          top: 36.0465,
          left: 51,
          width: 45,
          height: 13.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-N',
          top: 50.6512,
          left: 51,
          width: 45,
          height: 9.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-O',
          top: 60.2326,
          left: 51,
          width: 45,
          height: 21.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a63-P',
          top: 82.8372,
          left: 51,
          width: 45,
          height: 6.7907,
          type: 'blank'
        }
      ],
      image: 'v2/p63.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Știai că…</div>");
}
}, {id: 'art-g4v2-a62-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">ROMÂNIA</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> Știați că… </div>");
}
}, 'v2/s2_p62_stiati_ca_01');
jade_mixins["img"]('img/v2/v2_p62_stiati-ca_1.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a62-romania', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">ROMÂNIA</div><ul class=\"art-g4-orange\"><li>cea mai mare înălțime este în Vârful Moldoveanu (2 544 m)?</li><li>cel mai înalt deal este Dealul Chiciora, din Subcarpaţii Getici (1 218 m)?</li><li>cea mai înaltă câmpie este Câmpia Piteștilor, din Câmpia Română (300 m)?</li><li>cea mai ridicată temperatură înregistrată pe teritoriul țării noastre a fost de 44,5°C, în localitatea Ion Sion, situată lângă orașul Brăila, la data de 10 august 1951?</li><li>cel mai lung râu care are atât izvoarele cât și gura de vărsare pe teritoriul României este Oltul (615 km)?</li><li>cel mai adânc lac natural din Munții Carpaţi este lacul Zănoaga, din Carpații Meridionali (cu o adâncime de 29 m)?</li><li>cea mai nordică localitate este Horodiştea, din județul Botoşani?</li><li>cea mai sudică localitate este Zimnicea, din județul Teleorman?</li><li>cea mai vestică localitate este Beba Veche, din județul Timiş?</li><li>cea mai estică localitate este Sulina, din județul Tulcea?</li><li>oraşul situat la cea mai mare înălțime este Predeal (1 060 m), aflat pe Valea Prahovei?</li><li>oraşul situat la cea mai mică înălțime este Sulina, aflat în Delta Dunării la o altitudine de 4 m?</li><li>cea mai veche cale ferată este sectorul Oraviţa- Baziaş, construit în anul 1856?</li></ul>");
}
}, {id: 'art-g4v2-a62-romania-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">EUROPA</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> Știați că… </div>");
}
}, 'v2/s2_p62_stiati_ca_02');
jade_mixins["img"]('img/v2/v2_p62_stiati-ca_2.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a62-europa', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">EUROPA</div><ul class=\"art-g4-orange\"><li>cea mai mare înălțime este în Vârful Elbrus, partea europeană a Munților Caucaz (5 642 m)?</li><li>cel mai lung fluviu este Volga (3 690 km)?</li><li>cel mai întins lac este lacul Onega de pe teritoriul Rusiei?</li><li>cel mai mare port fluvial este Duisburg, pe fluviul Rin (Germania)?</li><li>cel mai mare port maritim este Rotterdam din Olanda?</li><li>cel mai mic stat din Europa și de pe Pământ este Vatican, situat în capitala Romei, Italia (cu o întindere asemănătoare unui cartier)?</li><li>capitala europeană situată la cea mai mare înălțime este Andorra La Vella (capitala statului Andorra), aflată în Munții Pirinei, la o altitudine de 1 070 m, adică aproximativ la aceeași înălțime ca orașul Predeal?</li></ul>");
}
}, {id: 'art-g4v2-a62-europa-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">TERRA</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> Știați că… </div>");
}
}, 'v2/s2_p62_stiati_ca_03');
jade_mixins["img"]('img/v2/v2_p62_stiati-ca_3.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a62-terra', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">TERRA</div><ul class=\"art-g4-orange\"><li>cea mai mare înălțime este în vârful Everest sau Chomolungma, din Munții Himalaya (Asia) (8 848 m)?</li><li>cea mai întinsă câmpie este Câmpia Amazonului, din America de Sud?</li><li>cele mai lungi fluvii sunt Nilul (6 671 km) și Amazonul (6 437 km)?</li><li>cel mai întins lac este Marea Caspică (are o întindere mult mai mare decât România)?</li><li>cel mai întins stat este Rusia (se întinde pe două continente: Europa și Asia)? Suprafața sa este de 71 de ori mai mare decât suprafața României!</li></ul>");
}
}, {id: 'art-g4v2-a62-terra-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">SISTEMUL SOLAR</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> Știați că… </div>");
}
}, 'v2/s2_p62_stiati_ca_04');
jade_mixins["img"]('img/v2/v2_p62_stiati-ca_4.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a62-sistemul-solar', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">SISTEMUL SOLAR</div><ul class=\"art-g4-orange\"><li>cel mai mare corp ceresc este Soarele (de aproape 110 ori mai mare decât planeta noastră, Terra)?</li><li>cea mai mică planetă este Mercur (de aproape trei ori mai mică decât Terra)?</li><li>planeta cu cea mai scurtă durată a mișcării de rotație în jurul axei sale este Jupiter (mai puțin de 10 ore)?</li><li>planeta cu cea mai lungă durată a mișcării de rotație în jurul Soarelui este Neptun (durata de rotație în jurul Soarelui este de aproape 165 de ani)?</li></ul>");
jade_mixins["img"]("img/v2/v2_p62_planete.png");
}
}, {id: 'art-g4v2-a62-sistemul-solar-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Mic dicționar geografic</div>");
}
}, {id: 'art-g4v2-a63-Title'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">A </div><span><div class=\"voc-text-red\">aeroport – </div>  loc amenajat cu spații și instalații pentru decolarea sau aterizarea avioanelor<br/><div class=\"voc-text-red\">altitudine – </div>  înălțime a reliefului într-un anumit loc<br/><div class=\"voc-text-red\">arbust – </div>  plantă lemnoasă mai mică decât arborele</span>");
}
}, {id: 'art-g4v2-a63-A'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">B </div><span><div class=\"voc-text-red\">busolă – </div>  instrument utilizat pentru determinarea punctelor cardinale</span>");
}
}, {id: 'art-g4v2-a63-B'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">C </div><span><div class=\"voc-text-red\">colinar – </div> format din mai multe coline</span><br/><span><div class=\"voc-text-red\">colină – </div> deal</span><br/><span><div class=\"voc-text-red\">creastă – </div> partea cea mai de sus, prelungă, ascuțită și cu înclinări mari, a unui munte. Cele mai multe creste au aspect zimțat și sunt stâncoase</span><br/><span><div class=\"voc-text-red\">culme – </div> partea cea mai de sus, prelungă și ușor înclinată, a unui munte sau a unui deal</span>");
}
}, {id: 'art-g4v2-a63-C'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">D </div><span><div class=\"voc-text-red\">depresiune – </div>  formă de relief cu înălțimi mai joase, înconjurată de forme de relief mai înalte</span>");
}
}, {id: 'art-g4v2-a63-D'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">E </div><span><div class=\"voc-text-red\">extremitate – </div>  limită, margine, parte extremă</span>");
}
}, {id: 'art-g4v2-a63-E'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">F </div><span><div class=\"voc-text-red\">faleză – </div>  mal înalt și abrupt al unei mări sau al unui lac faună – animalele sălbatice care trăiesc într-un anumit spațiu</span><br/><span><div class=\"voc-text-red\">fertil (fertilitate) – </div>  proprietate a solului de a asigura plantelor substanțele nutritive, apa și aerul de care acestea au nevoie pentru creștere și dezvoltare</span>");
}
}, {id: 'art-g4v2-a63-F'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">G </div><span><div class=\"voc-text-red\">graniță – </div>  linia imaginară care desparte teritoriul unei țări de teritoriul altei țări vecine</span><br/><span><div class=\"voc-text-red\">grind – </div> formă de relief alungită, formată prin depunerea materialelor transportate de râuri sau de apele marine, în regiunile de țărm.</span>");
}
}, {id: 'art-g4v2-a63-G'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">H </div><span><div class=\"voc-text-red\"> hartă – </div>  o reprezentare într-o formă micșorată și convențională a unor spații mai mari de pe suprafața Pământului sau chiar a Pământului în întregime</span>");
}
}, {id: 'art-g4v2-a63-H'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">I </div><span><div class=\"voc-text-red\">izvor – </div> locul în care un firicel de apă iese la suprafața pământului și curge; locul de obârșie al unei ape curgătoare. Există și izvoare minerale ale căror ape sunt utilizate de om</span>");
}
}, {id: 'art-g4v2-a63-I'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">L </div><span><div class=\"voc-text-red\">lanţ muntos </div>– șir neîntrerupt de munţi care se desfăşoară pe o suprafață întinsă, pe o anumită direcţie</span><br/><span><div class=\"voc-text-red\"> linia orizontului sau zare – </div> linia imaginară pe care o vedem de jur-împrejurul nostru, unde ni se pare că cerul se unește cu pământul</span>");
}
}, {id: 'art-g4v2-a63-L'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">N </div><span><div class=\"voc-text-red\">nod de comunicație – </div>  locul în care se adună mai multe șosele sau căi ferate și din care pornesc linii aeriene</span>");
}
}, {id: 'art-g4v2-a63-N'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">O </div><span><div class=\"voc-text-red\">oraș – </div> localitate de dimensiuni mai mari, a cărei populație, mai numeroasă decât cea a satelor, se ocupă cu activități din domeniul industriei, al comerțului, al sănătății, al culturii etc.</span><br/><span><div class=\"voc-text-red\">orbită – </div>  drumul parcurs de un corp ceresc în spațiul cosmic</span><br/><span><div class=\"voc-text-red\">a (te) orienta – </div>  a ști încotro să te îndrepți pentru a ajunge într-un anumit loc; a recunoaște sau a stabili direcția; a găsi drumul până la o destinație dorită folosindu-te de diferite repere</span>");
}
}, {id: 'art-g4v2-a63-O'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">P </div><span><div class=\"voc-text-red\">plajă – </div>  formă de relief care s-a format într-o zonă litorală prin acumularea nisipului fin</span><br/><span><div class=\"voc-text-red\">plan – </div>  desenul care reprezintă porțiuni din orizontul apropiat (clasa, școala, locuința, cartierul, localitatea) cu principalele elemente care le caracterizează, (obiecte, clădiri, străzi, parcuri etc.) redate într-o formă micșorată și convențională.</span><br/><span><div class=\"voc-text-red\">port – </div>  spațiu în care se opresc bărcile, șalupele, vapoarele și orice alt fel de ambarcațiune pentru încărcarea / descărcarea mărfurilor, pentru urcarea / coborârea persoanelor, pentru reparații sau pentru alte activități</span><br/><span><div class=\"voc-text-red\">puncte cardinale – </div> direcții ale orizontului care ne ajută la orientare</span>");
}
}, {id: 'art-g4v2-a63-P'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});