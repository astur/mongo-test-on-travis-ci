const test = require('ava');
const db = require('.');

test('mongo-test-on-travis-ci', t => {
    t.true(true);
    t.is(db, db);
});
