registerChapter({ chapter: "v2-ch01-p24-25", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]('Elemente de prezentare a unei regiuni');
jade_mixins["subtitle"]('Paginile 24 - 25');
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'art-g4v2-a24-aminteste-ti',
          top: 19.3953,
          left: 5,
          width: 90,
          height: 5.8605,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a24-observa',
          top: 30.7442,
          left: 5,
          width: 90,
          height: 9.1163,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a24-descopera',
          top: 45.907,
          left: 5,
          width: 40,
          height: 30.8837,
          type: 'exercise'
        },
        {
          atom: 'art-g4v2-a24-retine',
          top: 77.907,
          left: 5,
          width: 90,
          height: 20,
          type: 'blank'
        }
      ],
      image: 'v2/p24.jpg'
    },
    {
      hotspots: [
        {
          atom: 'art-g4v2-a25-ex1',
          top: 9.6279,
          left: 5,
          width: 90,
          height: 12.6512,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a25-ex2',
          top: 22.4651,
          left: 5,
          width: 90,
          height: 2.3256,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a25-retine',
          top: 25.814,
          left: 5,
          width: 60,
          height: 37.2093,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a25-aplica-ex1',
          top: 68.8837,
          left: 5,
          width: 90,
          height: 7.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a25-aplica-ex2',
          top: 76.6047,
          left: 5,
          width: 90,
          height: 3.1628,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a25-aplica-ex3',
          top: 80.1395,
          left: 5,
          width: 90,
          height: 8.7442,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a25-aplica-ex4',
          top: 89.2558,
          left: 5,
          width: 90,
          height: 3.4419,
          type: 'blank'
        },
        {
          atom: 'art-g4v2-a25-aplica-ex5',
          top: 92.8837,
          left: 5,
          width: 90,
          height: 3.814,
          type: 'blank'
        }
      ],
      image: 'v2/p25.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-titlu-v2"]('4.', "Elemente de prezentare a unei regiuni",'Caracteristici geografice ale regiunii în care este situat orizontul local');
}
}, {id: 'art-g4v2-a24-titlu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Amintește-ți </div></div>");
}
}, {id: 'art-g4v2-a24-aminteste-ti-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\"> <strong>Orizontul local </strong>reprezintă spațiul care poate fi observat până la limita <strong>liniei orizontului</strong>. Acest spațiu se întinde până la o distanță de 40-50 km în raport cu localitatea natală (luată ca reper și situată în centru) și face parte dintr-un teritoriu mai extins, numit <strong>regiune</strong>.</div>");
}
}, {id: 'art-g4v2-a24-aminteste-ti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Observă</div></div>");
}
}, {id: 'art-g4v2-a24-observa-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Ce prezintă harta de mai jos? Observă această hartă și completează enunțul următor, selectând varianta corectă:</div><div class=\"indent\"><em>Regiunea reprezintă un teritoriu care se remarcă prin: </em></div><ol class=\"art-g4-lowercase-v2\"><li>toate caracteristicile geografice specifice României;</li><li>anumite caracteristici geografice proprii.</li></ol>");
}
}, {id: 'art-g4v2-a24-observa'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a24-descopera-T'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"art-g4-interactiv-continut art-g4v2-a06-ex1-descopera-Interactiv\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"indent\">Dacă avem în vedere caracteristicile naturale ale teritoriului, în România se pot identifica 16 regiuni geografice. Identifică și numește fiecare regiune. Completează tabelul, care reprezintă, de fapt, legenda hărții.</div>");
}
}, "v2/s2_p24_descopera");
jade_mixins["img"]("img/v2/v2_p24_harta.png");
buf.push("<center><em><strong>Legenda hărții</strong></em></center><center><em>Numerele de hartă reprezintă:</em></center><div class=\"table-responsive\"><table class=\"art-g4-p24-v2-table\"><tr> <th>Nr. crt. </th><th>Denumirea regiunii geografice</th></tr><tr> <td><center>1.</center></td><td>Carpații Orientali – Grupa Nordică sau Carpații Maramureșului și ai Bucovinei</td></tr><tr> <td><center>2.</center></td><td>Carpații Orientali – Grupa Centrală sau Carpații Moldo-Transilvani</td></tr><tr> <td><center>3.</center></td><td>Carpații Orientali – Grupa Sudică sau Carpații Curburii</td></tr><tr> <td><center>4. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-1", type: 'text', max: 50,regexp: '^Carpa[t|ț]ii Meridionali$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>5. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-2", type: 'text', max: 50,regexp: '^Mun[t|ț]ii Apuseni$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>6. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-3", type: 'text', max: 50,regexp: '^Mun[t|ț]ii Banatului$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>7. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-4", type: 'text', max: 50,regexp: '^Depresiunea Colinar[a|ă] a Transilvaniei|Depresiunea Transilvaniei$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>8. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-5", type: 'text', max: 50,regexp: '^Subcarpa[t|ț]ii$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>9. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-6", type: 'text', max: 50,regexp: '^Dealurile de Vest$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>10. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-7", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Moldovei$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>11. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-8", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Mehedin[t|ț]i$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>12. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-9", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Getic$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>13. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-10", type: 'text', max: 50,regexp: '^Podi[s|ș]ul Dobrogei$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>14. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-11", type: 'text', max: 50,regexp: '^C[a|â]mpia Rom[a|â]n[a|ă]$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>15. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-12", type: 'text', max: 50,regexp: '^C[a|â]mpia de Vest$',size:'35', placeholder: '...'});
buf.push("</td></tr><tr> <td><center>16. </center></td><td> ");
jade_mixins["textline"]({name: "art-g4v2-a24-descopera-t-13", type: 'text', max: 50,regexp: '^Delta Dun[a|ă]rii$',size:'35', placeholder: '...'});
buf.push("</td></tr></table></div><div class=\"is-done-box\"></div>");
}
});
buf.push("</div>");
}
}, {name: 'art-g4v2-a24-descopera-t-0'});
}
}, {id: 'art-g4v2-a24-descopera', class:'art-g4-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\"> <strong>Regiunea </strong>reprezintă un teritoriu (un spațiu geografic) cu anumite trăsături specifice ale reliefului, climei, hidrografiei, vegetației, faunei și solurilor, adică anumite <strong>caracteristici naturale</strong>. La acestea se adaugă o serie de <strong>caracteristici </strong>specifice <strong>legate de resursele naturale </strong>existente și de <strong>activitățile economice </strong>desfășurate de populația din regiune.</div><div class=\"indent\">Aceste caracteristici, atât naturale cât și rezultate din activitățile oamenilor, dau o înfățișare aparte fiecărei regiuni și o deosebesc de celelalte regiuni.</div>");
}
});
}
}, {id: 'art-g4v2-a24-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Descoperă</div></div>");
}
}, {id: 'art-g4v2-a25-descopera-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Se dau următoarele regiuni: <em>Carpații Meridionali, Câmpia Română, Podișul Getic, Podișul Mehedinți, Depresiunea Colinară a Transilvaniei.</em></div>");
jade_mixins["art-g4-ex-v2"](1, "Identifică regiunea prezentată în fiecare din enunțurile următoare:");
buf.push("<ul class=\"art-g4-v2\"><li><em>Se află în mijlocul țării și apare ca o zonă mai joasă înconjurată de brâul Munților Carpați.</em></li><li><em>Se remarcă prin dealurile foarte netede, despărțite de râurile Jiu, Olt și Argeș cu afluenții lor.</em></li><li><em>Cuprinde toată partea de sud a țării, are un relief neted, climă prielnică locuirii și desfășurării unor activități umane, soluri roditoare și este intens utilizată pentru cultura cerealelor.</em></li></ul>");
}
}, {id: 'art-g4v2-a25-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Precizează ce caracteristici geografice prezentate în fiecare enunț te-au ajutat la identificarea regiunii?");
}
}, {id: 'art-g4v2-a25-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-retine"].call({
block: function(){
buf.push(" <div class=\"indent\">Pentru caracterizarea geografică a regiunii în care este situat orizontul local se au în vedere următoarele <strong>elemente de prezentare</strong>:</div><div class=\"indent\"> <strong>– poziția geografică </strong>– se referă la încadrarea regiunii la nivelul teritoriului țării sau în raport cu o altă regiune semnificativă;</div><div class=\"indent\"> <strong>– limitele </strong>– sunt reprezentate, în general, de văile râurilor care încadrează/delimitează regiunea și o separă de regiunile învecinate;</div><div class=\"indent\"> <strong>– caracteristicile naturale </strong>– sunt legate de relief (forme de relief, unități de relief, înălțimile cele mai mari), de climă (temperaturi medii anuale, cantități anuale de precipitații, vânturi predominante), de hidrografie (principalele râuri și/sau lacuri), vegetație și faună (specii reprezentative), soluri (dacă sunt fertile, pentru ce tipuri de culturi);</div><div class=\"indent\"> <strong>– resursele naturale și activitățile economice </strong>– se referă la principalele resurse ale solului și ale subsolului și la legăturile pe care acestea le au cu activitățile economice din regiune (agricole, industriale etc.).</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p25_foto_1.png");
buf.push("<div class=\"small-text\">Dunărea, limită între Câmpia Română (dreapta) și Podișul Dobrogei (stânga)</div></div><div class=\"col-sm-6\">");
jade_mixins["img"]("img/v2/v2_p25_foto_2.png");
buf.push("<div class=\"small-text\">Crivățul, un vânt specific estului țării, provoacă furtuni de zăpadă în Podișul Moldovei și în estul Câmpiei Române</div></div></div>");
}
});
}
}, {id: 'art-g4v2-a25-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"art-g4-subtitle-v2\"><div>Aplică </div></div>");
}
}, {id: 'art-g4v2-a25-aplica-T'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"indent\">Localizează pe harta murală a României fiecare dintre regiunile geografice notate în tabelul pe care l-ai completat în caiet.</div>");
jade_mixins["art-g4-ex-v2"](1, "Precizează denumirea regiunii situate în partea de est a țării. Cum se numește râul care formează limita sa estică?");
}
}, {id: 'art-g4v2-a25-aplica-ex1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](2, "Cum se numește regiunea care este limitată la sud de râul Mureș? Cu ce regiune se învecinează aceasta la est? Dar la vest?");
}
}, {id: 'art-g4v2-a25-aplica-ex2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](3, "Precizează denumirea regiunii care prezintă:");
buf.push("<ol class=\"art-g4-lowercase-v2\"><li>întinderea cea mai mică;</li><li>temperaturile medii anuale cele mai scăzute;</li><li>un relief de dealuri (asemănătoare munților ca mod de formare) și depresiuni;</li><li>întinderi mari de apă și suprafețe reduse de uscat.</li></ol>");
}
}, {id: 'art-g4v2-a25-aplica-ex3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](4, "Precizează numele râului care traversează șapte regiuni geografice. Numește aceste regiuni în ordinea traversării lor de către acest râu.");
}
}, {id: 'art-g4v2-a25-aplica-ex4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["art-g4-ex-v2"](5, "Pe harta de contur a României, desenează și colorează regiunile geografice, respectând culorile convenționale. Scrie apoi denumirea fiecărei regiuni. Marchează cu semnul x poziția localității natale.");
}
}, {id: 'art-g4v2-a25-aplica-ex5'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});