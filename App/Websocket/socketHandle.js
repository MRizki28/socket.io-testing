const socketIo = require('socket.io');
const MessageRepositories = require('../Repositories/MessageRepositories');


function handleSocket(server) {
    const io = socketIo(server);


    // Socket.IO connection handling
    io.on('connection', function (socket) {
        console.log('A user connected');

        socket.on('message', function (data) {
            console.log('Message received: ' + JSON.stringify(data));

            if (!data || typeof data !== 'object' || !data.name || !data.message) {
                console.error('Invalid message data received:', data);
                return;
            }

            let name = data.name;
            let message = data.message;

            const messageRepositories = new MessageRepositories();

            messageRepositories.createMessage(name, message, function (err, result) {
                if (err) {
                    console.error('Error saving message to database: ' + err);
                    return;
                }
                console.log('Message saved to database: ' + JSON.stringify(result));
            });
        });

        // Disconnect event
        socket.on('disconnect', function () {
            console.log('A user disconnected');
        });
    });
}

module.exports = handleSocket;