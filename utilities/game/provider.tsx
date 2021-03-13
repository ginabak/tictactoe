import React, { useMemo, useState, useCallback } from "react";
import { GameContext } from "./context";

interface Props {
	children: React.ReactNode;
}
export function GameProvider({ children }: Props) {
	const [game, setGame] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);

	const makeAMove = useCallback((rowId: number, columnId: number) => {
		setGame((game) => {
			game[rowId][columnId] = 1;
			return game;
		});
	}, []);

	const value = useMemo(
		() => ({
			game,
			makeAMove,
		}),
		[game, makeAMove]
	);
	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
