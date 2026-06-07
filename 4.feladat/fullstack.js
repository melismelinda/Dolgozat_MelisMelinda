function fullStack(frontendSzoveg, backendSzoveg) {
    const frontendTomb = frontendSzoveg.split(';').map(nev => nev.trim());
    const backendTomb = backendSzoveg.split(';').map(nev => nev.trim());

    
    const kozosFejlesztok = frontendTomb.filter(fejleszto => {
        return fejleszto !== "" && backendTomb.includes(fejleszto);
    });

    return kozosFejlesztok;
}

function gombKattintas() {
    const frontSzoveg = document.getElementById('frontIn').value;
    const backSzoveg = document.getElementById('backIn').value;
    const eredmenyKijelzo = document.getElementById('eredmenyHelye');

    const nyertesek = fullStack(frontSzoveg, backSzoveg);

    if (nyertesek.length > 0) {
        let htmlTartalom = "<div style='margin-bottom: 10px;'>Felvéve mint Full Stack fejlesztő:</div>";
        nyertesek.forEach(nev => {
            htmlTartalom += `<span class="nyertes-nev">🎉 ${nev}</span>`;
        });
        eredmenyKijelzo.innerHTML = htmlTartalom;
    } else {
        eredmenyKijelzo.innerHTML = "❌ Nincs olyan fejlesztő, aki mindkét listán szerepel.";
    }
}