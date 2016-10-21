/**
 * Created by sunNode on 16/10/22.
 */
var should = require('should');
var app = require('../app');
var request = require('supertest');


describe('user register test', function () {
    it('vaild name password should login failed', function (done) {
        request(app)
            .post('/dologin')
            .send({name: 'test@123.com', password: '123'})
            .expect('failed')
            .end(function (err, res) {
                if (err) throw err;
                console.log(res.text);
                should.exist(res.text);
                done();
            });
    });
});
