const socketIo = require('socket.io');

// Fungsi untuk membuat server Socket.IO
function createSocketServer(server) {
    const io = socketIo(server);

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    });

    return io; // Kembalikan instance io untuk penggunaan lebih lanjut jika diperlukan
}

module.exports = createSocketServer;
