import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryItem = ({ isActive = false, name, onClick }) => {
  return (
    <div className={`nav-link ${isActive ? "active fw-bolder" : null}`}>
      <NavLink
        to={`/${name}`}
        aria-current="page"
        onClick={() => onClick(name)}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default CategoryItem;



