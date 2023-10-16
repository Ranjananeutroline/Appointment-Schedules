import express from 'express';

import  apply  from '../controller/applytojob.js';
import confirmationafterjobapplytocandidate from '../controller/confirmationafterjobapplytocandidate.js';
import servicesquoterequestconfirmforuser from '../controller/servicesquoterequestconfirmforuser.js';
import servicesgetaquotereceivedbyhost from '../controller/servicesgetaquotereceivedbyhost.js';
import employersrequestatalent from '../controller/employersrequestatalent.js';
import employersrequesttalentsendtouser from '../controller/employersrequesttalentsendtouser.js';
import contactussendtohost from '../controller/contactussendtohost.js';
import contactussendtouser from '../controller/contactussendtouser.js';
import applytojobmailreceivedbyhost from '../controller/applytojobmailreceivedbyhost.js';
const router = express.Router();
//http request
router.post('/mailsend/applytojobmailreceivedbyhost',applytojobmailreceivedbyhost)
router.post('/mailsend/confirmationafterjobapplytocandidate',confirmationafterjobapplytocandidate)
// router.post('/mailsend/confirmationafterjobapplytocandidate',confirmationafterjobapplytocandidate)
router.post('/mailsend/servicesquoterequestconfirmforuser',servicesquoterequestconfirmforuser)
router.post('/mailsend/servicesgetaquotereceivedbyhost',servicesgetaquotereceivedbyhost)
router.post('/mailsend/employersrequestatalent',employersrequestatalent)
router.post('/mailsend/employersrequesttalentsendtouser',employersrequesttalentsendtouser)
router.post('/mailsend/contactustohost', contactussendtohost)
router.post('/mailsend/contactussendtouser', contactussendtouser)
export default router
