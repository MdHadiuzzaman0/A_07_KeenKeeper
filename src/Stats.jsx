import React, { useContext, useEffect, useState } from "react";
import { DataCenter } from "./MotherProvider";
import { Pie, PieChart, Tooltip } from "recharts";
import { FaSquare } from "react-icons/fa";

const Stats = () => {
    const { call, text, video } = useContext(DataCenter);
    console.log(call.length, text.length, video.length);

    const [data, setData] = useState([]);
    useEffect(() => {
        if (call.length === 0 && text.length === 0 && video.length === 0) {
            setData([
                { name: 'No Activity', value: 100, fill: '#FF0000' },
                // { name: 'No Activity', value: 0, fill: '#FF0000' },
            ])
        }
        else {
            setData([
                { name: 'Call', value: call.length, fill: '#0088FE' },
                { name: 'Text', value: text.length, fill: '#00C49F' },
                { name: 'Video', value: video.length, fill: '#FFBB28' }
            ])
        }
    }, [call.length, text.length, video.length]);


    //    const data = (call.length === 0 && text.length === 0 && video.length === 0)
    //     ? [{ name: 'No Activity', value: 100, fill: '#FF0000' }]
    //     : [
    //         { name: 'Call', value: call.length, fill: '#0088FE' },
    //         { name: 'Text', value: text.length, fill: '#00C49F' },
    //         { name: 'Video', value: video.length, fill: '#FFBB28' }
    //     ];

    return (
        <div >
            <div className="w-10/12 mx-auto bg-white mt-20 p-10 rounded-2xl shadow-md hover:shadow-lg ">


                <h1 className="text-center text-xl font-bold mb-15">Overview of the whole activity</h1>
                <PieChart className="mx-auto"
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        maxHeight: "80vh",
                        aspectRatio: 1,
                    }}
                    responsive
                >
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"

                        cornerRadius="50%"
                        fill="#8884d8"

                        paddingAngle={5}
                        dataKey="value"
                    />
                    <Tooltip />

                </PieChart>

                <div className="mt-15 flex flex-col md:flex-row justify-center gap-5">
                    <h3 className="text-center text-lg text-[#0088FE] font-semibold flex items-center gap-1"><FaSquare className='inline' /> Calls ({call.length})</h3>
                    <h3 className="text-center text-lg text-[#00C49F] font-semibold flex items-center gap-1"><FaSquare className='inline' /> Texts ({text.length})</h3>
                    <h3 className="text-center text-lg text-[#FFBB28] font-semibold flex items-center gap-1"><FaSquare className='inline' /> Video Calls ({video.length})</h3>
                    <h3 className="text-center text-lg text-[#FF0000] font-semibold flex items-center gap-1"><FaSquare className='inline' /> No Activity </h3>
                </div>

            </div>
        </div>
    );
};

export default Stats;
