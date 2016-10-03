var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/simon', function(req, res, next) {
  res.render(
    'simon', {
      title: 'Simon',
      message: ''
    }
  );
});

module.exports = router;
