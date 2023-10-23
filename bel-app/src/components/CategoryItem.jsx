import React from 'react';

const CategoryItem = ({ isActive = false, name, onClick }) => {
  return (
    <span className={`nav-link ${isActive ? "active fw-bolder" : ""}`}>
      
        {name}
     
    </span>
  );
};

export default CategoryItem;







