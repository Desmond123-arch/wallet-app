import React from 'react'
import progress from '../../data/Progress'

interface Props {
    step: number
}

const ProgressBar: React.FC<Props> = ({ step }) => {
    const progressPercent = 25 * (step - 1)

    return (
        <div
            className={`progress-bar progress-${progressPercent} w-full bg-[#333] h-[4px] mb-[40px] relative rounded-[4px] flex items-center`}
        >
            <div className="absolute bg-white text-black rounded-[3px] p-[3px] text-[10px] flex items-center font-medium">
                <span className="rounded-[3px] mr-[5px] w-[17px] h-[17px] bg-black flex items-center justify-center text-white text-[10px]">
                    {step}
                </span>
                {progress[step - 2]}
            </div>
        </div>
    )
}

export default ProgressBar
