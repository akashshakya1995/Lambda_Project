const { dbConnect } = require("./dbconnection")
const { updateUserInfo, updateOrderInfo } = require("./src/helper")

const handler = async function (event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await dbConnect().then((db) => console.log("Connection Stablished Successfully!!!"))
            .catch(err => console.log("Database connection failed!!"))
        const userData = await updateUserInfo(event)
        const orderData = await updateOrderInfo(event)
        return await sendResponse(true, "update profile sucessfully", { user: userData["value"], order: orderData["value"] });
    } catch (error) {

    }
}

const sendResponse = async function (status, msg, data = null) {
    if (!data) {
        return { meta: { status, msg } };
    }
    return { meta: { msg, status }, data };
};


module.exports = { handler }