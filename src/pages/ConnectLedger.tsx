import React, { useContext, useState } from 'react'
import { connect } from '../assets'
import NextButton from '../components/Buttons/NextButton'
import BackButton from '../components/Buttons/BackButton'
import { PageContext } from '../contexts/PageContext'
import { nextPage, prevPage } from '../utils/pageUtils'
import ProgressBar from '../components/Progress/ProgressBar'
import Sidebar from '../components/Sidebar'

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
            <Sidebar mediaType="image" media={connect} />
            <div className="flex h-full flex-col w-full p-[30px] md:px-[100px] md:py-[30px]">
                <ProgressBar step={3} />
                <div>
                    <div>
                        <h1 className="uppercase font-medium text-[26px] mb-[10px] font-dm-mono leading-[34px]">
                            Connect Ledger
                        </h1>
                        <p className="text-[14px] text-[#bfbfc1] leading-[1.5] mb-[20px]">
                            Please connect your device and perform a genuine
                            check before proceeding.
                        </p>
                        <p className="text-[14px] text-[#bfbfc1] leading-[1.5] font-[200]">
                            <span className="font-bold">Disclaimer:</span> If
                            your device was not sealed upon arrival, please
                            report it to us immediately and do not attempt to
                            use it or plug it into any PCs or laptops. If you
                            need to perform a diagnostic check on your old
                            device, please refrain from entering your PIN and
                            use our Bluetooth option below.
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
                            I want to run this check via Bluetooth.
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
