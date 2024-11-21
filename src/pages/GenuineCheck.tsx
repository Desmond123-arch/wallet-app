import React, { useContext, useState } from 'react'
import { ledger_logo, getting_started_video, danger_img } from '../assets'
import BackButton from '../components/Buttons/BackButton'
import { ClipLoader } from 'react-spinners'
import ProgressBar from '../components/Progress/ProgressBar'
import { PageContext } from '../contexts/PageContext'
import { nextPage, prevPage } from '../utils/pageUtils'
import NextButton from '../components/Buttons/NextButton'

const CheckError = () => {
    return (
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-[#ff0000] text-xl ">
            <div className="w-[8%]">
                <img src={danger_img} alt="danger" className="w-full" />
            </div>
            <p>Your device's memory has been corrupted </p>
            <p>Ledger data damage error: 0x0194E32</p>
        </div>
    )
}

const GetStarted: React.FC = () => {
    const [isLoading, setIsLoading] = useState('error')
    const { pageDispatch } = useContext(PageContext)
    const navigateToNextPage = () => {
        nextPage(pageDispatch)
    }

    const navigateToPrevPage = () => {
        prevPage(pageDispatch)
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
                    <video autoPlay muted loop className="">
                        <source
                            src={getting_started_video}
                            type="video/mp4"
                        ></source>
                    </video>
                </div>
            </div>
            <div className="flex h-full flex-col w-full px-[100px] py-[30px]">
                <ProgressBar step={4} />
                <div>
                    <h1 className="font-medium text-[27px] mb-[10px] font-dm-mono">
                        Genuine Check
                    </h1>
                    {isLoading === 'initial' ? (
                        <div className="">
                            <ClipLoader size={40} color="#9333ea" />
                        </div>
                    ) : (
                        <CheckError />
                    )}
                </div>
                <div className="pt-[40px]"></div>
                <div className="mt-auto flex justify-between w-full">
                    <BackButton function={navigateToPrevPage} />
                    <NextButton
                        text={'Repair & Recover'}
                        function={navigateToNextPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default GetStarted
