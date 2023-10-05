const user = require('../Model/user_model');
module.exports = {
    signUp: async(req,res)=>{
        try {
            const { name, email, password } = req.body;
            const response = await user.signUp(res, name, email, password);
            res.status(200).json(response);
        } catch (error) {
            console.log(error)
        }
    }
}