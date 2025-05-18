
/* Taper dans la console "node server.js" pour démarer le serveur et "ctrl C pour le stoper" */
/* Prochaine étape => relier le CSS au server Express */
/* Faire en sorte que quand on envoi le form par mail, que la page ne se recharge pas "PreventDefault ?" */

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));


app.post('/send-email', (req, res) => {
    console.log('Données reçues du formulaire:', req.body);
    const {nom, prenom, telephone, email, demande} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });


let mailOptions = {
    from: email,
    to: 'kormannj66@gmail.com',
    subject: 'HRPulse',
    text: `Je suis ${nom} ${prenom}, vous pouvez me joindre par téléphone au : ${telephone} ou par mail : ${email}. Voilà ma demande : ${demande}`
};

transporter.sendMail(mailOptions,function(error, info){
    if (error) {
        console.log('Erreur:', error);
        res.status(500).send(' Erreur lors de lenvoi. ');
    } else {
        console.log ('Email Envoyé : ' + info.response);
        res.send('Message envoyé !');
    }
  });
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Serveur démaré sur http://localhost:${PORT}`);
});