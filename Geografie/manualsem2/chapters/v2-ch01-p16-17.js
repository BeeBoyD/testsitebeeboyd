registerChapter({ chapter: "v2-ch01-p16-17", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Câmpiile și Delta Dunării');
jade_mixins["subtitle"]('Paginile 16 - 17');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a16-observa',
          top: 19.1163,
          left: 5,
          width: 90,
          height: 33.8605,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a16-retine',
          top: 54.093,
          left: 5,
          width: 56,
          height: 20.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a16-ex1',
          top: 58.2791,
          left: 62,
          width: 33,
          height: 7.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a16-ex2',
          top: 66,
          left: 62,
          width: 33,
          height: 2.9767,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a16-ex3',
          top: 69.2558,
          left: 62,
          width: 33,
          height: 5.6744,
          type: 'blank'
        }
      ],
      image: 'v2/p16.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a17-descopera',
          top: 9.2558,
          left: 5,
          width: 90,
          height: 16.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a17-descopera-exercitii',
          top: 26.186,
          left: 5,
          width: 90,
          height: 7.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a17-exerseaza-ex1',
          top: 43.1163,
          left: 5,
          width: 39,
          height: 9.0233,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a17-exerseaza-ex2',
          top: 52.5116,
          left: 5,
          width: 39,
          height: 3.2558,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a17-exerseaza-ex3',
          top: 56.1395,
          left: 5,
          width: 39,
          height: 3.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a17-exerseaza-ex4',
          top: 59.7674,
          left: 5,
          width: 39,
          height: 14.6977,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a17-retine',
          top: 75.3953,
          left: 5,
          width: 90,
          height: 12.186,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a17-retine-video-2',
          top: 87.5814,
          left: 5,
          width: 90,
          height: 9.2093,
          type: 'video'
        }
      ],
      image: 'v2/p17.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('3.', "Câmpiile și Delta Dunării",'Marile unități geografice ale României');
}
}, {id: 'art-g4v2-a16-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v2-a16-observa-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Observă hărțile și precizează cu ce număr este marcată harta care prezintă corect unitățile geografice de deal, de podiș și de câmpie existente în țara noastră?</div>");
}
}, "v2/s2_p16_observa");
buf.push("<ul class=\"art-g4-v2\"><li>Cum se numesc cele două unități de câmpie din țara noastră?</li>");
jade_mixins["multiRegex"]({
            name: 'art-g4v2-a16-observa-textline-1',
            hasIsDoneBox: false,
            regexps: [
              ["^c[a|â]mpia de vest$"],
              ["^c[a|â]mpia rom[a|â]n[a|ă]$"],
            ],
            textlines: [
              {placeholder: '...', className: 'col-md-6', size: '30'},
              {placeholder: '...', className: 'col-md-6', size: '30'},
            ],
            statementClassName: 'row',
            containerClassName: 'row'
          });
buf.push("<li>Ce unitate geografică se află în nord-estul Podișului Dobrogei?</li>");
jade_mixins["multiRegex"]({
            name: 'art-g4v2-a16-observa-textline-2',
            hasIsDoneBox: false,
            regexps: [
              ["^delta dun[a|ă]rii$"],
            ],
            textlines: [
              {placeholder: '...', className: 'col-md-6', size: '30'},
            ],
            statementClassName: 'row',
            containerClassName: 'row'
          });
buf.push("</ul>");
}
});
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p16_observa_1.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p16_observa_2.png");
buf.push("</div></div></div>");
}
}, {name: 'art-g4v2-a16-observa-textline'});
}
}, {id: 'art-g4v2-a16-observa', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Câmpiile completează spre sud și spre vest relieful țării noastre. Sunt cele mai joase și netede forme de relief. Datorită climei prielnice și solurilor roditoare, vegetația naturală de stepă a fost treptat înlocuită de oameni cu diferite culturi agricole. <strong>Câmpia Română </strong>și <strong>Câmpia de Vest </strong>reprezintă principalele regiuni agricole ale țării, în care se cultivă grâu, porumb, floarea-soarelui, sfeclă de zahăr. În subsol, ambele câmpii prezintă zăcăminte de petrol și gaze naturale.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p16_retine_1.png");
buf.push("<div class=\"small-text\">Lan de grâu în Câmpia Română </div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p16_retine_2.png");
buf.push("<div class=\"small-text\">Cultură de floarea-soarelui în Câmpia de Vest</div></div></div>");
}
});
}
}, {id: 'art-g4v2-a16-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a16-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Compară câmpiile cu dealurile. În care forme de relief temperaturile sunt mai ridicate? Unde plouă mai mult?");
}
}, {id: 'art-g4v2-a16-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Ce fel de soluri sunt în câmpii? Ce plante se cultivă pe aceste soluri?");
}
}, {id: 'art-g4v2-a16-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Cum sunt așezate gospodăriile în satele din câmpie? Compară satele de câmpie cu satele din regiunile de deal.");
}
}, {id: 'art-g4v2-a16-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a17-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"indent\">Citește textele următoare:</div><div class=\"indent\"><em>„În dulcea taină a dimineții, pornim la drum. Lăsăm în urmă ultima casă din sat și ne îndreptăm voinicește spre orașul cel mare de pe Bega. Spicele de grâu se leagănă ușor în bătaia vântului. Din lanul nesfârșit ciocârlia țâșnește și urcă veselă spre cerul boltit. Printre ierburile de pe marginea drumului se ivesc florile albastre de cicoare și macii roșii.”</em></div><div class=\"indent\"><em> „Trece o oră, trec două și în jurul meu aceeași suprafață netedă, care se pierde în depărtări. Odată aici se întindeau numai ierburi sălbatice, care se uscau adesea sub soarele dogoritor al verii. Dar azi porumbul se înalță zvelt în dreapta mea, iar floarea-soarelui îi zâmbește de peste drum. Din depărtare răzbate un zgomot slab. Este vaporul care circulă pe bătrâna Dunăre. Speriat, un iepure îmi taie calea și se ascunde printre mărăcinii de la marginea drumului.”</em></div><div class=\"row\"><div class=\"col-sm-6\"><ol class=\"art-g4-v2\"><li>Numește unitatea geografică prezentată în fiecare text.</li><li>Ce înfățișare are această formă de relief?</li><li>Cum se numește vegetația naturală care acoperea odinioară suprafețe extinse din aceste regiuni ale țării?</li><li>Cu ce a fost înlocuită această vegetație naturală?</li></ol></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p17_foto.png");
buf.push("<div class=\"small-text\">Vegetație naturală de stepă în Câmpia Română</div></div></div>");
}
}, {id: 'art-g4v2-a17-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
}
}, {id: 'art-g4v2-a17-descopera-exercitii'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-subtitle-v2\"><div>Exersează </div></div>");
}
}, {id: 'art-g4v2-a17-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Privește harta alăturată și răspunde următoarelor cerințe.");
jade_mixins["img"]("img/v2/v2_p17_exerseaza.png");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>Cum se numește unitatea de relief reprezentată? În ce parte a țării este situată? Cu ce unități geografice se învecinează la nord? Cu cine se învecinează la vest, la sud și la est?</li><li>Cum deosebești pe hartă câmpiile mai înalte de cele mai joase?</li><li>Citește de pe hartă numele celor mai importante râuri și orașe.</li></ol>");
jade_mixins["art-g4-ex-v2"](2, "Efectuează calculul și vei afla câți metri are cea mai înaltă porțiune de câmpie din țara noastră.");
buf.push("<div><center>12 000 : 40 = ?</center></div><div class=\"indent\">Această câmpie este traversată de râul Argeș, imediat ce părăsește Podișul Getic. În care unitate de câmpie este situată? Ce oraș se află aici?</div>");
}
}, {id: 'art-g4v2-a17-exerseaza-ex1'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p17_retine_01.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a17-retine', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p17_retine_02.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a17-retine-video-2', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\"> <strong>Câmpia Română </strong>este situată în partea de sud, de-a lungul Dunării și este traversată de văile largi ale râurilor Jiu, Olt, Argeș, Ialomița care vin dinspre munți și se varsă în marele fluviu. Ca înfățișare generală, relieful său cuprinde suprafețe mai înalte și mai puțin netede, în partea nordică, spre Podișul Getic (<strong>Câmpia Piteștilor</strong>, cea mai înaltă, ajunge până la 300 m), suprafețe foarte joase, care ajung chiar la 10 m în partea de est (<strong>Câmpia Siretului</strong>), și pe cea mai mare întindere suprafețe largi și foarte netede (Câmpia Olteniei, Câmpia Bărăganului). În regiunile estice, mai secetoase (<strong>Câmpia Bărăganului</strong>) au fost amenajate canale de irigație prin care se aduce apa necesară în agricultură. În această unitate geografică se află numeroase sate și orașe. Cel mai mare oraș este București, capitala țării noastre, situat în Câmpia Vlăsiei.</div>");
}
});
}
}, {id: 'art-g4v2-a17-retine-web'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});