// app.js (o como se llame tu archivo principal)
import express from "express";
import cuentasRouter from "./rutas/cuentasRutas.js";

const app = express();
const PORT = 3130;// Puerto solicitado 

app.use(express.json());

app.use("/",
    (req, res, next) => { res.setHeader("X-Powered-By", "Express"); next(); },
    cuentasRouter
);

// 404 para rutas que no estan definidas
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});