// JavaScript solution for 2026-05-04
// Parsec Converter
function convertParsecs(parsecs) {
  return (parsecs % 2 !== 0) ? parsecs * 2 : parsecs * 3;
}