const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario')

router.get("/", async (req, res) => {

    try {

        const arrayUsuariosDB = await Usuario.find()
        console.log(arrayUsuariosDB);

        res.render("trabajadores", {
            arrayUsuarios: arrayUsuariosDB
        });

    } catch (error) {
        console.log(error);
    }




});

module.exports = router;