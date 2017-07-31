import React, { Component } from "react";
import { objectOf, arrayOf, object, string } from "prop-types";
import _ from "lodash";

import { handleWhiteSox } from "../../helpers";

class Final extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home: "",
			away: ""
		};
	}

	componentWillMount() {
		if (Number(this.props.runs.home) > Number(this.props.runs.away)) {
			this.setState({ home: "winner" });
		} else {
			this.setState({ away: "winner" });
		}
	}

	render() {
		return (
			<div className="game-container">
				<table className="final">
					<thead>
						<tr>
							<th>Final</th>
							<th />
							{_.map(this.props.innings, (inning, i) =>
								<th key={i}>
									{i + 1}
								</th>
							)}
							<th>R</th>
							<th>H</th>
							<th>E</th>
						</tr>
					</thead>
					<tbody>
						<tr className={this.state.away}>
							<td>
								<img
									className="icon"
									src={`http://a1.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/scoreboard/${handleWhiteSox(
										this.props.away_name_abbrev
									)}.png&h=70&w=70`}
									alt={this.props.away_name_abbrev}
								/>
							</td>
							<td>
								<i>
									({`${this.props.away_win} - ${this.props.away_loss}`})
								</i>
							</td>
							{_.map(this.props.innings, (inning, i) => {
								if (inning.away === undefined) {
									return <td key={i}>X</td>;
								}
								return (
									<td key={i}>
										{inning.away}
									</td>
								);
							})}
							<td>
								{this.props.runs.away}
							</td>
							<td>
								{this.props.hits.away}
							</td>
							<td>
								{this.props.errors.away}
							</td>
						</tr>
						<tr className={this.state.home}>
							<td>
								<img
									className="icon"
									src={`http://a1.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/scoreboard/${handleWhiteSox(
										this.props.home_name_abbrev
									)}.png&h=70&w=70`}
									alt={this.props.home_name_abbrev}
								/>
							</td>
							<td>
								<i>
									({`${this.props.home_win} - ${this.props.home_loss}`})
								</i>
							</td>
							{_.map(this.props.innings, (inning, i) => {
								if (inning.home === undefined) {
									return <td key={i}>X</td>;
								}
								return (
									<td key={i}>
										{inning.home}
									</td>
								);
							})}
							<td>
								{this.props.runs.home}
							</td>
							<td>
								{this.props.hits.home}
							</td>
							<td>
								{this.props.errors.home}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Final;

Final.propTypes = {
	home_name_abbrev: string.isRequired,
	away_name_abbrev: string.isRequired,
	home_win: string.isRequired,
	home_loss: string.isRequired,
	away_win: string.isRequired,
	away_loss: string.isRequired,
	innings: arrayOf(object).isRequired,
	errors: objectOf(string).isRequired,
	hits: objectOf(string).isRequired,
	runs: objectOf(string).isRequired
};
