const express = require("express");
var cors = require('cors')
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const chalk = require("chalk");
const nodemailer = require("nodemailer");

// Initializations
const app = express();

// Settings
app.use(cors())
app.set("port", process.PORT || 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());

// MAIL

app.post('/api/v1', (req,res) => {
    var data = req.body;
    console.log("data:", data);
    var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 587,
    secure: false,
    auth: {
      user: 'wall.kiedis01@gmail.com',
      pass: 'el230093'
    }
  });
  
  var mailOptions = {
    from: '"Photo Assistence" <wall.kiedis01@gmail.com>',
    to: 'wall.kiedis01@gmail.com',
    subject: 'photo assistence',
    html: `<h2>Nombre: </h2><p style="color:red;font-size: 15px">${data.name}</p>
            <h2>Email: </h2><p style="color:red;font-size: 15px">${data.email}</p>
            <h2>Telefono: </h2><p style="color:red;font-size: 15px">${data.tel}</p>
            <h2>Mensaje: </h2><p style="color:red;font-size: 15px">${data.message}</p>`
  };
  
  smtpTransport.sendMail(mailOptions,
  (error, info) => {
    if(error) {
        console.log("NO SE ENVIO");
        console.log("error:", error);
    }else {
        console.log("SE ENVIO CORRECTAMENTE");
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send({msg:'Email has been sent'});
        smtpTransport.close();
    }
    smtpTransport.close();
  });
  
  })

// Routes
app.use("/users", require("./routes/users"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), () => {
    console.log(chalk.blue("Server on port"), app.get("port"));
});