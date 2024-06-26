import http from "http";
import { encodeUrl, decodeUrl } from "./controller/urlController.js";
export const server = http.createServer((req, res) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk.toString();
    });
    req.on("end", () => {
        if (req.url === "/encode" && req.method === "POST") {
            encodeUrl(req, res, JSON.parse(body));
        }
        else if (req.url === "/decode" && req.method === "POST") {
            decodeUrl(req, res, JSON.parse(body));
        }
        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Route not found" }));
        }
    });
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
