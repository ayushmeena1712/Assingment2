import React from "react";
import Header from "./header";
import Sidebar from "./sideBar";

function createContact() {
          return (
            <div className="createContact">
              <Header />
              <div className="flex">
                <Sidebar />
                <div className="inline justify-start w-screen text-center my-[2rem] font-extrabold "><h1 className="text-[1.5rem]">Create Contact Page</h1></div>
                
              </div>
            </div>
          );
        }
        
export default createContact;
        