const axios = require("axios");
const log = require("npmlog");

function start() {
  log.info("FCA", "🚀 FCA-Anurag is now running!");

  // Example API request
  axios.get("https://api.github.com/users/octocat")
    .then(res => {
      log.info("API", "Github user: " + res.data.login);
    })
    .catch(err => {
      log.error("API", err.message);
    });
}

module.exports = {
  start
};
