import React from 'react'
import Device from '../../types/Device'

interface Props{
    device: Device
    navigateToNextPage: () => void
}

const DeviceTile: React.FC<Props> = ({device, navigateToNextPage}) => {
    return (
        <div
            className="flex py-[30px] border border-transparent border-b-[#222] w-full flex-col group hover:bg-[#222] items-center overflow-hidden justify-center"
        >
            <img
                className={`filter invert ${device.id == 1 ? "min-w-[533px]" : "min-w-[44.08px]"} h-[220px] transition-all duration-[0.2s] overflow-clip group-hover:translate-y-[-20px] ease`}
                src={device.image}
                alt={device.name}
            />
            <h3 className="mx-auto leading-[29px] my-[20px] font-extrabold text-[24px]">
                {device.name}
            </h3>
            <button
                onClick={navigateToNextPage}
                className="text-black text-[13.33px] font-semibold w-[100px] h-[40px] bg-white cursor-pointer rounded-[40px] flex justify-center items-center"
            >
                Select
            </button>
        </div>
    )
}

export default DeviceTile