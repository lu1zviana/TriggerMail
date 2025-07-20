const express = require('express');
const nodemailer = require('nodemailer')
const app = express();


app.listen('3000',()=>{
	console.log('Servidor Rodando!');
})


const transport = nodemailer.createTransport({
	host:'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: "emailexample@gmail.com",
		pass: "yourAppPassword"
	}
});

transport.sendMail({
	from: 'Luiz Viana disparador',
	to: 'emailexample@gmail.com',
	subject: 'Enviando email com nodemailer',
	html: '<h1>Olá</h1> <p>Lorem ipsum solor domor amnet, lorem ipsum solor domor amnet...',

})