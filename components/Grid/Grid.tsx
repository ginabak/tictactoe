import { Row } from "../Row";

import * as styles from "./Grid.module.css";

export function Grid() {
	return (
		<div className={styles["Grid"]}>
			<Row numberOfSquares={3} />
			<Row numberOfSquares={3} />
			<Row numberOfSquares={3} />
		</div>
	);
}
