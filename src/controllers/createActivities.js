const { Activity } = require("../db");
const createActivity = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    //pueba git
    //creamos la actividad con lo que recibimos por bodyy
    if (name && difficulty && duration && season && countries) {
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      await newActivity.setCountries(countries); // Asociamos los países con la actividad
      res.status(201).json(newActivity);
    }
  } catch (error) {
    console.Error({ createActivityError: error.message });
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createActivity };
