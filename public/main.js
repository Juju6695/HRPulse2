/* NAV BAR RESPONSIVE */

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
  });
    
/* LE PREVENT DEFAULT DU FORM AINSI QUE LA REINITIALISATION DU FORM */

    document.getElementById("contact").addEventListener('submit', async function(e){
        e.preventDefault();

        const form = e.target;
        const data = new FormData (form);

        const formDataJson = {};
        data.forEach((value, key) => {
            formDataJson[key] = value;
        });

        try {
            const response = await fetch ('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataJson)
            });

            if (response.ok){
                form.reset();
                document.getElementById('confirmationMessage').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('confirmationMessage').style.display = 'none';
                }, 5000);
                } else {
                    alert ('Une erreur est survenue. Veuillez réessayer');
                }
        } catch (err) {
            console.error('Erreur lors de lenvoi :', err);
            alert('Erreur réseau.');
        }
    });

// ACTIVE LE CARROUSEL SANS EFFETS D'APPARITION ET DISPARITION
/*
 const carrousel = document.getElementById("carrousel");
 const blocWidth = 320;

 document.getElementById("nextBtn").addEventListener("click", ()=>{
    carrousel.scrollBy({left: blocWidth, behavior: "smooth"});
 });

 document.getElementById("prevBtn").addEventListener("click", ()=>{
    carrousel.scrollBy({left: -blocWidth, behavior: "smooth"});
 });
*/

// ACTIVE LE CARROUSEL AVEC EFFET D'APPARITION ET DISPARITION "BLOC PRESTATION"

 const carrousel = document.getElementById("carrousel");
 const prevBtn = document.getElementById("prevBtn");
 const nextBtn = document.getElementById("nextBtn");

 // EFFET APPARITION/DISPARITION DE LA FLECHE 
 function updateNavButtons(){
    const scrollLeft = carrousel.scrollLeft;
    const maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;

    prevBtn.style.display = scrollLeft > 0 ? "block" : "none";
    nextBtn.style.display = scrollLeft < maxScrollLeft - 1 ? "block" : "none";
 }

 // ACTIVE LE SCROLL BOUTON

 prevBtn.addEventListener("click", ()=>{
    carrousel.scrollBy({left: -320, behavior: "smooth"});
 });

 nextBtn.addEventListener("click", ()=>{
    carrousel.scrollBy({left: 300, behavior: "smooth"});
 });

 carrousel.addEventListener("scroll", updateNavButtons);
 window.addEventListener("load", updateNavButtons);

 // ACTIVE LE CARROUSEL AVEC EFFET D'APPARITION ET DISPARITION "BLOC COACHING"

 const carrouselCoaching = document.getElementById("carrouselCoaching");
 const prevBtnCoaching = document.getElementById("coachingPrevBtn");
 const nextBtnCoaching = document.getElementById("coachingNextBtn");

 // EFFET APPARITION/DISPARITION DE LA FLECHE 
 function updateNavButton(){
    const scrollLefti = carrouselCoaching.scrollLeft;
    const maxScrollLefti = carrouselCoaching.scrollWidth - carrouselCoaching.clientWidth;

    prevBtnCoaching.style.display = scrollLefti > 0 ? "block" : "none";
    nextBtnCoaching.style.display = scrollLefti < maxScrollLefti - 1 ? "block" : "none";
 }

 // ACTIVE LE SCROLL BOUTON

 prevBtnCoaching.addEventListener("click", ()=>{
    carrouselCoaching.scrollBy({left: -320, behavior: "smooth"});
 });

 nextBtnCoaching.addEventListener("click", ()=>{
    carrouselCoaching.scrollBy({left: 300, behavior: "smooth"});
 });

 carrouselCoaching.addEventListener("scroll", updateNavButton);
 window.addEventListener("load", updateNavButton);