import React from "react";

function Sidebar() {
          return(
          <div className="w-1/5 bg-gray-800 text-white p-4 h-screen">
                    <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
                    <ul className='space-y-4'>
                    <li><a href="#" className="block hover:text-[#CEDEBD]">Contact</a></li>
                    <li><a href="#" className="block hover:text-[#CEDEBD]">Charts & Bars</a></li>
                    <li><a href="#" className="block hover:text-[#CEDEBD]">Sidebar</a></li>
                    </ul>
          </div>
          )
}

export default Sidebar;