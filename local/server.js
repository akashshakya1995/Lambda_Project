const { handler } = require("../index")
const context = { callbackWaitsForEmptyEventLoop: false };
const event = {
    params: { userId: "6397f8de0e4243ee39ed2f63", orderId: "6398077a24c0482857ec8a7d" },
    body: { fullName: "Anuj dubey", gender: "male", country: "India", email: "anuj@gmail.in" },
    query: { age: 23 }
};

(async function () {
    try {
        const data = await handler(event, context);
        console.info("Final Response\n", data);
    } catch (error) {
        console.error("Final Error:\n", e);
    }
})();