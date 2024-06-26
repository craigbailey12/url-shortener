import { generateId, baseUrl } from "../utils/idGenerator.js";
const urlDatabase = {};
export const encode = (originalUrl) => {
    const id = generateId();
    const shortUrl = `${baseUrl}/${id}}`;
    urlDatabase[shortUrl] = originalUrl;
    return shortUrl;
};
export const decode = (shortUrl) => {
    return urlDatabase[shortUrl] || null;
};
