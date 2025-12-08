export default function ContestPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Contest Format</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Jackson-Reed Math Tournament (JRMT) is a free middle school math competition designed for students grades 6-8 hosted in-person at Jackson-Reed High School. We are pleased to announce that JRMT will be hosted for the first time in 2026!
          </p>
        </div>

        {/* Key Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="text-green-600 text-xl font-bold mb-1">January 24th, 2026</div>
              <div className="text-gray-500 text-sm">Saturday</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-xl font-bold mb-1">9:30 AM - 4:00 PM</div>
              <div className="text-gray-500 text-sm">Check-in at main gate</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-xl font-bold mb-1">Free Pizza</div>
              <div className="text-gray-500 text-sm">Provided during Dinner</div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm">
            <p className="text-red-700 font-medium">Books, notes, calculators, graph paper, rulers, compasses, or any other aids are not allowed. Communication devices are prohibited. Violations may result in disqualification.</p>
          </div>
        </div>

        {/* Competition Format */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Competition Format</h2>

          <div className="grid gap-6">
            {/* Round 1 */}
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="text-lg font-semibold text-green-600 mb-1">Speed Round</h3>
              <p className="text-gray-600 text-sm">
                25-minute, 15-problem individual test. All answers are single values. Problems are worth 10 points each (150 total) and arranged in roughly increasing difficulty.
              </p>
            </div>

            {/* Round 2 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-green-600 mb-1">Accuracy Round</h3>
              <p className="text-gray-600 text-sm">
                50-minute, 10-problem individual test. All answers are single values. Problems are worth 15 points each (150 total) and arranged in roughly increasing difficulty.
              </p>
            </div>

            {/* Round 3 */}
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-green-600 mb-1">Team Round</h3>
              <p className="text-gray-600 text-sm">
                40-minute, 10-problem team event. Problems are worth 40 points each (400 total) and arranged in roughly increasing difficulty.
              </p>
            </div>

            {/* Round 4 */}
            <div className="border-l-4 border-green-700 pl-4">
              <h3 className="text-lg font-semibold text-green-600 mb-1">Guts Round</h3>
              <p className="text-gray-600 text-sm">
                Exciting 60-minute team event with sets of 3 problems where all teams gather in a common space and solve problems at the same time. Each team is initially assigned a set of 3 problems, which they can turn in to volunteer organizers up front when completed and receive the next set of 3 problems, for up to 9 sets (so 27 problems) in total. The last set of problems consists of 3 estimation problems. All answers are single values. Problems are weighted differently based on their difficulty for a total of 400 points. There will be a live scoreboard displaying each team’s progress and placement; thus, teams will receive almost immediate feedback for sets they submitted. 

              </p>
            </div>
          </div>
        </div>

        {/* Scoring */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Scoring & Awards</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Individual Score</h3>
              <p className="text-gray-600 text-sm">The Speed Round consists of 15 problems worth 10 points each, for a total of 150 points. The Accuracy Round consists of 10 problems worth 15 points each, for a total of 150 points. A contestant’s individual score is the sum of their scores on the Speed and Accuracy Rounds, so each contestant can score up to 300 points individually.</p> 

            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Team Sweepstakes Score</h3>
              <p className="text-gray-600 text-sm">The Team Round consists of 10 problems worth 40 points each, for a total of 400 points. The Guts Round consists of 27 problems each weighted based on its difficulty, for a total of 400 points. A team’s final sweepstakes score is calculated as the sum of its individual scores (out of 1200), Team Round score (out of 400), and Guts Round score (out of 400), for a maximum of 2000 points. 
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Tiebreakers</h3>
            <p className="text-gray-600 text-sm">
            Within a round (Speed/Accuracy/Team/Guts), ties are broken by the last problem solved by the individuals/teams. If a tie persists, we consider the second last problem solved, and so on. If the individuals/teams in consideration solve the same set of problems, a tie will be declared.

If two teams have the same total score, ties will be broken by their score on the Team Round. If a tie persists, ties are broken by their score on the Guts Round. If a tie persists, ties are broken by their highest-scoring members. 

            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-green-700 font-medium">Medals will be awarded to the top 5 contestants in each individual round, and the top 5 teams overall.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-md p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Compete?</h2>
          <a href="/registration" className="inline-block bg-white text-green-600 font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm mt-2">
            Register Your Team
          </a>
        </div>
      </div>
    </div>
  );
}
