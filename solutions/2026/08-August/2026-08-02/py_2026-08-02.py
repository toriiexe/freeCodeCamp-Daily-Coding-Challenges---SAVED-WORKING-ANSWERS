# Python solution for 2026-08-02
# Food Chain
def get_food_chain(pairs):
    graph = {}
    preys = set()

    for predator, prey in pairs:
        graph[predator] = prey
        preys.add(prey)

    start = next(p for p in graph if p not in preys)

    def dfs(node):
        if node is None:
            return []
        return [node] + dfs(graph.get(node))

    return dfs(start)