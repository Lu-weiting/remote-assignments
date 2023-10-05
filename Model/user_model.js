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
            if (!password || await tool.isValidPassword(password) < 3) return res.status(400).json({ error: 'Client error: password format' });
            const hashPassword = await tool.generateHashSync(password);
            const date = new Date();
            const GMTtime = await tool.getCurrentGMTTimeString(date);
            const checkQuery = 'SELECT * FROM user WHERE email = ?';
            const insertQuery = 'INSERT INTO user(name, email, password,created_at) VALUES(?,?,?,NOW())';
            const [checkResult] = await connection.execute(checkQuery,[email]);
            if (checkResult.length !== 0) return res.status(409).json({ error: 'email existed' });
            const [results] = await connection.execute(insertQuery, [name, email, hashPassword]);
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

    },
    query: async(res,userId)=>{
        try{
            const connection = await db;
            const checkQuery = 'SELECT * FROM user WHERE id = ?';
            const [checkResult] = await connection.execute(checkQuery,[userId]);
            if (checkResult.length === 0) return res.status(403).json({ error: 'user not exist' });
            const response = {
                data: {
                    user: {
                        id: checkResult[0].id,
                        name: checkResult[0].name,
                        email: checkResult[0].email,
                    },
                    "request-date": await tool.getCurrentGMTTimeString(checkResult[0].created_at)
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