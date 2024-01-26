const HttpResponseTraits = require("../Traits/HttpResponseTraits");
const { messageModel } = require("../../models");

class MessageRepositories {
    async createMessage(name, message) {
        try {
            const newMessage = await messageModel.create({
                name,
                message
            });
            return newMessage;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MessageRepositories;
