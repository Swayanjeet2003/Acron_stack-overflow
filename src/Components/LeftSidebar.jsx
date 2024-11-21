

const LeftSidebar = () => {
  return (

    <aside className="sidebar w-[200px] bg-gray-100 shadow-md h-full p-4 hidden md:block">
      <nav>
        <ul>

          <li className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
            <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
             🏠 Home
            </div>
            <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
          </li>


          <li>
            <div className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
               🌐 Public
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                 Questions
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Tags
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Users
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
            </ul>
          </li>

          <li>
            <div className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
               <div className="flex ">
               <img src="https://cdn4.iconfinder.com/data/icons/vectory-symbols/40/star_rounded-512.png" alt="" className="h-4 w-4 m-2 "/>
               Collectives
               </div>
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                    
                  Explore Jobs
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              
            </ul>
          </li>

          <li>
            <div className="group relative text-base font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
               
                <div className="flex">
                <img src="https://static.thenounproject.com/png/4626895-200.png" alt="" className="h-4 w-4 m-2 "/>
                
                Find Jobs
                </div>
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-sm text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Jobs
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              <li className="group relative text-sm text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Companies
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
            </ul>
          </li>

          
          <li>
            <div className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                <div className="flex">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCBBQ99OMYu7ClUWur_vJWvZCScdgsrxxng&s" alt="" className="h-4 w-4  m-2" />
                Teams
                </div>
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  + Create a Team
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
    
    
  )
}

export default LeftSidebar




