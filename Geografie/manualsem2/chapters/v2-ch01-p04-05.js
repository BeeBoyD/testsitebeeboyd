registerChapter({ chapter: "v2-ch01-p04-05", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Unitatea 3');
jade_mixins["subtitle"]('România - Elemente de geografie regională');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [],
      image: 'v2/p04.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a05-video',
          top: 27.5814,
          left: 0.0943,
          width: 94.3868,
          height: 4.3721,
          type: 'video'
        }
      ],
      image: 'v2/p05.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<br/><div class=\"responsive-tb\"><table class=\"cuprins\"><tr><th>UNITATE/LECȚIE</th><th>Pagină</th><th>COMPETENȚE SPECIFICE VIZATE</th></tr><tr><td colspan=\"2\" class=\"dark-orange\">UNITATEA 4<br/>România în Europa și pe glob</td><td rowspan=\"19\" class=\"right-part\"><span class=\"nr\">1.1. </span>Identificarea unor termeni geografici în texte/contexte/situații de învățare diferite<br/><span class=\"nr\">1.2. </span>Precizarea, în cuvinte proprii, a sensului termenilor geografici de bază<br/><span class=\"nr\">1.3. </span>Utilizarea termenilor geografici simpli în contexte cunoscute<br/><span class=\"nr\">2.1. </span>Aplicarea unor elemente și operații matematice minime în înțelegerea unor situații reale observate<br/><span class=\"nr\">2.2. </span>Aplicarea unor elemente și cunoștințe dobândite la alte discipline (științe ale naturii, istorie, științe sociale) în descrierea și explicarea realității înconjurătoare<br/><span class=\"nr\">2.3. </span>Identificarea unor fenomene și procese cu caracter geografic din mediul înconjurător al orizontului local, al regiunii, țării și continentului<br/><span class=\"nr\">3.1. </span>Identificarea poziției elementelor reprezentate pe hartă<br/><span class=\"nr\">3.2. </span>Utilizarea semnelor și a altor reprezentări convenționale<br/><span class=\"nr\">3.3. </span>Raportarea corectă a poziției unor elemente pe reprezentările cartografice<br/><span class=\"nr\">3.4. </span>Utilizarea unor reprezentări grafice și cartografice simple<br/><span class=\"nr\">4.1. </span>Dezvoltarea curiozității de cunoaștere a elementelor geografice caracteristice orizontului local, țării și lumii contemporane<br/><span class=\"nr\">4.2. </span>Dobândirea interesului pentru înțelegerea rolului mediului înconjurător pentru viața și activitatea societății<br/><span class=\"nr\">4.3. </span>Dezvoltarea interesului pentru cunoașterea și înțelegerea diversității naturale și umane</td></tr><tr><td colspan=\"2\" class=\"sub\">România în Europa</td></tr><tr><td>9. Poziția geografică a României în Europa: limite și vecini</td><td>42</td></tr><tr><td>10. Țările vecine: denumire, capitală</td><td>44</td></tr><tr><td colspan=\"2\" class=\"sub\">Europa – un continent al planetei</td></tr><tr><td>11. Europa – scurtă caracterizare geografică</td><td>46</td></tr><tr><td>12. Europa și România – elemente comune</td><td>48</td></tr><tr><td>13. Uniunea Europeană    </td><td>50</td></tr><tr><td colspan=\"2\" class=\"sub\">Terra – planeta noastră</td></tr><tr><td>14. Terra – caracteristici generale</td><td>52</td></tr><tr><td>15. Continentele și oceanele Terrei</td><td>54</td></tr><tr><td colspan=\"2\" class=\"sub\">Terra – o planetă a Sistemului Solar</td></tr><tr><td>16. Terra, o planetă din Sistemul Solar.<br/>Planiglobul – imaginea Terrei</td><td>56</td></tr><tr class=\"fin\"><td><em>Recapitulare</em></td><td>58</td></tr><tr class=\"fin\"><td><em>Autoevaluare</em></td><td>59</td></tr><tr class=\"fin\"><td><em>Recapitulare și evaluare finale</em></td><td>60</td></tr><tr><td><strong>Știai că ...</strong></td><td>62</td></tr><tr><td><strong>Mic dicționar geografic</strong></td><td>63</td></tr></table></div><br/><em>„Geografia e, pe scurt, descrierea Pământului [...] Pământul e ţărâna pe care o călcăm, dar e şi ce se ascunde dedesubt, e forma sub care se înfăţişează (munte, vale, şes), e apa care îl udă, îl acoperă, îl pătrunde (deci e râu, lac, mare, apă subterană), mai e aerul care îl învăluie, care îi împrumută lumină şi umbră, culori mângâioase sau violente, nori şi ploaie, vânt, furtună sau viscol. Mai e vegetaţia care îl îmbracă atât de splendid şi de variat. Mai sunt vieţuitoarele care îl animează, de la turmele care pasc pajiştile, până la peştii care populează apele şi, în sfârşit, mai e omul care îl stăpâneşte şi se bucură de toate darurile acestui pământ.“</em><div class=\"text-right\">(George Vâlsan, <em>Geografia fizică</em>)</div>");
}
}, {id: 'art-g4v2-a04-page'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-video-continut\">");
jade_mixins["addVideo"]("video/v2/s2_p5_deschidere_U_03.mp4");
buf.push("</div>");
}
}, {id: 'art-g4v2-a05-video', class: 'art-g4-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-background-u3\"><div class=\"art-g4-unit-h\">UNITATEA TEMATICĂ<br/><span>3</span></div><div class=\"art-g4-unit-first-ct\"><div class=\"art-g4-unit-first-1\">U3</div><div class=\"art-g4-unit-first-2\">România - Elemente de geografie regională</div></div><div class=\"row\"><div class=\"col-xs-5 images-left\">");
jade_mixins["img"]('img/v2/v2-p-5-a.png');
jade_mixins["img"]('img/v2/v2-p-5-b.png');
jade_mixins["img"]('img/v2/v2-p-5-c.png');
buf.push("</div><div class=\"col-xs-7\"><div class=\"art-g4-unit-subt2\">CONȚINUTURI:</div><ul class=\"art-g4-unit1\"><li>MARILE UNITĂȚI GEOGRAFICE ALE ROMÂNIEI</li><li>CARACTERISTICI GEOGRAFICE ALE REGIUNII ÎN CARE ESTE SITUAT ORIZONTUL LOCAL</li><li>ORGANIZAREA ADMINISTRATIVĂ A ROMÂNIEI</li></ul><div class=\"art-g4-border-ct-u1\"><strong class=\"art-g4-green-text\"> Termeni geografici:</strong><ul class=\"art-g4-v2\"><li>unitate geografică;</li><li>regiune geografică;</li><li>hartă administrativă;</li><li>unitate administrativ-teritorială;</li><li>județ;</li><li>municipiu;</li><li>comună.</li></ul></div></div></div><div class=\"art-g4-unit-h\"></div></div>");
}
}, {id: 'art-g4v2-a05-page'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});