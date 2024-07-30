const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.REACT_APP_ENCRYPT_SECRET;
console.log("JWT Secret:", secret); // Add this line to check the secret
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Bearer JWTinfo ["Bearer", "token_data"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }
    //console.log("Token: ", token)
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      //console.log("Data: ", data);
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
