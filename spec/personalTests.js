function assert(x, y) {
  if(_.isEqual(x, y)) {
    console.log('test passing');
  } else {
    console.log('test failing');
  }
}

assert(JSON.parse('[]'), parseJSON('[]'));
assert(JSON.parse('{"foo": ""}'), parseJSON('{"foo": ""}'));
assert(JSON.parse('{}'), parseJSON('{}'));
assert(JSON.parse('{"foo": "bar"}'), parseJSON('{"foo": "bar"}'));
assert(JSON.parse('["one", "two"]'), parseJSON('["one", "two"]'));
assert(JSON.parse('{"a": "b", "c": "d"}'), parseJSON('{"a": "b", "c": "d"}'));
