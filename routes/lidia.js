var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/lidia', function(req, res, next) {
  res.render(
    'lidia', {
      title: 'Lidia',
      message: ''
    }
  );
});

module.exports = router;
