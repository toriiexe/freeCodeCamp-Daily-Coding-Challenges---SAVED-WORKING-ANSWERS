# Python solution for 2026-06-27
# Periodic Spelling
elements = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]

el_lower = [e.lower() for e in elements]

def get_periodic_spelling(word):
    word_lower = word.lower()

    def dfs(i):
        if i == len(word):
            return []

        if i + 1 < len(word):
            temp = word_lower[i:i+2]
            if temp in el_lower:
                res = dfs(i + 2)
                if res is not None:
                    return [elements[el_lower.index(temp)]] + res

        temp = word_lower[i]
        if temp in el_lower:
            res = dfs(i + 1)
            if res is not None:
                return [elements[el_lower.index(temp)]] + res

        return None

    res = dfs(0)
    return res if res is not None else []
