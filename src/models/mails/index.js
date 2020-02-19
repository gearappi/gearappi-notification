const nodemailer = require('nodemailer');    

const USER = process.env.MAIL;
const PASS = process.env.PASSWORD;
const MAIL_TO = process.env.MAIL_TO;

module.exports = {
    async sendMail(params){
        // return {response: params}
        try{
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: USER,
                    pass: PASS
                }
            });

            const mail_to = MAIL_TO;
            
            const result = await transporter.sendMail({
                from: '"Node js" <linkidin1000@gmail.com>',
                to: mail_to,
                subject: "Message from Node js",
                text: JSON.stringify(params)
            });
            return result;
        } catch(e) {
            return { response:'Error', error: e }
        }
    }
}
