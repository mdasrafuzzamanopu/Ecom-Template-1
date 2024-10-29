import React, { useEffect } from 'react';
import { setTitle } from '../../utils/utils';

function AboutUs() {
    useEffect(() => {
        setTitle('About Us');
    }, []);
    
    return (
        <div>
            <h1>Welcome to Foodieland About Us!</h1>
        </div>
    );
}

export default AboutUs;