
function mail (email, nom, prenom, telephone, demande){
    let mailto = `mailto:${email}?subject=HRPulse&body=Bonjour, je suis ${nom} ${prenom} ,vous pouvez me contacter par téléphone au ${telephone} ou par email ${email}. 
    Voilà ma demande : 
    ${demande} merci`
    location.href = mailto
}


let form = document.querySelector("form")
form.addEventListener ("submit", (event) => {
    event.preventDefault()

    let nomForm = document.getElementById ("nom");
    let prenomForm = document.getElementById ("prenom");
    let telForm = document.getElementById ("telephone");
    let emailForm = document.getElementById ("email");
    let textForm = document.getElementById ("demande");
    let nom = nomForm.value;
    let prenom = prenomForm.value;
    let telephone = telForm.value;
    let email = emailForm.value;
    let demande = textForm.value;
    
    mail (email, nom, prenom, telephone, demande)
    document.forms['contact'].reset();
});




