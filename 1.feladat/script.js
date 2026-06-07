const divek = document.querySelectorAll('body > div');

for (let i = 0; i < divek.length; i++) {

    if (i === 0) {
        divek[i].textContent = "Első";
    }
    else if (i === 2) {
        divek[i].textContent = "Harmadik";
    }
    else if (i === divek.length - 1) {
        divek[i].textContent = "Utolsó";
    }
    else {
        divek[i].textContent = (i + 1) + ". elem";
    }
}