const mongoose = require("mongoose");
const config = require('../config/mongooseConfig')

module.exports = {
    init: () => {
      console.log(`mongodb+srv://${config.user}:${config.password}@${config.serverName}/${config.database}?retryWrites=true&w=majority`);
      mongoose
        .connect(
          `mongodb+srv://${config.user}:${config.password}@${config.serverName}/${config.database}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
  };