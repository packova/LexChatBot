'use strict';

const intentHandlers = require('./intents/intents.js');

/**
 * Calls the appropriate handler by intentName
 * intentHandlers is an object with functions
 * each handler function is named as one of the intentNames
 * defined in AWS Lex
 * @param {*} intentRequest
 */
function dispatch(intentRequest) {
  const intentName = intentRequest.currentIntent.name;

  // Dispatch to intent handlers
  return intentHandlers[intentName](intentRequest);
}

// Main handler
exports.handler = (event, context, callback) => {
  dispatch(event).then(res => {
    callback(null, res);
  }).catch(err => {
    console.log('Error: ', err);
    callback(err);
  });
};