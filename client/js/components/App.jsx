import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Scoreboard from "./Scoreboard";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameList: [],
			date: moment().format().split("T").shift().split("-")
		};
		this.datePicker = this.datePicker.bind(this);
	}

	componentWillMount() {
		axios
			.get("scores")
			.then(response => {
				this.setState({
					gameList: response.data
				});
			})
			.catch(error => {
				throw error;
			});
	}

	componentDidMount() {
		window.setInterval(() => {
			axios
				.post("/scores", {
					year: this.state.date[0],
					day: this.state.date[2],
					month: this.state.date[1]
				})
				.then(response => {
					this.setState({
						gameList: response.data
					});
				})
				.catch(error => {
					throw error;
				});
		}, 2000);
	}

	datePicker(e) {
		const date = e.target.value.split("-");
		axios
			.post("/scores", {
				year: date[0],
				day: date[2],
				month: date[1]
			})
			.then(response => {
				this.setState({
					gameList: response.data
				});
			})
			.catch(error => {
				throw error;
			});
		this.setState({
			date: e.target.value.split("-")
		});
	}

	render() {
		return (
			<div style={{ width: "width:100%" }}>
				<nav className="nav">
					<div>MLB Scoreboard</div>
					<div>
						<input onChange={this.datePicker} type="date" />
					</div>
				</nav>
				<div className="scoreboard-container">
					<Scoreboard games={this.state.gameList} />
				</div>
			</div>
		);
	}
}
