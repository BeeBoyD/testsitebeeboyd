registerChapter({ chapter: "v2-ch01-p14-15", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Dealurile și podișurile');
jade_mixins["subtitle"]('Paginile 14 - 15');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a14-retine1',
          top: 5.3488,
          left: 5,
          width: 45,
          height: 15.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a14-retine2',
          top: 21.7209,
          left: 50,
          width: 45,
          height: 10.8372,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a14-retine3',
          top: 67.2093,
          left: 5,
          width: 45,
          height: 8.2558,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a14-explica',
          top: 88.5116,
          left: 4.8113,
          width: 46.9811,
          height: 8.186,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a14-retine2-a1',
          top: 32.6047,
          left: 50.4717,
          width: 45,
          height: 11,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a14-retine2-a2',
          top: 43.8605,
          left: 50.3538,
          width: 45,
          height: 11,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a14-retine3-a1',
          top: 75.3953,
          left: 5,
          width: 45,
          height: 5.4884,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a14-retine3-a2',
          top: 80.9767,
          left: 5,
          width: 45,
          height: 6.5116,
          type: 'audio'
        }
      ],
      image: 'v2/p14.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a15-retine1',
          top: 4.7907,
          left: 62,
          width: 33,
          height: 22.7907,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a15-retine2',
          top: 46.093,
          left: 46.6745,
          width: 48.2783,
          height: 31.2558,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a15-ex1',
          top: 81.7209,
          left: 5,
          width: 90,
          height: 3.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a15-ex2',
          top: 85.6279,
          left: 5,
          width: 90,
          height: 7.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a15-ex3',
          top: 93.0698,
          left: 5,
          width: 90,
          height: 3.5349,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a15-retine1-a1',
          top: 27.6744,
          left: 62,
          width: 33,
          height: 16.9302,
          type: 'audio'
        }
      ],
      image: 'v2/p15.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\"> <strong>Podișurile </strong>ocupă întinderi mari și sunt situate în interiorul Carpaților (Depresiunea Colinară a Transilvaniei), în partea de est (Podișul Moldovei), de sud (Podișul Getic, Podișul Mehedinți) și de sud-est a țării (Podișul Dobrogei).</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p14_foto.png");
buf.push("<div class=\"small-text\">Depresiunea Colinară a Transilvaniei</div></div></div>");
}
});
}
}, {id: 'art-g4v2-a14-retine1'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Depresiunea Colinară a Transilvaniei reprezintă o unitate geografică mai joasă, situată în interiorul arcului carpatic și de aceea a primit numele de ,,depresiune”. În partea sa centrală cuprinde dealuri mai înalte, cu culmi rotunjite, acoperite cu păduri de fag și stejar sau cu pomi fructiferi și viță-de-vie și dealuri mai joase, cu pante line pe care se întind ogoare cultivate cu cereale și sfeclă de zahăr. Pe margini, spre munți, se întind dealuri și depresiuni, intens populate, cu sate și orașe vechi. Principalele bogății sunt gazul metan, resursă naturală care nu se mai găsește în altă parte a țării și sarea.</div>");
}
}, 'v2/s2_p14_retine_1a');
jade_mixins["img"]('img/v2/v2_p14_retine_1A.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a14-retine2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>În jumătatea sudică a Depresiunii Colinare a Transilvaniei, între văile râurilor Mureș (la nord și vest) și Olt (la sud), se află Podișul Târnavelor, denumire care provine de la faptul că pe aici curg două dintre cele mai importante râuri ale Transilvaniei: Târnava Mare și Târnava Mică. Aici se găsesc două dintre cele mai frumoase orașe medievale din România și din Europa, Mediaș și Sighișoara, dar și multe din celebrele biserici fortificate din Transilvania: Biertan, Copșa Mare, Slimnic, Merghindeal, Agnita etc.</div>");
}
}, 'v2/s2_p14_retine_1b');
jade_mixins["img"]('img/v2/v2_p14_retine_1B.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a14-retine2-a1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Depresiunea Colinară a Transilvaniei este traversată, în partea sa centrala, de râul Mureș, care desparte Podișul Târnavelor, din sud, de alte două subunități: Câmpia Transilvaniei și Podișul Someșan.</div>");
}
}, 'v2/s2_p14_retine_1c');
jade_mixins["img"]('img/v2/v2_p14_retine_1C.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a14-retine2-a2', class:'art-g4-audio'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Podișul Moldovei este cel mai întins podiș din țară. În partea de nord, între Carpații Orientali, valea râului Moldova și de o parte și de cealaltă a râului Siret se întinde Podișul Sucevei, o unitate de relief cu dealuri mai înalte (400-500 de metri altitudine), acoperite cu păduri de foioase.</div>");
}
}, 'v2/s2_p14_retine_2a');
jade_mixins["img"]('img/v2/v2_p14_retine_2A.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a14-retine3', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>În partea de est a Podișului Moldovei, pe râurile Jijia și Bahlui, până la Prut, se întinde Câmpia Moldovei, o regiune de dealuri joase, cu pante line, pe care se cultivă cereale, plante industriale și, în sud, viță-de-vie. Cel mai important centru administrativ și cultural al acestei unități este orașul Iași, fostă capitală a Moldovei.</div>");
}
}, 'v2/s2_p14_retine_2b');
jade_mixins["img"]('img/v2/v2_p14_retine_2B.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a14-retine3-a1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>La sud de orașul Iași, între râurile Siret și Prut, se întinde Podișul Bârladului. Dealurile au înălțimi mijlocii (400-450 de metri), fiind cultivate cu viță-de-vie, floarea-soarelui și cereale. Cel mai important oraș al unității este Vaslui, situat pe valea râului Bârlad.</div>");
}
}, 'v2/s2_p14_retine_2c');
jade_mixins["img"]('img/v2/v2_p14_retine_2C.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a14-retine3-a2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Explică </div></div>");
}
}, {id: 'art-g4v2-a14-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Explică faptul că partea de dealuri mai joase din Podișul Moldovei poartă denumirea de „câmpie”.</div>");
}
}, {id: 'art-g4v2-a14-explica'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> <strong>Podișul Getic </strong>se evidențiază prin dealurile sale foarte netede, despărțite de râurile ce vin dinspre munți. Dealurile mai înalte din nord sunt acoperite cu păduri de stejar, iar cele din sud, mai joase, sunt favorabile pentru cultura cerealelor, a pomilor fructiferi și a viței-de-vie (regiunea Drăgășani). Din subsol de extrag cărbuni, petrol și gaze naturale.</div>");
}
}, 'v2/s2_p15_retine_1a');
jade_mixins["img"]('img/v2/v2_p15_retine_1A.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a15-retine1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Cuprins între Motru și Dunăre, în nord-vestul Podișului Getic, se întinde <strong>Podișul Mehedinți</strong>, cea mai mică unitate geografică din România. Se aseamănă cu munții prin modul de formare, dar este o unitate de podiș prin înălțimea și aspectul dealurilor sale. Aici există o serie de elemente naturale deosebite, protejate în Geoparcul Platoul Mehedinți, cele mai interesante fiind Podul Natural de la Ponoare și Lacul Zăton. Cel mai important oraș al regiunii este Drobeta Turnu-Severin, veche așezare dunăreană ce datează din vremea romanilor. În apropierea orașului se găsesc barajul și hidrocentrala de la Porțile de Fier.</div>");
}
}, 'v2/s2_p15_retine_1b');
jade_mixins["img"]('img/v2/v2_p15_retine_1B.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a15-retine1-a1', class:'art-g4-audio'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Podișul Dobrogei, situat între Dunăre, Marea Neagră și granița cu Bulgaria, cuprinde dealuri cu înălțimi și înfățișări diferite. Cea mai mare înălțime o au Munții Măcinului, care reprezintă resturile unor munți mai vechi decât Carpații și ale căror peisaje sunt protejate în cadrul Parcului Național Munții Măcinului. Cele mai importante orașe sunt Tulcea, pe malul Dunării, în nord, și Constanța, la Marea Neagră. De asemenea, trebuie amintite stațiunile de pe litoralul românesc al Mării Negre, monumentul de la Adamclisi, ruinele așezărilor antice de la Histria, Carsium (lângă Hârșova), Ulmetum, Enisala etc.</div>");
}
}, 'v2/s2_p15_retine_2');
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v2/v2_p15_retine_2-audio-1.png');
buf.push("<div class=\"center\">Podișul Dobrogei</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v2/v2_p15_retine_2-audio-2.png');
buf.push("<div class=\"center\">Munții Măcinului</div></div></div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v2/v2_p15_retine_2-audio-3.png');
buf.push("<div class=\"center\">Adamclisi</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v2/v2_p15_retine_2-audio-4.png');
buf.push("<div class=\"center\">Cetatea Enisala</div></div></div>");
jade_mixins["img"]('img/v2/v2_p15_retine_2-audio-harta.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a15-retine2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a15-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Localizează pe harta murală a României unitățile geografice de deal și podiș și precizează pentru fiecare: poziția geografică, unitățile vecine, formele de relief, râurile și principalele orașe.");
}
}, {id: 'art-g4v2-a15-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<em>Carpații Occidentali sunt mărginiți, la exterior, de ..., iar Carpații Orientali și Carpații Meridionali de ..., care au un relief format din șiruri de ... și de ... . Resturile unor munți mai vechi decât Carpații, astăzi cu aspect de dealuri, se găsesc în ... .</em>");
}
}, 2, "Completează următoarele enunțuri:");
}
}, {id: 'art-g4v2-a15-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Pe harta de contur a României, desenează și colorează dealurile și podișurile, respectând culorile convenționale. Scrie apoi denumirea acestora.");
}
}, {id: 'art-g4v2-a15-ex3'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});