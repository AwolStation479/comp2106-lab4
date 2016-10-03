var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/emily', function(req, res, next) {
    res.render(
    'emily', {
      title: 'Emily',
      message: ''
    }
  );
});

module.exports = router;
