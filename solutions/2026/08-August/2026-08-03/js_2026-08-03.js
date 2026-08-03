// JavaScript solution for 2026-08-03
// Emoji Translator
const emoji = {
	'👶': 'baby',
	'🐱': 'cat',
	'🐕': 'dog',
	'🐟': 'fish',
	'🥵': 'hot',
	'🧊': 'ice',
	'🪨': 'rock',
	'🦈': 'shark',
	'🍲': 'soup',
	'⭐': 'star'
};

function getEmojiPhrase(str) {
	const res = [];

	for (const c of str){
		res.push(emoji[c]);
	}

	return res.join(' ');
}