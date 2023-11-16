const { Activity, Country } = require("../db");

const getActivity = async (req, res) => {
  try {
    const response = await Activity.findAll({
      include: [{ model: Country, through: { attributes: [] } }],
    });

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getActivity:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getActivity };
