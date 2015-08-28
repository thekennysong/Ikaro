var RNDBModel = require('react-native-db-models');

var DB = {
    "app": new RNDBModel.create_db('app'),
    "limit": new RNDBModel.create_db('limit'),
}

module.exports = DB;

