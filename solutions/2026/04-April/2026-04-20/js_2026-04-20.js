// JavaScript solution for 2026-04-20
// Acronym Finder
function findOrg(acronym) {
    const acronyms = {
        'NASA': 'National Avocado Storage Authority',
        'CIA': 'Cats Infiltration Agency',
        'FBI': 'Fluffy Beanbag Inspectors',
        'DOJ': 'Department Of Jelly',
        'WHO': 'Wild Honey Organization',
        'EPA': 'Eating Pancakes Administration'
    }
    return acronyms[acronym];
}