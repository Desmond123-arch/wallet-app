import React, { useState } from 'react'
import { ledger_logo, getting_started_video, danger_img } from '../assets'
import BackButton from '../components/Buttons/BackButton'
import { ClipLoader } from 'react-spinners'

const CheckError = () => {
    return (
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-[#ff0000] text-xl ">
        <div className="w-[8%]">
            <img
                src={danger_img}
                alt="danger"
                className="w-full"
            />
        </div>
        <p>Your device's memory has been corrupted </p>
        <p>Ledger data damage error: 0x0194E32</p>
    </div>
    )
}

const GetStarted: React.FC = () => {
    const [isLoading, setIsLoading] = useState('error');

    return (
        <div className="w-screen h-screen font-inter flex relative bg-[#181a1c] text-white">
            <div className="hidden w-[350px] h-full bg-[#bbb3fa] p-[40px] md:flex flex-col">
                <div className="flex items-center justify-center w-full h-[40px]">
                    <img
                        className="w-[120px]"
                        src={ledger_logo}
                        alt="ledger logo"
                    />
                </div>
                <div className="my-auto">
                    <video autoPlay muted loop className="">
                        <source
                            src={getting_started_video}
                            type="video/mp4"
                        ></source>
                    </video>
                </div>
            </div>
            <div className="flex h-full flex-col w-full px-[100px] py-[30px]">
                <div className="w-full bg-white h-[4px] mb-[40px] relative rounded-[4px]">
                    <div className="absolute bg-white text-black rounded-[3px] p-[3px] text-[10px] flex items-center font-medium">
                        <span className="rounded-[3px] w-[17px] h-[17px] bg-black flex items-center justify-center text-white text-[10px]">
                            2
                        </span>
                        GET STARTED
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-[27px] mb-[10px] font-dm-mono">
                        Genuine Check
                    </h1>
                    {isLoading === 'initial' ? (
                        <div className="">
                            <ClipLoader size={40} color="#9333ea" />
                        </div>
                    ) : (
                        <CheckError/>
                    )}
                </div>
                <div className="pt-[40px]"></div>
                <div className="mt-auto flex justify-between w-full">
                    <BackButton />
                    <button className="text-[13px] h-[40px] w-auto border border-white bg-white text-[#121113] px-[20px] flex items-center justify-center py-[20px] font-semibold rounded-[40px] disabled:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors">
                        Repair & Recover&nbsp;&nbsp;
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
