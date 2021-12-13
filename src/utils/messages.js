const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date()
    }
};

const generateLocationMessage = (username, message) => {
    return {
        username,
        url: message,
        createdAt: new Date()
    }
};

module.exports = {
    generateMessage,
    generateLocationMessage
}