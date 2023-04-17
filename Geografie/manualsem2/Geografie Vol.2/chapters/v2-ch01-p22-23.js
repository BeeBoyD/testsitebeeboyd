registerChapter({ chapter: "v2-ch01-p22-23", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Proiect „Rezervații naturale“');
jade_mixins["subtitle"]('Paginile 22 - 23');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a22-chenar',
          top: 5.5349,
          left: 5,
          width: 90,
          height: 31.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a22-proiect',
          top: 38.2791,
          left: 5,
          width: 90,
          height: 58.1395,
          type: 'blank'
        }
      ],
      image: 'v2/p22.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a23-proiect2',
          top: 5.4419,
          left: 5,
          width: 90,
          height: 55.6279,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a23-proiect3',
          top: 62.186,
          left: 5,
          width: 90,
          height: 34.1395,
          type: 'blank'
        }
      ],
      image: 'v2/p23.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"art-g4-chenar-v2\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"indent\"> <em>Te salut din nou! A trecut ceva vreme de când nu ne-am mai întâlnit. Între timp am aflat noi informații despre țara noastră și regiunea în care este situat orizontul local.</em></div><div class=\"indent\"><em>Până în acest moment am adunat amândoi multe materiale în <strong>portofoliu</strong>. Știu că și tu te-ai străduit să selectezi informații, imagini, hărți și să realizezi diferite materiale. Sunt convinsă că și proiectele la care ai lucrat au fost interesante și evaluate cu calificative maxime.</em></div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p22_foto_sus.png");
buf.push("</div></div><div class=\"indent\"><em>Orele de geografie ne ajută să ne dezvoltăm cunoștințele, dar și deprinderile de a observa și mai ales de a înțelege realitatea din jurul nostru, de a citi și utiliza informațiile oferite de o hartă. Întocmind materialele pentru portofoliu, fiecare dintre noi am demonstrat interes pentru cunoașterea realității înconjurătoare și a legăturilor dintre oameni și mediul lor de viață. Și nu numai atât. Prin explorarea realității înconjurătoare eu am înțeles mai bine multe dintre informațiile aflate la istorie, la științele naturii sau la educație civică. Și matematica parcă mi se pare mai ușoară acum și mă ajută să dezleg multe din misterele lumii înconjurătoare. Nu-i așa?</em></div><div class=\"indent\"><em>Iată de ce îți propun să realizezi și tu un nou proiect pentru portofoliul tău. Suntem micii „mari geografi” și ne interesează conservarea și protecția mediului din jurul nostru.</em></div></div>");
}
}, {id: 'art-g4v2-a22-chenar'});
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-greenbox-v2"].call({
block: function(){
buf.push("<div class=\"indent\"> <em>Tema proiectului: <strong>Rezervațiile naturale – comori ale spațiului geografic românesc</strong></em></div><div class=\"indent\">Scopul proiectului: </div>Explorarea unor surse noi de informare pentru lărgirea orizontului de cunoaștere și pentru dezvoltarea atitudinii civice privind conservarea și protecția mediului.<div class=\"indent\"> <em>Ce vei realiza? </em>Împreună cu colegii, realizați un panou cu rezervațiile naturale din regiunea în care este situat orizontul local. Acesta va cuprinde:<div>- o hartă a regiunii, în care veți marca rezervațiile naturale;</div><div>- imagini din fiecare rezervație;</div><div>- scurte texte în care să explicați de ce respectivele teritorii sunt ocrotite prin lege.</div></div><div class=\"indent\"> <em>Cum veți lucra? </em>Formați echipe de câte patru-cinci elevi. Stabiliți sarcini de lucru pentru fiecare echipă. Acționați în echipă. Comunicați și colaborați între voi.</div><div class=\"indent\"> <em>Amplasați acest panou pe holul școlii și explicați colegilor din clasele mai mici ce frumoasă este regiunea în care trăți și mai ales de ce este important ca oamenii să protejeze mediul din jurul lor.</em></div><div class=\"art-g4-chenar-v2\"><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p22_foto_jos.png");
buf.push("</div><div class=\"col-sm-6\"> <div class=\"indent\">Ei sunt colegii mei de echipă, cu care am lucrat la proiectul <strong><em>Rezervațiile naturale – comori ale spațiului geografic românesc</em></strong>.</div><div class=\"indent\">Cu ajutorul doamnei învățătoare am identificat rezervațiile naturale din regiunea mea. Când am făcut această fotografie, Marius tocmai citea lista cu aceste rezervații naturale. </div></div></div><div class=\"indent\">Ce locuri frumoase și deosebite avem în regiunea noastră! Dar astfel de locuri minunate se găsesc în toată țara, inclusiv în regiunea în care trăiești și tu.</div></div><div class=\"indent\"><strong>Ce reprezintă rezervațiile naturale?</strong></div><div class=\"indent\">Rezervațiile naturale sunt teritorii ocrotite prin lege, pe care oamenii nu le pot transforma în niciun fel, deoarece în cuprinsul lor se găsesc specii de plante sau animale, elemente geografice (creste, vârfuri, văi, lacuri etc.) foarte rare, care prezintă importanță științifică sau care dau naștere unor peisaje deosebite.</div><div class=\"indent\">Unele teritorii naturale protejate sunt de interes internațional, ceea ce înseamnă că sunt cunoscute și de oameni care trăiesc în alte țări.</div>");
}
}, "Proiect „Rezervații naturale“");
}
}, {id: 'art-g4v2-a22-proiect'});
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-greenbox-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Delta Dunării este un adevărat paradis pentru păsări, reprezentând un loc de popas natural pentru păsările migratoare, unele dintre ele fiind specii rare, ameninţate cu dispariţia în alte zone ale lumii: pelicanul creţ, barza albă, egreta mare, egreta mică, gâsca cu gât roşu, cormoranul mic.</div><div class=\"indent\">Pelicanul comun este pasărea cea mai reprezentativă din zona Deltei Dunării, el fiind răsfăţatul acestui paradis al păsărilor.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p23_delta_1.png");
buf.push("<div class=\"small-text\">Egretă mare </div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p23_delta_2.png");
buf.push("<div class=\"small-text\">Pelicani</div></div></div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p23_delta_3.png");
buf.push("<div class=\"small-text\">Cormorani</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p23_delta_4.png");
buf.push("<div class=\"small-text\">Rața cu gât roșu</div></div></div>");
}
}, "Rezervația Delta Dunării");
}
}, {id: 'art-g4v2-a23-proiect2'});
jade_mixins["atom"].call({
block: function(){
buf.push(" ");
jade_mixins["art-g4-greenbox-v2"].call({
block: function(){
buf.push("<div class=\"indent\">Este cea mai mare rezervație naturală și cel mai vechi parc naţional din România, fiind declarat prin lege încă din anul 1935. Parcul Retezat este renumit pentru peisajele sale montane, cu piscuri înalte, lacuri (Bucura, Zănoaga etc.), păduri, pășuni și specii deosebite de plante (floarea de colț, gențiana, sângele voinicului) și animale (capra neagră, jderul, pisica sălbatică etc.).</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p23_retezat_1.png");
buf.push("<div class=\"small-text\">Lacul Bucura, cel mai întins lac din zona montană înaltă</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p23_retezat_2.png");
buf.push("<div class=\"small-text\">Floarea de colț, plantă ocrotită prin lege</div></div></div>");
}
}, "Parcul Național Retezat");
}
}, {id: 'art-g4v2-a23-proiect3'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});