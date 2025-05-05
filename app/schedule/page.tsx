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
            The Jackson-Reed Math Tournament will be hosted in person sometime in <Fall 2025> at Jackson-Reed High School, located at 3950 Chesapeake Street, NW, Washington, DC 20016. Volunteers will be stationed at the main gate to guide you to check-in.
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
            Thanks to our generous sponsors, <span className="font-semibold">FREE LUNCH</span> (Cheese and Pepperoni Pizza) will be provided to all contestants.
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
                ['9:30 AM – 10:00 AM', 'Check In'],
                ['10:00 AM – 10:25 AM', 'Speed Round'],
                ['10:25 AM – 10:40 AM', 'Break 1'],
                ['10:40 AM – 11:30 AM', 'Accuracy Round'],
                ['11:30 AM – 1:00 PM', 'Lunch Break'],
                ['1:00 PM – 1:40 PM', 'Team Round'],
                ['1:40 PM – 2:00 PM', 'Break 2'],
                ['2:00 PM – 2:30 PM', 'Guts Round'],
                ['2:30 PM – 3:15 PM', 'Award Ceremony']
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
