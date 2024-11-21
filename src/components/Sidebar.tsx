import React from 'react'
import { ledger_logo } from '../assets'

interface Props {
    mediaType: string
    media: string
}

const Sidebar: React.FC<Props> = ({ mediaType, media }) => {
    return (
        <div className="hidden min-w-[350px] w-[350px] min-h-full bg-[#bbb3fa] p-[40px] md:flex flex-col">
            <div className="flex items-center justify-center w-full h-[40px]">
                <a href="https://www.ledger.com/ledger-live" target="blank">
                    <img
                        className="w-[120px] cursor-pointer"
                        src={ledger_logo}
                        alt="ledger logo"
                    />
                </a>
            </div>
            {mediaType === 'video' ? (
                <div className="my-auto">
                    <video autoPlay muted loop className="">
                        <source src={media} type="video/mp4"></source>
                    </video>
                </div>
            ) : (
                <div className="my-auto flex justify-center">
                    <img src={media} alt="connect" className="w-[200px]" />
                </div>
            )}
        </div>
    )
}

export default Sidebar
