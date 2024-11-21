import React, { useContext } from 'react'
import { ledger_logo, bg_video } from '../assets'
import { PageContext } from '../contexts/PageContext'
import { nextPage } from '../utils/pageUtils'

const OnBoarding: React.FC = () => {
    const { pageDispatch } = useContext(PageContext)

    const navigateToNextPage = () => {
        nextPage(pageDispatch)
    }

    return (
        <div className="w-screen font-inter h-screen flex relative">
            <div className="text-white bg-[#121113] p-[40px] flex flex-col items-start max-w-[400px] w-screen">
                <img
                    className="filter invert w-[120px] h-[40px] mb-[25px]"
                    src={ledger_logo}
                    alt="ledger logo"
                />
                <h1 className="tracking-[1px] uppercase font-dm-mono font-extrabold text-start mb-[15px] text-[28px] leading-[37px]">
                    THE MOST SECURE
                    <br />
                    CRYPTOCURRENCY
                    <br />& NFT WALLET
                </h1>
                <p className="text-start font-medium text-[14px] text-[#f2f2f2] leading-[17px]">
                    Securely manage, buy and grow your crypto and NFTs on Ledger
                    Live.
                </p>
                <div className="mt-auto">
                    <button
                        onClick={navigateToNextPage}
                        className="my-[25px] text-[16px] w-full h-[45px] flex items-center justify-center font-semibold rounded-[45px] bg-white text-black"
                    >
                        Get started&nbsp;&nbsp;
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            ></path>
                        </svg>
                    </button>
                    <div className="text-center leading-[1.5] text-[#bfbfc1] text-[14px]">
                        By tapping "Get started" you consent and agree to our
                        <br />
                        <a href="#" className="text-[#bbb3fa] font-semibold">
                            Terms of Service
                        </a>
                        &nbsp;and&nbsp;
                        <a href="#" className="text-[#bbb3fa] font-semibold">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative w-[calc(100%-400px)] h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute w-full h-full object-cover top-0 left-0"
                >
                    <source
                        src={bg_video}
                        type="video/mp4"
                        className="absolute w-screen h-screen"
                    ></source>
                </video>
            </div>
        </div>
    )
}

export default OnBoarding
