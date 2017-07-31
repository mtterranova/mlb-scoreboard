import React from "react";
import _ from "lodash";
import { arrayOf, object } from "prop-types";

import Preview from "./GameTypes/Preview";
import InProgress from "./GameTypes/InProgress";
import Final from "./GameTypes/Final";
import DelayedPostponed from "./GameTypes/DelayedPostponed";

const Scoreboard = props =>
	<div className="game-list">
		{_.map(props.games, game => {
			if (
				game.status.status === "Preview" ||
				game.status.status === "Pre-Game" ||
				game.status.status === "Warmup"
			) {
				return (
					<Preview
						key={game.id}
						home_team={game.home_team_name}
						away_team={game.away_team_name}
						home_name_abbrev={game.home_name_abbrev}
						away_name_abbrev={game.away_name_abbrev}
						home_pitcher={game.home_probable_pitcher}
						away_pitcher={game.away_probable_pitcher}
						home_win={game.home_win}
						home_loss={game.home_loss}
						away_win={game.away_win}
						away_loss={game.away_loss}
						time={game.time}
						ampm={game.ampm}
					/>
				);
			}
			if (game.status.status === "In Progress") {
				return (
					<InProgress
						key={game.id}
						home_team={game.home_team_name}
						away_team={game.away_team_name}
						home_name_abbrev={game.home_name_abbrev}
						away_name_abbrev={game.away_name_abbrev}
						status={game.status}
						hits={game.linescore.h}
						errors={game.linescore.e}
						runs={game.linescore.r}
						outs={game.status.o}
						runners={game.runners_on_base}
						pitcher={game.pitcher.name_display_roster}
						batter={game.batter.name_display_roster}
						last_play={game.pbp.last}
					/>
				);
			}
			if (
				game.status.status === "Delayed Start" ||
				game.status.status === "Postponed"
			) {
				return (
					<DelayedPostponed
						key={game.id}
						away_team={game.away_team_name}
						home_team={game.home_team_name}
						away_name_abbrev={game.away_name_abbrev}
						home_name_abbrev={game.home_name_abbrev}
						away_win={game.away_win}
						away_loss={game.away_loss}
						home_win={game.home_win}
						home_loss={game.home_loss}
						reason={game.status.reason}
						status={game.status.status}
						time={game.time}
						ampm={game.ampm}
					/>
				);
			}
			return (
				<Final
					key={game.id}
					home_team={game.home_team_name}
					away_team={game.away_team_name}
					home_name_abbrev={game.home_name_abbrev}
					away_name_abbrev={game.away_name_abbrev}
					home_win={game.home_win}
					home_loss={game.home_loss}
					away_win={game.away_win}
					away_loss={game.away_loss}
					innings={game.linescore.inning}
					hits={game.linescore.h}
					errors={game.linescore.e}
					runs={game.linescore.r}
				/>
			);
		})}
	</div>;

export default Scoreboard;

Scoreboard.propTypes = {
	games: arrayOf(object).isRequired
};
