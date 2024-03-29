/**
 * Created by Joe on 11/16/16.
 */
var mysql  = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM account;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(account_id, callback) {
    var query = 'SELECT * FROM account WHERE account_id = ?';
    var queryData = [account_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO account (first_name, last_name, email) VALUES (?, ?, ?)';
    var queryData = [params.first_name, params.last_name, params.email];

    connection.query(query,queryData, function(err, result){
        callback(err, result);
    });
}

exports.delete = function(account_id, callback){
    var query = 'DELETE FROM account where account_id = ?';
    var queryData = [account_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
}