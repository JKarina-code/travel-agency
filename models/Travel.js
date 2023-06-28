import Sequelize from "sequelize";
import db from "../config/db.js";

export const Travel = db.define("travels", {
  title: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  departure_date: {
    type: Sequelize.DATE,
  },
  return_date: {
    type: Sequelize.DATE,
  },
  image: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  available: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
});
