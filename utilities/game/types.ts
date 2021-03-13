export interface Game {
	game: number[][];
	makeAMove(rowId: number, columnId: number): void;
}
