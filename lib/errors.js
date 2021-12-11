'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on weicore-p2p Module {0}'
};

module.exports = require('@weicrypto/weicore-lib').errors.extend(spec);
