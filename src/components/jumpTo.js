import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

const JumpTo = () => {
  const [query, setQuery] = useState('');
  const onChange = event => setQuery(event.target.value);
  const navigate = useNavigate();

  const paths = ['one', 'monkey', 'bear', 'mouse', 'dog'];

  const routeChange = (newPath) =>{ 
    let path = newPath;
    paths.includes(path) ? navigate(`levels/${path}`) : navigate('/404');
  }
  return (
    <Input 
      action={{
        icon: 'search',
        onClick: () => {routeChange(query)}
      }}
      value={query}
      onChange={onChange}
      placeholder='Level Code'
    />
  );
}

export default JumpTo;
