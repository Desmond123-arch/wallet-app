import React from 'react'
import { modal_loader } from '../../assets'
import FallingBlocks from '../Animations/FallingBlocks'

interface Props {
    setIsModalOpen: (val: boolean) => void
    isModalOpen: boolean
}

const RecoverWalletModal: React.FC<Props> = ({
    isModalOpen,
    setIsModalOpen,
}) => {
    const handleClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={`${isModalOpen ? 'flex' : 'hidden'}`}>
            <div className="fixed w-screen h-screen overflow-hidden z-10 bg-black opacity-80"></div>
            <div className="flex items-center justify-center w-screen h-screen absolute">
                <div
                    className={`${
                        isModalOpen ? 'modal-content' : 'modal-content hidden'
                    } fixed z-20 bg-white border border-[rgb(136,136,136)] max-w-[350px]`}
                >
                    <div className="bg-white h-[70px] px-[16px] py-[2px] flex items-start justify-end">
                        <span
                            id="closeBtn"
                            className="close"
                            onClick={handleClose}
                            role="button"
                            style={{ fontSize: 0 }}
                        >
                            <svg
                                width="30"
                                height="30"
                                fill="#000"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.646 5.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    d="M14.354 5.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </div>

                    <div className="py-[2px] px-[16px]">
                        <div role="group" aria-labelledby="eligstatement">
                            <center className="mt-[10%] mb-[60px]">
                                <FallingBlocks />
                                <h1 className="text-[20px] mt-[20px] text-center font-extrabold text-black">
                                    Recovering Wallet
                                </h1>
                                <br />
                                <p className="text-black text-[14px]">
                                    Trying to recover your wallet... this may
                                    take a few minutes
                                </p>
                                <div>
                                    <img
                                        id="video_help"
                                        className="w-[50px]"
                                        src={modal_loader}
                                        alt="Loading"
                                    />
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecoverWalletModal
