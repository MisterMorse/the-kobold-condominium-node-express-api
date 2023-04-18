const request = require("supertest");
const app = require("../../../src/app");

describe("GET /", () => {
    it("Should return status code 200.", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    });
    it("Should return JSON containing 'Static root.'", async () => {
        const res = await request(app).get("/");
        expect(res.body).toContain("Static root");
    });
});
