function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About"
          className="w-full md:w-1/2 rounded-lg object-cover shadow"
        />
        <div>
          <h2 className="text-3xl font-extrabold text-blue-600 mb-4">Home Page</h2>
          <p className="text-gray-700 text-lg">
            Welcome to the React Route Project! This is the Home page where you can learn more
            about our goals and design philosophy using modern tools and responsive layouts.
          </p>
        </div>
      </div>
    </div>
    


  );
}
export default Home;

