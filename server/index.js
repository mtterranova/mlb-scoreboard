const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const moment = require("moment");

const app = express();

app.use(bodyParser.json());
app.use(express.static("client"));

app.get("/scores", (req, res) => {
	const date = moment().format().split("T").shift().split("-");
	axios
		.get(
			`http://gd2.mlb.com/components/game/mlb/year_${date[0]}/month_${date[1]}/day_${date[2]}/master_scoreboard.json`
		)
		.then(response => {
			res.json(response.data.data.games.game);
		})
		.catch(error => {
			throw error;
		});
});

app.post("/scores", (req, res) => {
	const date = req.body;
	axios
		.get(
			`http://gd2.mlb.com/components/game/mlb/year_${date.year}/month_${date.month}/day_${date.day}/master_scoreboard.json`
		)
		.then(response => {
			res.json(response.data.data.games.game);
		})
		.catch(error => {
			throw error;
		});
});

const port = process.env.PORT || 8000;
app.listen(port);
