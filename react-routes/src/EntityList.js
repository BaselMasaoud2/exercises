import React from 'react';
import { Link } from 'react-router-dom';

const EntityList = ({ entities, category }) => {
  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {entities.map(entity => (
          <li key={entity.name}>
            <Link to={`/wiki/${category}/${entity.name}`}>{entity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntityList;
