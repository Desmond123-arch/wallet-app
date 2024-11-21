import React from 'react'
import { motion } from 'framer-motion' // Import framer-motion

const FallingBlocks: React.FC = () => {
    return (
        <div className="relative w-[55px] h-[55px] flex flex-wrap-reverse gap-[4px]">
            {Array(9)
                .fill(true)
                .map((_active, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [-30, 0, 0, 30] }}
                        transition={{
                            duration: 3,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatDelay: 2.5,
                            delay: index * 0.3,
                            times: [0, 0.1, 0.9, 1],
                        }}
                        className="bg-black text-white w-[15px] h-[15px]"
                    ></motion.div>
                ))}
        </div>
    )
}

export default FallingBlocks
