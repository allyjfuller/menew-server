'use strict';
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'https://cryptic-forest-78007.herokuapp.com'
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://ally-admin:allyjfuller@menewcluster-vpij5.mongodb.net/test?retryWrites=true';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/menew-api';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret'
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';