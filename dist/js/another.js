(function() {
  var cubes, data, myFunction, num, number, race, squre;

  data = {
    name: 'xiaoli',
    old: 23,
    desc: 'he is a SB',
    showDetail: function(desc) {
      return alert("this is detail!");
    }
  };

  opposite;

  if (opposite) {
    number = 42;
  }

  squre = function(x) {
    return x * x;
  };

  race = function(winner, loser) {
    return print('you are ' + loser, 'he is winner');
  };

  myFunction = function(x, y) {
    return alert(x + y);
  };

  cubes = (function() {
    var i, len, results;
    results = [];
    for (i = 0, len = list.length; i < len; i++) {
      num = list[i];
      results.push(math.cube(num));
    }
    return results;
  })();

}).call(this);
