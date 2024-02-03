import React from 'react';

const Home = ({ categories }) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;