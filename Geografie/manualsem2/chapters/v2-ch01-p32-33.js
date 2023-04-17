registerChapter({ chapter: "v2-ch01-p32-33", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Orașul București – caracterizare geografică');
jade_mixins["subtitle"]('Paginile 32 - 33');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a32-observa',
          top: 19.3953,
          left: 5,
          width: 43,
          height: 30.9767,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a32-descopera',
          top: 19.2093,
          left: 49,
          width: 48,
          height: 27.7209,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a32-aplica',
          top: 55.9535,
          left: 5,
          width: 55,
          height: 16.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a32-exerseaza',
          top: 78.186,
          left: 5,
          width: 90,
          height: 18.5116,
          type: 'exercise'
        }
      ],
      image: 'v2/p32.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a33-retine',
          top: 4.7907,
          left: 5,
          width: 90,
          height: 20,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a33-aplica-ex1',
          top: 44.8837,
          left: 5,
          width: 53,
          height: 16.4651,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a33-aplica-ex2',
          top: 61.6279,
          left: 5,
          width: 53,
          height: 3.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a33-aplica-ex3',
          top: 65.4419,
          left: 5,
          width: 53,
          height: 3.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a33-sectoare',
          top: 69.5349,
          left: 46.2028,
          width: 48.0425,
          height: 20.2791,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a33-video',
          top: 69.814,
          left: 5,
          width: 41,
          height: 19.7209,
          type: 'video'
        },
        {
          atom: 'art-g4v2-a33-explica',
          top: 90.2791,
          left: 5,
          width: 43,
          height: 7.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a33-portofoliu',
          top: 90.186,
          left: 49.2689,
          width: 45.0943,
          height: 8,
          type: 'blank'
        }
      ],
      image: 'v2/p33.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('7.', "Orașul București – caracterizare geografică",'Organizarea administrativă a României');
}
}, {id: 'art-g4v2-a32-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă </div></div>");
}
}, {id: 'art-g4v2-a32-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Privește harta de mai jos și precizează cu ce cifră este marcată poziția geografică corectă a orașului-capitală București. Unde este situat orașul București în cadrul țării?</div>");
jade_mixins["img"]("img/v2/v2_p32_observa_harta.png");
}
}, {id: 'art-g4v2-a32-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a32-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Analizează harta murală a României și harta de mai jos a municipiului București. Citește textele următoare și copiază pe caiet textul care prezintă realitatea geografică a orașului București.</div><ol class=\"art-g4-lowercase-v2\"><li> <em>Orașul București este situat în Câmpia Română, fiind traversat la nord de râul Colentina și la sud de afluentul său, Dâmbovița. Pe râul Dâmbovița au fost amenajate numeroase lacuri folosite pentru agrement și recreere de către locuitorii acestui oraș.</em></li><li> <em>Orașul București este situat în Câmpia Română, fiind traversat în partea centrală de râul Dâmbovița și la nord de afluentul său, Colentina. Pe râul Colentina au fost amenajate numeroase lacuri folosite pentru agrement și recreere de către locuitorii acestui oraș.</em></li></ol>");
jade_mixins["img"]("img/v2/v2_p32_descopera_harta.png");
}
}, {id: 'art-g4v2-a32-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a32-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Analizează datele din tabelul de mai jos.</div>");
jade_mixins["art-g4-ex-v2"](1, "De ce în București se înregistrează temperaturi mai ridicate?");
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<table class=\"art-g4-p32-v2-table\"><tr> <th rowspan=\"2\">Locația</th><th colspan=\"3\">Temperatura medie a aerului în luna</th></tr><tr> <th>iunie </th><th>iulie </th><th>august</th></tr><tr> <td>Orașul București </td><td class=\"center\">24°C </td><td class=\"center\">28°C </td><td class=\"center\">25°C</td></tr><tr> <td>Vârful Omu (Munții Bucegi) </td><td class=\"center\">7°C </td><td class=\"center\">10°C </td><td class=\"center\">8°C</td></tr></table>");
}
}, 2, "În care lună se înregistrează cea mai mare diferență de temperatură între cele două locații?");
}
}, {id: 'art-g4v2-a32-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v2-a32-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a17-ex2-pickoneInteractiv art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Calculează apoi, înlocuiește spațiile punctate cu rezultatele obținute, pentru ca textul să devină corect din punct de vedere științific.</div>");
}
}, "v2/s2_p32_exerseaza");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li> <div class=\"inline-block\"><span>1 141 + (159 x 2) = &nbsp; </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a32-exerseaza-t-1", type: 'numeric', max: 6,regexp: '^1459|1( )?459$',size:'5', placeholder: '...'});
buf.push("</div></li><li> <div class=\"inline-block\"><span>1 000 + (400 x 2) + (94 – 32) =  &nbsp; </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a32-exerseaza-t-2", type: 'tnumeric', max: 6,regexp: '^1862|1( )?862$',size:'5', placeholder: '...'});
buf.push("</div></li></ol><div class=\"inline-block\"><em>Prima atestare scrisă a existenței orașului București datează din anul &nbsp; </em></div><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['a','b'], { name: 'art-g4v2-a32-exerseaza-pick-1',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span>, din timpul domniei voievodului Vlad Țepeș. București devine capitala României în anul  </span><div class=\"inline-block\">");
jade_mixins["pickone"](2, ['a','b'], { name: 'art-g4v2-a32-exerseaza-pick-2',  ignoreAvatar: false, placement:'top'});
buf.push("</div><span> . În acest oraș se află instituțiile de conducere ale țării noastre: parlamentul (unde se adoptă legile pe care trebuie să le respectăm), guvernul (care se ocupă de organizarea, gospodărirea și dezvoltarea țării). Aici locuiește și președintele țării, persoana care conduce România și ne reprezintă în relațiile cu celelalte țări ale lumii.</span><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a32-exerseaza-pick'});
}
}, {id: 'art-g4v2-a32-exerseaza', class:'art-g4-interactiv'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Orașul București este situat în partea de sud a țării, în Câmpia Română. Este străbătut de râul Dâmbovița și de afluentul său, Colentina, pe care se găsesc numeroase lacuri amenajate pentru recreerea populației. </div><div class=\"indent\">București este capitala României, fiind cel mai important centru politic, economic, cultural, turistic al țării. Aici se găsesc instituțiile de conducere ale țării, numeroase muzee, teatre, monumente, parcuri, dar și multe grădinițe, școli și universități.</div><div class=\"indent\">Deoarece are o întindere mare și o populație numeroasă, pentru a fi mai bine gospodărit, Bucureștiul este împărțit în 6 teritorii mai mici, numite sectoare.</div>");
}
}, 'v2/s2_p33_retine');
jade_mixins["img"]('img/v2/v2_p33_retine.png');
buf.push("</div>");
}
}, {id: 'art-g4v2-a33-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a33-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Alege varianta corectă de răspuns:");
buf.push("<div class=\"row\"><div class=\"col-sm-7\"><div class=\"indent\">Orașul București este situat în:</div><ol class=\"art-g4-lowercase-v2\"><li>Câmpia de Vest;</li><li>Câmpia Română;</li><li>Podișul Getic.</li></ol><div class=\"indent\">Din punct de vedere administrativ, București reprezintă:</div><ol class=\"art-g4-lowercase-v2\"><li>cel mai important centru economic al țării;</li><li>orașul-capitală cu importanță de județ;</li><li>oraș reședință de județ.</li></ol></div><div class=\"col-sm-5\">");
jade_mixins["img"]("img/v2/v2_p33_aplica_harta.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a33-aplica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Prin ce fel de căi de comunicație se realizează legătura dintre orașul București și celelalte orașe ale României?");
}
}, {id: 'art-g4v2-a33-aplica-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Alcătuiește o compunere de jumătate de pagină, cu titlul „București – orașul capitală a țării mele”.");
}
}, {id: 'art-g4v2-a33-aplica-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Câteva dintre cele mai importante obiective turistice din orașul București:</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p33_aplica_foto.png");
buf.push("<div class=\"small-text\">Muzeul Național al Satului „Dimitrie Gusti”, București</div></div><div class=\"col-sm-6\"><ul class=\"art-g4-v2\"><li>Palatul Parlamentului;</li><li>Grădina Botanică;</li><li>Grădina Zoologică;</li><li>Muzeul Național de Istorie Naturală „Grigore Antipa”;</li><li>Muzeul Național de Artă;</li><li>Muzeul Național de Istorie;</li><li>Muzeul Național al Satului „Dimitrie Gusti”;</li><li>Muzeul Țăranului Român.</li></ul></div></div>");
}
}, {id: 'art-g4v2-a33-sectoare'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p33_Bucuresti.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a33-video', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Explică  </div></div>");
}
}, {id: 'art-g4v2-a33-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Ce importanță are pentru o țară orașul capitală?</div>");
}
}, {id: 'art-g4v2-a33-explica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Portofoliu </div></div>");
}
}, {id: 'art-g4v2-a33-portofoliu-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Alcătuiește un colaj cu imagini din orașul București.</div>");
}
}, {id: 'art-g4v2-a33-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});