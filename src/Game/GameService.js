import * as store from "../store";

export function saveGameScore(username, score) {
  const currentScores = getScores();

  console.log("saving", currentScores);

  store.set("GAME_SCORES", [...currentScores, { username, score }]);

  console.log(getScores());
}

export function getScores() {

  return store.get("GAME_SCORES") || [];
}

export function resetGameScore() {
  store.set("GAME_SCORES", []);
}

