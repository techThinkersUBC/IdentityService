import endpoints from '../endpoints.json';
import permissions from '../permissions.json';
// Gets endpoints required by an app with an appId

export const getEndpoints = ((req, res) => {
    const { appId } = req.params;
    const reject = () => {
        res.status(401);
        res.send('Required Details Not Provided');
        res.end();
    };
    if (!appId) return reject();

    const permissions = permissions[appId];
    if (!permissions) return reject();

    res.send({ permissions });
    res.end();
});
