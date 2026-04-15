import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const DataCenter = createContext();

const MotherProvider = ({ children }) => {
    const friendsPromise = fetch('/data.json').then(res => res.json());

    const [clickedData, setClickedData] = useState([]);
    const [call, setCall] = useState([]);
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);

    function handleBtn(action, selectedFrnd) {
        const result = {
            act: action, name: selectedFrnd.name, displayTime: new Date().toLocaleString('en-US', {weekday: 'long',month: 'long',day: 'numeric',hour: '2-digit',minute: '2-digit'
            }), fullTime: new Date().getTime()
        };

        const isExit = clickedData.find(data => data.name === selectedFrnd.name && data.act === action);

        if (isExit) {
            toast.error("Already Applied for this action!");
            return;
        }
        else {
            setClickedData([...clickedData, result]);

            if (action === 'Call') {
                toast.success(`Calling to ${selectedFrnd.name}`);
                setCall([...call, action]);
            }
            if (action === 'Text') {
                toast.success(`Sending text to ${selectedFrnd.name}!`);
                setText([...text, action]);
            }
            if (action === 'Video') {
                toast.success(`Starting video call with ${selectedFrnd.name}!`);
                setVideo([...video, action]);
            }
        }
    }

     //console.log(call.length, text.length, video.length);

    useEffect

    const value = {
        friendsPromise, clickedData, setClickedData, handleBtn, call, text, video
    }

    return <DataCenter.Provider value={value}>
        {children}
    </DataCenter.Provider>;
};

export default MotherProvider;