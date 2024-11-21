import React from 'react'
import { modal_loader } from '../../assets'

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
        <div className={`${isModalOpen ? "flex" : "hidden"}`}>
            <div className="fixed w-screen h-screen overflow-hidden z-10 bg-black opacity-50"></div>
            <div className="flex items-center justify-center w-screen h-screen absolute">
                <div
                    className={`${
                        isModalOpen ? 'modal-content' : 'modal-content hidden'
                    } fixed z-20 bg-white border border-[rgb(136,136,136)] max-w-[350px]`}
                >
                    <div className="bg-white h-[70px] flex items-start justify-end">
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

                    <div
                        className="modal-body"
                        style={{ marginTop: '20%', marginBottom: '0%' }}
                    >
                        <div
                            data-v-2756568a=""
                            data-v-1c530256=""
                            role="group"
                            aria-labelledby="eligstatement"
                        >
                            <center
                                style={{
                                    marginTop: '10%',
                                    marginBottom: '60px',
                                }}
                            >
                                <div className="loader-square-10"></div>
                                <h1
                                    style={{
                                        fontSize: '20px',
                                        marginTop: '20px',
                                        textAlign: 'center',
                                        fontWeight: 800,
                                        color: 'black',
                                    }}
                                    className="RetailTitle_retailTitle__2DUse LayoutTitle_afterTitles__3Htoa"
                                >
                                    Recovering Wallet
                                </h1>
                                <br />
                                <p style={{ color: 'black' }}>
                                    Trying to recover your wallet... this may
                                    take a few minutes
                                </p>
                                <div className="center-body">
                                    <img
                                        id="video_help"
                                        style={{ width: '50px' }}
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
