// JavaScript solution for 2026-03-27
// Truncate the Text 2
function truncateText(str) {
    const width1 = 'ilI.';
    const width2 = 'fjrt ';
    const width3 = 'abcdeghkmnopqrstuvwxyzJL';
    const width4 = 'ABCDEFGHKMNOPQRSTUVWXYZ';

    let total = 0;
    let res = '';

    for (const c of str) {
        if (width1.includes(c)) {
            otal += 1;
        } else if (width2.includes(c)) {
            total += 2;
        } else if (width3.includes(c)) {
            total += 3;
        } else if (width4.includes(c)) {
            total += 4;
        }

        if (total > 50) {
            if (width1.includes(c)) {
                total -= 1;
            } else if (width2.includes(c)) {
                total -= 2;
            } else if (width3.includes(c)) {
                total -= 3;
            } else if (width4.includes(c)) {
                total -= 4;
            }

        total += 3;

        while (total > 50) {
            const lastC = res[res.length - 1];
            if (width1.includes(lastC)) {
                total -= 1;
            } else if (width2.includes(lastC)) {
                total -= 2;
            } else if (width3.includes(lastC)) {
                total -= 3;
            } else if (width4.includes(lastC)) {
                total -= 4;
            }
            res = res.slice(0, -1);
        }

        res += '...';
        break;
        }

        res += c;
    }

    return res;
}