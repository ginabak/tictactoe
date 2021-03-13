import { useContext } from "react";
import { GameContext } from "./context";

export function useGame() {
	// consumes Context
	return useContext(GameContext);
}
