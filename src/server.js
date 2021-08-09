import { default as express } from "express";
import { readFile } from "fs/promises";

const app = express();
const port = 3000;

app.use(express.static("web"));

app.use("/zmones", async (req, res) => {
    res.setDefaultEncoding("utf8");
    res.set("Content-Type", "application/json");
    try {
       const fZmones = await readFile("zmones.js", {
        encoding: "utf8"
        }); 
        res.send(fZmones);
    } catch (err) {
        res.send("[]");
    }
});

app.get("/suma", (req, res) => {
    const sk1 = parseFloat(req.query.pirmas);
    const sk2 = parseFloat(req.query.antras);
    res.send(sk1 + sk2 + "");
});

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });
// app.get("/labas", (req, res) => {
//     res.send("<html><body><h1>Labas pasauli!</h1></body></html>");
// });
// app.get("/viso", (req, res) => {
//     res.send("Viso geriausio pasauli!");
// });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});