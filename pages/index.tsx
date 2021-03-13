import { Grid } from "../components";
import { GameProvider } from "../utilities/game";

export default function Home() {
	return (
		<GameProvider>
			<Grid />
		</GameProvider>
	);
}
