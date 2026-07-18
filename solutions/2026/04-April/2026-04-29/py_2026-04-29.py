# Python solution for 2026-04-29
# URL Query Parser
def parse_url_query(url):
    if '?' not in url:
        return {}

    query = url.split('?', 1)[1]
    result = {}

    for param in query.split('&'):
        key, value = param.split('=', 1)
        result[key] = value

    return result