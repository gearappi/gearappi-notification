const nodemailer = require('nodemailer');    



module.exports = {
    async sendMail(params){
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASSWORD
              }
            });
        const mail_to = process.env.MAIL_TO;
        const result = await transporter.sendMail({
          from: '"Node js" <forstudyonly69@gmail.com>',
          to: mail_to,
          subject: "Message from Node jsssss",
          text: JSON.stringify(params)
        });
        return result;
    }    catch(e) {
        return {response:'Error'}
    }
    }
}
