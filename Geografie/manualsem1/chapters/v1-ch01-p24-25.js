registerChapter({ chapter: "v1-ch01-p24-25", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Relief, hidrografie, vegetație');
jade_mixins["subtitle"]('Paginile 24 - 25');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a24-aminteste-ti',
          top: 14.8372,
          left: 5.5,
          width: 92,
          height: 8.4651,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a24-observa',
          top: 23.7674,
          left: 5.5,
          width: 92,
          height: 23.5349,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a24-descopera',
          top: 47.8605,
          left: 5.3,
          width: 92,
          height: 48.8372,
          type: 'blank'
        }
      ],
      image: 'v1/p24.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a25-vocabular-1',
          top: 5.1628,
          left: 4,
          width: 30,
          height: 22.6977,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a25-vocabular-2',
          top: 28.0465,
          left: 4,
          width: 30,
          height: 7.1628,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a25-vocabular-3',
          top: 35.4884,
          left: 4,
          width: 30,
          height: 10.6977,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a25-vocabular-4',
          top: 46.2791,
          left: 4,
          width: 30,
          height: 5.2093,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a25-retine',
          top: 5.2558,
          left: 35,
          width: 62,
          height: 24.6512,
          type: 'audio'
        },
        {
          atom: 'art-g4v1-a25-aminteste-ti',
          top: 30.3721,
          left: 35,
          width: 62,
          height: 21.7674,
          type: 'video'
        },
        {
          atom: 'art-g4v1-a25-descopera-1',
          top: 53.2558,
          left: 4,
          width: 93,
          height: 13.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a25-descopera-2',
          top: 68.1395,
          left: 4,
          width: 93,
          height: 28.6512,
          type: 'blank'
        }
      ],
      image: 'v1/p25.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu"]('6.', "Relief, hidrografie, vegetație",'Caracteristici generale observabile ale orizontului local');
}
}, {id: 'art-g4v1-a24-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Amintește-ți </div></div>");
}
}, {id: 'art-g4v1-a24-aminteste-ti-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Orizontul local prezintă anumite caracteristici naturale proprii, ușor de observat, legate de aspectul <em>reliefului, de hidrografie </em>(râuri și lacuri) și de <em>vegetație</em>.</div>");
}
}, {id: 'art-g4v1-a24-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Observă </div></div>");
}
}, {id: 'art-g4v1-a24-observa-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a24-observaInteractiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Privește imaginile alăturate și alege enunțul corect, care corespunde realității prezentate.</div>");
}
}, "v1/p24_observa");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p24_observa_1.png");
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p24_observa_2.png");
buf.push("</div></div><br/><ol class=\"art-g4\">");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<li class=\"btn btn-lg bad\">În ambele imagini linia orizontului este dreaptă, deoarece prezintă locuri cu aceeași înfățișare a suprafeței pământului.</li><li class=\"btn btn-lg good\">Imaginile prezintă locuri diferite ca înfățișare, cu forme de relief, ape și plante de diferite feluri.</li>");
}
}, {name: 'art-g4v1-a24-observa-ex1'});
buf.push("</ol><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a24-observa-ex'});
}
}, {id: 'art-g4v1-a24-observa', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v1-a24-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1, "Înfățișarea suprafeței pământului este variată de la un loc la altul, deoarece diferă forma de relief. Citește textele și descoperă numele principalelor forme de relief:");
buf.push("<div class=\"indent\"><em>„Natura în dealuri e mai îngăduitoare, mai prietenoasă, mai zâmbitoare, aerul mai dulce, ploile mai călduțe.“</em></div><div class=\"right\">(George Vâlsan, <em>Pământul românesc și frumusețile lui</em>)</div><em>,,Din munți bătrâni și din păduri mărețe </em><br/><em>Se nasc izvoare, ropotind se plimbă...“</em><div class=\"right\">(George Coșbuc – <em>Vestitorii primăverii</em>)</div><em>„Și-acum veniți cu drag în țară!</em><br/><em>Voi revedeți câmpia iară...“</em><div class=\"right\">(Mihai Eminescu – <em>Coborârea apelor</em>)</div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p24_descopera_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p24_descopera_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/v1_p24_descopera_3.png");
buf.push("</div></div><br/>");
jade_mixins["art-g4-ex"](2, "Identifică imaginea care corespunde fiecărei descrieri:");
buf.push("<ol class=\"art-g4-lowercase\"><li> <em>Are o înfățișare aproape netedă și înălțimi mici, care nu depășesc 300 de metri. Pe alocuri, poate să aibă mici ridicături de pământ numite movile.</em></li><li> <em>Se prezintă ca o ridicătură de pământ cu creste și culmi domoale. Are înălțimi mai mari, cuprinse între 300 și 1.000 de metri.</em></li><li> <em>Au versanți înclinați, abrupți, creste ascuțite și vârfuri semețe. Ca înălțime, depășesc 1.000 m.</em></li></ol><ul class=\"art-g4\"><li>Denumește forma de relief prezentată în fiecare imagine.</li></ul>");
jade_mixins["art-g4-ex"](3, "Numește forma de relief predominantă din regiunea în care este situată localitatea natală.");
}
}, {id: 'art-g4v1-a24-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">versant (coastă) – </div>&nbsp; suprafață înclinată, prezentă pe părțile laterale ale unui deal sau ale unui munte. Înclinarea (panta) versanților este diferită, fiind mai mică la dealuri și mai mare la munți (majoritatea munților au versanți abrupți).");
}
}, "v1/p25_vocabular_1");
buf.push("<div class=\"row\"><div class=\"col-sm-7\"><br/>");
jade_mixins["img"]("img/v1/p25_vocabular_1_1.jpg");
buf.push("<div class=\"center\">în munți, versanții sunt abrupți</div></div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v1/p25_vocabular_1_2.jpg");
buf.push("<div class=\"center\">versanți mai puțin înclinați din regiunile deluroase</div></div></div></div>");
}
}, {id: 'art-g4v1-a25-vocabular-1', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">culme – </div>&nbsp; partea cea mai de sus, prelungă și ușor înclinată, a unui munte sau a unui deal");
}
}, "v1/p25_vocabular_2");
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p25_vocabular_2_1.jpg");
buf.push("<div class=\"center\">culmi rotunjite, domoale, în Munții Parâng</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/p25_vocabular_2_2.jpg");
buf.push("<div class=\"center\">culme deluroasă în Depresiunea Transilvaniei</div></div></div></div>");
}
}, {id: 'art-g4v1-a25-vocabular-2', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">creastă – </div>&nbsp; partea cea mai de sus, prelungă, ascuțită și cu înclinări mari, a unui munte. Cele mai multe creste au aspect zimțat și sunt stâncoase");
}
}, "v1/p25_vocabular_3");
jade_mixins["img"]("img/v1/p25_vocabular_3.jpg");
buf.push("<div class=\"center\">creasta lungă și zimțată a Munților Piatra Craiului</div></div>");
}
}, {id: 'art-g4v1-a25-vocabular-3', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Vocabular </div><div class=\"terms\">altitudine – </div>&nbsp; înălțime a reliefului într-un anumit loc");
}
}, "v1/p25_vocabular_4");
jade_mixins["img"]("img/v1/p25_vocabular_4.png");
buf.push("</div>");
}
}, {id: 'art-g4v1-a25-vocabular-4', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Reține</div></div>");
}
}, {id: 'art-g4v1-a25-retineTT'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"blue-title\">Reține </div><div>Ridicăturile și adânciturile care se găsesc la suprafața pământului formează relieful. Principalele forme de relief sunt: câmpiile, dealurile, podișurile și munții.</div>");
}
}, "v1/p25_retine");
buf.push("<div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p25_retine_1.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p25_retine_2.png");
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["img"]("img/v1/p25_retine_3.png");
buf.push("</div></div></div>");
}
}, {id: 'art-g4v1-a25-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Amintește-ți </div></div>");
}
}, {id: 'art-g4v1-a25-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v1/s1_p25_aminteste-ti.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v1-a25-aminteste-ti', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>Ce este apa? Care sunt proprietățile apei?</li><li>În natură, apa se găsește în cele trei stări de agregare caracteristice: în stare lichidă, solidă (sub formă de gheață și zăpadă) și gazoasă (sub formă de vapori).</li><li>Transformările pe care le suferă apa în natură, trecând prin cele trei stări de agregare și deplasându-se dintr-un loc în altul, formează <strong>circuitul apei în natură</strong>. Descrie, cu ajutorul imaginii alăturate, acest circuit.</li></ul>");
jade_mixins["img"]("img/v1/v1_p25_aminteste-ti.png");
}
}, {id: 'art-g4v1-a25-aminteste-ti-web'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v1-a25-descopera-1-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><em>,,La izvoare-i firicel,</em><br/><em>Care crește voinicel.</em><br/><em>Mereu curge el la vale</em><br/><em>Și adună ape-n cale.“</em></div><div class=\"col-sm-6\"><em>,,Într-o adâncitură eu m-am format,</em><br/><em>Când multă apă s-a adunat,</em><br/><em>Ba din ploi, ba din izvoare,</em><br/><em>Așa am crescut eu mare.“</em></div></div>");
}
}, 1, "Citește ghicitorile și identifică ce fel de apă este descrisă în fiecare ghicitoare.");
}
}, {id: 'art-g4v1-a25-descopera-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p25_descopera_1a.png");
jade_mixins["img"]("img/v1/v1_p25_descopera_2a.png");
buf.push("<div class=\"g4-myriadi\">Râul Mureș</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v1/v1_p25_descopera_1b.png");
jade_mixins["img"]("img/v1/v1_p25_descopera_2b.png");
buf.push("<div class=\"g4-myriadi\">Lacul Bâlea – Munții Făgăraș</div></div></div>");
}
}, 2, "Descoperă în schemele de mai jos felurile de ape curgătoare și stătătoare. Notează pe caiet care sunt apele curgătoare și apele stătătoare.");
}
}, {id: 'art-g4v1-a25-descopera-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});