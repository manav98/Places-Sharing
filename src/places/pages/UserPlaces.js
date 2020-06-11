import React from 'react'
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES =
    [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky skrapers in the world!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001, United States',
            location:
            {
                lat: 40.7484405,
                log: -73.9878531
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Taj Mahal',
            description: '17th-century, Mughal-style, marble mausoleum with minarets, a mosque & famously symmetrical gardens.',
            imageUrl: 'https://lh3.googleusercontent.com/RfaTa3bsm8zmVJYznMHpncW4HCNPmPf3fstlmU5hNNm-8j3Mz8nJjUj_avt1Qi0',
            address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
            location: {
                lat: 27.1751448,
                log: 78.0399535
            },
            creator: 'u2'
        }
    ];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator == userId)
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;