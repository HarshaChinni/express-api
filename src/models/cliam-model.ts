export interface ClaimDetails {
    desc: string;
    itemDetails: ItemDetails;
}

interface ItemDetails {
    itemId: number;
    name: string;
    size: number;
}
