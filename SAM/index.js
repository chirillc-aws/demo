
var AWS = require('aws-sdk');


exports.handler = function(event, context, callback) {
  var bucketName = process.env.S3_BUCKET;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!!!!' + bucketName,
      input: event,
    }),
  };

  callback(null, response);
 }
