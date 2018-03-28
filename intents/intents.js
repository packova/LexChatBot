'use strict';

require('dotenv').config();
const Message = require('../models/message');
const dialog = require('../utilities/dialog');

const blogsMessage = process.env.BLOGS_RESPONSE;


function fbchatBlogsIntent() {
  const sessionAttributes = {};
  const message = new Message();
  message.setContent(blogsMessage);
  return dialog.close(sessionAttributes, 'Fulfilled', message);
}


module.exports = {
  fbchatBlogsIntent
};