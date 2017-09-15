// app.get tem dois parametros, uma string e uma funcao callback.
module.exports = app => {
app.get("/", (req, res) =>{
  res.json({status: "NTask API"});
});
};
