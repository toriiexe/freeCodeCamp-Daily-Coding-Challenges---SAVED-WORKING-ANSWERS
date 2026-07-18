// JavaScript solution for 2026-04-29
// URL Query Parser
function parseUrlQuery(url) {
    if (!url.includes("?")) {
        return {};
    }

    const query = url.split("?", 2)[1];
    const result = {};

    for (const param of query.split("&")) {
        const [key, value] = param.split("=", 2);
        result[key] = value;
    }

    return result;
}