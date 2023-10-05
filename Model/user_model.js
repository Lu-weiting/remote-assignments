const db = require('../utils/db').connectionPromise;
const tool = require('../utils/tool');

module.exports = {
    signUp: async (res, name, email, password) => {
        try {
            const connection = await db;
            const nameRegex = /^[a-zA-Z0-9]+$/;
            if (!name || !nameRegex.test(name)) return res.status(400).json({ error: 'Client error: name format' });
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) return res.status(400).json({ error: 'Client error: email format' });
            if (!password || await tool.isValidPassword(password) !== 3) return res.status(400).json({ error: 'Client error: password format' });
            const hashPassword = await tool.generateHashSync(password);
            const GMTtime = await tool.getCurrentGMTTimeString();
            const signupQuery = 'INSERT INTO user(name, email, password,created_at) VALUES(?,?,?,?)';
            const [results] = await connection.execute(signupQuery, [name, email, hashPassword, GMTtime]);
            const response = {
                data: {
                    user: {
                        id: results.insertId,
                        name: name,
                        email: email,
                    },
                    "request-date": GMTtime
                }
            };
            return response;
        } catch (error) {
            console.log("db problem");
            console.error(error);
        } finally {
            console.log('connection release');
        }

    }


}