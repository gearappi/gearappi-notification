const nodemailer = require('nodemailer');    

module.exports = {
    async sendMail(params){
        console.log("params", params)
        // return {response: params}
        var html_mes = "Пришла заявка с сайта \n ";
        html_mes += params.name ? "Имя: " + params.name + '\n' : '';
        html_mes += params.phone ? "Телефон: " + params.phone + '\n' : '';
        html_mes += params.email ? "Email: " + params.email + '\n' : '';
        html_mes += params.theme ? "Тема: " + params.theme + '\n' : '';
        html_mes += params.msg ? "Сообщение: " + params.msg + '\n' : '';
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
                from: '" Сообщение с сайта" <admin@vulcanicawater.com>',
                to: mail_to,
                subject: "Message from site vulcanicawater.com",
                text: html_mes
            });
            console.log("Отправил: ", html_mes);
            return result;
        } catch(e) {
            return { response:'Error', error: e }
        }
    }
}
