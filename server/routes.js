var controller = require('./controller/movies.js')
var router = require('express').Router();


router.get('/movies', controller.get);
router.post('/movies', controller.post);
router.put('/movies', controller.put);
router.post('', (req, res) => res.send(console.log('hello world!')));
router.put('' , (req, res) => res.send(console.log('hello world!')));
router.patch('', (req, res) => res.send(console.log('hello world!')));
router.delete('', (req, res) => res.send(console.log('hello world!')));
router.options('', (req, res) => res.send(console.log('hello world!')));


module.exports = router;