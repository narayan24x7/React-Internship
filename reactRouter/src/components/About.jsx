function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full flex flex-col md:flex-row items-center gap-6">
        <img
          src=""
          alt="About"
          className="w-full md:w-1/2 rounded-lg object-cover shadow"
        />
        <div>
          <h2 className="text-3xl font-extrabold text-blue-600 mb-4">Ad Page</h2>
          <p className="text-gray-700 text-lg">
            Welcome to the Tailwind Project! This is the Home page where you can learn more
            about our goals and design philosophy using modern tools and responsive layouts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
