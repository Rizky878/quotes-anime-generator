import { quotables } from './quotes'

export const quotess = () => {
    const random = Math.floor(Math.random() * quotables.length);
    const data = quotables
    return data[random]
}
