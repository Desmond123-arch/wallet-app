import React from 'react'

interface Props {
    function: () => void
    text?: string
    arrowDirection?: string
    accepted?: boolean
}

const BackButton: React.FC<Props> = (prop) => {
    return (
        <button
            disabled={prop.accepted}
            onClick={prop.function}
            className="text-[13px] h-[40px] w-auto border border-white bg-[#121113] px-[20px] flex items-center justify-center py-[20px] font-semibold rounded-[40px] disabled:opacity-20 disabled:border-white disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
            {prop.arrowDirection == 'forward' ? (
                <>
                    {prop.text ?? 'Back'}&nbsp;&nbsp;
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
                </>
            ) : (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        ></path>
                    </svg>
                    &nbsp;&nbsp;{prop.text ?? 'Back'}
                </>
            )}
        </button>
    )
}

export default BackButton
