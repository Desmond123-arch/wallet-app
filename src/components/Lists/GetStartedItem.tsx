import React from 'react'
import Step from '../../types/Step'

interface Props {
    index: number
    step: Step
}

const GetStartedItem: React.FC<Props> = ({ index, step }) => {
    return (
        <li className="flex items-center">
            <span className="text-[14px] flex items-center justify-center rounded-[5px] border-[#333] border-[1px] min-w-[60px] h-[60px]">
                {index + 1}
            </span>
            <div className="pl-[10px] flex flex-col gap-[5px]">
                <strong className="text-[14px]">{step.title}</strong>
                <p className="text-[13px] text-[#bfbfc1] leading-[15px]">
                    {step.description}
                </p>
            </div>
        </li>
    )
}

export default GetStartedItem
