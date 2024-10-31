import React, { useEffect } from 'react';
import { setTitle } from '../utils/utils';
import SubscribeSection from '../components/SubscribeSection';

function Home() {
  useEffect(() => {
    setTitle('Home');
  }, []);

  return (
    <div className=''>
      <h1>Welcome to Foodieland!</h1>

      <SubscribeSection/>
    </div>
  );
}

export default Home;
