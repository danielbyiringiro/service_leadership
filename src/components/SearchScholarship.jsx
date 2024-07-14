import React from 'react';
import './SearchScholarship.css';
import StudentImage from '../assets/college_student.jpeg'


const SearchScholarship = () => {
  return (
    <div className="content">
      <aside className="sidebar">
        <h2>Scholarship type</h2>
        <label>
          <input type="checkbox" checked readOnly /> Full Scholarship
        </label>
        <label>
          <input type="checkbox" /> Part Scholarship
        </label>
        <label>
          <input type="checkbox" /> Merit based
        </label>
        <h2>Schools</h2>
        <label>
          <input type="checkbox" checked readOnly /> University of Ghana
        </label>
        <label>
          <input type="checkbox" /> Arshesi University
        </label>
        <label>
          <input type="checkbox" /> Academic City University College
        </label>
      </aside>
      <div className="financial-aid">
        <img src={StudentImage} alt="Student" className="background-image" />
        <div className="title">Financial Aid</div>
      </div>
    </div>
  );
};

export default SearchScholarship;
