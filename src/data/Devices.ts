import { ledger_stax, ledger_nano_x, ledger_nano } from '../assets'
import Device from '../types/Device'

const devices: Array<Device> = [
    {
        id: 1,
        name: 'Ledger Stax',
        image: ledger_stax,
    },
    {
        id: 2,
        name: 'Ledger Nano S & Plus',
        image: ledger_nano,
    },
    {
        id: 3,
        name: 'Ledger Nano X',
        image: ledger_nano_x,
    },
]

export default devices