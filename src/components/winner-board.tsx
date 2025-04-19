type WinnerBoardProps = {
  onClick: () => void;
  winner: string;
};

function WinnerBoard({ winner, onClick }: WinnerBoardProps) {
  return (
    <div className="wrapper">
      <h1>{winner} won the game</h1>
      <button onClick={onClick}>retry</button>
    </div>
  );
}

export { WinnerBoard };
