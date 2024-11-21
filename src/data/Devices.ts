import { ledger_stax, ledger_nano_x, ledger_nano_s, ledger_flex, ledger_nano_s_plus } from '../assets'
import Device from '../types/Device'

const devices: Array<Device> = [
    {
        id: 1,
        name: 'Ledger Stax',
        image: ledger_stax,
    },
    {
        id: 2,
        name: 'Ledger Flex',
        image: ledger_flex,
    },
    {
        id: 3,
        name: 'Ledger Nano S',
        image: ledger_nano_s,
    },
    {
        id: 4,
        name: 'Ledger Nano S Plus',
        image: ledger_nano_s_plus,
    },
    {
        id: 5,
        name: 'Ledger Nano X',
        image: ledger_nano_x,
    },
]

export default devices