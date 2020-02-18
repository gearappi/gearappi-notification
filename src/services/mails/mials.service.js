const mail = require('../../models/mails/index');

module.exports = {
  async sendCurrentMail(params){
    return await mail.sendMail(params);
  }
}