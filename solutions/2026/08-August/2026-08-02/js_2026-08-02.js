// JavaScript solution for 2026-08-02
// Food Chain
function getFoodChain(pairs) {
	const graph = {};
	const preys = new Set();

	for (const [predator, prey] of pairs) {
		graph[predator] = prey;
		preys.add(prey);
	}

	const start = Object.keys(graph).find(p => !preys.has(p));

	function dfs(node) {
		if (node === undefined) return [];
		return [node, ...dfs(graph[node])];
	}

	return dfs(start);
}