# Express.js Header Set After Sending Response

This repository demonstrates a common error in Express.js applications: attempting to set headers after the response has already been sent to the client.  This typically results in an error or unexpected behavior.

## Bug Description
The bug occurs when a header is set using `res.setHeader` or a similar method after the response body has been sent using `res.send`, `res.json`, etc. The server might throw an error, or the header might simply be ignored, leading to unexpected issues.

## Bug Solution
Ensure all headers are set *before* sending the response using `res.send` or equivalent methods.  If you need to add headers after the initial response has started being sent, you need to implement a different approach, such as using chunked encoding or a streaming approach depending on your needs.