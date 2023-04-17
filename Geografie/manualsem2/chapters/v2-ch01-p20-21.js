registerChapter({ chapter: "v2-ch01-p20-21", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Recapitulare. Autoevaluare');
jade_mixins["subtitle"]('Paginile 20 - 21');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a20-ex1',
          top: 14.5581,
          left: 5,
          width: 90,
          height: 27.7209,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a20-ex2',
          top: 43.4884,
          left: 5,
          width: 90,
          height: 52.5581,
          type: 'exercise'
        }
      ],
      image: 'v2/p20.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a21-ex1',
          top: 14.6512,
          left: 5,
          width: 90,
          height: 33.2093,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a21-ex2',
          top: 49.7209,
          left: 5,
          width: 90,
          height: 20.4651,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a21-ex3',
          top: 71.8605,
          left: 5,
          width: 90,
          height: 11.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a21-grila',
          top: 84.3256,
          left: 5,
          width: 90,
          height: 12.5581,
          type: 'blank'
        }
      ],
      image: 'v2/p21.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('&nbsp;&nbsp;&nbsp;', "Recapitulare",'Marile unități geografice ale României');
}
}, {id: 'art-g4v2-a20-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Completează în căsuțe informațiile corespunzătoare:");
}
}, "v2/s2_p20_recapitulare_01");
buf.push("<ul class=\"art-g4-v2\"><li>Ramurile Carpaților Românești sunt:</li>");
jade_mixins["multiRegex"]({
            name: 'art-g4v2-a20-ex1-r1',
            hasIsDoneBox: false,
            regexps: [
              ["^carpa[t|ț]ii meridionali$"],
              ["^carpa[t|ț]ii occidentali$"],
              ["^carpa[t|ț]ii orientali$"],
            ],
            textlines: [
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
            ],
            statementClassName: 'row',
            containerClassName: 'row'
          });
buf.push("<li>Unitățile geografice de deal și podiș din România sunt:</li>");
jade_mixins["multiRegex"]({
            name: 'art-g4v2-a20-ex1-r2',
            hasIsDoneBox: false,
            regexps: [
              ["^dealurile de vest$"],
              ["^depresiunea colinar[a|ă] a transilvaniei$", "^depresiunea transilvaniei$"],
              ["^podi[s|ș]ul dobrogei$"],
              ["^podi[s|ș]ul getic$"],
              ["^podi[s|ș]ul mehedin[t|ț]i$"],
              ["^podi[s|ș]ul moldovei$"],
              ["^subcarpa[t|ț]ii$"],
            ],
            textlines: [
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
            ],
            statementClassName: 'row',
            containerClassName: 'row'
          });
buf.push("<li>Unitățile de câmpie din țara noastră sunt:</li>");
jade_mixins["multiRegex"]({
            name: 'art-g4v2-a20-ex1-r3',
            hasIsDoneBox: false,
            regexps: [
              ["^c[a|â]mpia de vest$"],
              ["^c[a|â]mpia rom[a|â]n[a|ă]$"],
            ],
            textlines: [
              {placeholder: '...', className: 'col-md-12', size: '40'},
              {placeholder: '...', className: 'col-md-12', size: '40'},
            ],
            statementClassName: 'row',
            containerClassName: 'row'
          });
buf.push("<li>Cea mai joasă unitate de relief din România este:</li>");
jade_mixins["multiRegex"]({
            name: 'art-g4v2-a20-ex1-r4',
            hasIsDoneBox: false,
            regexps: [
              ["^delta dun[a|ă]rii$"],
            ],
            textlines: [
              {placeholder: '...', className: 'col-md-12', size: '40'},
            ],
            statementClassName: 'row',
            containerClassName: 'row'
          });
buf.push("</ul><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a20-ex1-regEx'});
}
}, {id: 'art-g4v2-a20-ex1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Observă cu atenție harta unităților majore ale reliefului României și răspunde următoarelor cerințe:");
}
}, "v2/s2_p20_recapitulare_02");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>Numește unitățile geografice marcate pe hartă cu numere de la 1 la 10.");
jade_mixins["img"]("img/v2/v2_p20_harta.png");
buf.push("<div class=\"inline-block\"><span>&nbsp; 1: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-1", type: 'text', max: 50,regexp: '^Carpa[t|ț]ii Orientali$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 2: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-2", type: 'text', max: 50,regexp: '^Carpa[t|ț]ii Meridionali$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 3: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-3", type: 'text', max: 50,regexp: '^Subcarpa[t|ț]ii|Subcarpa[t|ț]ii Curburii$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 4: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-4", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Mehedin[t|ț]i$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 5: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-5", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Moldovei$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 6: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-6", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Dobrogei$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 7: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-7", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Getic$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 8: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-8", type: 'text', max: 50,regexp: '^Dealurile de Vest$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>&nbsp; 9: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-9", type: 'text', max: 50,regexp: '^C[a|â]mpia Rom[a|â]n[a|ă]$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"inline-block\"><span>10: </span></div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-10", type: 'text', max: 50,regexp: '^Delta Dun[a|ă]rii$',size:'35', placeholder: '...'});
buf.push("</div></li><li>Cu ce număr este marcată, pe hartă, unitatea geografică:<div class=\"row\"><div class=\"col-md-12\">• cea mai înaltă; <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-b-1", type: 'numeric', max: 3,regexp: '^2$',size:'5', placeholder: '...'});
buf.push("</div></div><div class=\"col-md-12\">• cea mai joasă; <div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-b-2", type: 'numeric', max: 3,regexp: '^10$',size:'5', placeholder: '...'});
buf.push("</div></div><div class=\"col-md-12\">• cu cea mai mică întindere.<div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-b-3", type: 'numeric', max: 3,regexp: '^4$',size:'5', placeholder: '...'});
buf.push("</div></div></div></li><li>Numește unitatea geografică în care este situat fiecare dintre orașele: <br/><div class=\"alignerex2p21\">București: </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-c-1", type: 'text', max: 50,regexp: '^C[a|â]mpia Rom[a|â]n[a|ă]$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"alignerex2p21\">Cluj-Napoca: </div><div class=\"inline-block\">");
jade_mixins["multiRegex"]({
                name: 'art-g4v2-a20-ex2-mregx',
                hasIsDoneBox: false,
                regexps: [
                  ["^depresiunea colinar[a|ă] a transilvaniei$","^depresiunea transilvaniei$"],
                ],
                textlines: [
                  {placeholder: '...',  size: '35'},
                ],
            });
buf.push("</div><br/><div class=\"alignerex2p21\">Timișoara: </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-c-3", type: 'text', max: 50,regexp: '^C[a|â]mpia de Vest$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"alignerex2p21\">Iași: </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-c-4", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Moldovei$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"alignerex2p21\">Constanța: </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-c-5", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Dobrogei$',size:'35', placeholder: '...'});
buf.push("</div><br/><div class=\"alignerex2p21\">Brașov: </div><div class=\"inline-block\">");
jade_mixins["textline"]({name: "art-g4v2-a20-ex2-t-c-6", type: 'text', max: 50,regexp: '^Carpa[t|ț]ii Orientali$',size:'35', placeholder: '...'});
buf.push("</div></li></ol><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a20-ex2-t'});
}
}, {id: 'art-g4v2-a20-ex2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-title\">Autoevaluare</div>");
}
}, {id: 'art-g4v2-a21-titlu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Recunoști unitatea geografică? Citește cu atenție fiecare enunț și completează denumirea unității geografice.");
}
}, "v2/s2_p21_autoevaluare_01");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>Este cuprins între Dâmbovița la est, Dunăre la vest și are dealuri netede, care scad în înălțime spre sud.</li>");
jade_mixins["textline"]({name: "art-g4v2-a21-ex1-t-1", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Getic$',size:'35', placeholder: '...'});
buf.push("<li> Se deosebește de celelalte două ramuri carpatice prin populația mult mai numeroasă.");
jade_mixins["textline"]({name: "art-g4v2-a21-ex1-t-2", type: 'text', max: 50,regexp: '^Carpa[t|ț]ii Occidentali$',size:'35', placeholder: '...'});
buf.push("</li><li> Au un relief format din șiruri de dealuri și depresiuni.");
jade_mixins["textline"]({name: "art-g4v2-a21-ex1-t-3", type: 'text', max: 50,regexp: '^Subcarpa[t|ț]ii$',size:'35', placeholder: '...'});
buf.push("</li><li> Se întinde de-a lungul Dunării și în unele porțiuni este mai înaltă, iar în altele mai joasă.");
jade_mixins["textline"]({name: "art-g4v2-a21-ex1-t-4", type: 'text', max: 50,regexp: '^C[a|â]mpia Rom[a|â]n[a|ă]$',size:'35', placeholder: '...'});
buf.push("</li><li> Are mult stuf, păsări și pești de multe feluri.</li>");
jade_mixins["textline"]({name: "art-g4v2-a21-ex1-t-5", type: 'text', max: 50,regexp: '^Delta Dun[a|ă]rii$',size:'35', placeholder: '...'});
buf.push("<li>În cuprinsul său se găsesc resturile unor munți foarte vechi, cu aspect de dealuri.");
jade_mixins["textline"]({name: "art-g4v2-a21-ex1-t-6", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Dobrogei$',size:'35', placeholder: '...'});
buf.push("</li></ol><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a21-ex1-t'});
}
}, {id: 'art-g4v2-a21-ex1', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("      ");
jade_mixins["art-g4-ex-v2"](2, "Știi ce bogății se găsesc pe teritoriul țării noastre? Asociază fiecare unitate geografică notată cu cifre, din coloana <strong>A</strong>, cu resursele de sol și subsol caracteristice, menționate în coloana <strong>B</strong>.");
}
}, "v2/s2_p21_autoevaluare_02");
jade_mixins["connect-points"].call({
block: function(){
buf.push("<div class=\"row\"><div data-group=\"unitate\" class=\"col-xs-5\"><center><strong>A </strong></center><div class=\"choice pin-to\"><div data-name=\"a1\" class=\"connector pin-right\"></div><div class=\"art-g4-green-text\">1. </div>Câmpia Română </div><div class=\"choice pin-to\"><div data-name=\"a2\" class=\"connector pin-right\"></div><div class=\"art-g4-green-text\">2. </div>Depresiunea Colinară a Transilvaniei </div><div class=\"choice pin-to\"><div data-name=\"a3\" class=\"connector pin-right\"></div><div class=\"art-g4-green-text\">3. </div>Subcarpații</div><div class=\"choice pin-to\"><div data-name=\"a4\" class=\"connector pin-right\"></div><div class=\"art-g4-green-text\">4. </div>Carpații Orientali</div><div class=\"choice pin-to\"><div data-name=\"a5\" class=\"connector pin-right\"></div><div class=\"art-g4-green-text\">5. </div>Delta Dunării</div><div class=\"choice pin-to\"><div data-name=\"a6\" class=\"connector pin-right\"></div><div class=\"art-g4-green-text\">6. </div>Podișul Moldovei</div></div><div class=\"col-xs-2\"></div><div data-group=\"resurse\" class=\"col-xs-5\"><center><strong>B </strong></center><div class=\"choice pin-to\"><div data-name=\"r1\" class=\"connector pin-left\"></div><div class=\"art-g4-green-text\">a. </div>cărbuni, petrol, gaze naturale și sare</div><div class=\"choice pin-to\"><div data-name=\"r2\" class=\"connector pin-left\"></div><div class=\"art-g4-green-text\">b. </div>gaz metan și sare</div><div class=\"choice pin-to\"><div data-name=\"r3\" class=\"connector pin-left\"></div><div class=\"art-g4-green-text\">c. </div>petrol și gaze naturale</div><div class=\"choice pin-to\"><div data-name=\"r4\" class=\"connector pin-left\"></div><div class=\"art-g4-green-text\">d. </div>pește și stuf</div><div class=\"choice pin-to\"><div data-name=\"r5\" class=\"connector pin-left\"></div><div class=\"art-g4-green-text\">e. </div>terenuri agricole și viță-de-vie</div><div class=\"choice pin-to\"><div data-name=\"r6\" class=\"connector pin-left\"></div><div class=\"art-g4-green-text\">f. </div>păduri</div></div></div>");
}
}, {
          name: 'art-g4v2-a21-ex2-connect-1',
          orientation: 'horizontal',
          connections: [
            ['a1', 'r3'],
            ['a2', 'r2'],
            ['a3', 'r1'],
            ['a4', 'r6'],
            ['a5', 'r4'],
            ['a6', 'r5'],

          ]
        });
buf.push("<div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a21-ex2-connect'});
}
}, {id: 'art-g4v2-a21-ex2', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Știi unde se cultivă principalele plante care ne oferă produse agricole? Numește o unitate geografică în care:");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>se cultivă predominant cereale, floarea-soarelui, sfeclă de zahăr;</li><li>se cultivă pomi fructiferi;</li><li>se cultivă viță-de-vie.</li></ol>");
}
}, {id: 'art-g4v2-a21-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"center\"> <div class=\"art-g4-green-text text-uppercase\">Grilă de autoevaluare</div></div><div class=\"responsive-tb\"><table class=\"art-g4-tabel-autoevaluare-u2\"><tr><th></th><th>Itemul 1</th><th>Itemul 2</th><th>Itemul 3</th></tr><tr><td>Foarte bine</td><td>5-6 răspunsuri corecte </td><td>5-6 asocieri corecte</td><td>3 răspunsuri corecte</td></tr><tr><td>Bine</td><td>3-4 răspunsuri corecte </td><td>3-4 asocieri corecte</td><td>două răspunsuri corecte</td></tr><tr><td>Suficient </td><td>două răspunsuri corecte </td><td>două asocieri corecte</td><td>un răspuns corect</td></tr></table></div>");
}
}, {id: 'art-g4v2-a21-grila'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});