//DOM 
const touch = [...document.querySelectorAll('.button')];
const listKeyCode = touch.map(element => element.dataset.key);
const screen = document.querySelector('.screen')

// Keydown event
//Pour gérer les button sur le clavier de l'ordinateur en utilisant les keydowns
document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    calculer(value);

});

// click envent
// Pour gérer les cliques sur le clavier de la calculatrice à l'écran en utilisant les 
document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    calculer(value);
})

const calculer = (value) => {
    if (listKeyCode.includes(value)) {
        switch (value) {
            case '8':
                screen.textContent = ""
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeyCode = listKeyCode.indexOf(value);
                const touche = touch[indexKeyCode];
                screen.textContent += touche.innerHTML;
        }
    }
}

//event error
window.addEventListener('error', (e) => {
    alert('une erreur est survenue dans votre calcul : ' + e.message)
})