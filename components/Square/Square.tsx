import * as styles from "./Square.module.css";
import { useGame } from "../../utilities/game";
interface Props {
	rowId: number;
	columnId: number;
}

export function Square({ rowId, columnId }: Props) {
	const { makeAMove } = useGame();
	return (
		<button
			className={styles["Square"]}
			onClick={() => {
				makeAMove(rowId, columnId);
			}}
		></button>
	);
}
