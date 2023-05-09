const express = require('express');
const router = express.Router();

// Rutas Render

router.get("/", (req, res) => {
res.render("index", { titulo: "inicio EJS" });
});

router.get("/perfil-usuario", (req, res) => {
res.render("perfil-usuario");
});

router.get("/perfil-apr", (req, res) => {
res.render("perfil-apr");
});

router.get("/perfil-empresa", (req, res) => {
res.render("perfil-empresa");
});

router.get("/perfil-trabajador", (req, res) => {
res.render("perfil-trabajador");
});

router.get("/perfil-epp", (req, res) => {
res.render("perfil-epp");
});

router.get("/epp", (req, res) => {
res.render("epp",);
});

router.get("/lista-usuarios", (req, res) => {
res.render("lista-usuarios");
});

module.exports = router;