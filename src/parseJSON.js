var parseJSON = function(json) {
  var array = json.split('');
  if(array[0] === '[' && array[1] === ']') return [];
  if(array[0] === '{'){
    var obj = {};
    var indexOfColon = _.indexOf(array, ':');
    var key = array.slice(2, indexOfColon-1).join('');
    obj[key] = "";
    return obj;
  }
};
