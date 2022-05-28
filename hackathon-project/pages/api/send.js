const fs = require("fs");
const path = process.cwd() + "/data.json";

export default function handler(req, res) {
    if (req.method != "POST") {
        res.status(400).end()
        return
    }
    var users = JSON.parse(fs.readFileSync(path));
    let sender = getUserById(users, req.query.sender);
    let receiver = getUserById(users, req.query.receiver);
    var amount = parseFloat(req.query.amount);
    if (sender === undefined || receiver === undefined || amount === undefined) {
        res.status(400).end();
    } else {
        // Make actual crypto transfer
        sender.balance -= amount;
        receiver.balance += amount;
        console.log(`Transferred ${amount} from ${sender.name} to ${receiver.name}.`);

        fs.writeFileSync(path, JSON.stringify(users, null, 2));
        res.status(200).json([sender, receiver]);
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
