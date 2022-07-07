const conexao = require("../config/database");

const UsuarioSchema = conexao.Schema({
  artista: {
    type: "String",
  },
  album: {
    type: "String",
  },
  dataLanc: {
    type: "Date",
  },
  numFaixas: {
    type: "Number",
  },
  foto: {
    type: "String",
  },
});

module.exports = conexao.model("Usuario", UsuarioSchema);
