const Usuario = require("../model/Usuario");

function abreadd(req, res) {
  res.render("usuario/add.ejs");
}
function add(req, res) {
  var usuario = new Usuario();
  usuario.artista = req.body.artista;
  usuario.album = req.body.album;
  usuario.dataLanc = new Date (req.body.dataLanc);
  usuario.numFaixas = new Number (req.body.numFaixas);
  usuario.foto = req.file.filename;
  usuario.save(function (err, res) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/usuario/lst");
    }
  });
}
function lst(req, res) {
  Usuario.find({}).then(function (usuarios) {
    res.render("usuario/lst.ejs", { Usuarios: usuarios });
  });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Usuario.find({ nome: new RegExp(pesquisa, "i") }).then(function (usuarios) {
    res.render("usuario/lst.ejs", { Usuarios: usuarios });
  });
}
function abreedt(req, res) {
  Usuario.findById(req.params.id).then(function (usuario) {
    res.render("usuario/edt.ejs", { Usuario: usuario });
  });
}
function edt(req, res) {
  Usuario.findByIdAndUpdate(
    req.params.id,
    {
      artista: req.body.artista,
      album: req.body.album,
      dataLanc: req.body.dataLanc,
      numFaixas: req.body.numFaixas,
      foto: req.file.filename,

    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte erro: " + err);
      } else {
        res.redirect("/usuario/lst");
      }
    }
  );
}
function deleta(req, res) {
  Usuario.findByIdAndDelete(req.params.id).then(function (valor) {
    res.redirect("/usuario/lst");
  });
}

module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
