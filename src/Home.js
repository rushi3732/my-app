//import useState hook to create menu collapse state
import React, { useState } from "react";
import{Link,Route ,Routes,BrowserRouter as Router} from "react-router-dom"
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
//import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
//import "./Header.css";
//import Category from "./Category";
import Favourite from "./Favourite";
//import Author from "./Author";
//import Dashboard from "./Dashboard";

const Home= () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
  
     <div>
  
      <div id="header">
     
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>Dashboard
         
              </MenuItem>
              <MenuItem icon={<FaList />}>
              Category
           
             </MenuItem>
              <MenuItem icon={<FaRegHeart />}>
              Favourite
              
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>
              Author
              </MenuItem>
              <MenuItem icon={<BiCog />}>
            Settings
              </MenuItem>
            </Menu>
          
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
         
        </ProSidebar>
     
   
   </div>
   <div>{/*}
   <Routes>
            <Route  exact path="/" element={<Dashboard/>} />
            <Route  exact  path='/category' element={<Category/>}/>
            <Route  exact  path='/favourite' element={<Favourite/>}/>
            <Route  exact  path='/author' element={<Author/>}/> 
            <Route  exact  path='/settings' element={<Favourite/>}/>
   </Routes>*/}
   </div>
   
      </div>
    
    
  );
};

export default Home


















{/*import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";

export default function Home() {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

  return (
    <div>
      <h1>Which service are you interested in?</h1>
      <Dropdown
        formLabel="Choose a service"
        buttonText="Send form"
        onChange={handleSelect}
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see options" />
        <Option value="Option 1" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown>
      <p>You selected {optionValue} </p>
    </div>
  );
}*/}