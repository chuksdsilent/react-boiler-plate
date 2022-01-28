import React from "react";
import { SidebarStyles } from "../styles/SidebarStyles";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <SidebarStyles>
      <div className="__sidebar">
        <ul>
          <li>
            d<Link to="/user/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/user/transaction/pending">Pending</Link>
          </li>
          <li>
            <Link to="/user/transaction/completed">Completed</Link>
          </li>
          <li>
            <Link to="/user/transaction/cancelled">Cancelled</Link>
          </li>
          <li>
            <Link to="/user/transaction/logout">Logut</Link>
          </li>
        </ul>
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
