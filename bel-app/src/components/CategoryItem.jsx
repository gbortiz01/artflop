import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryItem = ({ isActive = false, name, onClick }) => {
  return (
    <span className={`nav-link ${isActive ? "active fw-bolder" : ""}`}>
      <NavLink
        to={`/${name}`}
        aria-current="page"
        onClick={() => onClick(name)}
      >
        {name}
      </NavLink>
    </span>
  );
};

export default CategoryItem;






