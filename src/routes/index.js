const { getAllCountries } = require("../controllers/getAllCountries");

const { Router } = require("express");
const { createActivity } = require("../controllers/createActivities");
const { getActivity } = require("../controllers/getActivities");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getAllCountries);
router.post("/activities", createActivity);
router.get("/activities", getActivity);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
