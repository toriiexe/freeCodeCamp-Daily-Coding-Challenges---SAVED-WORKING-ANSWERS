// JavaScript solution for 2026-01-31
// Zodiac Finder
function getSign(dateStr) {
    const dt = new Date(dateStr);

    if (isNaN(dt.getTime())) throw new Error("Invalid date");

    const month = dt.getMonth() + 1;
    const day = dt.getDate();

    const zodiac = {
      1: ["Capricorn", "Aquarius", 20],
      2: ["Aquarius", "Pisces", 19],
      3: ["Pisces", "Aries", 21],
      4: ["Aries", "Taurus", 20],
      5: ["Taurus", "Gemini", 21],
      6: ["Gemini", "Cancer", 21],
      7: ["Cancer", "Leo", 23],
      8: ["Leo", "Virgo", 23],
      9: ["Virgo", "Libra", 23],
      10: ["Libra", "Scorpio", 23],
      11: ["Scorpio", "Sagittarius", 22],
      12: ["Sagittarius", "Capricorn", 22]
    };

    const res = zodiac[month];
    return res[Number(day >= res[2])];
}