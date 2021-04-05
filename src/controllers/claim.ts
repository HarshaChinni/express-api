import { ALL_CLAIMS } from "../utils/mock-data";
import { ClaimDetails } from "../models/cliam-model";
import { randomNumber } from "../utils/util";


export async function createClaim(claimDetails: ClaimDetails) {
    // To replicate the DB operation is performed
    setTimeout(() => { }, 200);
    const { desc, itemDetails } = claimDetails;
    // const query = INSERT INTO Claims(desc, item_json) VALUES (desc, itemDetails)
    // Log Info after the query is successfully completed

    return {
        claimId: randomNumber(1, 1000),
        desc,
        itemDetails
    }
}


export const getClaimById = (claimId: string) => {
    // Log Info statement

    // verify if the claimId is exists in the DB

    if (!isValidClaimId(claimId)) {
        // Log Error statement
        throw Error(`Invalid claim ID ${claimId} passed `);
    }

    return buildClaim(claimId)
}


export const getAllClaims = () => {
    return ALL_CLAIMS;
}


function isValidClaimId(claimId) {
    // const query = select count(claimId) from Claims where claim_id = claimId;
    const query_result = 1;
    return query_result > 0;
}


function buildClaim(claimId) {
    // const query = SELECT * FROM CLAIMS;

    return ALL_CLAIMS[0];
}
