// Difference between local GMT and EST GMT-0400
const GMTdiff = () => Number(Date().slice(28, 31)) - -4;

export const convertTimeZone = (time, ampm) => {
	const gameTime = time.split(":");
	let localampm = "pm";
	let gameTimeHour = Number(gameTime[0]);
	if (gameTimeHour < 12 && ampm === "PM") {
		gameTimeHour += 12;
	}
	gameTimeHour += GMTdiff();
	if (gameTimeHour > 12) {
		gameTimeHour -= 12;
		if (gameTimeHour === 12) {
			localampm = "am";
		}
	}
	return `${gameTimeHour}:${gameTime[1]}${localampm}`;
};

export const handleWhiteSox = team => (team === "CWS" ? "CHW" : team);
