import { getAllClaims, getClaimById, createClaim } from '../controllers/claim';
import * as express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: 'List of all claims',
        cliams: getAllClaims()
    });
})

router.get('/:claimId', (req, res) => {
    const claimId = req.params.claimId;

    if (Number.isInteger(claimId)) {
        res.status(422).send({
            message: 'The claim ID should be an integer',
            claim: {}
        })
    }

    try {
        const claim = getClaimById(claimId);
        res.send({
            message: `The claim with ${claimId}`,
            claim
        });
    } catch (err) {
        let statusCode = 500;

        if (err.msg.toLowerCase().includes('Invalid claim ID')) {
            statusCode = 404;
        }

        res.status(statusCode).send({
            message: 'Invalid Claim ID sent',
            claim: {}
        })
    }
});

router.post('/cliam', async (req, res) => {
    res.send({
        message: 'The claim is created successfully',
        claim: await createClaim(req.body)
    })
});


export const claims = router;