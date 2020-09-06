import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Figure from "../molecules/Figure";
import WrongLetters from "../molecules/WrongLetters";
import Word from "../molecules/Word";
import Notification from "../atoms/Notification";
import Popup from "./Popup";
import { showNotification as show, checkWin } from "../helpers";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const words = [
  "react",
  "components",
  "veganism",
  "frontend",
  "backend",
  "programming",
  "vanilla",
  "javascript",
];

let word = words[Math.floor(Math.random() * words.length)];

const GameContainer = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [result, setResult] = useState("");

  let play = true;
  let res = "";

  useEffect(() => {
    const handleKeydown = (e) => {
      const { key, keyCode } = e;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (word.includes(letter) && !correctLetters.includes(letter)) {
          setCorrectLetters((correctLetters) => [...correctLetters, letter]);
        } else if (word.includes(letter) && correctLetters.includes(letter)) {
          show(setShowNotification);
        } else if (!wrongLetters.includes(letter)) {
          setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [playable, wrongLetters, correctLetters]);

  useEffect(() => {
    setPlayable(play);
    setResult(res);
  });

  if (checkWin(correctLetters, wrongLetters, word) === "won") {
    res = "won";
    play = false;
  } else if (checkWin(correctLetters, wrongLetters, word) === "lost") {
    res = "lost";
    play = false;
  }

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setResult([]);

    word = words[Math.floor(Math.random() * words.length)];
  };
  return (
    <>
      <StyledWrapper>
        <Figure errors={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </StyledWrapper>
      <StyledWrapper>
        <Word word={word} correctLetters={correctLetters} />
      </StyledWrapper>
      <Notification show={showNotification ? "show" : ""} />
      {!playable && <Popup result={result} playAgain={playAgain} />}
    </>
  );
};

export default GameContainer;
