// A directed graph is represented as an array of 'edges'.
// Each 'edge' is composed of a start and end node.

/* Example:
[
	{from: 'A', to: 'C'},
	{from: 'B', to: 'D'},
	{from: 'C', to: 'E'},
	{from: 'D', to: 'A'},
	{from: 'E', to: 'F'}
];
*/

// Given a directed graph, a character representing a start node,
// and a character representing a destination, determine whether
// it is possible to reach that destination by beginning at the start
// and traversing the graph.

function isReachable(graph, start, destination){

  let destinationFound = false;
  let activeNode = start;
  // kind of brute force
  for (var index = 0; index < graph.length; index++) {
    graph.forEach((graphElement) => {

      if(activeNode === graphElement["from"]) {
        activeNode = graphElement["to"];

        if(activeNode === destination) {
          destinationFound = true;
        }
      }
    });

    if(destinationFound) {
      return true;
    }
  }

  return false;
}

module.exports = isReachable;