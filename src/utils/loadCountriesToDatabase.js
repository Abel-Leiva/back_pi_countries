const { Country } = require("../db");
const axios = require("axios");

const loadCountriesToDatabase = async () => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/all?fields=cca3,name,flags,continents,capital,subregion,area,population`
    );

    const countries = response.data;

    const promises = countries.map(async (country) => {
      // Validar que la bandera exista, si no, poner una imagen por defecto o saltar
      const flagImage = country.flags?.png || null;

      if (!flagImage) {
        console.warn(`País sin bandera PNG: ${country.name.common}`);
      }

      const [instance] = await Country.findOrCreate({
        where: { id: country.cca3 },
        defaults: {
          name: country.name.common,
          imageFlag: flagImage,
          continent: country.continents?.join(", "),
          capital: country.capital ? country.capital.join(", ") : "no tiene",
          subRegion: country.subregion,
          area: country.area,
          population: country.population,
        },
      });

      return instance.toJSON();
    });

    const createdCountries = await Promise.all(promises);
    console.log(`Cargados ${createdCountries.length} países a la base de datos.`);
  } catch (error) {
    throw new Error(
      `Error al cargar los países a la base de datos: ${error.message}`
    );
  }
};

module.exports = {
  loadCountriesToDatabase,
};

