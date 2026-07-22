// JavaScript solution for 2026-06-27
// Periodic Spelling
const elements = [
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S",
    "Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn",
    "Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru",
    "Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce",
    "Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf",
    "Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn",
    "Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm",
    "Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl",
    "Mc","Lv","Ts","Og"
];

const elLower = elements.map(e => e.toLowerCase());

function getPeriodicSpelling(word) {
    const wordLower = word.toLowerCase();

    function dfs(i) {
        if (i === word.length) {
            return [];
        }

        if (i + 1 < word.length) {
            const temp = wordLower.slice(i, i + 2);

            if (elLower.includes(temp)) {
                const res = dfs(i + 2);

                if (res !== null) {
                    return [elements[elLower.indexOf(temp)], ...res];
                }
            }
        }

        const temp = wordLower[i];

        if (elLower.includes(temp)) {
            const res = dfs(i + 1);

            if (res !== null) {
                return [elements[elLower.indexOf(temp)], ...res];
            }
        }

        return null;
    }

    const res = dfs(0);
    return res !== null ? res : [];
}