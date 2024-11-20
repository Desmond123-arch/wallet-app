import React from 'react'
import Device from '../models/Device'
import { ledger_stax, ledger_nano_x, ledger_nano } from '../assets'

const SelectDevice: React.FC = () => {
    const devices: Array<Device> = [
        {
            name: 'Ledger Stax',
            image: ledger_stax,
        },
        {
            name: 'Ledger Nano S & Plus',
            image: ledger_nano,
        },
        {
            name: 'Ledger Nano X',
            image: ledger_nano_x,
        },
    ]

    return (
        <div className="w-[100%] font-inter sm:h-screen relative bg-[#121113] text-white">
            <h2 className="absolute uppercase text-[24px] flex w-full font-bold font-dm-mono justify-center top-[100px]">
                Select your device
            </h2>
            <div className="flex w-full h-full flex-col sm:flex-row">
                <div className="sm:hidden h-[150px]"></div>
                <div className="flex py-[30px] border border-transparent border-b-[#222] w-full flex-col group hover:bg-[#222] items-center overflow-hidden justify-center">
                    <img
                        className="filter invert min-w-[533px] h-[220px] transition-all duration-[0.2s] overflow-clip group-hover:translate-y-[-20px] ease"
                        src={devices[0].image}
                        alt={devices[0].name}
                    />
                    <h3 className="mx-auto my-[20px] font-bold text-[24px]">
                        {devices[0].name}
                    </h3>
                    <button className="text-black text-[13.33px] font-semibold w-[100px] h-[40px] bg-white cursor-pointer rounded-[40px] flex justify-center items-center">
                        Select
                    </button>
                </div>
                {devices.splice(1).map((device, index) => (
                    <div
                        key={index}
                        className="flex py-[30px] border border-transparent border-b-[#222] w-full flex-col group hover:bg-[#222] items-center overflow-hidden justify-center"
                    >
                        <img
                            className="filter invert min-w-[44.08px] h-[220px] transition-all duration-[0.2s] overflow-clip group-hover:translate-y-[-20px] ease"
                            src={device.image}
                            alt={device.name}
                        />
                        <h3 className="mx-auto leading-[29px] my-[20px] font-extrabold text-[24px]">
                            {device.name}
                        </h3>
                        <button className="text-black text-[13.33px] font-semibold w-[100px] h-[40px] bg-white cursor-pointer rounded-[40px] flex justify-center items-center">
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectDevice
