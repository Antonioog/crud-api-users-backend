require('dotenv').config()

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "dev", //Informa el status en que se encuentra la App, dev || prod || test...
  db: {
    dev: {
      //Requerimientos minima para poder conecatrnos a una bd.
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "users",
      username: "postgres",
      password: "root",

      //Extra config...
      define: {
        timestamps: true,
        underscored: true,
      },
    },
    prod: {
      //Requerimientos minima para poder conecatrnos a una bd.
      dialect: "postgres",
      host: process.env.DB_PROD_HOST,
      port: process.env.DB_PROD_PORT,
      database: process.env.DB_PROD_NAME,
      username: process.env.DB_PROD_USER,
      password: process.env.DB_PROD_PASS,

      //Extra config...
      define: {
        timestamps: true,
        underscored: true,
      },

      //Esta configuracion es para produccion...
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    test: {
      //Requerimientos minima para poder conecatrnos a una bd.
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "users",
      username: "postgres",
      password: "root",

      //Extra config...
      define: {
        timestamps: true,
        underscored: true,
      },
    },
  },
};

module.exports = config
