const users = [];

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    if (!username || !room) {
        return {
            error: 'Username and room are required.'
        };
    }

    const existingUser = users.find(_ => _.username === username && _.room === room);

    if (existingUser) {
        return {
            error: 'Username is in use.'
        };
    }

    const user = { id, username, room };
    users.push(user);
    return { user };
};

const removeUser = (id) => {
    const index = users.findIndex(_ => _.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => {
    return users.find(_ => _.id === id);
};

const getUsersinRoom = (room) => {
    return users.filter(_ => _.room === room);
};

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersinRoom
}