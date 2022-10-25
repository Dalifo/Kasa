/**
 * 
 * @param {*} element souligne le bouton de navigation du Header en fonction de la localisation de l'utilisateur sur le site
 */
 const setUnderline = (element) => {
    if(element==='home'){
        document.getElementById('about').classList.remove('underline');
        document.getElementById('home').classList.remove('house');
        document.getElementById('home').classList.add('underline')
    }else if(element==='about'){
        document.getElementById('home').classList.remove('underline');
        document.getElementById('about').classList.add('underline');
        document.getElementById('home').classList.remove('house')
    }else if(element==='house'){
        document.getElementById('home').classList.add('house');
        document.getElementById('about').classList.remove('house');
        document.getElementById('home').classList.remove('underline')
        document.getElementById('about').classList.remove('underline');
    }
}
export default setUnderline