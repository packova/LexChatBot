'use strict';


function Message(contentType, content) {
  // Set content type - if no content type is provided plain text is the default
  this.contentType = contentType ? contentType : 'PlainText';
  this.content = content ? content : '';
}

Message.prototype.setContentType = function (contentType) {
  this.contentType = contentType;
};

Message.prototype.setContent = function (content) {
  this.content = content;
};

module.exports = Message;