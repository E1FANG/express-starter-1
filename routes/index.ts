import {RequestHandler} from 'express';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: '我的ts主页title'});
} as RequestHandler);

module.exports = router;
