var express = require('express');
var mail = require('../../models/mails/index');

module.exports = {
  async sendCurrentMail(params){
    return await mail.sendMail(params);
  }
}