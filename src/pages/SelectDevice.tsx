import React, { useContext } from 'react'
import devices from '../data/Devices'
import { PageContext } from '../contexts/PageContext'
import { nextPage } from '../utils/pageUtils'
import DeviceTile from '../components/Lists/DeviceTile'

const SelectDevice: React.FC = () => {
    const { pageDispatch } = useContext(PageContext)

    const navigateToNextPage = () => {
        nextPage(pageDispatch)
    }

    return (
        <div className="w-screen font-inter sm:h-screen relative bg-[#121113] text-white">
            <div className="h-[150px] sm:hidden"></div>
            <h2 className="absolute uppercase text-[24px] flex w-full font-bold font-dm-mono justify-center top-[100px]">
                Select your device
            </h2>
            <div className="flex w-full h-full flex-col sm:flex-row">
                <DeviceTile
                    device={devices[0]}
                    navigateToNextPage={navigateToNextPage}
                />
                {devices.slice(1).map((device, index) => (
                    <DeviceTile
                        key={index}
                        device={device}
                        navigateToNextPage={navigateToNextPage}
                    />
                ))}
            </div>
        </div>
    )
}

export default SelectDevice
