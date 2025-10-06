import React from 'react';

function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Recipe Sharing Platform</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">Recipes</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
