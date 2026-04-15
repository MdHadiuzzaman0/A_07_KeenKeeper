import React, { useContext, useEffect, useState } from 'react';
import { DataCenter } from './MotherProvider';
import { useNavigate } from 'react-router';

const Timeline = () => {

    const { clickedData, setClickedData } = useContext(DataCenter);
    console.log(clickedData);

    const navigate = useNavigate();

    const [sorted, setSorted] = useState('');
    const [modifiedData, setModifiedData] = useState([]);

    useEffect(() => {
        if (sorted ===  '') {
            const sortedData = [...clickedData];
            setModifiedData(sortedData);
        }
        else if (sorted === 'Call') {
            const sortedData = [...clickedData].filter(data => data.act === 'Call');
            setModifiedData(sortedData);
        }
        else if (sorted === 'Text') {
            const sortedData = [...clickedData].filter(data => data.act === 'Text');
            setModifiedData(sortedData);
        }
        else if (sorted === 'Video') {
            const sortedData = [...clickedData].filter(data => data.act === 'Video');
            setModifiedData(sortedData);
        }
        else if (sorted === 'Date') {
            const sortedData = [...clickedData].sort((a, b) => b.fullTime - a.fullTime);
            setModifiedData(sortedData);
        }

    }, [sorted, clickedData]);


    return (
        <div className='px-15'>
            <h1 className="text-3xl font-bold text-gray-900 text-center my-8">Timeline</h1>

            <div className="dropdown dropdown-right mb-10">
                <div tabIndex={0} role="button" className="btn m-1">Sorted by {sorted} </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>setSorted('')}><a>All</a></li>
                    <li onClick={()=>setSorted('Call')}><a>Call</a></li>
                    <li onClick={()=>setSorted('Text')}><a>Text</a></li>
                    <li onClick={()=>setSorted('Video')}><a>Video call</a></li>
                    <li onClick={()=>setSorted('Date')}><a>Date</a></li>
                </ul>
            </div>

            <div>
                {/* {
                
                    clickedData.map((data, index) =>
                        <div key={index} className='border border-gray-200 p-4 rounded-lg mb-3'>
                            {data.act === "Call" ?
                                <div>
                                    <p className='text-green-500 text-2xl font-semibold'> <img src="/call.png" className='inline w-5' alt="" /> Calling to {data.name}</p>
                                    <h3 className='text-lg pl-7 mt-1'>{data.time}</h3>
                                </div> :

                                data.act === "Text" ?
                                    <div>
                                        <p className='text-amber-500 text-2xl font-semibold'> <img src="/text.png" className='inline w-5' alt="" /> Sending text to {data.name} </p>
                                        <h3 className='text-lg pl-7 mt-1'>{data.time}</h3>
                                    </div> :

                                    <div>
                                        <p className='text-purple-500 text-2xl font-semibold'> <img src="/video.png" className='inline w-5' alt="" /> Video call with {data.name} </p>
                                        <h3 className='text-lg pl-7 mt-1'>{data.time}</h3>
                                    </div>}

                        </div>)
                
                } */}
                
                {
                    modifiedData.map((data, index) =>
                        <div key={index} className='border border-gray-200 p-4 rounded-lg mb-3'>
                            {data.act === "Call" ?
                                <div>
                                    <p className='text-green-500 text-2xl font-semibold'> <img src="/call.png" className='inline w-5' alt="" /> Calling to {data.name}</p>
                                    <h3 className='text-lg pl-7 mt-1'>{data.displayTime}</h3>
                                </div> :

                                data.act === "Text" ?
                                    <div>
                                        <p className='text-amber-500 text-2xl font-semibold'> <img src="/text.png" className='inline w-5' alt="" /> Sending text to {data.name} </p>
                                        <h3 className='text-lg pl-7 mt-1'>{data.displayTime}</h3>
                                    </div> :

                                    <div>
                                        <p className='text-purple-500 text-2xl font-semibold'> <img src="/video.png" className='inline w-5' alt="" /> Video call with {data.name} </p>
                                        <h3 className='text-lg pl-7 mt-1'>{data.displayTime}</h3>
                                    </div>}

                        </div>)
                }
            </div>

            <div className="flex flex-col md:flex-row justify-center mx-auto w-5/12  gap-3 mt-15">
            <button onClick={() => navigate(-1)} className='btn btn-warning w-50 text-xl p-7'>Go Back</button>
            <button onClick={() => setClickedData([])} className='btn btn-warning w-50  text-xl p-7'>Clear All</button>
            </div>
        </div>
    );
};

export default Timeline;