import React, { Component } from "react";
import { string, any, objectOf } from "prop-types";

export default class Graphics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first: "",
			second: "",
			third: "",
			oneOut: "",
			twoOuts: "",
			threeOuts: "",
			ballOne: "",
			ballTwo: "",
			ballThree: "",
			ballFour: "",
			strikeOne: "",
			strikeTwo: "",
			strikeThree: ""
		};
	}

	componentWillMount() {
		this.update();
	}

	componentWillReceiveProps() {
		this.update();
	}

	update() {
		const keys = Object.keys(this.props.runners);
		if (keys.includes("runner_on_1b")) {
			this.setState({ first: "action" });
		} else {
			this.setState({ first: "" });
		}
		if (keys.includes("runner_on_2b")) {
			this.setState({ second: "action" });
		} else {
			this.setState({ second: "" });
		}
		if (keys.includes("runner_on_3b")) {
			this.setState({ third: "action" });
		} else {
			this.setState({ third: "" });
		}

		if (this.props.outs === "0") {
			this.setState({ oneOut: "", twoOuts: "", threeOuts: "" });
		}
		if (this.props.outs === "1") {
			this.setState({ oneOut: "action" });
		}
		if (this.props.outs === "2") {
			this.setState({ oneOut: "action", twoOuts: "action" });
		}
		if (this.props.outs === "3") {
			this.setState({
				oneOut: "action",
				twoOuts: "action",
				threeOuts: "action"
			});
		}

		if (this.props.balls === "0") {
			this.setState({ ballOne: "", ballTwo: "", ballThree: "", ballFour: "" });
		}
		if (this.props.balls === "1") {
			this.setState({ ballOne: "action" });
		}
		if (this.props.balls === "2") {
			this.setState({ ballOne: "action", ballTwo: "action" });
		}
		if (this.props.balls === "3") {
			this.setState({
				ballOne: "action",
				ballTwo: "action",
				ballThree: "action"
			});
		}
		if (this.props.balls === "4") {
			this.setState({
				ballOne: "action",
				ballTwo: "action",
				ballThree: "action",
				ballFour: "action"
			});
		}

		if (this.props.strikes === "0") {
			this.setState({ strikeOne: "", strikeTwo: "", strikeThree: "" });
		}
		if (this.props.strikes === "1") {
			this.setState({ strikeOne: "action" });
		}
		if (this.props.strikes === "2") {
			this.setState({ strikeOne: "action", strikeTwo: "action" });
		}
		if (this.props.strikes === "3") {
			this.setState({
				strikeOne: "action",
				strikeTwo: "action",
				strikeThree: "action"
			});
		}
	}

	render() {
		return (
			<div className="graphics">
				<div className="bases">
					<div id={this.state.second} className="base" />
					<div id={this.state.first} className="base" />
					<div id={this.state.third} className="base" />
					<div className="home" />
				</div>
				<div className="matchup">
					<div>
						Pitching: {this.props.pitcher}
					</div>
					<div>
						Batting: {this.props.batter}
					</div>
				</div>
				<div className="count">
					<div className="BSO">
						<div style={{ marginRight: "5px" }}>B</div>
						<div id={this.state.ballOne} className="greyDot" />
						<div id={this.state.ballTwo} className="greyDot" />
						<div id={this.state.ballThree} className="greyDot" />
						<div id={this.state.ballFour} className="greyDot" />
					</div>
					<div className="BSO">
						<div style={{ marginRight: "5px" }}>S</div>
						<div id={this.state.strikeOne} className="greyDot" />
						<div id={this.state.strikeTwo} className="greyDot" />
						<div id={this.state.strikeThree} className="greyDot" />
					</div>
					<div className="BSO">
						<div style={{ marginRight: "5px" }}>O</div>
						<div id={this.state.oneOut} className="greyDot" />
						<div id={this.state.twoOuts} className="greyDot" />
						<div id={this.state.threeOuts} className="greyDot" />
					</div>
				</div>
			</div>
		);
	}
}

Graphics.propTypes = {
	runners: objectOf(any).isRequired,
	pitcher: string.isRequired,
	batter: string.isRequired,
	outs: string.isRequired,
	balls: string.isRequired,
	strikes: string.isRequired
};
