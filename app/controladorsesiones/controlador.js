var controlador = {};
var session = require('express-session');

controlador.autenticacion = (req, res, next) =>{
    if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};

controlador.login = (req, res) =>{
    if (!req.body.username || !req.body.password) {
        res.send('login failed');    
      } else if(req.body.username === "amy" || req.body.password === "amys") {
        req.session.user = "amy";
        req.session.admin = true;
        res.send("login exitoso!");
      }
};






module.exports = controlador;