import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitem?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])
    return (
        <div>
            <h2>Total Items:{myitems.length}</h2>

        </div>
    );
};

export default MyItems;