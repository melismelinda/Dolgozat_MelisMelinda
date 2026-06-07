function otoslotto() {
    const szamok = [];

  
    while (szamok.length < 5) {
        
        const veletlenSzam = Math.floor(Math.random() * 90) + 1;

        
        if (!szamok.includes(veletlenSzam)) {
            szamok.push(veletlenSzam);
        }
    }

    
    szamok.sort((a, b) => a - b);

    
    return szamok;
}


function megjelentLotto() {
    const golyokTarolo = document.getElementById('lottoGolyok');
    golyokTarolo.innerHTML = ''; 

    
    const nyeroSzamok = otoslotto();

    
    nyeroSzamok.forEach((szam, index) => {
        const ujGolyo = document.createElement('div');
        ujGolyo.classList.add('golyó');
        ujGolyo.textContent = szam;
        ujGolyo.style.animationDelay = `${index * 0.15}s`;
        golyokTarolo.appendChild(ujGolyo);
    });
}