// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Version 1 routing
const routesV1 = require('./views/v1/_routes');
router.use('/', routesV1);

// Version 2 routing
const routesV2 = require('./views/v2/_routes');
router.use('/', routesV2);

// Version 3 routing
const routesV3 = require('./views/v3/_routes');
router.use('/', routesV3);

// Version 4 routing
const routesV4 = require('./views/v4/_routes');
router.use('/', routesV4);

// Version 5 routing
const routesV5 = require('./views/v5/_routes');
router.use('/', routesV5);

// Version 6 routing
const routesV6 = require('./views/v6/_routes');
router.use('/', routesV6);

module.exports = router;
