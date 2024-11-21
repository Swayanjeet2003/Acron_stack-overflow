import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    } else {
      onSearch(""); // Reset search query when empty
    }
  };
  

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md h-[100px]">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg"
          alt="StackOverflow Logo"
          className="h-10"
        />
      </div>

      {/* Search Section */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Your Answers Here..."
          className="w-[600px] px-4 py-2 pr-10 text-sm border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
          alt="Search Icon"
          onClick={handleSearchSubmit}
          className="absolute right-3 h-4 w-4 cursor-pointer"
        />
      </div>

      {/* Navigation Section */}
      <div className="flex items-center space-x-6">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
          Products
        </a>
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <img
            src="https://www.shutterstock.com/image-vector/champion-cup-outline-icon-vector-600nw-1917390995.jpg"
            alt="Icon 2"
            className="w-8 h-8 text-gray-500"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2910/2910760.png"
            alt="Icon 3"
            className="w-5 h-5 text-gray-500"
          />
        </div>
        {/* Profile Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfb_mGGQfD8gPJdLwzVGdMH5B_WxftqIiisg&s"
          alt="Profile"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </div>
  );
};

export default Header;
