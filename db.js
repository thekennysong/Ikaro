var RNDBModel = require('react-native-db-models');

var DB = {
    "users": new RNDBModel.create_db('users'),
    "limit": new RNDBModel.create_db('limit'),
}

module.exports = DB;

