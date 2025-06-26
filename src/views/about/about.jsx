export default function About() {
  return (
    <div className="min-h-screen text-[#0f172a] px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700">
          About This App
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to <span className="font-semibold text-blue-600">FocusBoard</span> — a simple yet powerful todo application
          designed to help you plan, track, and complete your tasks with ease.
        </p>

        <div className="bg-white rounded-xl shadow-xl border border-blue-200 p-6 transition hover:shadow-blue-500/40 hover:scale-[1.02] duration-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">✨ Key Features:</h2>
          <ul className="text-left text-gray-700 space-y-2 list-disc list-inside">
            <li>Add tasks with a title, description, and status</li>
            <li>Edit or delete tasks any time</li>
            <li>View tasks filtered by status: Not Started, In Progress, Completed</li>
            <li>Clean and beautiful UI with glowing blue highlights</li>
          </ul>
        </div>

        <p className="mt-10 text-gray-500 text-sm italic">
          Built with 💙 by Joy using React, TailwindCSS, and Context API
        </p>
      </div>
    </div>
  );
}
