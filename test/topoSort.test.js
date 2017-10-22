const { topoSort } = require("../lib");

describe("topoSort", () => {
  expect.extend({
    toBeAValidTopologicalSortingOf(sorting, graph) {
      const errors = checkForErrors();
      return {
        message: () =>
          "Expected a valid topological sorting, but the following errors occured:\n" +
          errors.map(e => " - " + e).join("\n"),
        pass: errors.length === 0,
      };

      function checkForErrors() {
        return [
          ...checkNumberOfNodes(),
          ...checkPresenceOfNodes(),
          ...checkOrderOfNodes(),
        ];
      }

      function checkNumberOfNodes() {
        if (sorting.length === graph.length) return [];
        return [`Graph has ${graph.length} nodes, but sorting has ${sorting.length}.`];
      }

      function checkPresenceOfNodes() {
        const missingNodes = [];
        for (let [node, edges] of graph) {
          if (!sorting.includes(node)) {
            missingNodes.push(node);
          }
        }
        return missingNodes.map(n => `Node ${n} is missing.`);
      }

      function checkOrderOfNodes() {
        const missplacedNodes = [];
        for (let [node1, edges] of graph) {
          const index1 = sorting.indexOf(node1);
          if (index1 === -1) continue;
          for (let node2 of edges) {
            const index2 = sorting.indexOf(node2);
            if (index2 === -1) continue;
            if (index1 < index2) {
              missplacedNodes.push([node1, node2]);
            }
          }
        }
        return missplacedNodes.map(([n1, n2]) => `Node ${n1} appears before node ${n2}`);
      }
    },
  });

  test("should provide a valid topological sorting", () => {
    const graph = [
      [0, []],
      [1, [0]],
      [2, [0]],
      [3, [1]],
      [4, [3, 2]],
    ];
    expect(topoSort(graph)).toBeAValidTopologicalSortingOf(graph);
  });

  test("should be able to deal with a cyclic graph", () => {
    expect(topoSort([
      [0, [1]],
      [1, [2]],
      [2, [0]],
    ])).toBeUndefined();
  });

  test("should be able to deal with a disconnected graph", () => {
    const graph = [
      [0, []],
      [1, [0]],
      [2, []],
      [3, [2]],
    ];
    expect(topoSort(graph)).toBeAValidTopologicalSortingOf(graph);
  });

  test("should not mutate the graph", () => {
    const graph = [
      [0, []],
      [1, [0]],
      [2, [0]],
      [3, [1]],
      [4, [3, 2]],
    ];
    const json = JSON.stringify(graph);
    topoSort(graph);
    expect(JSON.stringify(graph)).toBe(json);
  });
});
