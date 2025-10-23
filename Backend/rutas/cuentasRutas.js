import { Router } from "express";

import {
    getCuentas,
    getCuentaId,
    getCuentasBalance
} from "../controllers/cuentasControladores.js";

const router = Router();

router.get("/cuentas", getCuentas);

router.get("/cuenta/:id", getCuentaId);

router.get("/cuentasBalance", getCuentasBalance);

export default router;