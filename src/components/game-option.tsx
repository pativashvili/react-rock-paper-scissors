import { GameOptionsType } from "../types/game-options.type";
import { OptionsEnum } from "../types/options.enum";

type GameOptionProps = {
  onClick: (gameOption: OptionsEnum) => void;
  gameOption: GameOptionsType;
};

function GameOption({ gameOption, onClick }: GameOptionProps) {
  return (
    <div>
      <button onClick={() => onClick(gameOption.name)}>
        {gameOption.name}
      </button>
    </div>
  );
}

export { GameOption };
