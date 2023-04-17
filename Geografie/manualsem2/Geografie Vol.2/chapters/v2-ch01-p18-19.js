registerChapter({ chapter: "v2-ch01-p18-19", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Câmpiile și Delta Dunării');
jade_mixins["subtitle"]('Paginile 18 - 19');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a18-ex1',
          top: 9.5349,
          left: 5,
          width: 90,
          height: 3.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a18-ex2',
          top: 13.4419,
          left: 5,
          width: 90,
          height: 1.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a18-retine',
          top: 16.3256,
          left: 5,
          width: 90,
          height: 39.3488,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a18-descopera',
          top: 61.0698,
          left: 50,
          width: 45,
          height: 27.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a18-descopera-ex1',
          top: 88.8837,
          left: 50,
          width: 45,
          height: 3.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a18-descopera-ex2',
          top: 92.4186,
          left: 50,
          width: 45,
          height: 3.6279,
          type: 'blank'
        }
      ],
      image: 'v2/p18.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a19-retine',
          top: 4.7907,
          left: 5,
          width: 44,
          height: 26.9767,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a19-vocabular',
          top: 4.4186,
          left: 50,
          width: 47,
          height: 16.4651,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a19-retine2',
          top: 22.186,
          left: 50,
          width: 47,
          height: 29.2093,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a19-aplica-ex',
          top: 56.8837,
          left: 5,
          width: 56.1792,
          height: 4.4651,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a19-exerseaza-ex1',
          top: 67.1163,
          left: 5,
          width: 90,
          height: 3.2558,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a19-exerseaza-ex2',
          top: 70.6512,
          left: 5,
          width: 90,
          height: 9.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a19-exerseaza-ex3',
          top: 80.0465,
          left: 5,
          width: 90,
          height: 3.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a19-explica-ex1',
          top: 89.2558,
          left: 5,
          width: 41,
          height: 3.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a19-explica-ex2',
          top: 92.9767,
          left: 5,
          width: 41,
          height: 3.814,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a19-portofoliu',
          top: 89.2558,
          left: 47.5,
          width: 47.5,
          height: 7.5349,
          type: 'blank'
        }
      ],
      image: 'v2/p19.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă</div></div>");
}
}, {id: 'art-g4v2-a18-observa-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Privește harta Câmpiei de Vest. Cu ce unități geografice se învecinează? Până unde se întinde în partea de vest?");
}
}, {id: 'art-g4v2-a18-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Citește de pe hartă numele celor mai importante râuri și orașe din Câmpia de Vest.");
}
}, {id: 'art-g4v2-a18-ex2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Câmpia de Vest este situată în vestul țării, până la granița cu Ungaria și Serbia. Spre est se întinde până la marginea dealurilor, în cuprinsul cărora pătrunde de-a lungul râurilor. Cuprinde porțiuni mai înalte, ce depășesc 100 m (Câmpia Carei, Câmpia Vingăi) și porțiuni mai joase (Câmpia Someșului, Câmpia Crișurilor, Câmpia Timișului). Câmpia de Vest este o regiune cu populație numeroasă, cu multe sate și orașe mari, dintre care se remarcă Timișoara, Arad, Oradea și Satu Mare.</div>");
}
}, 'v2/s2_p18_retine');
jade_mixins["img"]('img/v2/v2_p18_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a18-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a18-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\">Citește textul următor, analizează cu atenție harta alăturată și răspunde cerințelor.</div><div class=\"indent\"><em>Acesta este locul misterios unde fluviul, răsfirat în trei brațe, și-a făcut culcuș înainte de-a se întâlni cu marea. Aici apa Dunării se-mpletește cu întinderile de uscat, pe care le-a făurit treptat, din mâlurile sale, ajutată și de marea care și-a lăsat, pe alocuri, nisipul auriu. Uscatul crește timid, dar neîncetat. La dulcea adiere a vântului, stuful freamătă ușor, ramurile bătrânelor sălcii mângâie agale văzduhul, iar nuferii dansează grațioși pe apele despletite. Este paradisul păsărilor și al peștilor de care se bucură toți oamenii, dar mai ales locuitorii săi. Puțini, dar hotărâți, ei își câștigă pâinea din pescuit și au grijă de aceste locuri minunate.</em></div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p18_harta_2.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a18-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-ex-v2"](1, "Din câte brațe este formată Delta Dunării? Cum se numesc? Care este brațul cel mai scurt?");
}
}, {id: 'art-g4v2-a18-descopera-ex1'});
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-ex-v2"](2, "Cum se numesc întinderile de uscat din Deltă? Cum s-au format?");
}
}, {id: 'art-g4v2-a18-descopera-ex2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p19_retine.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a19-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\"> <strong>Delta Dunării </strong>este cea mai joasă unitate de relief, clădită de Dunăre și de mare. Înainte de vărsarea în mare, fluviul se desparte în <em>trei brațe</em>: la nord <strong>Chilia </strong>care formează granița cu Ucraina, la mijloc <strong>Sulina</strong>, cel mai scurt braț, pe care înaintează vapoarele de pe mare până la Brăila și la sud <strong>Sfântu Gheorghe</strong>. Între aceste brațe se întinde Delta Dunării, care este acoperită în cea mai mare parte de <em>mlaștini</em>, <em>lacuri </em>și <em>canale</em>. Porțiunile de uscat se numesc <em>grinduri</em>.</div>");
jade_mixins["img"]("img/v2/v2_p19_foto_1.png");
}
});
}
}, {id: 'art-g4v2-a19-retine-web'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Vocabular</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div> <strong>grind </strong> –  formă de relief alungită, formată prin depunerea materialelor transportate de râuri sau de apele marine, în regiunile de țărm. Grindurile din Delta Dunării sunt cele mai noi uscaturi care se formează în România. Între grinduri se găsesc numeroase canale, lacuri și suprafețe mlăștionase. </div>");
}
}, 'v2/s2_p19_vocabular');
jade_mixins["img"]('img/v2/v2_p19_vocabular.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a19-vocabular', class:'art-g4-audio'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div>Vegetația Deltei este alcătuită din stuf, arbori iubitori de umezeală (sălcii, răchite) și mici păduri de stejar, pe unele grinduri (Letea). Aici trăiesc foarte multe specii de păsări (pelicani, cormorani, lebede) și de pești. Întrucât întinderile de uscat sunt mici, populația este puțin numeroasă. Singurul oraș este Sulina. Principalele bogății ale Deltei sunt stuful și peștii. Datorită peisajelor deosebite, a bogăției de păsări și pești (unele specii rare) Delta Dunării a fost declarată rezervație naturală, cunoscută în toată lumea. </div>");
}
}, 'v2/s2_p19_retine');
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v2/v2_p19_retine-audio-1.png');
buf.push("<div class=\"center\">grinduri, lacuri și canale </div></div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v2/v2_p19_retine-audio-2.png');
buf.push("<div class=\"center\">Pădurea Letea </div></div></div><div class=\"art-g4-img-left\">");
jade_mixins["img"]('img/v2/v2_p19_retine-audio-3.png');
buf.push("</div><div class=\"center\">cormorani </div><div class=\"row\"><div class=\"col-sm-6\"><div class=\"art-g4-img-left-2\">");
jade_mixins["img"]('img/v2/v2_p19_retine-audio-4.png');
buf.push("</div><div class=\"center\">pelican </div>");
jade_mixins["img"]('img/v2/v2_p19_retine-audio-5.png');
buf.push("<div class=\"center\">cai sălbatici </div></div><div class=\"col-sm-6\">");
jade_mixins["img"]('img/v2/v2_p19_retine-audio-6.png');
buf.push("<div class=\"center\">canal </div></div></div>\n</div>");
}
}, {id: 'art-g4v2-a19-retine2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a19-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-7\">");
jade_mixins["art-g4-ex-v2"](1, "Dă exemple de plante și animale care cresc în Delta Dunării.");
jade_mixins["art-g4-ex-v2"](2, "Cu ce se ocupă locuitorii din Delta Dunării?");
buf.push("</div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p19_foto_2.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a19-aplica-ex'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v2-a19-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Localizează pe harta murală a României unitățile geografice de câmpie și precizează în ce parte a țării se află fiecare, unitățile vecine, râurile și principalele orașe.");
}
}, {id: 'art-g4v2-a19-exerseaza-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Reformulează enunțurile următoare astfel încât să devină adevărate. Scrie, pe caiet, enunțurile adevărate.");
buf.push("<ul class=\"art-g4-v2\"><li>Câmpiile ocupă partea de nord și de vest a țării. În câmpii se cultivă mai ales cereale, din care de obține zahărul. Oamenii extrag din câmpii petrol și minereuri de fier.</li><li>Delta este situată la izvoarele Dunării. Cuprinde trei brațe: Sfântu Gheorghe, la nord, Sulina, în mijloc, și Chilia, la sud. Cea mai mare parte a deltei este formată din uscaturi numite grinduri.</li></ul>");
}
}, {id: 'art-g4v2-a19-exerseaza-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Pe harta de contur a României, desenează și colorează câmpiile și Delta Dunării. Scrie și denumirea acestora.");
}
}, {id: 'art-g4v2-a19-exerseaza-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Explică </div></div>");
}
}, {id: 'art-g4v2-a19-explica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "De ce oamenii au înlocuit vegetația naturală de stepă din câmpii cu culturi agricole?");
}
}, {id: 'art-g4v2-a19-explica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "De ce în Delta Dunării populația este puțin numeroasă?");
}
}, {id: 'art-g4v2-a19-explica-ex2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Portofoliu </div></div>");
}
}, {id: 'art-g4v2-a19-portofoliu-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Selectează, pe o fișă, informații despre păsările și peștii care trăiesc în Delta Dunării. Îmbogățește-ți colecția de ilustrate, adăugând imagini care demonstrează frumusețea Deltei Dunării.</div>");
}
}, {id: 'art-g4v2-a19-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});