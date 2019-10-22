/**
 * Validates the jwt in the request header is valid.
 *
 * @param {*} req [The request]
 * @param {*} res [The response]
 * @param {*} next [The next action]
 * @return {*} next
 */
export const validateToken = (req, res, next) => {
    const token = req.get('jwt');

    if (!token) {
        res.status(400);
        res.send('No Valid Token Provided');
        return;
    }

    const secret = process.env.SECRET;

    jwt.verify(token, secret, function(err, decoded) {

        if (err || !decoded) {
            res.status(400);
            res.send('No Valid Token Provided');
            return;
        }
        req.auth = decoded;
        return next();
    });
};
