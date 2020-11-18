const jwt = require('jsonwebtoken')
const SECRET = require('../config').JWT_SECRET

class API {
	constructor() {
		this.secret = SECRET
		this.setToken = async function (username, password) {
			return await jwt.sign(
				{
					username,
					password
				},
				SECRET,
				{ expiresIn: '2h' }
			)
		}
	}
}
