import endpoints from '../endpoints.json';
import permissions from '../permissions.json';

// Gets permissions required by an app with an appId
export const getPermissions = ((req, res) => {
    const { appId } = req.params;
    const reject = () => {
        res.status(401);
        res.send('Required Details Not Provided');
        res.end();
    };
    if (!appId) return reject();

    const perms = permissions[appId];
    if (!permissions) return reject();

    const permissions = [];
    perms.endpoints.forEach((e) => {
        endpointsToReturn.push(endpoints[e]);
    });

    res.send({ endpoints });
    res.end();
});
