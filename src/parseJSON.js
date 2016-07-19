var parseJSON = function(json) {
  var array = json.split('');
  if(array[0] === '[' && array[1] === ']') return [];
  if(array[0] === '{'){
    if(array[1] === '}') return {};
    var obj = {};
    var indexOfColon = _.indexOf(array, ':');
    var key = array.slice(2, indexOfColon-1).join('');
    var value = array.slice(indexOfColon+3, array.length-2).join('');
    obj[key] = value;
    return obj;
  }
};
