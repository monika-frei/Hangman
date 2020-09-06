export const showNotification = (setter) => {
  setter(true);
  setTimeout(() => setter(false), 2000);
};

export const checkWin = (correctLetters, wrongLetters, word) => {
  const wordArray = word.split("");
  let result = "won";

  wordArray.forEach((letter) => {
    if (!correctLetters.includes(letter)) {
      result = "";
    }
  });

  if (wrongLetters.length === 6) {
    result = "lost";
  }
  return result;
};
