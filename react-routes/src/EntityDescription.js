import { useParams } from 'react-router-dom';

const EntityDescription = () => {
  const { category, item } = useParams();

  return (
    <div>
      <h2>{item} details from {category}</h2>
    </div>
  );
}

export default EntityDescription;
