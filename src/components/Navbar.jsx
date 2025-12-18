import { Menu } from 'lucide-react';

const Navbar = ({ currentPage, navigate }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Menu className="w-6 h-6" />
            <span className="text-xl font-bold">TaskBoard</span>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/')}
              className={`px-4 py-2 rounded transition ${
                currentPage === '/' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;