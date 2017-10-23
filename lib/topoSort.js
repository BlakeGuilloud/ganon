/**
 * Topologically sort the given directed graph.
 *
 * @param {array} graph
 * The directed graph, represented as an adjacency list. Each list item is a
 * tuple consisting of the node n and its edge-list. The edge-list contains all
 * the nodes the node n is directly connected to.
 *
 * @returns {array}
 * A topological sorting of the graph, i.e. a list of all nodes of the graph
 * ordered in such a way that each node appears after the nodes it is connected
 * to. If such an ordering is not possible, undefined is returned instead.
 *
 * @example
 * // possible results:
 * // [0, 1, 2, 3, 4]
 * // [0, 2, 1, 3, 4]
 * // [0, 1, 3, 2, 4]
 * topoSort([
 *   [0, []],
 *   [1, [0]],
 *   [2, [0]],
 *   [3, [1]],
 *   [4, [3, 2]],
 * ])
 *
 * // undefined
 * topoSort([
 *   [0, [1]],
 *   [1, [2]],
 *   [2, [0]],
 * ])
 */
function topoSort(graph) {

  let append = require("./concatenateArray");

  /*
   * metaGraph:
   * [
   *   [0, 0, []],
   *   [0, 1, [0]],
   *   [0, 2, [0]],
   *   [0, 3, [1]],
   *   [0, 4, [3, 2]]
   * ]
   * NOTE: added 0 as the first element of each node denotes unvisited.
   */
  let metaGraph = graph.map(node => {
    return append([0], node);
  });

  /*
   * node - node idx
   */
  let traverse = function(node) {
    /*
     * 0 - unvisited,
     * 1 - visited on current traverse,
     * 2 - visited and stored.
     */
    // Already visited during this traverse, that must be a loop.
    if (metaGraph[node][0] === 1) throw new Error("Graph is not a DAG.");
    // Already processed.
    if (metaGraph[node][0] === 2) return [];
    // Base case: this is a leaf.
    if (metaGraph[node][2].length === 0) {
      metaGraph[node][0] = 2;
      return [node];
    }
    // Set traverse status for this node
    metaGraph[node][0] = 1;
    // Actual traverse
    let childRes = metaGraph[node][2].map(childNode => traverse(childNode));
    childRes.unshift([node]);
    let subSort = append.apply(null, childRes);
    // Set processed status
    metaGraph[node][0] = 2;
    return subSort;
  };

  try {
    return append.apply(null, metaGraph.map(el => traverse(el[1])));
  } catch (exception) {
    return undefined;
  }
}

module.exports = topoSort;