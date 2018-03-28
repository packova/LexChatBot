'use strict';

// Helpers used to build the response

/**
 * Build validation result
 * @param {*} isValid 
 * @param {*} violatedSlot 
 * @param {*} messageContent 
 */
function buildValidationResult(isValid, violatedSlot, messageContent) {
  if (messageContent === null) {
    return {
      isValid,
      violatedSlot,
      message: {contentType: 'PlainText', content: ''}
    };
  }
  return {
    isValid,
    violatedSlot,
    message: {contentType: 'PlainText', content: messageContent}
  };
}

 // --------------- Helpers to build responses which match the structure of the necessary dialog actions -----------------------

function elicitSlot(sessionAttributes, intentName, slots, slotToElicit, message, responseCard) {
  return Promise.resolve({
    sessionAttributes,
    dialogAction: {
      type: 'ElicitSlot',
      intentName,
      slots,
      slotToElicit,
      message,
      responseCard
    }
  });
}

function elicitIntent(message, responseCard) {
  console.log('Eliciting intent.')
  return Promise.resolve({
    dialogAction: {
      type: 'ElicitIntent',
      message,
      responseCard
    }
  });
}


function close(sessionAttributes, fulfillmentState, message) {
  return Promise.resolve({
    sessionAttributes,
    dialogAction: {
      type: 'Close',
      fulfillmentState,
      message
    }
  });
}

function delegate(sessionAttributes, slots) {
  return new Promise(resolve => {
    resolve({
      sessionAttributes,
      dialogAction: {
        type: 'Delegate',
        slots
      }
    });
  });
}

function confirmIntent(sessionAttributes, intentName, slots, message, responseCard) {
  return Promise.resolve({
      sessionAttributes,
      dialogAction: {
          type: 'ConfirmIntent',
          intentName,
          slots,
          message,
          responseCard,
      },
  });
}

/**
 * 
 * Build a responseCard with a title, subtitle, and an optional set of options which should be displayed as buttons.
 */
function buildResponseCards(responseCards){
    return {
        'contentType': 'application/vnd.amazonaws.card.generic',
        'version': 1,
        'genericAttachments': responseCards
    };
}

module.exports = {
  delegate,
  elicitSlot,
  elicitIntent,
  buildValidationResult,
  close,
  confirmIntent,
  buildResponseCards
};
