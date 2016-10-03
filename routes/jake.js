var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/jake', function(req, res, next) {
  res.render(
    'jake', {
      title: 'jake',
      message: ''
    }
  );
});

module.exports = router;
