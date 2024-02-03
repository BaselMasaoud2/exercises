import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  return (
    <div>
      <h1>Category List</h1>
      <ul>
        <li>
          <Link to="/wiki/potions">Potions</Link>
        </li>
        <li>
          <Link to="/wiki/charms">Charms</Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
