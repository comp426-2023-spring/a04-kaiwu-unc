#!/user/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js';

const args = minimist(process.argv.slice(2), {string: ['port'],
                                              default: {'port': '5000'}});
const app = express();
app.use(express.json())

app.get('/app', function (req, res) {
    res.status(200)
    res.send('200 OK')
})

app.get('/app/rps', function (req, res) {
    res.status(200)
    res.send(rps())
})

app.get('/app/rpsls', function (req, res) {
    res.status(200)
    res.send(rpsls())
})

app.get('/app/rps/play', function (req, res) {
    res.status(200)
    res.send(rps(req.query.shot))
})

app.get('/app/rpsls/play', function (req, res) {
    res.status(200)
    res.send(rpsls(req.query.shot))
})

app.post('/app/rps/play/:shot', function (req, res) {
    res.status(200)
    res.send(rps(req.params.shot))
})

app.post('/app/rpsls/play/:shot', function (req, res) {
    res.status(200)
    res.send(rpsls(req.params.shot))
})



