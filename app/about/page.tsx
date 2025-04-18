export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">About JRMT</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            JRMT is a free middle school math contest organized by the Jackson-Reed High School Math Club with the help of other passionate high schoolers around the country. Our team consists of avid problem-writers who have excelled at national competitions such as the AMC, AIME, and USA Math Olympiad.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Can I attend?</h3>
              <p className="text-gray-600 text-sm">
                JRMT is for middle schoolers of all experience levels. You may participate as long as you are not in high school yet (even if you are in elementary school!). High schoolers can volunteer as organizers!
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-lg font-semibold text-green-600 mb-2">How much does it cost?</h3>
              <p className="text-gray-600 text-sm">
                Nothing! JRMT is completely free to attend.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Team size?</h3>
              <p className="text-gray-600 text-sm">
                Teams have up to 4 members. Incomplete teams (2 or fewer) will be merged with others.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Is lunch provided?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Free pizza for all contestants and chaperones.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              More questions? Contact <a href="mailto:jacksonreedmathclub@gmail.com" className="text-green-600 hover:text-green-800 font-medium">jacksonreedmathclub@gmail.com</a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-md p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Challenge Yourself?</h2>
          <a href="/registration" className="inline-block bg-white text-green-600 font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm mt-2">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}