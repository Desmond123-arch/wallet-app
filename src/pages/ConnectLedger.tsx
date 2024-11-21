import React, { useContext, useState } from 'react'
import { ledger_logo, getting_started_video } from '../assets'
import NextButton from '../components/Buttons/NextButton'
import BackButton from '../components/Buttons/BackButton'
import connect from '../assets/images/connect.png'
import { PageContext } from '../contexts/PageContext'
import { nextPage, prevPage } from '../utils/pageUtils'
import ProgressBar from '../components/Progress/ProgressBar'

const ConnectLedger: React.FC = () => {
    const [option, setOption] = useState(true)
    const { pageDispatch } = useContext(PageContext)

    const handleClick = () => {
        setOption(!option)
    }

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
                    <img src={connect} alt="connect" />
                </div>
            </div>
            <div className="flex h-full flex-col w-full p-[30px] md:px-[100px] md:py-[30px]">
                <ProgressBar step={3} />
                <div>
                    <div>
                        <h1 className="font-medium text-[26px] mb-[10px] font-dm-mono">
                            Connect Ledger
                        </h1>
                        <p className="text-stone-300">
                            Please confirm you want to connect your ledger
                            wirelessly.
                        </p>
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
                    <BackButton function={navigateToPrevPage} />
                    <NextButton function={navigateToNextPage} />
                </div>
            </div>
        </div>
    )
}

export default ConnectLedger
