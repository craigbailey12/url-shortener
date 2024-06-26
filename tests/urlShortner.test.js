import request from "supertest";
import { server } from "../src/server";
describe("URL Shortener API", () => {
    let shortUrl;
    it("should encode a URL", async () => {
        const res = await request(server)
            .post("/encode")
            .send({ originalUrl: "https://codesubmit.io/library/react" });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("shortUrl");
        shortUrl = res.body.shortUrl;
    });
    it("should decode a URL", async () => {
        const res = await request(server).post("/decode").send({ shortUrl });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("originalUrl", "https://codesubmit.io/library/react");
    });
});
