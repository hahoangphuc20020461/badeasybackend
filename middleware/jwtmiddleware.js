import jwt from 'jsonwebtoken';


//verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.accesstoken;
    console.log(token)
    if (token) {
        jwt.verify(token, "secretKey", (err, decodedToken) => {
            console.log(decodedToken)
            if (err) {
                throw new Error('Token is not invalid');
            } else if (decodedToken.iat < 0) {
                throw new Error('Token expired');
            } else {
                req.headers.id = decodedToken._id;
                next()
            }
        });
        
    } else {
        throw new Error('You are not authenticated');
    }
};

export const jwtMiddleware = {
    verifyToken,
};
