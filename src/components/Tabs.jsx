import React, { useState } from 'react'
import { CheckIn, CheckOut, Location, Travelers } from '../assets/svg/Icon';


export const Tabs = () => {
    // modals
    const [showModal, setShowModal] = useState(false);

    // tabs
    const [data, setdata] = useState("tab1")
    function tabs(tab) {
        setdata(tab);
    }
    return (

        <div className='max-w-[1200px] mx-auto relative mt-[-79px] px-3'>
            <div className='absolute flex top-[-59px] ml-3 left-[0] z-10 snap-proximity snap-x'>
                <button onClick={() => tabs('tab1')} className={`${data === "tab3" ? "bg-indigo-600 text-white" : "bg-white text-black"} transition w-[100px] md:w-[173.33px] h-[60px] px-5 py-4  border-b rounded-tl-[30px] border-r justify-center items-center gap-2.5 inline-flex text-center  text-[14px] sm:text-lg font-semibold font-['Montserrat'] leading-7 `}>Economy</button>
                <button onClick={() => tabs('tab2')} className={`${data === "tab2" ? "bg-indigo-600 text-white" : "bg-white text-black"} transition w-[110px] md:w-[173.33px] h-[60px] px-5 py-4  border-b justify-center items-center border-r gap-2.5 inline-flex text-center  text-[14px] sm:text-lg font-semibold font-['Montserrat'] leading-7 `}>Business</ button>
                <button onClick={() => tabs('tab3')} className={`${data === "tab1" ? "bg-indigo-600 text-white" : "bg-white text-black"} transition w-[90px] md:w-[173.33px] h-[60px] px-5 py-4  border-b rounded-tr-[30px]  justify-center items-center gap-2.5 inline-flex text-center  text-[14px] sm:text-lg font-medium font-[Montserrat] leading-7`}>data</button>
            </div >
            {data === "tab1" && <div className='w-full min-h-[216px] bg-white sm:rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);]  flex-col justify-center items-center gap-2.5 inline-flex p-10'  >
                <div className='w-full flex justify-between gap-6 flex-wrap mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Location />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Location</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Where are you going?</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Travelers />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Travelers</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-in</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckOut />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-out</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={() => setShowModal(true)}
                        className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 inline-flex
                    grow shrink basis-0 text-center text-white text-base font-semibold font-[Montserrat] leading-7  hover:bg-white hover:text-indigo-600 duration-500" >Book Now</button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto text-center max-w-[450px] md:max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start mx-auto font-ff-mont max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className=" text-[44px] md:text-[100px] font-bold">
                                                Congrats!
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 font-ff-mont text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-blueGray-500 text-[20px] md:text-[40px] font-bold font-ff-mont leading-relaxed">
                                                Your Economy Class Ticket Has Booked Successfully!
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                DONE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div >}
            {data === "tab2" && <div className='w-full min-h-[216px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);] flex-col justify-center items-center gap-2.5 inline-flex p-10'  >
                <div className='w-full flex flex-wrap gap-6 justify-between mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Location />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]"> 1st class</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">What are you doing</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Travelers />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Business</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-Out</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-In</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={() => setShowModal(true)}
                        className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 inline-flex
                    grow shrink basis-0 text-center text-white text-base font-semibold font-[Montserrat] leading-7">Book Now</button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto text-center max-w-[450px] md:max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start mx-auto font-ff-mont max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className=" text-[44px] md:text-[100px] font-bold">
                                                Congrats!
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 font-ff-mont text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-blueGray-500 text-[20px] md:text-[40px] font-bold font-ff-mont leading-relaxed">
                                                Your Business Class Ticket Has Booked Successfully!
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                DONE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div >}
            {data === "tab3" && <div className='w-full min-h-[216px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);] flex-col justify-center items-center gap-2.5 inline-flex p-10'   >
                <div className='w-full flex flex-wrap gap-6 justify-between mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Location />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Booking</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Where you go</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Travelers />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-Out</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-in</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Group</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={() => setShowModal(true)}
                        className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 inline-flex
                    grow shrink basis-0 text-center text-white text-base font-semibold font-ff-mont leading-7 hover:bg-white hover:text">Book Now</button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto text-center max-w-[450px] md:max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start mx-auto font-ff-mont max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className=" text-[44px] md:text-[100px] font-bold">
                                                Congrats!
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 font-ff-mont bg-indigo-600  opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-blueGray-500 text-[20px] md:text-[40px] font-bold text-black font-ff-mont leading-relaxed">
                                                Your data Class Ticket Has Booked Successfully!
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                DONE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div >}
        </div>
    )
}
export default Tabs;
