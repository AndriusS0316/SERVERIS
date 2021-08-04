import { default as express } from "express";

const app = express();
const port = 3000;

app.use(express.static("web"));

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