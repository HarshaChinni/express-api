import { randomNumber } from "./util";

export const ALL_CLAIMS = [
    {
        claimId: randomNumber(1, 1000),
        desc: 'Claim desc explanation1',
        itemDetails: {
            itemId: randomNumber(1, 2000),
            name: 'Mazda 6 tire',
            size: 23
        }
    },
    {
        claimId: randomNumber(1, 1000),
        desc: 'Claim desc explanation2',
        itemDetails: {
            itemId: randomNumber(1, 2000),
            name: 'Mazda 3 tire',
            size: 12
        }
    },
]

