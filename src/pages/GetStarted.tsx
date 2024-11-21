import React, { useContext } from 'react'
import { getting_started_video } from '../assets'
import NextButton from '../components/Buttons/NextButton'
import BackButton from '../components/Buttons/BackButton'
import steps from '../data/GetStartedSteps'
import GetStartedItem from '../components/Lists/GetStartedItem'
import ProgressBar from '../components/Progress/ProgressBar'
import { PageContext } from '../contexts/PageContext'
import { nextPage, prevPage } from '../utils/pageUtils'
import Sidebar from '../components/Sidebar'

const GetStarted: React.FC = () => {
    const { pageDispatch } = useContext(PageContext)

    const navigateToNextPage = () => {
        nextPage(pageDispatch)
    }

    const navigateToPrevPage = () => {
        prevPage(pageDispatch)
    }

    return (
        <div className="w-screen h-screen font-inter flex relative bg-[#181a1c] text-white">
            <Sidebar mediaType="video" media={getting_started_video}/>
            <div className="flex h-full flex-col w-full md:px-[100px] px-[30px] py-[30px]">
                <ProgressBar step={2} />
                <div className="font-medium text-[26px] mb-[10px] font-dm-mono leading-[34px]">
                    <h2>THE BEST WAY TO GET YOU STARTED:</h2>
                </div>
                <div className="pt-[40px]">
                    <ul className="flex flex-col gap-[20px]">
                        {steps.map((step, index) => (
                            <GetStartedItem
                                key={index}
                                index={index}
                                step={step}
                            />
                        ))}
                    </ul>
                </div>
                <div className="mt-auto flex justify-between w-full">
                    <BackButton function={navigateToPrevPage} />
                    <NextButton function={navigateToNextPage} />
                </div>
            </div>
        </div>
    )
}

export default GetStarted
