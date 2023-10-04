import React from 'react';

const CategoryItem = ({ isActive = false, name, onClick }) => {

  return (
    <a
      className={`nav-link ${isActive ? "active fw-bolder" : null}`}
      aria-current="page"
      href="#"
      onClick={() => onClick(name)} 
    >
      {name}
    </a>
  );
};

export default CategoryItem;

