import React, { useContext } from 'react';
import { DataCenter } from './MotherProvider';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { IoArchive } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { BiMessageSquare, BiPhone, BiVideo } from 'react-icons/bi';


const FriendDetails = () => {
    const friends = useLoaderData();
    // console.log(firends);

    const navigation = useNavigate();
    function handleBack() {
        navigation(-1);
    }

    const { friendId } = useParams();
    const selectedFrnd = friends.find(frnd => frnd.id === parseInt(friendId));
    // console.log(selectedFrnd);

    const { handleBtn } = useContext(DataCenter);

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-15'> {selectedFrnd.name}</h1>

            <div className="px-10 py-10 rounded-2xl border border-gray-200 shadow-lg max-w-5xl mx-auto mt-6 bg-white">
                <div className="flex flex-col md:flex-row gap-8">

                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm w-full md:max-w-sm">

                        <div className="flex justify-center">
                            <img src={selectedFrnd.picture} className="w-24 h-24 rounded-full object-cover mb-4" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 text-center">{selectedFrnd.name}</h2>

                        <h3 className='mt-2 flex justify-center my-3'>{selectedFrnd.status === "overdue" ? <span className='text-red-500 bg-red-200 px-3 rounded-xl pb-1'>Overdue</span> : selectedFrnd.status === "almost due" ? <span className='text-green-500 bg-green-200 px-3 rounded-xl pb-1'>almost due</span> : <span className='text-green-300 pb-1 bg-green-700 px-3 rounded-xl'>on-track</span>}</h3>

                        <div className='flex gap-2 flex-wrap justify-center'>
                            {selectedFrnd.tags.map((tag, index) => <h3 key={index} className='text-md bg-green-300 rounded-xl px-3 py-1'>{tag}</h3>)}
                        </div>


                        <div className="text-center mt-4">
                            <p className="text-gray-700 italic text-md">"{selectedFrnd.note}"</p>
                            <p className="text-gray-400 text-sm mt-2">Email: {selectedFrnd.email}</p>
                        </div>

                        {/* অ্যাকশন বাটনসমূহ */}
                        <div className="mt-8 space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                <RiNotificationSnoozeLine /> Snooze 2 Weeks
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                <IoArchive /> Archive
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg text-red-500 hover:bg-red-50 text-sm font-medium">
                                <MdDeleteForever /> Delete
                            </button>
                        </div>
                    </div>


                    <div className="md:w-2/3">
                        <div className="flex justify-between gap-2 mb-6 text-center">
                            <div className='border border-base-300 shadow-sm px-7 py-2 rounded-xl'>
                                <p className="text-2xl font-bold mb-2">{selectedFrnd.days_since_contact}</p>
                                <p className="text-sm text-gray-500">Days Since Contact</p>
                            </div>

                            <div className='border border-base-300 shadow-sm px-9 py-2 rounded-xl'>
                                <p className="text-2xl font-bold mb-2">{selectedFrnd.goal}</p>
                                <p className="text-sm text-gray-500">Goal (Days)</p>
                            </div>

                            <div className='border border-base-300 shadow-sm px-7 py-2 rounded-xl'>
                                <p className="text-2xl font-bold mb-2">{selectedFrnd.next_due_date}</p>
                                <p className="text-sm text-gray-500">Next Due</p>
                            </div>
                        </div>

                        <div className="px-4 py-5 rounded-lg mb-6 flex justify-between items-center border border-base-300 shadow-sm">
                            <div>
                                <p className="font-semibold text-emerald-900 mb-1">Relationship Goal</p>
                                <p className="text-sm text-gray-600">{selectedFrnd.bio}</p>
                            </div>
                            <button className="border border-gray-300 px-2 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
                        </div>

                        <div className="flex gap-4 flex-col border border-base-300 shadow-sm rounded-lg p-6">
                            <h1 className=''>Quick Check-In</h1>
                            <div className="flex gap-3">
                                {[
                                    { name: 'Call', icon: <BiPhone size={18} /> },
                                    { name: 'Text', icon: <BiMessageSquare size={18} /> },
                                    { name: 'Video', icon: <BiVideo size={18} /> }
                                ].map(actionObj => (
                                    <button
                                        onClick={() => handleBtn(actionObj.name, selectedFrnd)}
                                        key={actionObj.name}
                                        className="flex flex-col flex-1 border py-3 rounded-lg hover:bg-gray-200 font-medium items-center justify-center gap-2 text-lg bg-base-200"
                                    >
                                        {actionObj.icon} 
                                        {actionObj.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <button className='text-2xl btn btn-primary mt-15 p-7 w-3/12 flex justify-self-center-safe' onClick={handleBack}>Go Home</button>
        </div>
    );
};

export default FriendDetails;