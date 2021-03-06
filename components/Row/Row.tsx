import { Square } from "../Square";

import * as styles from "./Row.module.css";

interface Props {
	numberOfSquares: number;
}

export function Row({ numberOfSquares }: Props) {
	const squares = Array.from({ length: numberOfSquares }).map(() => <Square />);
	return <div className={styles["Row"]}>{squares}</div>;
}
