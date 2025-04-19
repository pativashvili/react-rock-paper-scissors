function ScoreBoard({ user, computer }: { user: number; computer: number }) {
  return (
    <div className="underline">
      <div>
        <h1>You: {user}</h1>
      </div>

      <div>
        <h1>Computer: {computer}</h1>
      </div>
    </div>
  );
}

export { ScoreBoard };
