import * as store from "../store";

export function saveGameScore(username, score) {
  const currentScores = getScores() || [];

  store.set("GAME_SCORES", [...currentScores, { username, score }]);
}

export function getScores() {
  return store.get("GAME_SCORES");
}

export function resetGameScore() {}
store.set("GAME_SCORES", []);
