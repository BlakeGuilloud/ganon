// A directed graph is represented as an array of 'edges'.
// Each 'edge' is composed of a start and end node.

/* Example:
[
	{from: 'A', to: 'C'},
	{from: 'B', to: 'D'},
	{from: 'C', to: 'E'},
	{from: 'D', to: 'A'},
    {from: 'E', to: 'F'},
    {from: 'F', to: 'A'}
];
*/

// Given a directed graph, a character representing a start node,
// and a character representing a destination, determine whether
// the graph contains a cycle

function hasGraphCycle(graph) {
  //build an array of known nodes
  var nodes = new Map();
  //check all out-going nodes
  graph.forEach(function (element) {
    if (nodes.has(element.from)) {//node already known in map
      nodes.get(element.from).links.push(element.to);
    } else {//node not known
      nodes.set(element.from, { visited: false, links: [] });
      nodes.get(element.from).links.push(element.to);
    }
  });
  //check nodes that are only in-going
  graph.forEach(function (element) {
    if (!nodes.has(element.to)) {//node already known in map
      nodes.set(element.from, { visited: false, links: [] });
    }
  });
  var first = nodes.keys().next().value;
  //start with the first element of this list
  var explorationList = [first];
  var isCyclic = false;
  nodes.get(first).visited = true;
  while (explorationList.length > 0) {
    var curr = explorationList.shift();
    //parse through each nextNode of this current element
    nodes.get(curr).links.forEach(function (child) {
      if (!nodes.get(child).visited) {
        nodes.get(child).visited = true;
        explorationList.push(child);
      } else {
        isCyclic = true;
      }
    });
  }
  return isCyclic;
}
module.exports = hasGraphCycle;
