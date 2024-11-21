import React from "react";

const RightSidebar = () => {
  return (
    <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
      
    <div className="mb-6">
      <h3 className="text-lg font-bold  ml-2 text-gray-700 mb-4">The Overflow Blog</h3>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3 text-sm">
          <div>
              <img src="https://cdn.icon-icons.com/icons2/2783/PNG/512/pen_edit_icon_177296.png" alt="" className="h-4 w-4  m-3"/>
          </div>
          <span >The unexpected benefits of explaining to others</span>
        </li>
        <li className="flex items-start space-x-3 text-sm">
          <div>
          <img src="https://cdn.icon-icons.com/icons2/2783/PNG/512/pen_edit_icon_177296.png" alt="" className="h-4 w-4 m-3"/>
          </div>
          <span>Podcast 354: Building for AR with Niantic Labs Reality SDK</span>
        </li>
      </ul>
    </div>


    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 ml-2">Featured & Meta</h3>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFf_OJmRtsGeWPZFt12mvNxkrRmsjUzKsNKw&s" alt="" className="h-4 w-4 m-3"/>
          </div>
          <span className="text-sm">Meta release of collectives on Stack Overflow</span>
        </li>
      </ul>
    </div>


    <div className="mb-6">
      <h3 className=" ml-2 text-lg font-semibold text-gray-700 mb-4">Hot Meta Posts</h3>

      
    </div>


    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Custom Filter</h3>
      <input type="text" placeholder="add custom filter " className="px-2 py-3" />
    </div>
  </div>
  );
};

export default RightSidebar;
