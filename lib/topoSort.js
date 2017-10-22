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
  throw new Error("not implemented");
}

module.exports = topoSort;
