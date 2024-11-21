import React from 'react'
import { ledger_logo, getting_started_video, danger_img } from '../assets'
import NextButton from '../components/Buttons/NextButton'
import BackButton from '../components/Buttons/BackButton'

const GetStarted: React.FC = () => {
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
                    <div className='mt-10'>
                        <img src={danger_img} alt="danger"/>
                    </div>
                </div>
                <div className="pt-[40px]"></div>
                <div className="mt-auto flex justify-between w-full">
                    <BackButton />
                    <NextButton option={true} />
                </div>
            </div>
        </div>
    )
}

export default GetStarted
