export default function ContestPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Contest Format</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Jackson-Reed Math Tournament (JRMT) is a free middle school math competition designed for students grades 6-8 hosted in-person at Jackson-Reed High School. We are pleased to announce that JRMT will be hosted for the first time in 2025!
          </p>
        </div>

        {/* Key Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="text-green-600 text-xl font-bold mb-1">May 17, 2025</div>
              <div className="text-gray-500 text-sm">Saturday</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-xl font-bold mb-1">9:30 AM - 4:00 PM</div>
              <div className="text-gray-500 text-sm">Check-in at main gate</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-xl font-bold mb-1">Free Pizza</div>
              <div className="text-gray-500 text-sm">Provided at lunch</div>
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
                25-minute, 15-problem individual test. All answers are single values. Problems are worth 10 points each (150 total) and arranged in increasing difficulty.
              </p>
            </div>

            {/* Round 2 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-green-600 mb-1">Accuracy Round</h3>
              <p className="text-gray-600 text-sm">
                50-minute, 10-problem individual test. All answers are single values. Problems are worth 15 points each (150 total) and arranged in increasing difficulty.
              </p>
            </div>

            {/* Round 3 */}
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-green-600 mb-1">Team Round</h3>
              <p className="text-gray-600 text-sm">
                40-minute, 10-problem collaborative event. Problems are worth 40 points each (400 total) and arranged in increasing difficulty.
              </p>
            </div>

            {/* Round 4 */}
            <div className="border-l-4 border-green-700 pl-4">
              <h3 className="text-lg font-semibold text-green-600 mb-1">Guts Round</h3>
              <p className="text-gray-600 text-sm">
                60-minute team event with sets of 3 problems. Teams can complete up to 9 sets (27 problems total) with a live scoreboard. Problems are weighted by difficulty for a total of 400 points.
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
              <p className="text-gray-600 text-sm">Speed (150) + Accuracy (150) = <span className="font-bold">300 points max</span></p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Team Score</h3>
              <p className="text-gray-600 text-sm">Individual Scores (1200) + Team Round (400) + Guts Round (400) = <span className="font-bold">2000 points max</span></p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Tiebreakers</h3>
            <p className="text-gray-600 text-sm">
              Within rounds: Last problem solved, then second-last, etc. For team totals: Team Round score, then Guts Round, then highest-scoring members.
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