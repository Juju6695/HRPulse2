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





