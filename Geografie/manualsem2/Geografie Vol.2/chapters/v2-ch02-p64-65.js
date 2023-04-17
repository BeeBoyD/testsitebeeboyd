registerChapter({ chapter: "v2-ch02-p64-65", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Mic dicționar geografic');
jade_mixins["subtitle"]("Paginile 64 - 65");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a64-R',
          top: 28.5116,
          left: 5,
          width: 45,
          height: 24.9302,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a64-S',
          top: 53.907,
          left: 5,
          width: 45,
          height: 14.2326,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a64-V',
          top: 38.9302,
          left: 51,
          width: 45,
          height: 16.6512,
          type: 'blank'
        }
      ],
      image: 'v2/p64.jpg'
    //- },
    //- {
    //-   hotspots: [],
    //-   image: 'v2/p65.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">R </div><span><div class=\"voc-text-red\">regiune – </div>  teritoriu mai întins, în care se află orizontul local. Regiunea are limite clare, iar elementele mediului (relief, climă, ape, soluri, resurse naturale, populație, așezări) sunt relativ omogene, conferind regiunii respective un caracter distinct, diferit de cel al regiunilor vecine</span><br/><span><div class=\"voc-text-red\">relief – </div>  totalitatea denivelărilor care se găsesc la suprafața pământului</span><br/><span><div class=\"voc-text-red\">rocă – </div> structură naturală solidă care intră în alcătuirea formelor de relief. Rocile de construcție (marmura, granitul etc.) sunt folosite de om în diferite activități</span>");
}
}, {id: 'art-g4v2-a64-R'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">S </div><span><div class=\"voc-text-red\">sat – </div>  localitate de dimensiuni mici, a cărei populație se ocupă în principal cu agricultura.</span><br/><span><div class=\"voc-text-red\">semne convenționale – </div> simboluri folosite pentru a marca pe planuri sau hărți diferite elemente naturale sau elemente create de om (obiecte din jurul nostru, străzi, clădiri, parcuri, căi ferate etc.)</span><br/><sol>– stratul de la suprafața pământului în care plantele își înfig rădăcina și de unde își iau apa cu substanțele hrănitoare</sol><br/><span><div class=\"voc-text-red\">specie – </div> grup de plante sau animale cu trăsături și însușiri comune</span><br/><span><div class=\"voc-text-red\">stație meteorologică – </div> locul în care sunt amplasate instrumente pentru măsurarea principalelor elemente care caracterizează vremea și clima din regiunea respectivă</span><br/><span><div class=\"voc-text-red\">stațiune turistică – </div> localitate care dispune de un cadru natural deosebit, favorabil odihnei, recreerii și activităților în aer liber, de factori naturali benefici sănătății (izvoare de ape minerale) și care deține spații pentru cazarea turiștilor și alte tipuri de dotări (pensiuni, hoteluri, restaurante etc.)</span><br/><span><div class=\"voc-text-red\">strâmtoare – </div>  porțiune îngustă de apă care leagă două mări sau oceane (pe hărți se prescurtează str.)</span>");
}
}, {id: 'art-g4v2-a64-S'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-red-subtitle\">V </div><span><div class=\"voc-text-red\">vegetație – </div>toate plantele dintr-un anumit spațiu; este formată din arbori, arbuști și ierburi </span><br/><span><div class=\"voc-text-red\"> versant (coastă) – </div> suprafață înclinată, prezentă pe părțile laterale ale unui deal sau ale unui munte. Înclinarea (panta) versanților este diferită, fiind mai mică la dealuri și mai mare la munți (majoritatea munților au versanți abrupți)</span>");
}
}, {id: 'art-g4v2-a64-V'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});