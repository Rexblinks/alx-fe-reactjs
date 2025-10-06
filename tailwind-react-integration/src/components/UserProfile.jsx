import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">Age: {age}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
}

export default UserProfile;
