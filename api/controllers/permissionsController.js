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
    if (!perms) return reject();

    const endpointsToReturn = [];
    perms.endpoints.forEach((e) => {
        const endpoint = endpoints[e.endpointId];
        endpointsToReturn.push({
            url: endpoint.url,
            endpointDescription: endpoint.description,
            permissionDescription: e.description,
        });
    });

    res.send({ name: perms.name, endpoints: endpointsToReturn });
    res.end();
});
