function assert(x, y) {
  if(_.isEqual(x, y)) {
    console.log('test passing');
  } else {
    console.log('test failing');
  }
}

assert(JSON.parse('[]'), parseJSON('[]'));
assert(JSON.parse('{"foo": ""}'), parseJSON('{"foo": ""}'));
