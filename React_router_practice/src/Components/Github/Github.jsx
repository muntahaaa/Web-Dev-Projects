import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null); // Initialize with null to handle loading state

    useEffect(() => {
        fetch('https://api.github.com/users/muntahaaa')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!data) {
        return <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Loading...</div>;
    }

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img className="text-center" src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    );
}

export default Github;
