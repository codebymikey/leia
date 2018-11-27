/*
 * This file was automatically generated, editing it manually would be foolish
 *
 * See https://github.com/lando/leia for more
 * information on how all this magic works
 *
 * id: leia
 * runs-from: ..
 */
// We need these deps to run our tezts
const chai = require('chai');
const CliTest = require('command-line-test');
const path = require('path');
chai.should();

// eslint-disable max-len

describe('leia', function() {
  this.retries(3);

  // These tests are the main event
  // @todo: It would be nice to eventually get these into mocha after hooks
  // so they run after every test
  it('clean up previous test', done => {
    process.chdir(path.resolve(__dirname, '..'));
    const cli = new CliTest();
    cli.exec('rm -f test/leia.readme.js').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('get the version of leia', done => {
    process.chdir(path.resolve(__dirname, '..'));
    const cli = new CliTest();
    cli.exec('yarn leia --version').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('generate tests from this readme with some options', done => {
    process.chdir(path.resolve(__dirname, '..'));
    const cli = new CliTest();
    cli.exec('yarn leia README.md test -r 6 -o readme.js').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('validate the new test was created', done => {
    process.chdir(path.resolve(__dirname, '..'));
    const cli = new CliTest();
    cli.exec('cat test/leia.readme.js | grep "id: leia"').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('validate the retry was set correctly', done => {
    process.chdir(path.resolve(__dirname, '..'));
    const cli = new CliTest();
    cli.exec('cat test/leia.readme.js | grep retries | grep 6').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });
});
