export default function Schedule() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
            Event Schedule
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Jackson-Reed Math Tournament will be hosted in person from 2:15pm-7pm on October 25th at Jackson-Reed High School, located at 3950 Chesapeake Street, NW, Washington, DC 20016. Volunteers will be stationed at the main gate to guide you to check-in.
          </p>
        </div>

        {/* Location Image */}
        <div className="flex justify-center my-10">
          <img
            src="/image/image.png"
            alt="Event Location"
            className="w-full sm:w-2/3 rounded-xl shadow-lg"
          />
        </div>

        {/* Lunch Notice */}
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-10 rounded-lg shadow-sm text-center">
          <p className="text-green-700 font-medium">
            Thanks to our generous sponsors, <span className="font-semibold">FREE DINNER</span> (Cheese and Pepperoni Pizza) will be provided to all contestants. The schedule below is subject to change depending on contest-day developments.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                ['2:15 PM – 2:45 PM', 'Check In (First Floor)'],
                ['2:45 PM – 3:15 PM', 'Speed Round (Fourth Floor)'],
                ['3:15 PM – 3:20 PM', 'Break 1'],
                ['3:20 PM – 4:10 PM', 'Accuracy Round (Fourth Floor)'],
                ['4:10 PM - 4:15 PM', 'Break 2'],
                ['4:15 PM – 4:55 PM', 'Team Round'],
                ['4:55 PM – 5:45 PM', 'Pizza Dinner (First Floor)'],
                ['5:45 PM – 6:45 PM', 'Guts Round (First Floor)'],
                ['6:45 PM – 7:00 PM', 'Award Ceremony (First Floor)']
              ].map(([time, event], i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{time}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-md p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Mark Your Calendar!</h2>
          <a
            href="/registration"
            className="inline-block bg-white text-green-600 font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm mt-2"
          >
            Register Your Team
          </a>
        </div>
      </div>
    </div>
  );
}
