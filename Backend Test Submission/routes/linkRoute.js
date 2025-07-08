import { Router } from "express";
import {linkget, linkpost} from "../controller/linkControl.js"

const router = Router();

router.get('/shorturls/:url',linkget);
router.post('/shorturls', linkpost);

export default router