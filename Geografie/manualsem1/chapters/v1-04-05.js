registerChapter({ chapter: "v1-04-05", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Cuprins');
jade_mixins["subtitle"]('Paginile 4 - 5');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v1/p04.jpg'
    },
    {
      hotspots: [
        
      ],
      image: 'v1/p05.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<table class=\"competente\"><tr><th>COMPETENȚE GENERALE</th></tr><tr><td>1. Prezentarea realităţii observabile, cu ajutorul terminologiei generale şi specifice</td></tr><tr><td>2. Utilizarea elementelor semnificative din matematică, ştiinţele naturii şi disciplinele sociale, în înţelegerea realităţii înconjurătoare</td></tr><tr><td>3. Relaţionarea realităţii înconjurătoare cu reprezentarea ei cartografică</td></tr><tr><td>4. Dezvoltarea interesului pentru cunoaşterea orizontului local, a ţării şi a lumii contemporane</td></tr></table><h2>CUPRINS</h2><table class=\"cuprins\"><tr><th>UNITATE/LECȚIE</th><th>Pagină</th><th>COMPETENȚE SPECIFICE VIZATE</th></tr><tr><td colspan=\"2\" class=\"dark-orange\">UNITATEA 1<br/>Elemente de geografie a orizontului local și apropiat</td><td rowspan=\"23\" class=\"right-part\"> <span class=\"nr\">1.1. </span>Identificarea unor termeni geografici în texte/contexte/situații de învățare diferite<br/><span class=\"nr\">1.2. </span>Precizarea, în cuvinte proprii, a sensului termenilor geografici de bază<br/><span class=\"nr\">1.3. </span>Utilizarea termenilor geografici simpli în contexte cunoscute<br/><span class=\"nr\">2.1. </span>Aplicarea unor elemente și operații matematice minime în înțelegerea unor situații reale observate<br/><span class=\"nr\">2.2. </span>Aplicarea unor elemente și cunoștințe dobândite la alte discipline (științe ale naturii, istorie, științe sociale) în descrierea și explicarea realității înconjurătoare<br/><span class=\"nr\">2.3. </span>Identificarea unor fenomene și procese cu caracter geografic din mediul înconjurător al orizontului local, al regiunii, țării și continentului<br/><span class=\"nr\">3.1. </span>Identificarea poziției elementelor reprezentate pe hartă<br/><span class=\"nr\">3.2. </span>Utilizarea semnelor și a altor reprezentări convenționale<br/><span class=\"nr\">3.3. </span>Raportarea corectă a poziției unor elemente pe reprezentările cartografice<br/><span class=\"nr\">3.4. </span>Utilizarea unor reprezentări grafice și cartografice simple<br/><span class=\"nr\">4.1. </span>Dezvoltarea curiozității de cunoaștere a elementelor geografice caracteristice orizontului local, țării și lumii contemporane<br/><span class=\"nr\">4.2. </span>Dobândirea interesului pentru înțelegerea rolului mediului înconjurător pentru viața și activitatea societății</td></tr><tr><td colspan=\"2\" class=\"sub\">Orizontul apropiat</td></tr><tr><td>1. Clasa, școala, cartierul, localitatea</td><td>8</td></tr><tr><td>2. Orientarea și distanțele în orizontul apropiat</td><td>10</td></tr><tr><td>3. Planul clasei, al școlii, al locuinței, al cartierului și al localității</td><td>12</td></tr><tr class=\"fin\"><td> <em>Recapitulare</em></td><td>16</td></tr><tr class=\"fin\"><td> <em>Autoevaluare</em></td><td>17</td></tr><tr><td colspan=\"2\" class=\"sub\">Orizontul local</td></tr><tr><td>4. Orizontul, linia orizontului, punctele cardinale</td><td>18</td></tr><tr><td>5. Hărți ale orizontului local</td><td>22</td></tr><tr><td colspan=\"2\" class=\"sub\">Caracteristici generale observabile ale orizontului local</td></tr><tr><td>6. Relief, hidrografie, vegetație</td><td>24</td></tr><tr><td>7. Populație, așezări, activități ale oamenilor</td><td>28</td></tr><tr class=\"fin\"><td> <em>Recapitulare</em></td><td>32</td></tr><tr class=\"fin\"><td> <em>Autoevaluare</em></td><td>33</td></tr><tr><td colspan=\"2\" class=\"sub\">Modificări observabile și repere de timp</td></tr><tr><td>8. Modificări observabile în realitatea înconjurătoare</td><td>34</td></tr><tr><td>9. Repere de timp: ora, ziua, săptămâna, anul, calendarul</td><td>36</td></tr><tr><td colspan=\"2\" class=\"sub\">De la orizontul local la țară</td></tr><tr><td>10. Localitatea natală. Regiunea înconjurătoare. Țara</td><td>38</td></tr><tr class=\"fin\"><td> <em>Recapitulare</em></td><td>40</td></tr><tr class=\"fin\"><td> <em>Autoevaluare</em></td><td>41</td></tr><tr class=\"fin\"><td> <em>Test de evaluare sumativă</em></td><td>42</td></tr></table><br/><br/>");
}
}, {id: 'art-g4v1-a04-cuprins'});
jade_mixins["atom"].call({
block: function(){
buf.push("<table class=\"cuprins\"><tr><th>UNITATE/LECȚIE</th><th>Pagină</th><th>COMPETENȚE SPECIFICE VIZATE</th></tr><tr><td colspan=\"2\" class=\"dark-orange\">UNITATEA 2<br/>România – elemente de geografie generală</td><td rowspan=\"18\" class=\"right-part\"> <span class=\"nr\">1.1. </span>Identificarea unor termeni geografici în texte/contexte/situații de învățare diferite<br/><span class=\"nr\">1.2. </span>Precizarea, în cuvinte proprii, a sensului termenilor geografici de bază<br/><span class=\"nr\">1.3. </span>Utilizarea termenilor geografici simpli în contexte cunoscute<br/><span class=\"nr\">2.1. </span>Aplicarea unor elemente și operații matematice minime în înțelegerea unor situații reale observate<br/><span class=\"nr\">2.2. </span>Aplicarea unor elemente și cunoștințe dobândite la alte discipline (științe ale naturii, istorie, științe sociale) în descrierea și explicarea realității înconjurătoare<br/><span class=\"nr\">2.3. </span>Identificarea unor fenomene și procese cu caracter geografic din mediul înconjurător al orizontului local, al regiunii, țării și continentului<br/><span class=\"nr\">3.1. </span>Identificarea poziției elementelor reprezentate pe hartă<br/><span class=\"nr\">3.2. </span>Utilizarea semnelor și a altor reprezentări convenționale<br/><span class=\"nr\">3.3. </span>Raportarea corectă a poziției unor elemente pe reprezentările cartografice<br/><span class=\"nr\">3.4. </span>Utilizarea unor reprezentări grafice și cartografice simple<br/><span class=\"nr\">4.1. </span>Dezvoltarea curiozității de cunoaștere a elementelor geografice caracteristice orizontului local, țării și lumii contemporane<br/><span class=\"nr\">4.2. </span>Dobândirea interesului pentru înțelegerea rolului mediului înconjurător pentru viața și activitatea societății<br/><span class=\"nr\">4.3. </span>Dezvoltarea interesului pentru cunoașterea și înțelegerea diversității naturale și umane</td></tr><tr><td colspan=\"2\" class=\"sub\">România – caracteristici naturale</td></tr><tr><td>11. Limite și vecini</td><td>44</td></tr><tr><td colspan=\"2\" class=\"sub\">România - caracteristici naturale</td></tr><tr><td>12. Relieful. Caracteristici generale și trepte de relief</td><td>46</td></tr><tr><td>13. Clima, apele, vegetația, animalele și solurile</td><td>48</td></tr><tr class=\"fin\"><td><em>Recapitulare</em></td><td>52</td></tr><tr class=\"fin\"><td><em>Autoevaluare</em></td><td>53</td></tr><tr><td colspan=\"2\" class=\"sub\">România – caracteristici introduse de om</td></tr><tr><td>14. Locuitorii și așezările omenești</td><td>54</td></tr><tr><td>Activitățile economice</td><td></td></tr><tr><td>15. A. Resursele și activitățile industriale </td><td>56</td></tr><tr><td>16. B. Principalele produse agricole </td><td>58  </td></tr><tr><td>17. C. Transporturile și căile de comunicație</td><td>60</td></tr><tr class=\"fin\"> <td><em>Recapitulare</em></td><td>62</td></tr><tr class=\"fin\"><td><em>Autoevaluare</em></td><td>63</td></tr><tr class=\"fin\"><td><em>Test de evaluare sumativă</em></td><td>64</td></tr><tr><td><em>Recapitulare și evaluare - final de semestru</em></td><td>64      </td></tr></table>");
}
}, {id: 'art-g4v1-a05-cuprins'});
jade_mixins["atom"].call({
block: function(){
buf.push("<br/><br/><div class=\"indent\"><em>„Geografia ţării trebuie să înceapă cu geografia locului natal, ale cărui elemente proaspete, pline de imagini şi de simţire, există în sufletul fiecărui copil şi trebuie numai scoase la lumină, valorificate şi rânduite.“</em></div><div class=\"text-right\">(George Vâlsan, <em>Opere alese</em>)</div>");
}
}, {id: 'art-g4v1-a05-citat'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});