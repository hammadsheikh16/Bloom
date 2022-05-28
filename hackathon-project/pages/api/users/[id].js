const fs = require("fs");
const path = process.cwd() + "/data.json";

export default function handler(req, res) {
    if (req.method === "GET") {
        var users = JSON.parse(fs.readFileSync(path));
        let requestedUser = getUserById(users, req.query.id);
        res.status(200).json(requestedUser);
    }
}

function getUserById(users, id) {
    for (let user of users) {
        if (String(user.id) === String(id)) {
            return user;
        }
    }
    return null;
}
