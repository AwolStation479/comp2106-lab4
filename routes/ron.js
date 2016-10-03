var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ron', function(req, res, next) {
  res.render(
    'ron', {
      title: 'Ron',
      message: ''
    }
  );
});

module.exports = router;
