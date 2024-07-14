import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Scholarship type</h2>
      <label><input type="checkbox" checked /> Full Scholarship</label>
      <label><input type="checkbox" /> Part Scholarship</label>
      <label><input type="checkbox" /> Merit based</label>
      <h2>Schools</h2>
      <label><input type="checkbox" checked /> University of Ghana</label>
      <label><input type="checkbox" /> Ashesi University</label>
      <label><input type="checkbox" /> Academic City University College</label>
    </aside>
  );
};

export default Sidebar;
