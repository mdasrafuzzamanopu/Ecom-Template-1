import React, { useEffect } from 'react';
import { setTitle } from '../utils/utils';

function Home() {
  useEffect(() => {
    setTitle('Home');
  }, []);

  return (
    <div>
      <h1>Welcome to Foodieland!</h1>
    </div>
  );
}

export default Home;
