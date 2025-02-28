import profileimg from '../assets/profile.png';

const Navbar = () => {
  return (
    <nav className="max_padd_container flex justify-between items-center bg-white py-3 px-6 shadow-md">
      <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm font-medium">Welcome, Admin</span>
        <img src={profileimg} alt="Profile" className="h-10 w-10 rounded-full border-2 border-gray-300" />
      </div>
    </nav>
  );
};

export default Navbar;
