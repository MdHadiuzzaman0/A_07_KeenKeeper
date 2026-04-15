import React, { useContext, useEffect, useState } from 'react';
import { DataCenter } from './MotherProvider';
import { useNavigate } from 'react-router';

const Timeline = () => {

    const { clickedData, setClickedData } = useContext(DataCenter);
    // console.log(clickedData);

    const navigate = useNavigate();

    const [sorted, setSorted] = useState('');
    const [modifiedData, setModifiedData] = useState([]);
    console.log(modifiedData);
    

    const [name, setName] = useState('')
    function handle(e){
        e.preventDefault();
        const value = e.target.name.value;
    const searchValue = value.toLowerCase().trim();
    // console.log(searchValue);
    const name = clickedData.filter(data => data.name.toLowerCase().includes(searchValue) || data.act.toLowerCase().includes(searchValue) || data.displayTime.toLowerCase().includes(searchValue));
    setModifiedData(name)
    }
    // console.log(name);

    
    useEffect(() => {
        if (sorted === '') {
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

    }, [sorted, clickedData, name]);
    

    return (
        <div className='px-25'>
            <h1 className="text-3xl font-bold text-gray-900 text-center my-8">Timeline</h1>
            <p className='text-center text-gray-500 mb-5'>Here you can see all your interactions with your friends. You can also sort them by type or date.</p>

            <div className='flex justify-between my-10'>          
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn">Sorted by {sorted} </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setSorted('')}><a>All</a></li>
                    <li onClick={() => setSorted('Call')}><a>Call</a></li>
                    <li onClick={() => setSorted('Text')}><a>Text</a></li>
                    <li onClick={() => setSorted('Video')}><a>Video call</a></li>
                    <li onClick={() => setSorted('Date')}><a>Date</a></li>
                </ul>
            </div>

            <form className='flex' onSubmit={handle}>
               <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               <input type="submit" value='Search' className="btn btn-primary"/>
            </form>
            </div>


            <div>
                {
                    modifiedData.length === 0 && <h1 className='text-2xl text-center font-semibold border rounded-xl p-19 bg-base-300'>No interactions yet! <br /> Please go to home and interact with your friends.</h1>
                }

                {
                    modifiedData.map((data, index) =>
                        <div key={index} className='border border-gray-200 p-4 rounded-lg mb-3 bg-white'>
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