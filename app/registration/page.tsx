export default function RegistrationPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
          Registration
        </h1>

        <p className="text-gray-700 text-md mb-6">
          JRMT is scheduled to happen on Saturday, October 25th, 2025 at Jackson-Reed High School in Washington DC. 
        </p>

        {/* Button for opening form in new tab */}
        <a
          href="https://docs.google.com/forms/d/1fR02UP6CDyrfKxdANEt5UEwiTpnbMhLcO-xU1StHk2Y/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
        >
          Open Registration Form
        </a>

        {/* Embedded form */}
        <iframe
          src="https://docs.google.com/forms/d/1fR02UP6CDyrfKxdANEt5UEwiTpnbMhLcO-xU1StHk2Y/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
