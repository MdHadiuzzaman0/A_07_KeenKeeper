import React, { use, useContext } from 'react';
import { DataCenter } from './MotherProvider';
import FriendDetails from './FriendDetails';
import Friend from './Friend';

const Friends = () => {
    const friendsData = useContext(DataCenter);
    const friends = use(friendsData.friendsPromise);
    // console.log(friendsData, friends);
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;