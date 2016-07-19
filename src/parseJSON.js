var parseJSON = function(json) {
  var split = json.split('');
  if(split[0] === '[') {
    if(split[1] === ']') return [];
    var arr = [];
    var comma = _.indexOf(split, ',');
    var itemOne = split.slice(2, comma-1).join('');
    arr.push(itemOne);
    var end = _.indexOf(split, ']');
    var itemTwo = split.slice(comma+3, end-1).join('');
    arr.push(itemTwo);
    return arr;
  }
  if(split[0] === '{'){
    if(split[1] === '}') return {};
    var obj = {};
    var indexOfColon = _.indexOf(split, ':');
    var key = split.slice(2, indexOfColon-1).join('');
    var value = split.slice(indexOfColon+3, split.length-2).join('');
    obj[key] = value;
    return obj;
  }
};
