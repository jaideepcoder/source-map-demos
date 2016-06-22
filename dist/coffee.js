(function() {
  var cubes, list, math, num, number, opposite, race, runners, square, winner,
    slice = [].slice;

  number = 42;

  opposite = true;

  if (opposite) {
    number = -42;
  }

  square = function(x) {
    return x * x;
  };

  list = [1, 2, 3, 4, 5];

  math = {
    root: Math.sqrt,
    square: square,
    cube: function(x) {
      return x * square(x);
    }
  };

  winner = "bob";

  runners = ["alice", "bob", "carol"];

  race = function() {
    var runners, winner;
    winner = arguments[0], runners = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  };

  console.log(winner, runners);

  if (typeof elvis !== "undefined" && elvis !== null) {
    alert("I knew it!");
  }

  cubes = (function() {
    var i, len, results;
    results = [];
    for (i = 0, len = list.length; i < len; i++) {
      num = list[i];
      results.push(math.cube(num));
    }
    return results;
  })();

  setTimeout((function() {
    return console.log("hello from coffee!");
  }), 1000);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQSxNQUFBLHVFQUFBO0lBQUE7O0VBQUEsTUFBQSxHQUFXOztFQUNYLFFBQUEsR0FBVzs7RUFHWCxJQUFnQixRQUFoQjtJQUFBLE1BQUEsR0FBUyxDQUFDLEdBQVY7OztFQUdBLE1BQUEsR0FBUyxTQUFDLENBQUQ7V0FBTyxDQUFBLEdBQUk7RUFBWDs7RUFHVCxJQUFBLEdBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYjs7RUFHUCxJQUFBLEdBQ0E7SUFBQSxJQUFBLEVBQVEsSUFBSSxDQUFDLElBQWI7SUFDQSxNQUFBLEVBQVEsTUFEUjtJQUVBLElBQUEsRUFBUSxTQUFDLENBQUQ7YUFBTyxDQUFBLEdBQUksTUFBQSxDQUFPLENBQVA7SUFBWCxDQUZSOzs7RUFLQSxNQUFBLEdBQVM7O0VBQ1QsT0FBQSxHQUFVLENBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsT0FBakI7O0VBQ1YsSUFBQSxHQUFPLFNBQUE7QUFBc0IsUUFBQTtJQUFyQix1QkFBUTtFQUFUOztFQUNQLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWixFQUFvQixPQUFwQjs7RUFHQSxJQUFzQiw4Q0FBdEI7SUFBQSxLQUFBLENBQU0sWUFBTixFQUFBOzs7RUFHQSxLQUFBOztBQUFTO1NBQUEsc0NBQUE7O21CQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsR0FBVjtBQUFBOzs7O0VBRVQsVUFBQSxDQUFXLENBQUMsU0FBQTtXQUFNLE9BQU8sQ0FBQyxHQUFSLENBQVksb0JBQVo7RUFBTixDQUFELENBQVgsRUFBc0QsSUFBdEQ7QUE5QkEiLCJmaWxlIjoiY29mZmVlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyBBc3NpZ25tZW50OlxubnVtYmVyICAgPSA0Mlxub3Bwb3NpdGUgPSB0cnVlXG5cbiMgQ29uZGl0aW9uczpcbm51bWJlciA9IC00MiBpZiBvcHBvc2l0ZVxuXG4jIEZ1bmN0aW9uczpcbnNxdWFyZSA9ICh4KSAtPiB4ICogeFxuXG4jIEFycmF5czpcbmxpc3QgPSBbMSwgMiwgMywgNCwgNV1cblxuIyBPYmplY3RzOlxubWF0aCA9XG5yb290OiAgIE1hdGguc3FydFxuc3F1YXJlOiBzcXVhcmVcbmN1YmU6ICAgKHgpIC0+IHggKiBzcXVhcmUgeFxuXG4jIFNwbGF0czpcbndpbm5lciA9IFwiYm9iXCJcbnJ1bm5lcnMgPSBbXCJhbGljZVwiLCBcImJvYlwiLCBcImNhcm9sXCJdXG5yYWNlID0gKHdpbm5lciwgcnVubmVycy4uLikgLT5cbmNvbnNvbGUubG9nIHdpbm5lciwgcnVubmVyc1xuXG4jIEV4aXN0ZW5jZTpcbmFsZXJ0IFwiSSBrbmV3IGl0IVwiIGlmIGVsdmlzP1xuXG4jIEFycmF5IGNvbXByZWhlbnNpb25zOlxuY3ViZXMgPSAobWF0aC5jdWJlIG51bSBmb3IgbnVtIGluIGxpc3QpXG5cbnNldFRpbWVvdXQgKCgpIC0+IGNvbnNvbGUubG9nKFwiaGVsbG8gZnJvbSBjb2ZmZWUhXCIpKSwgMTAwMFxuIl19
