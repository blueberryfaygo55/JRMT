export default function RegistrationPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Registration
        </h1>

        <p className="text-gray-700 text-md mb-6">
          Please complete the registration form by <span className="font-medium text-indigo-600">Wednesday, May 14th</span> to reserve your spot for JRMT 2025.
        </p>

        <a
          href="https://forms.gle/your-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-colors duration-200"
        >
          Fill Out Registration Form
        </a>
      </div>
    </div>
  );
}