export default function ContestPage() {
    return (
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contest</h1>
  
        <p className="mb-4">
        The Jackson-Reed Math Tournament (JRMT) is a free middle school math competition designed for students grades 6-8 hosted in-person at Jackson-Reed High School. We are pleased to announce that JRMT will be hosted for the first time in 2025! 
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Information</h2>
        <p className="mb-4">
          JRMT 2025 will take place on <strong>Saturday, May 17th</strong> at Jackson-Reed High School from 9:30am to 4pm.
          Please arrive at the school’s main gate, where there will be volunteers guiding you to the check-in location. Thanks to our sponsors, <strong>free pizza</strong> will be provided during the lunch break.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Rules</h2>
        <p className="mb-4">
          Books, notes, calculators, graph paper, rulers, compasses, or any other aids are not allowed. Communication devices such as laptops, PDAs, and cell phones are prohibited. Any violation may result in disqualification.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Format</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Speed Round:</strong> The Speed Round is a 25-minute, 15-problem individual test where all answers are single values. Problems are worth 10 points each and arranged in roughly increasing difficulty.</li>
          <li><strong>Accuracy Round:</strong> The Accuracy Round is a 50-minute, 10-problem individual test where all answers are single values. Problems are worth 15 points each and arranged in roughly increasing difficulty. </li>
          <li><strong>Team Round:</strong> The Team Round is a 40-minute, 10-problem team event where members of each team collaboratively solve difficult problems. Problems are worth 40 points each and arranged in roughly increasing difficulty.
          </li>
          <li><strong>Guts Round:</strong> The Guts Round is an exciting 60-minute team event where all teams gather in a common space and solve problems at the same time. Each team is initially assigned a set of 3 problems, which they can turn in to volunteer organizers up front when completed and receive the next set of 3 problems, for up to 9 sets (so 27 problems) in total. The last set of problems consists of 3 estimation problems. In the Guts Round, problems are weighted differently based on their difficulty for a total of 400 points. There will be a live scoreboard displaying each team’s progress and placement; thus, teams will receive almost immediate feedback for sets they submitted. 
          </li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Scoring + Tiebreaks</h2>
        <p className="mb-4">
        Rounds are scored as follows. 

The Speed Round consists of 15 problems worth 10 points each, for a total of 150 points. The Accuracy Round consists of 10 problems worth 15 points each, for a total of 150 points. A contestant’s individual score is the sum of their scores on the Speed and Accuracy Rounds, so each contestant can score up to 300 points individually. 

The Team Round consists of 10 problems worth 40 points each, for a total of 400 points. The Guts Round consists of 27 problems each weighted based on its difficulty, for a total of 400 points. A team’s final sweepstakes score is calculated as the sum of its individual scores (out of 1200), Team Round score (out of 400), and Guts Round score (out of 400), for a maximum of 2000 points. 

        </p>
        <p className="mb-4">
        Ties are broken as follows. 

Within a round (Speed/Accuracy/Team/Guts), ties are broken by the last problem solved by the individuals/teams. If a tie persists, we consider the second last problem solved, and so on. If the individuals/teams in consideration solve the same set of problems, a tie will be declared.

If two teams have the same total score, ties will be broken by their score on the Team Round. If a tie persists, ties are broken by their score on the Guts Round. If a tie persists, ties are broken by their highest-scoring members. 

        </p>
  
        <p className="mb-4">
          Medals will be awarded to the top 5 contestants in each individual round, and the top 5 teams overall will be recognized.
        </p>
      </main>
    );
  }
  