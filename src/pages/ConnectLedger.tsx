import React, { useContext, useState } from 'react'
import { ledger_logo } from '../assets'
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
            <div className="hidden min-w-[350px] w-[350px] h-full bg-[#bbb3fa] p-[40px] md:flex flex-col">
                <div className="flex items-center justify-center w-full h-[40px]">
                    <img
                        className="w-[120px]"
                        src={ledger_logo}
                        alt="ledger logo"
                    />
                </div>
                <div className="my-auto flex justify-center">
                    <img src={connect} alt="connect" className="w-[200px]" />
                </div>
            </div>
            <div className="flex h-full flex-col w-full p-[30px] md:px-[100px] md:py-[30px]">
                <ProgressBar step={3} />
                <div>
                    <div>
                        <h1 className="uppercase font-medium text-[26px] mb-[10px] font-dm-mono leading-[34px]">
                            Connect Ledger
                        </h1>
                        <p className="text-[14px] text-[#bfbfc1] leading-[1.5]">
                            Please confirm you want to connect your ledger
                            wirelessly.
                        </p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer border border-[#333] p-[10px] rounded-[5px] mt-7 max-w-[380px]">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            onClick={handleClick}
                        />
                        <div className="relative w-11 h-6 md:w-16 md:h-8 bg-[#ccc] outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full md:after:h-7 after:h-5 after:w-5  md:after:w-[1.9rem] md:after:transition-all peer-checked:bg-violet-300"></div>
                        <span className="ms-3 text-sm font-medium text-[#bfbfc1] dark:text-gray-300">
                            I want to run this check wirelessly
                        </span>
                    </label>
                </div>
                <div className="pt-[40px]"></div>
                <div className="mt-auto flex justify-between w-full">
                    <BackButton function={navigateToPrevPage} />
                    <NextButton
                        function={navigateToNextPage}
                        accepted={option}
                    />
                </div>
            </div>
        </div>
    )
}

export default ConnectLedger
