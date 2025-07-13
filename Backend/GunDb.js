const Gun = require('gun'); 
const express = require('express');
const app = express();
const server = app.listen(8765, () => console.log("Backend running"));
Gun({ web: server, radisk: true }); // Important: radisk enabled
