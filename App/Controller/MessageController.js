const MessageRepositories = require("../Repositories/MessageRepositories");

class MessageController {
    constructor() {
        this.messageRepositories = new MessageRepositories();
    }

    async createMessage(request, response){
        const data = await this.messageRepositories.createMessage(request);
        response.json(data);
    }

}

module.exports = MessageController;