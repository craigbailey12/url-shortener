import { generateId, baseUrl } from "../utils/idGenerator.js";
const urlMap = new Map();
export const encodeUrl = (req, res, body) => {
    const { originalUrl } = body;
    if (!originalUrl) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Original URL is required" }));
        return;
    }
    const shortId = generateId();
    const shortUrl = `${baseUrl}/${shortId}`;
    urlMap.set(shortId, originalUrl);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ shortUrl }));
};
export const decodeUrl = (req, res, body) => {
    const { shortUrl } = body;
    if (!shortUrl) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Short URL is required" }));
        return;
    }
    const shortId = shortUrl.split("/").pop();
    const originalUrl = urlMap.get(shortId);
    if (!originalUrl) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "URL not found" }));
        return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ originalUrl }));
};
