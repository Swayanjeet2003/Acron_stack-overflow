import { useState } from 'react';
import Header from './Header/Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import QuestionsList from './QuestionList';
const Layout = () => {

    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Header setSearchQuery={setSearchQuery} />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar start */}
            
            <LeftSidebar  />
            
        {/* Left Sidebar end*/}




        {/* Main Content Section start */}

        <main className="w-4/6 bg-white p-6 space-y-6">

        <QuestionsList searchQuery={searchQuery} />
          {/* main section end */}
          
        </main>





        {/* Right Sidebar */}
        <RightSidebar/>



      </div>
    </div>
  );
};

export default Layout;
