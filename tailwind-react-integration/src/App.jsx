import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center bg-blue-100 space-y-6">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome to the Recipe Sharing Platform!
        </h1>

        <UserProfile
          name="Simon Odoh"
          age={25}
          bio="Aspiring frontend developer"
        />

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <p className="text-gray-700 mb-4">Click the button to increase the count:</p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Count is {count}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
