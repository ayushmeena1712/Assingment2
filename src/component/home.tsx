import React from "react";
import Header from "./header";
import Sidebar from "./sideBar";
import createContact from "./CreateContact";

function Home(){
          return(
                    <div className="Home">
                    < Header />
                    <div className="flex h-screen bg-gray">
                      < Sidebar/>
                      <div className='block justify-center items-start w-screen mt-[5rem]'>
                      <button className="flex mx-auto w-lg px-[1rem] bg-[#5C5470] hover:bg-red-600 text-white font-semibold h-[2rem] rounded-md shadow-md transition duration-300 ease-in-out">
                  Create Contact</button>
                        <label className="flex p-3  rounded-lg shadow-lg my-[5rem] mx-auto h-[100px] w-[200px] r-6 " >No Contact Found Please add Contact from Create Contact Button.</label>
                      </div>
                    </div>
                  </div>
                );
}

export default Home;