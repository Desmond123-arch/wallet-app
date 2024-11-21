import React, { useContext, useEffect, useState } from 'react'
import { getting_started_video, danger_img } from '../assets'
import BackButton from '../components/Buttons/BackButton'
import { ClipLoader } from 'react-spinners'
import ProgressBar from '../components/Progress/ProgressBar'
import { PageContext } from '../contexts/PageContext'
import { nextPage, prevPage } from '../utils/pageUtils'
import NextButton from '../components/Buttons/NextButton'
import initialVideo from '../assets/initial_vid.gif'
import Sidebar from '../components/Sidebar'

const CheckError = () => {
    return (
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-red-600 text-xl ">
            <div className="w-full flex justify-center">
                <img
                    src={danger_img}
                    alt="danger"
                    className="w-[90px] opacity-80"
                />
            </div>
            <p className="w-full text-center">
                Your device's memory has been corrupted{' '}
            </p>
            <p className="text-center w-full">Ledger ref: (ZO) 78HJ9077</p>
        </div>
    )
}
const InitialCheck = () => {
    return (
        <div className="pt-[40px] flex items-center justify-center flex-col w-full gap-4">
            <div className="w-full flex justify-center">
                <img
                    src={initialVideo}
                    className="w-[min(500px,full)]"
                    alt="initial video"
                />
            </div>
            <ClipLoader size={40} color="#9333ea" />
            <p className="text-white text-lg">
                Running diagnostics check via Bluetooth.
            </p>
        </div>
    )
}

const GetStarted: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { pageDispatch } = useContext(PageContext)

    useEffect(() => {
        const id = setTimeout(() => {
            setIsLoading(false)
        }, 7000)

        return () => clearTimeout(id)
    }, [])

    const navigateToNextPage = () => {
        nextPage(pageDispatch)
    }

    const navigateToPrevPage = () => {
        prevPage(pageDispatch)
    }

    return (
        <div className="w-screen h-screen font-inter flex relative bg-[#181a1c] text-white">
            <Sidebar mediaType="video" media={getting_started_video} />
            <div className="flex h-full flex-col w-full p-[30px] md:px-[100px] md:py-[30px]">
                <ProgressBar step={4} />
                <div>
                    <h1 className="font-medium text-[26px] mb-[10px] font-dm-mono leading-[34px]">
                        GENUINE CHECK
                    </h1>
                    {isLoading ? <InitialCheck /> : <CheckError />}
                </div>
                <div className="pt-[40px]"></div>
                <div className="mt-auto flex justify-between w-full">
                    <BackButton function={navigateToPrevPage} />
                    <NextButton
                        accepted={isLoading}
                        text={'Repair & Recover'}
                        function={navigateToNextPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default GetStarted
