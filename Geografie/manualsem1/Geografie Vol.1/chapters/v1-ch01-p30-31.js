registerChapter({ chapter: "v1-ch01-p30-31", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Populație, așezări, activități ale oamenilor');
jade_mixins["subtitle"]('Paginile 30 - 31');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v1-a30-aplica-1',
          top: 4.8837,
          left: 4,
          width: 93,
          height: 12.093,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a30-aplica-2',
          top: 17.4419,
          left: 4,
          width: 93,
          height: 28.2791,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a30-aplica-3',
          top: 46.9302,
          left: 4,
          width: 93,
          height: 12.5581,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a30-aplica-4',
          top: 60.0465,
          left: 4,
          width: 93,
          height: 22.9767,
          type: 'exercise'
        },
        {
          atom: 'art-g4v1-a30-explica-1',
          top: 83.3953,
          left: 4,
          width: 93,
          height: 6.5116,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a30-explica-2',
          top: 90,
          left: 4,
          width: 93,
          height: 5.5814,
          type: 'blank'
        }
      ],
      image: 'v1/p30.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v1-a31-exerseaza-1',
          top: 5.1628,
          left: 4,
          width: 93,
          height: 34.1395,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a31-exerseaza-2',
          top: 39.9535,
          left: 4,
          width: 93,
          height: 15.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a31-exerseaza-3',
          top: 56.0465,
          left: 4,
          width: 93,
          height: 14.1395,
          type: 'blank'
        },
        {
          atom: 'art-g4v1-a31-portofoliu',
          top: 70.9302,
          left: 4,
          width: 93,
          height: 24.093,
          type: 'blank'
        }
      ],
      image: 'v1/p31.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Aplică</div></div>");
}
}, {id: 'art-g4v1-a30-aplicaT'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a30-aplica-1Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](1,'Completează spațiile libere cu informațiile corecte:');
}
}, "v1/p30_aplica_01");
buf.push("<div class=\"indent\"><em>Așezările omenești sunt teritoriile în care locuiesc și muncesc <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-1-a", type: 'text', max: 10,regexp: '^oameni|oamenii$',size:'10', placeholder: '...'});
buf.push("</div>. Locuitorii unei așezări formează <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-1-b", type: 'text', max: 10,regexp: '^popula[ț|t]ia$',size:'10', placeholder: '...'});
buf.push("</div>acelei așezări. Așezările diferă după înfățișare, întindere, populație și <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-1-c", type: 'text', max: 10,regexp: '^num[ă|a]rul$',size:'10', placeholder: '...'});
buf.push("</div>oamenilor. Se deosebesc două tipuri de așezări omenești: rurale, adică <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-1-d", type: 'text', max: 10,regexp: '^(sate|satele)$',size:'10', placeholder: '...'});
buf.push("</div>și <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-1-e", type: 'text', max: 10,regexp: '^urbane$',size:'10', placeholder: '...'});
buf.push("</div>, adică orașele.</em></div>");
}
});
buf.push("<div class=\"is-done-box\"></div></div>");
}
}, {name: 'art-g4v1-a30-aplica-1ex'});
}
}, {id: 'art-g4v1-a30-aplica-1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a30-aplica-2Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](2,'Privește imaginile alăturate și realizează corespondențele corecte între locuitori și activitățile pe care aceștia le desfășoară, și tipurile de localități în care trăiesc.');
}
}, "v1/p30_aplica_02");
jade_mixins["connect-points"].call({
block: function(){
buf.push("<div class=\"row\"><div data-group=\"stanga\" class=\"col-xs-5\"><div class=\"choice pin-to\"><div data-name=\"s1\" class=\"connector pin-right\"></div>");
jade_mixins["img"]('img/v1/v1_p30_aplica_a.png');
buf.push("</div><div class=\"choice pin-to\"><div data-name=\"s2\" class=\"connector pin-right\"></div>");
jade_mixins["img"]('img/v1/v1_p30_aplica_c.png');
buf.push("</div></div><div class=\"col-xs-2\"> </div><div data-group=\"dreapta\" class=\"col-xs-5\"><div class=\"choice pin-to\"><div data-name=\"d1\" class=\"connector pin-left\"></div>");
jade_mixins["img"]('img/v1/v1_p30_aplica_b.png');
buf.push("</div><div class=\"choice pin-to\"><div data-name=\"d2\" class=\"connector pin-left\"></div>");
jade_mixins["img"]('img/v1/v1_p30_aplica_d.png');
buf.push("</div></div></div>");
}
}, {name: 'help10-1', orientation: 'horizontal',connections: [['s1', 'd2'],['s2', 'd1'],]});
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v1-a30-aplica-2ex'});
}
}, {id: 'art-g4v1-a30-aplica-2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a30-aplica-3Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](3,'Reformulează enunțurile următoare astfel încât să devină adevărate.');
}
}, "v1/p30_aplica_03");
buf.push("<ul class=\"art-g4\"><li>La sate populația este mai numeroasă decât la orașe.<div class=\"indent\">La sate populația este mai <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-3a", type: 'text', max: 10,regexp: '^pu[ț|t]in$',size:'4', placeholder: '...'});
buf.push("</div>numeroasă decât la orașe.</div></li><li>Toate orașele și satele au același număr de locuitori.<div class=\"indent\">Toate orașele și satele au număr <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-3b", type: 'text', max: 10,regexp: '^diferit$',size:'4', placeholder: '...'});
buf.push("</div>de locuitori.</div></li><li>Clădirile sunt mai numeroase și mai mari în sate decât în orașe.<div class=\"indent\">Clădirile sunt mai <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-3c", type: 'text', max: 10,regexp: '^pu[ț|t]in$',size:'4', placeholder: '...'});
buf.push("</div>numeroase și mai <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-3d", type: 'text', max: 10,regexp: '^mici$',size:'4', placeholder: '...'});
buf.push("</div>în sate decât în orașe.</div></li><li>Principalele ocupații ale locuitorilor orașelor sunt creșterea animalelor și cultivarea plantelor.<div class=\"indent\">Principalele ocupații ale locuitorilor <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-3e", type: 'text', max: 10,regexp: '^satelor$',size:'5', placeholder: '...'});
buf.push("</div>sunt creșterea animalelor și cultivarea plantelor.</div></li><li>Așezările omenești sunt răspândite mai ales în regiunile de munte.<div class=\"indent\">Așezările omenești sunt răspândite în <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push(" <div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-3a", type: 'text', max: 10,regexp: '^toate$',size:'4', placeholder: '...'});
buf.push("</div>formele de relief.</div></li></ul>");
}
});
buf.push("<div class=\"is-done-box\"></div></div>");
}
}, {name: 'art-g4v1-a30-aplica-3ex'});
}
}, {id: 'art-g4v1-a30-aplica-3', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v1-a30-aplica-4Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex"](4,'Populația unei așezări este formată din persoane de sex masculin și din persoane de sex feminin. În tabel sunt cuprinse date referitoare la populația din două așezări învecinate.');
}
}, "v1/p30_aplica_04");
buf.push("<table class=\"art-g4-p30-table\"><tr><th>Numele așezării</th><th>Populația totală</th><th>Număr persoane de sex masculin</th><th>Număr persoane de sex feminin</th></tr><tr><td>Viișoara</td><td>5 226 </td><td>2 578 </td><td>2 648</td></tr><tr><td>Câmpia Turzii </td><td>20 677 </td><td>9 962 </td><td>? </td></tr></table><div>Citește datele din tabel și răspunde următoarelor cerințe.</div><ul class=\"art-g4\"><li>Care dintre cele două așezări este oraș? <br/><strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["pickone"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, 2, ['Viișoara','Câmpia Turzii'], { name: 'art-g4v1-a30-aplica-a',  ignoreAvatar: false,placement:'top'});
buf.push("</div></strong></li><li>Cu cât este mai mare numărul de persoane de sex feminin față de numărul de persoane de sex masculin din Viișoara? <br/><strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-b", type: 'text', max: 10,regexp: '^70$',size:'5', placeholder: '...'});
buf.push("</div></strong></li><li>Calculează numărul de persoane de sex feminin din Câmpia Turzii. <br/><strong>Răspuns: <div class=\"inline-block\">");
jade_mixins["textline"].call({
block: function(){
buf.push("<div class=\"validator-box\"></div>");
}
}, {name: "art-g4v1-a30-aplica-c", type: 'text', max: 10,regexp: '^(10715|10 715)$',size:'5', placeholder: '...'});
buf.push("</div></strong></li></ul>");
}
});
buf.push("<div class=\"is-done-box\"></div></div>");
}
}, {name: 'art-g4v1-a30-aplica-4ex'});
}
}, {id: 'art-g4v1-a30-aplica-4', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Explică</div></div>");
}
}, {id: 'art-g4v1-a30-explicaT'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"](1,'Prin ce caracteristici este diferită populația unei așezări de populația altei așezări?');
}
}, {id: 'art-g4v1-a30-explica-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ul class=\"art-g4\"><li>așezările sunt răspândite în toate formele de relief, dar mai ales în regiunile de câmpie și de deal;</li><li>majoritatea așezărilor sunt situate în apropierea unor ape curgătoare sau stătătoare;</li><li>ocupațiile oamenilor diferă în funcție de tipul de așezare.</li></ul>");
}
}, 2,'Explică de ce:');
}
}, {id: 'art-g4v1-a30-explica-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Exersează</div></div>");
}
}, {id: 'art-g4v1-a31-exerseazaT'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<table class=\"art-g4-p31-table\"><tr><th>Nume și prenume</th><th>Vârsta</th><th>Ocupația</th></tr><tr><td>…</td><td>…</td><td>…</td></tr><tr><td>…</td><td>…</td><td>…</td></tr></table><ol class=\"art-g4-lowercase\"><li>Grupează persoanele, după vârstă, astfel: între 0 și 19 ani; între 20 și 65 ani; peste 65 ani. Pentru care grupă de vârstă numărul de persoane este mai mare?</li><li>Grupează persoanele, după ocupație, astfel: elevi, persoane care lucrează, pensionari. Pentru care grupă numărul de persoane este mai mare?</li><li>Compară rezultatele tale cu rezultatele obținute de colegii tăi.</li><li>Adunați toate datele obținute și completați pe tablă un tabel cu numărul total de persoane pentru fiecare grupă de vârstă și după ocupații. Care grupă de vârstă este mai numeroasă? Există vreo legătură între mărimea grupelor de vârstă și mărimea grupelor după ocupații?</li></ol>");
}
}, 1,'Adună informații de la toți membrii familiei tale (părinți, frați, bunici, rude apropiate) legate de vârstă și de ocupație. Completează un tabel asemănător:');
}
}, {id: 'art-g4v1-a31-exerseaza-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>Localizează pe harta regiunii în care locuiești așezările omenești. Citește denumirea localităților și numește tipul de așezare (sat sau oraș). Scrie pe caiet, în coloane separate, numele orașelor și ale satelor identificate în orizontul local. Care tip de așezări cuprinde un număr mai mare de localități?</li><li>Identifică bogățiile (resursele) naturale care se găsesc în orizontul local. Ce legături există între aceste resurse și ocupațiile oamenilor?</li><li>Așezările omenești nu au apărut toate în același timp. Folosind cunoștințele dobândite la istorie, precizează în ce perioadă au apărut primele așezări omenești. Dă exemple de tradiții și de obiceiuri din orizontul local. Dă exemple de mănăstiri, monumente istorice și alte obiective reprezentative din orizontul local.</li></ol>");
}
}, 2,'');
}
}, {id: 'art-g4v1-a31-exerseaza-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex"].call({
block: function(){
buf.push("<ol class=\"art-g4-lowercase\"><li>În ce fel de localitate trăiești? Poți spune, cu aproximație, câți locuitori numără?</li><li>Descrie satul în care locuiești tu sau în care locuiesc bunicii tăi. Cum sunt așezate gospodăriile? Sunt apropiate sau mai îndepărtate, despărțite de grădini, livezi? Ce plante se cultivă în împrejurimile satului? Ce animale cresc oamenii din sat?</li><li>În orașul tău sau în orașul situat în apropierea localității natale sunt multe clădiri? Predomină blocurile sau casele? Numește cele mai importante clădiri și locurile din oraș în care îți place să te plimbi. Cu ce se ocupă oamenii pe care îi cunoști?</li></ol>");
}
}, 3,'');
}
}, {id: 'art-g4v1-a31-exerseaza-3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle\"><div>Portofoliu</div></div><div class=\"art-g4-blue-text\"><strong>A.  </strong></div><span>Completează o <strong>fișă de observare </strong>a orizontului local, folosind observațiile făcute în timpul excursiilor și informațiile obținute prin studiul personal, cu următoarele caracteristici:</span><ul class=\"art-g4\"><li>numele așezărilor urbane și rurale;</li><li>aspecte privind vechimea așezărilor;</li><li>aspecte legate de întindere, înfățișare, clădiri existente etc;</li><li>informații privind populația din regiune, tradiții, obiceiuri specifice;</li><li>principalele activități ale oamenilor.</li></ul><div class=\"art-g4-blue-text\"><strong>B. </strong></div>Caută informații (în presa locală, la bibliotecă, pe internet) legate de numărul de locuitori din localitatea natală și de principalele ocupații ale oamenilor. Prezintă colegilor aceste informații.");
}
}, {id: 'art-g4v1-a31-portofoliu'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});