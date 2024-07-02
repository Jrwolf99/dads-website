
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Welcome to my portfolio website. Here you can find my projects and contact information.</p>
      </header>
      
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Project 1</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Description of Project 1.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Project 2</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Description of Project 2.</p>
        </div>
      </section>
      
      <footer className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-300">&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
