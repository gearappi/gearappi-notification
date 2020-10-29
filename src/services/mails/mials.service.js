const mail = require('../../models/mails/index');

module.exports = {
  async sendCurrentMail(params){
    console.log('[MAILS-SERVICE]', params)
    return await mail.sendMail(params);
  }
}
