registerChapter({ chapter: "v2-ch01-p36-37", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Caracterizarea geografică a județului și a localității în care este situat orizontul local');
jade_mixins["subtitle"]('Paginile 36 - 37');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a36-aplica-ex1',
          top: 9.5349,
          left: 5,
          width: 90,
          height: 3.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a36-aplica-ex2',
          top: 13.2558,
          left: 5,
          width: 90,
          height: 1.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a36-aplica-ex3',
          top: 15.3023,
          left: 5,
          width: 90,
          height: 2.0465,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a36-descopera',
          top: 22.7442,
          left: 5,
          width: 49,
          height: 20.093,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a36-descopera-ex1',
          top: 43.0233,
          left: 5,
          width: 49,
          height: 3.3488,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a36-descopera-ex2',
          top: 46.6512,
          left: 5,
          width: 49,
          height: 33.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a36-vocabular',
          top: 81.4419,
          left: 5,
          width: 90,
          height: 14.9767,
          type: 'blank'
        }
      ],
      image: 'v2/p36.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a37-ex1',
          top: 9.6279,
          left: 5,
          width: 90,
          height: 15.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a37-ex2',
          top: 25.5349,
          left: 5,
          width: 90,
          height: 1.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a37-ex3',
          top: 27.5814,
          left: 5,
          width: 90,
          height: 1.9535,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a37-retine',
          top: 30.4651,
          left: 5,
          width: 90,
          height: 17.3023,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a37-descopera',
          top: 52.7907,
          left: 5,
          width: 90,
          height: 34.4186,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a37-aplica',
          top: 88.6047,
          left: 5,
          width: 90,
          height: 8,
          type: 'blank'
        }
      ],
      image: 'v2/p37.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică  </div></div>");
}
}, {id: 'art-g4v2-a36-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](1, "Între ce valori se încadrează temperaturile medii anuale înregistrate pe teritoriul județului tău? Pentru a afla mai ușor, poți folosi „Harta climatică a României” din semestrul I de la pagina 48.");
}
}, {id: 'art-g4v2-a36-aplica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "În ce anotimp cad pe teritoriul județului cele mai mari cantități de precipitații?");
}
}, {id: 'art-g4v2-a36-aplica-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Ce vânturi bat pe teritoriul județului? Din ce direcție bat aceste vânturi?");
}
}, {id: 'art-g4v2-a36-aplica-ex3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a36-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\">George este foarte mândru că trăiește într-un județ cu multe locuri deosebite, vizitate în fiecare an de numeroși turiști. Principala atracție turistică este litoralul, adică fâșia de uscat care se întinde în lungul țărmului Mării Negre. Această fâșie se deosebește de restul uscatului din județ. Aici se găsesc porțiuni de teren joase, acoperite cu nisip fin, numite plaje, și zone de țărm mai înalte, numite faleze.</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p36_foto_1.png");
buf.push("<div class=\"small-text\">Cazinoul din Constanța</div></div></div><div>În fiecare an, zona litorală este vizitată de un număr mare de turiști, unii veniți chiar din alte țări ale lumii pentru băile de soare sau băile în apa mării. Din acest motiv, aici s-au dezvoltat multe stațiuni turistice.</div>");
}
}, {id: 'art-g4v2-a36-descopera'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<div class=\"art-g4-img-70\">");
jade_mixins["img"]("img/v2/v2_p36_harta.png");
buf.push("</div>");
}
}, 1, "Localizează pe harta de mai jos localitățile cu obiectivele turistice prezentate în imaginile alăturate.");
}
}, {id: 'art-g4v2-a36-descopera-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p36_foto_2.png");
buf.push("<div class=\"small-text\">Plajă, stațiunea Costinești</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p36_foto_3.png");
buf.push("<div class=\"small-text\">Tropaeum Traiani, Adamclisi</div></div></div>");
}
}, 2, "Localizează stațiunea turistică prezentată în imaginile alăturate. Numește și celelalte stațiuni din zona litorală.");
}
}, {id: 'art-g4v2-a36-descopera-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-vocabular"].call({
block: function(){
buf.push("<span><div class=\"red\">stațiune turistică –  </div>  localitate care dispune de un cadru natural deosebit, favorabil odihnei, recreerii și activităților în aer liber, de factori naturali benefici sănătății (izvoare de ape minerale) și care deține spații pentru cazarea turiștilor și alte tipuri de dotări (pensiuni, hoteluri, restaurante etc.)</span><br/><span><div class=\"red\">plajă –  </div>  formă de relief care s-a format într-o zonă litorală prin acumularea nisipului fin</span><br/><span><div class=\"red\">faleză – </div>  mal înalt și abrupt al unei mări sau al unui lac</span>");
}
});
}
}, {id: 'art-g4v2-a36-vocabular'});
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-subtitle-v2\"><div>Aplică  </div></div>");
}
}, {id: 'art-g4v2-a37-aplica-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"].call({
block: function(){
buf.push("<div class=\"art-g4-text-green-v2\">A.  </div> litera cu care este marcată caseta cu tipul de vegetație predominantă din județul tău:<ol class=\"art-g4-lowercase-v2 row\"><li class=\"col-sm-4\"><div class=\"art-g4-green-border\">stepă </div></li><li class=\"col-sm-4\"><div class=\"art-g4-green-border\">pădure de foioase</div></li><li class=\"col-sm-4\"><div class=\"art-g4-green-border\">pădure de conifere</div></li></ol><div class=\"art-g4-text-green-v2\">B.  </div> literele cu care sunt marcate casetele cu tipurile de culturi agricole specifice în județul tău:<ol class=\"art-g4-lowercase-v2 row\"><li class=\"col-md-4\"> <div class=\"art-g4-green-border\">cereale </div></li><li class=\"col-md-4\"> <div class=\"art-g4-green-border\">plante tehnice </div></li><li class=\"col-md-4\"> <div class=\"art-g4-green-border\">cartofi </div></li><li class=\"col-md-4\"> <div class=\"art-g4-green-border\">vii </div></li><li class=\"col-md-4\"> <div class=\"art-g4-green-border\">livezi</div></li></ol><div class=\"art-g4-text-green-v2\">C.  </div>  două resurse naturale exploatate pe teritoriul județului;<br/><div class=\"art-g4-text-green-v2\">D.  </div>  două ramuri industriale dezvoltate pe baza acestor resurse naturale.");
}
}, 1, "Precizează:");
}
}, {id: 'art-g4v2-a37-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Numește două obiective turistice deosebite din județul tău.");
}
}, {id: 'art-g4v2-a37-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Numește două stațiuni turistice din județul tău. De ce sunt ele vizitate de turiști?");
}
}, {id: 'art-g4v2-a37-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Fiecare dintre județele României prezintă caracteristici geografice specifice. Relieful, clima, hidrografia, vegetația, fauna și solurile reprezintă elementele naturale care caracterizează un anumit spațiu (localitate, județ, regiune sau țară) și formează <strong>cadrul </strong>său <strong>natural</strong>. La acestea se adaugă caracteristici specifice legate de așezările omenești (tip, mărime, aspect), de populație (număr, grupe de vârstă), de activitățile oamenilor. Împreună, elementele naturale și elementele create sau introduse de om definesc <strong>geografia </strong>acelui spațiu, respectiv <strong>geografia localității</strong>, <strong>a orizontului local </strong>sau <strong>a județului</strong>, <strong>regiunii</strong>, <strong>țării.</strong></div>");
}
});
}
}, {id: 'art-g4v2-a37-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă </div></div>");
}
}, {id: 'art-g4v2-a37-descopera-T'});
jade_mixins["atom"]({id: 'art-g4v2-a37-descopera'});
jade_mixins["atom"]({id: 'art-g4v2-a37-aplica-T2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Pentru a-și cunoaște mai bine localitatea în care este situat orizontul local, George a căutat informații la biblioteca școlii, pe internet și a vorbit într-o zi chiar cu primarul comunei. Iată ce a aflat despre localitatea natală:</div>");
jade_mixins["img"]("img/v2/v2_p37_diagrama.png");
buf.push("");
}
}, {id: 'art-g4v2-a37-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică  </div></div>");
}
}, {id: 'art-g4v2-a37-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Culege informații despre localitatea în care trăiești și realizează o scurtă caracterizare geografică a localității, după modelul prezentat de George pentru localitatea Cobadin.</div>");
}
}, {id: 'art-g4v2-a37-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});