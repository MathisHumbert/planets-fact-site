import React from 'react';
import data from '../data.json';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen && 'open'}`}>
      {data.map((item, index) => {
        return (
          <Link
            to={`/planet/${item.name}`}
            className="sidebar-item"
            key={index}
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="sidebar-planet">
              <span className={`round-planet ${item.name}`}></span>
              <h2>{item.name}</h2>
            </div>
            <AiOutlineRight className="arrow-right" />
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
