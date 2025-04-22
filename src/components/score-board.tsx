// ამ შემთხვევაში მხოოდ 2 არგუმენტი გაქვს და ნორმ არი ცალკე ტიპი ან ინტერფეისი შექმნა
// როცა კომპონენტის კოპლექსურობა იზრდება ჯობია ცალკე აღწერო ტიპი
// ჯობია თავიდანვე აღწერო მომავალში რო არ გაირთულო საქმე
// type ScoreBoardProps = {}

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
