// src/components/SearchBar.jsx
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ searchTerm, setSearchTerm, searchRecipes, loading }) => {
  return (
    <form onSubmit={searchRecipes} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recipes..."
          className="w-full py-4 px-6 pr-12 rounded-full bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            <FiSearch size={24} />
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;