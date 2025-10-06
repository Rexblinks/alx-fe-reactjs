import { Outlet, Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Profile Page</h1>
      <nav className="my-4 space-x-4">
        <Link className="text-blue-500" to="details">Details</Link>
        <Link className="text-blue-500" to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
}
