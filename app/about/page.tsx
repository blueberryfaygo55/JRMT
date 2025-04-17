export default function AboutPage() {
    return (
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-6">
          JRMT is a free middle school math contest organized by the Jackson-Reed High School Math Club with the help of other passionate high schoolers around the country. Our team consists of avid problem-writers who have excelled at national competitions such as the AMC, AIME, and USA Math Olympiad. Jackson-Reed High School is the largest public school in Washington DC.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <strong>Q: Can I attend?</strong>
            <p>A: JRMT is a math competition for middle schoolers of all experience levels. If you're not in high school, we'd love to have you as a volunteer/contest organizer!</p>
          </div>
          <div>
            <strong>Q: How much does it cost to attend?</strong>
            <p>A: Nothing! JRMT is completely free to attend.</p>
          </div>
          <div>
            <strong>Q: How many members should be on a team?</strong>
            <p>A: Teams are up to 4 members. Incomplete teams must have at least 3 people; if you register with 2 or less people, your team will be merged with other incomplete teams.</p>
          </div>
          <div>
            <strong>Q: Is lunch provided?</strong>
            <p>A: Yes! We provide free pizza for all contestants and adult chaperones.</p>
          </div>
          <div>
            <strong>Q: I have more questions!</strong>
            <p>A: Please reach out to jacksonreedmathclub@gmail.com for any other concerns, and we will get back to you as soon as possible.</p>
          </div>
        </div>
      </main>
    );
  }
  