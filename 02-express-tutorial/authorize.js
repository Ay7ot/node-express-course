const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === 'john'){
        req.user = {
            name: 'john', 
            id : 3
        }
        console.log(req.query)
        console.log('authorize')
        next();
    }

    else {
        res.status(401).send('unauthorized')
        console.log('unauthorized')
    }
};

module.exports = authorize