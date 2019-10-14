import jwt from 'jsonwebtoken';

export const getToken = (req, res) => {
    const secret = process.env.SECRET;
    const token = jwt.sign({ id: '1', email: 'jeffreydoylec@gmail.com', type: 'admin' }, secret, { expiresIn: '24h' });
    res.send({ jwt: token });
    res.end();
};

export const validateToken = (req, res) => {
    const secret = process.env.SECRET;
    jwt.verify(req.body.jwt, secret, function(err, decoded) {
        if (err || !decoded) {
            res.status(401);
            res.send('No Valid Token Provided');
            res.end();
            return;
        }
        res.status(200);
        res.end();
        return;
    });
};
