import React from 'react'

const BackButton: React.FC = () => {
    return (
        <button className="text-[13px] h-[40px] w-auto border border-white bg-[#121113] px-[20px] flex items-center justify-center py-[20px] font-semibold rounded-[40px]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                ></path>
            </svg>
            &nbsp;&nbsp;Back
        </button>
    )
}

export default BackButton
