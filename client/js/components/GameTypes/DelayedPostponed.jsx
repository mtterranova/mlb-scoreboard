import React from "react";
import { string } from "prop-types";

import { handleWhiteSox, convertTimeZone } from "../../helpers";

const isPostponed = theProps => {
	if (theProps.status === "Postponed") {
		return <div>{`${theProps.status}: ${theProps.reason}`}</div>;
	}
	return (
		<div>
			{`${convertTimeZone(
				theProps.time,
				theProps.ampm
			)} - ${theProps.status}: ${theProps.reason}`}
		</div>
	);
};

const DelayedPostponed = props =>
	<div className="game-container">
		<div>
			{isPostponed({
				time: props.time,
				ampm: props.ampm,
				status: props.status,
				reason: props.reason
			})}
		</div>
		<div className="delayed-postponed">
			<table>
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
		</div>
	</div>;

export default DelayedPostponed;

DelayedPostponed.propTypes = {
	home_team: string.isRequired,
	away_team: string.isRequired,
	home_name_abbrev: string.isRequired,
	away_name_abbrev: string.isRequired,
	away_win: string.isRequired,
	away_loss: string.isRequired,
	home_win: string.isRequired,
	home_loss: string.isRequired,
	time: string.isRequired,
	reason: string.isRequired,
	status: string.isRequired,
	ampm: string.isRequired
};
