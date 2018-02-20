const test = require('ava');
const db = require('.');

test('mongo-test-on-travis-ci', async t => {
    const _db = await db;
    await _db.collection('test').remove({});
    t.is(await _db.collection('test').count(), 0);
    await _db.collection('test').insert({a: 1});
    t.is(await _db.collection('test').count(), 1);
    t.is((await _db.collection('test').find({a: 1}).toArray())[0].a, 1);
    await _db.close();
});
