import { Fragment, useEffect, useState } from "react";
import { GAME_OPTIONS } from "../models/game-options.model";
import { GameOption } from "./game-option";
import { ScoreBoard } from "./score-board";
import { OptionsEnum } from "../types/options.enum";
import { WinnerBoard } from "./winner-board";

function Dashboard() {
  const [userScore, setUserScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [clicksCounter, setClicksCounter] = useState<number>(0);

  const [userSelect, setUserSelect] = useState<OptionsEnum>();
  const [computerSelect, setComputerSelect] = useState<OptionsEnum>();

  const [winner, setWinner] = useState<string>();

  useEffect(() => {
    if (userSelect !== computerSelect) {
      if (userSelect === OptionsEnum.Paper) {
        computerSelect === OptionsEnum.Scissors
          ? setComputerScore((prev) => (prev += 1))
          : setUserScore((prev) => (prev += 1));
      }
      if (userSelect === OptionsEnum.Scissors) {
        computerSelect === OptionsEnum.Rock
          ? setComputerScore((prev) => (prev += 1))
          : setUserScore((prev) => (prev += 1));
      }
      if (userSelect === OptionsEnum.Rock) {
        computerSelect === OptionsEnum.Paper
          ? setComputerScore((prev) => (prev += 1))
          : setUserScore((prev) => (prev += 1));
      }
    }
  }, [userSelect, computerSelect, clicksCounter]);

  useEffect(() => {
    if (userScore >= 3 || computerScore >= 3) {
      computerScore > userScore ? setWinner("Computer") : setWinner("You");
    }
  }, [userScore, computerScore]);

  return (
    <div className="wrapper">
      <h1 className="underline"> Rock Paper Scissors</h1>
      <ScoreBoard user={userScore} computer={computerScore} />

      {winner ? (
        <WinnerBoard
          winner={winner}
          onClick={() => {
            setUserScore(0);
            setComputerScore(0);
            setWinner("");
          }}
        ></WinnerBoard>
      ) : (
        <Fragment>
          <div className="game-options-wrapper">
            {GAME_OPTIONS.map((eachOption) => (
              <GameOption
                key={eachOption?.id}
                gameOption={eachOption}
                onClick={(selectedOption: OptionsEnum) => {
                  const randomIndex = Math.floor(Math.random() * 100) % 3;
                  setClicksCounter((prev) => (prev += 1));
                  setUserSelect(selectedOption);
                  setComputerSelect(
                    GAME_OPTIONS.find((el) => el.id == randomIndex)?.name,
                  );
                }}
              ></GameOption>
            ))}
          </div>

          <div className="underline">
            <h3>Choose your move</h3>
            <h4>First to score 3 points wins!</h4>
          </div>
        </Fragment>
      )}

      {(userSelect || computerSelect) && (
        <div className="underline">
          <h3>You chose: {userSelect}</h3>
          <h3>Computer chose: {computerSelect}</h3>
        </div>
      )}
    </div>
  );
}

export { Dashboard };
