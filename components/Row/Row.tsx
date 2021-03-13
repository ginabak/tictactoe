import * as styles from "./Row.module.css";

interface Props {
	children: React.ReactNode;
}

export function Row({ children }: Props) {
	return <div className={styles["Row"]}>{children}</div>;
}
