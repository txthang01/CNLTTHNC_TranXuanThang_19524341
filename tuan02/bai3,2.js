const express = require('express');
const app = express();

// GET www.domain.com/myPath
app.get('/myPath', function(req, res, next) {})
    // POST www.domain.com/myPath
app.post('/myPath', function(req, res, next) {})
    // PUT www.domain.com/myPath
app.put('/myPath', function(req, res, next) {})
app.all('/myPath', function(req, res, next) {})
app.route('/myPath')
    .get(function(req, res, next) {})
    .post(function(req, res, next) {})
    .put(function(req, res, next) {})
    // GET www.domain.com/myPath
    // GET www.domain.com/myPath

// other.js
exports.doSomething = function(req, res, next) { /* do some stuff */ };
const other = require('./bai3,2.js');