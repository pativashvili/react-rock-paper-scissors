import { Fragment, useEffect, useState } from "react";
import { GAME_OPTIONS } from "../models/game-options.model";
import { GameOption } from "./game-option";
import { ScoreBoard } from "./score-board";
import { OptionsEnum } from "../types/options.enum";
import { WinnerBoard } from "./winner-board";

function Dashboard() {
  // ქასტომ ჰუკისთვის იდელაუირ ადგილია,
  // თამაშის ლოგიკას ერთ სტეიტში აღწერ და დააბრუნებ ჰუიდან საჭირო სტეიიტს და მეთოდებ
  // მაგ const {}  = useGameLogic();
  const [userScore, setUserScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [clicksCounter, setClicksCounter] = useState<number>(0);

  const [userSelect, setUserSelect] = useState<OptionsEnum>();
  const [computerSelect, setComputerSelect] = useState<OptionsEnum>();

  const [winner, setWinner] = useState<string>();

  useEffect(() => {
    // ასეთი ჩანაწერი რთულად კითხვადია,
    // ტერნერი ოპერატორი მხოლოდ მარტივი ერტ დონიანი იფ ელსესთვის გამოვიყენოთ
    // წესიტ esint ვორნინგ გექნება
    // Expected an assignment or function call and instead saw an expression
    // კლასიკური if else სტრუქტურა გამოვიყენოთ, უფრო კითხვადი და გასაგებია
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
    // აქაც კლასიკური if else სტრუქტურა გამოვიყენოთ
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
          // როცა შვილს არ ვაწვდით შეგვილია <WinnerBoard /> self closing tag გამოვიყენოთ
        ></WinnerBoard>
      ) : (
        <Fragment>
          <div className="game-options-wrapper">
            {GAME_OPTIONS.map((eachOption, _i, self) => (
              <GameOption
                key={eachOption?.id}
                gameOption={eachOption}
                onClick={(selectedOption: OptionsEnum) => {
                  const randomIndex = Math.floor(Math.random() * 100) % 3;
                  setClicksCounter((prev) => (prev += 1));
                  setUserSelect(selectedOption);
                  setComputerSelect(
                    // map ის მესამე პარამეტრიდან შეგიძია აიღო
                    self.find((el) => el.id == randomIndex)?.name,
                  );
                }}
                // აქაც self closing tag გამოვიყენოთ
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
