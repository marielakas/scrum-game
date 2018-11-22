import * as store from "../store";

export function addQuestion(question) {
  console.log(question);

  const currentQuestions = getQuestions();
  const nextId = getMaxId(currentQuestions);

  console.log("nextId", nextId);

  store.set("GAME_QUESTIONS", [
    ...currentQuestions,
    { ...question, id: nextId }
  ]);

  return getQuestions();
}

export function removeQuestion(id) {
  const currentQuestions = getQuestions();

  store.set("GAME_QUESTIONS", currentQuestions.filter(q => q.id !== id));

  return getQuestions();
}

export function getQuestions() {
  return store.get("GAME_QUESTIONS") || [];
}

export function resetQuestions() {
  store.set("GAME_QUESTIONS", []);
}

function getMaxId(questions) {
  let max = 1;
  for (let q of questions) {
    if (q.id >= max) {
      max = q.id + 1;
    }
  }

  return max;
}
