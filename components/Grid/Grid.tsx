import { useGame } from "../../utilities/game";
import { Row } from "../Row";
import { Square } from "../Square";

import * as styles from "./Grid.module.css";

export function Grid() {
	const { game } = useGame();

	const grid = game.map((squareIds, rowId) => {
		const squares = squareIds.map((_, columnId) => {
			return <Square rowId={rowId} columnId={columnId} />;
		});

		return <Row>{squares}</Row>;
	});

	return <div className={styles["Grid"]}>{grid}</div>;
}
