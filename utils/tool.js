const bcrypt = require('bcryptjs');
module.exports = {
    isValidPassword: async (password) => {
        // 正則表達式確保密碼包含大寫字母、小寫字母、數字和符號中的至少三項
        const aRegex = /[a-z]/;
        const ARegex = /[A-Z]/;
        const sRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        const nRegex = /\d/;
        let c = 0;
        if (aRegex.test(password)) {
            c++;
        }
        if (ARegex.test(password)) {
            c++;
        }
        if (sRegex.test(password)) {
            c++;
        }
        if (nRegex.test(password)) {
            c++;
        }
        return c
    },
    generateHashSync: async (password) => {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    },
    confirmPassword: async (input, real) => {
        return bcrypt.compareSync(input, real);
    },
    getCurrentGMTTimeString: async () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const currentDate = new Date();
        const dayOfWeek = currentDate.toLocaleDateString('en', { weekday: 'short' });
        const month = months[currentDate.getUTCMonth()];
        const day = currentDate.getUTCDate();
        const year = currentDate.getUTCFullYear();
        const hours = currentDate.getUTCHours().toString().padStart(2, '0');
        const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');

        return `${dayOfWeek}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`;
    }

}