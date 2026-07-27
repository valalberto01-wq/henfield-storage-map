document.addEventListener("DOMContentLoaded", function () {
    const unitInput = document.getElementById("unitInput");
    const findBtn = document.getElementById("findBtn");
    const message = document.getElementById("message");
    const unitMarker = document.getElementById("unitMarker");

    /*
      Each unit will be given a position on the map.
      left = horizontal position
      top  = vertical position
    */
const unitLocations = {
    C18: { left: 36.2, top: 27.5 },
    C16: { left: 36.2, top: 32.5 },
    C14: { left: 36.2, top: 37.5 },
    C12: { left: 36.2, top: 43.0 },
    C06: { left: 36.2, top: 48.5 },
    C19:  { left: 48.4, top: 16.0 },
    C17:  { left: 48.4, top: 21.5 },
    C15:  { left: 48.4, top: 27.0 },
    C13B: { left: 48.4, top: 32.5 },
    C13A: { left: 48.4, top: 38.0 },
    C13:  { left: 48.4, top: 43.5 },
    C11:  { left: 48.4, top: 49.0 },
    C05:  { left: 48.4, top: 54.5 },
    C03:  { left: 48.4, top: 60.0 },
    C01B: { left: 48.4, top: 65.5 },
    C01D: { left: 48.4, top: 71.0 },
    M21: { left: 53.7, top: 14.5 },
    M20: { left: 53.7, top: 18.5 },
    M17: { left: 53.7, top: 23.5 },
    M15: { left: 53.7, top: 28.0 },
    M13: { left: 53.7, top: 32.5 },
    M11:  { left: 53.7, top: 34.5 },
    M09:  { left: 53.7, top: 39.0 },
    M07:  { left: 53.7, top: 43.0 },
    M05:  { left: 53.7, top: 47.0 },
    M03C: { left: 53.7, top: 51.5 },
    M03B: { left: 53.7, top: 55.5 },
    M03A: { left: 53.7, top: 55.5 },
    M03: { left: 53.7, top: 60.0 },
    M01C: { left: 53.7, top: 64.5 },
    M01B: { left: 53.7, top: 69.0 },
    M01A: { left: 53.7, top: 73.5 },
    M24: { left: 64.7, top: 20.5 },
    M19: { left: 64.7, top: 24.5 },
    M18: { left: 64.7, top: 28.0 },
    M16: { left: 64.7, top: 32.0 },
    M14: { left: 64.7, top: 36.0 },
    M12:  { left: 64.7, top: 40.0 },
    M10:  { left: 64.7, top: 44.0 },
    M04:  { left: 64.7, top: 48.0 },
    M02A: { left: 64.7, top: 52.0 },
    M02B: { left: 64.7, top: 56.0 },
    M02K: { left: 64.7, top: 52.0 },
    M02J: { left: 64.7, top: 56.0 },
    M02E: { left: 64.7, top: 60.0 },
    M02G: { left: 64.7, top: 64.0 },
    M02F: { left: 64.7, top: 68.0 },
    M02H: { left: 64.7, top: 72.0 },
    M02D: { left: 64.7, top: 64.5 },
    M02C: { left: 64.7, top: 68.5 },
    M02B: { left: 63.8, top: 71.0 },
    M02A: { left: 66.2, top: 71.0 },
    M26: { left: 67.5, top: 20.5 },
    M27: { left: 70.5, top: 20.5 },
    N20: { left: 69.5, top: 26.5 },
    N18: { left: 69.5, top: 31.0 },
    N16: { left: 69.5, top: 35.5 },
    N12: { left: 69.5, top: 40.0 },
N10: { left: 69.5, top: 44.5 },
N8B: { left: 69.5, top: 49.0 },
N8A: { left: 69.5, top: 53.5 },
N12: { left: 69.5, top: 40.0 },
N10: { left: 69.5, top: 44.5 },
N8B: { left: 69.5, top: 49.0 },
N8A: { left: 69.5, top: 53.5 },
N2A: { left: 67.2, top: 71.0 },
N2B: { left: 69.3, top: 71.0 },
N2C: { left: 71.4, top: 71.0 },
N19: { left: 81.0, top: 21.0 },
N17: { left: 81.0, top: 26.5 },
N15: { left: 81.0, top: 32.0 },
N13: { left: 81.0, top: 37.5 },
N11: { left: 81.0, top: 43.0 },
N01G: { left: 85.0, top: 88.5 },
P21: { left: 86.6, top: 21.0 },
P19: { left: 86.6, top: 26.5 },
P17: { left: 86.6, top: 32.0 },
P15: { left: 86.6, top: 37.5 },
P13: { left: 86.6, top: 43.0 },
N09A: { left: 81.0, top: 48.5 },
N09:  { left: 81.0, top: 54.0 },
N07:  { left: 81.0, top: 59.5 },
N05:  { left: 81.0, top: 65.0 },
N03: { left: 81.0, top: 70.5 },
N01: { left: 81.0, top: 88.5 },
P11: { left: 86.6, top: 48.5 },
P09: { left: 86.6, top: 54.0 },
P07: { left: 86.6, top: 59.5 },
P05: { left: 86.6, top: 65.0 },
P03: { left: 86.6, top: 70.5 },
P16A: { left: 94.0, top: 24.5 },
P16:  { left: 94.0, top: 29.0 },
P14:  { left: 94.0, top: 33.5 },
P12C: { left: 94.0, top: 38.0 },
P12B: { left: 94.0, top: 42.5 },
P12A: { left: 94.0, top: 47.0 },
P10C: { left: 94.0, top: 51.5 },
P10B: { left: 94.0, top: 56.0 },
P10A: { left: 94.0, top: 60.5 },
P12:  { left: 94.0, top: 65.0 },
P10: { left: 94.0, top: 69.5 },
P08: { left: 94.0, top: 74.0 },
P06: { left: 94.0, top: 78.5 },
P04: { left: 94.0, top: 83.0 },
P02: { left: 94.0, top: 87.5 },
A26: { left: 9.7, top: 9.5 },
A27: { left: 14.2, top: 9.5 },
A28: { left: 18.6, top: 9.5 },
A30: { left: 23.1, top: 9.5 },
B36: { left: 27.6, top: 9.5 },
B37: { left: 32.0, top: 9.5 },
C25: { left: 36.4, top: 9.5 },
C23: { left: 41.0, top: 9.5 },
A25: { left: 8.6, top: 21.5 },
A23: { left: 10.6, top: 21.5 },
A21: { left: 9.3, top: 26.0 },
A19: { left: 9.3, top: 31.5 },
A18: { left: 9.3, top: 37.0 },
A16: { left: 9.3, top: 42.5 },
A13: { left: 9.3, top: 48.0 },
N01C: { left: 89.0, top: 88.5 },
N01D: { left: 86.5, top: 85.5 },
N01F: { left: 89.0, top: 85.5 },
N01P: { left: 91.5, top: 85.5 },
N01Q: { left: 94.0, top: 85.5 },
N01R: { left: 96.5, top: 85.5 },
N02: { left: 82.5, top: 85.5 },
N01J: { left: 90.0, top: 88.5 },
N01K: { left: 94.0, top: 88.5 },
N01C: { left: 86.5, top: 82.5 },
N01E: { left: 82.5, top: 82.5 },
N01A: { left: 89.0, top: 82.5 },
N01M: { left: 91.5, top: 82.5 },
N01N: { left: 94.0, top: 82.5 },
N01O: { left: 96.5, top: 82.5 },
N11: { left: 81.0, top: 43.0 },
N13: { left: 81.0, top: 37.5 },
N15: { left: 81.0, top: 32.0 },
N17: { left: 81.0, top: 26.5 },
N19: { left: 81.0, top: 21.0 },
N20: { left: 69.5, top: 26.5 },
N18: { left: 69.5, top: 32.0 },
N16: { left: 69.5, top: 37.5 },
N12: { left: 69.5, top: 43.0 },
N10: { left: 69.5, top: 48.5 },
N8B: { left: 69.5, top: 54.0 },
N8A: { left: 69.5, top: 59.5 },
N08: { left: 69.5, top: 65.0 },
N06: { left: 69.5, top: 70.5 },
N04: { left: 69.5, top: 67.0 },
};
    function findUnit() {
        const unitNumber = unitInput.value.trim().toUpperCase();

        if (unitNumber === "") {
            message.textContent = "Please enter a unit number.";
            message.style.color = "#c62828";
            unitMarker.style.display = "none";
            return;
        }

        const location = unitLocations[unitNumber];

        if (!location) {
            message.textContent =
                `Unit ${unitNumber} has not been added to the map yet.`;

            message.style.color = "#c62828";
            unitMarker.style.display = "none";
            return;
        }

unitMarker.style.left = location.left + "%";
unitMarker.style.top = location.top + "%";
        unitMarker.style.display = "block";

        message.textContent = `Unit ${unitNumber} located.`;
        message.style.color = "#16803a";
    }

    findBtn.addEventListener("click", findUnit);

    unitInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            findUnit();
        }
    });
});