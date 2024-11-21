import React, { useState } from 'react'
import { ledger_logo, getting_started_video } from '../assets'
import NextButton from '../components/Buttons/NextButton'
import BackButton from '../components/Buttons/BackButton'
import connect from '../assets/images/connect.png'

const ConnectLedger: React.FC = () => {
    const [option, setOption] = useState(true);

    const handleClick = () => {
        setOption(!option);
    }

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
                    <img src={connect} alt="connect" />
                </div>
            </div>
            <div className="flex h-full flex-col w-full p-[30px] md:px-[100px] md:py-[30px]">
                <div className="w-full bg-white h-[4px] mb-[40px] relative rounded-[4px]">
                    <div className="absolute bg-white text-black rounded-[3px] p-[3px] text-[10px] flex items-center font-medium">
                        <span className="rounded-[3px] w-[17px] h-[17px] bg-black flex items-center justify-center text-white text-[10px]">
                            2
                        </span>
                        GET STARTED
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="font-medium text-[26px] mb-[10px] font-dm-mono">Connect Ledger</h1>
                        <p className='text-stone-300'>Please confirm you want to connect your ledger wirelessly.</p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer border border-stone-800 py-3 px-5 rounded-md mt-7">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            onClick={handleClick}
                        />
                        <div className="relative w-11 h-6 md:w-16 md:h-8 bg-gray-400 outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full md:after:h-7 after:h-5 after:w-5  md:after:w-[1.9rem] md:after:transition-all peer-checked:bg-violet-300"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            I want to run this check wirelessly
                        </span>
                    </label>
                </div>
                <div className="pt-[40px]"></div>
                <div className="mt-auto flex justify-between w-full">
                    <BackButton />
                    <NextButton option={option}/>
                </div>
            </div>
        </div>
    )
}

export default ConnectLedger
