// JavaScript solution for 2025-11-04
// Image Search
function imageSearch(images, term) {
    term = term.toLowerCase();
	return images.filter(image => image.toLowerCase().includes(term));
}