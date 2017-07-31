import React from "react";
import { shape, string } from "prop-types";
import { convertTimeZone, handleWhiteSox } from "../../helpers";

const Preview = props =>
	<div className="game-container preview">
		<table>
			<thead>
				<tr>
					<th>
						{convertTimeZone(props.time, props.ampm)}
					</th>
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
						{props.away_team}
					</td>
					<td>
						<i>{`(${props.away_win} - ${props.away_loss})`}</i>
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
						{props.home_team}
					</td>
					<td>
						<i>{`(${props.home_win} - ${props.home_loss})`}</i>
					</td>
				</tr>
			</tbody>
		</table>
		<table>
			<tbody>
				<tr>
					<td>
						{props.away_pitcher.name_display_roster}
					</td>
					<td>
						<i>{`(${props.away_pitcher.wins}-${props.away_pitcher
							.losses}, ${props.away_pitcher.era})`}</i>
					</td>
				</tr>
				<tr>
					<td>
						{props.home_pitcher.name_display_roster}
					</td>
					<td>
						<i>{`(${props.home_pitcher.wins}-${props.home_pitcher
							.losses}, ${props.home_pitcher.era})`}</i>
					</td>
				</tr>
			</tbody>
		</table>
	</div>;

export default Preview;

Preview.propTypes = {
	home_pitcher: shape({
		name_display_roster: string.isRequired,
		era: string.isRequired,
		wins: string.isRequired,
		losses: string.isRequired
	}).isRequired,
	away_pitcher: shape({
		name_display_roster: string.isRequired,
		era: string.isRequired,
		wins: string.isRequired,
		losses: string.isRequired
	}).isRequired,
	home_team: string.isRequired,
	home_name_abbrev: string.isRequired,
	away_team: string.isRequired,
	away_name_abbrev: string.isRequired,
	home_win: string.isRequired,
	home_loss: string.isRequired,
	away_win: string.isRequired,
	away_loss: string.isRequired,
	time: string.isRequired,
	ampm: string.isRequired
};
