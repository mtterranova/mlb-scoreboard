import React from "react";
import { objectOf, string, any } from "prop-types";
import { handleWhiteSox } from "../../helpers";

import Graphics from "../Graphics";

const InProgress = props =>
	<div className="game-container">
		<div className="in-progress">
			<table className="score">
				<thead>
					<tr>
						<th>
							{`${props.status.inning_state.slice(0, 3)} ${props.status
								.inning}`}
						</th>
						<th>R</th>
						<th>H</th>
						<th>E</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img
								className="icon"
								src={`http://a1.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/scoreboard/${handleWhiteSox(
									props.away_name_abbrev
								)}.png&h=70&w=70`}
								alt={props.away_name_abbrev}
							/>
						</td>
						<td>
							{props.runs.away}
						</td>
						<td>
							{props.hits.away}
						</td>
						<td>
							{props.errors.away}
						</td>
					</tr>
					<tr>
						<td>
							<img
								className="icon"
								src={`http://a1.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/scoreboard/${handleWhiteSox(
									props.home_name_abbrev
								)}.png&h=70&w=70`}
								alt={props.home_name_abbrev}
							/>
						</td>
						<td>
							{props.runs.home}
						</td>
						<td>
							{props.hits.home}
						</td>
						<td>
							{props.errors.home}
						</td>
					</tr>
				</tbody>
			</table>
			<Graphics
				pitcher={props.pitcher}
				batter={props.batter}
				runners={props.runners}
				balls={props.status.b}
				strikes={props.status.s}
				outs={props.outs}
			/>
		</div>
		<div className="last-play">
			{props.last_play}
		</div>
	</div>;

export default InProgress;

InProgress.propTypes = {
	status: objectOf(string).isRequired,
	runners: objectOf(any).isRequired,
	hits: objectOf(string).isRequired,
	errors: objectOf(string).isRequired,
	runs: objectOf(string).isRequired,
	pitcher: string.isRequired,
	batter: string.isRequired,
	outs: string.isRequired,
	home_name_abbrev: string.isRequired,
	away_name_abbrev: string.isRequired,
	last_play: string.isRequired
};
