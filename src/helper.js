const { dbConnect } = require("../dbconnection")

const updateUserInfo = async function (req) {
    try {
        const { fullName, gender } = req.body
        const user = await (await dbConnect()).collection("users").findOneAndUpdate({ userId: req.params.userId },
            { $set: { fullName: fullName, gender: gender } }, { new: true });
        if (!user) {
            throw new Error("update error in user. ");
        }
        return user;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

const updateOrderInfo = async function (req) {
    try {
        const { country, email } = req.body
        const order = await (await dbConnect()).collection("orders").findOneAndUpdate({ orderId: req.params.orderId },
            { $set: { userEmailId: email, "billingAddress.country": country } }, { new: true });
        if (!order) {
            throw new Error("update error in order. ");
        }
        return order;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

module.exports = { updateUserInfo, updateOrderInfo }

