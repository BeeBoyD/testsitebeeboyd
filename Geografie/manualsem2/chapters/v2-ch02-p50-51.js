registerChapter({ chapter: "v2-ch02-p50-51", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Uniunea Europeană');
jade_mixins["subtitle"]("Paginile 50 - 51");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a50-aminteste-ti',
          top: 9.1628,
          left: 5,
          width: 90,
          height: 10.8837,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a50-descopera',
          top: 24.0465,
          left: 5,
          width: 90,
          height: 22.4186,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a50-video',
          top: 47.0233,
          left: 5,
          width: 90,
          height: 50.0465,
          type: 'video'
        }
      ],
      image: 'v2/p50.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a51-retine',
          top: 4.8837,
          left: 46,
          width: 50,
          height: 37.2093,
          type: 'audio'
        },
        {
          atom: 'art-g4v2-a51-aplica-ex-1',
          top: 46.5581,
          left: 46,
          width: 50,
          height: 14.3256,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a51-exerseaza',
          top: 65.5349,
          left: 46,
          width: 50,
          height: 11.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a51-explica',
          top: 78,
          left: 5,
          width: 41.1557,
          height: 18.8837,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a51-portofoliu',
          top: 78.5581,
          left: 47.2642,
          width: 50.3538,
          height: 18.5116,
          type: 'blank'
        }
      ],
      image: 'v2/p51.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2-c9"]('13.', "Uniunea Europeană",'Europa – un continent al planetei');
}
}, {id: 'art-g4v2-a50-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Amintește-ți</div>");
}
}, {id: 'art-g4v2-a50-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-9\"><ul class=\"art-g4-v2-c9\"><li>La orele de <em>Educație civică </em>ai învățat despre apartenență. Precizează locurile de apartenență în care te integrezi ca persoană.</li><li>Ce reprezintă drapelele alăturate?</li><li>Ce semnificație prezintă pentru noi, românii, data de 9 mai și cea de 1 decembrie? Ce sărbătorim în aceste zile?</li></ul></div><div class=\"col-sm-3\">");
jade_mixins["img"]("img/v2/v2_p50_aminteste-ti.png");
buf.push("</div></div>");
}
}, {id: 'art-g4v2-a50-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Descoperă </div>");
}
}, {id: 'art-g4v2-a50-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<div class=\"indent\"><em>În anul 1951, șase state europene se reunesc într-o organizație care astăzi poartă numele de Uniunea Europeană. La această organizație au aderat treptat mai multe state europene, inclusiv România.</em></div><div class=\"indent\">În ce an a fost propusă crearea unei organizații în Europa? De ce era necesară o asociere a statelor europene?</div>");
}
}, 1, "Citește textul următor, apoi răspunde cerințelor:");
jade_mixins["art-g4-ex-v2-c9"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase-v2-c9\"><li>Identifică cele șase state europene care au pus bazele acestei organizații, numite și state fondatoare.</li><li>În ce an a devenit România stat membru al Uniunii Europene?</li><li>Identifică toate statele membre în Uniunea Europeană și completează, pe caiet, un tabel cu statele membre ale Uniunii Europene și anul aderării.</li></ol>");
jade_mixins["img"]("img/v2/v2_p50_harta.png");
}
}, 2, "Harta de mai jos prezintă statele membre ale Uniunii Europene și anul aderării.");
}
}, {id: 'art-g4v2-a50-descopera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p50_Evolutia_UE.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a50-video', class: 'art-g4-video'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-audio-continut\"><div class=\"blue-title\">Reține</div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div><strong>Uniunea Europeană </strong>este o organizație care are drept scop asigurarea păcii și colaborarea dintre statele sale membre, pentru bunăstarea populației. Această organizație cuprinde în prezent <strong>28 de state. </strong><br/><strong>România </strong>a devenit membră a Uniunii Europene la data de <strong>1 ianuarie 2007.</strong></div>");
}
}, 'v2/s2_p51_retine');
jade_mixins["img"]('img/v2/v2_p51_retine.jpg');
buf.push("</div>");
}
}, {id: 'art-g4v2-a51-retine', class:'art-g4-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Aplică </div>");
}
}, {id: 'art-g4v2-a51-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Răspunde următoarelor cerințe:</div>");
}
}, "v2/s2_p51_aplica");
buf.push("<ol class=\"art-g4-v2\"><li>Câte state europene sunt astăzi membre ale Uniunii Europene?<div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a51-aplica-ex-1-1", type: 'numeric', max: 2,regexp: '^28$',size:'5', placeholder: '...'});
buf.push("</div></li><li>Numește țările vecine României care fac parte din Uniunea Europeană.");
jade_mixins["multiRegex"]({
              name: 'art-g4v2-a38-ex1-regEx-1',
              hasIsDoneBox: false,
              regexps: [
                ["^bulgaria$"],
                ["^ungaria$"],
              ],
              textlines: [
                {placeholder: '...', size: '20'},
                {placeholder: '...', size: '20'},
              ],
            });
buf.push("</li><li>Numește principalele instituții ale Uniunii Europene.");
jade_mixins["multiRegex"]({
              name: 'art-g4v2-a38-ex1-regEx-3',
              hasIsDoneBox: false,
              regexps: [
                ["^comisia european[a|ă]$"],
                ["^consiliul european$"],
                ["^parlamentul european$"],
              ],
              textlines: [
                {placeholder: '...', size: '20'},
                {placeholder: '...', size: '20'},
                {placeholder: '...', size: '20'},
              ],
            });
buf.push("</li></ol>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a51-aplica-ex-1-regEx'});
}
}, {id: 'art-g4v2-a51-aplica-ex-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Exersează </div>");
}
}, {id: 'art-g4v2-a51-exerseaza-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Localizează pe harta murală a Europei următoarele state: Austria, Germania, Franța, Ucraina, Ungaria.</div><ol class=\"art-g4-lowercase-v2-c9\"><li>Numește statul care nu face parte din Uniunea Europeană.</li><li>Numește statele traversate de fluviul Dunărea.</li><li>Numește orașul-capitală al fiecărui stat.</li></ol>");
}
}, {id: 'art-g4v2-a51-exerseaza'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2-purple\">Explică </div>");
}
}, {id: 'art-g4v2-a51-explica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\"><em>Deviza Uniunii Europene este „Unitate în diversitate”. Statele Uniunii Europene, deși se deosebesc prin geografie, istorie și cultură, împărtășesc o serie de valori comune: democrația, egalitatea, respectul față de legi și față de drepturile omului.</em></div><div class=\"indent\">Explică deviza Uniunii Europene.</div>");
}
}, {id: 'art-g4v2-a51-explica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-purplebox-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Realizează pentru portofoliu o planșă care să cuprindă imagini din statele membre ale Uniunii Europene.</div>");
}
}, "Portofoliu");
}
}, {id: 'art-g4v2-a51-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});