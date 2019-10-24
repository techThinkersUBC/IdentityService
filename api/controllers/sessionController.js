import permissions from '../permissions.json';
import jwt from "jsonwebtoken";

// Gets permissions required by an app with an appId
export const getSessionToken = ((req, res) => {
    const reject = () => {
        res.status(401);
        res.send('Required Details Not Provided');
        res.end();
    };

    const secret = process.env.SECRET;
    const {
        appId,
        name,
        email,
        password
    } = req.body;

    console.log(appId, name, email, password);

    if (!appId || !name || !email || !password) return reject();

    //TODO: Validate password somehow?

    const callbackUrl = permissions[appId].callbackUrl;

    const token = jwt.sign({ appId, email, name }, secret, { expiresIn: '24h' });

    res.send({ jwt: token, callbackUrl });
    res.end();
});
