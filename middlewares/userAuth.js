validateAPI = '12345';

const auth = (req, res, next) => {
    const key = req.headers['x-api-key'];

    if (key == undefined) {
        res.status(400).json({
            msg : "Not authorize"
        });

        return
    } else if (key != validateAPI) {
        res.status(400).json({
            msg : "Not valid API key"
        });

        return
    }

    next();
}

module.exports = auth;