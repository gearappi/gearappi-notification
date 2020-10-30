const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

const USER = "admin@vulcanicawater.com";
const PASS = "Qwertyu1";
const MAIL_TO = "sayansara@mail.ru";

module.exports = {
    async sendMail(params){
        var html_mes = "Message from site а \n ";
        html_mes += params.name ? "Name: " + params.name + '\n' : '';
        html_mes += params.phone ? "Phone: " + params.phone + '\n' : '';
        html_mes += params.email ? "Email: " + params.email + '\n' : '';
        html_mes += params.theme ? "Theme: " + params.theme + '\n' : '';
        html_mes += params.msg ? "Message: " + params.msg + '\n' : '';
        try{
            const transporter = nodemailer.createTransport({
                service: 'yandex',
                auth: {
                    user: USER,
                    pass: PASS
                }
            });
            const mail_to = MAIL_TO;
            const result = await transporter.sendMail({
                from: '"Message from site" <admin@vulcanicawater.com>',
                to: mail_to,
                subject: "Message from site vulcanicawater.com",
                text: html_mes
            });
            return result;
        } catch(e) {
            return { response:'Error', error: e }
        }
    }
}
