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
    A06: { left: 16.5, top: 82.4 },
A04: { left: 16.5, top: 86.5 },

B01: { left: 20.2, top: 78.8 },
B02: { left: 23.5, top: 78.8 },
B03: { left: 26.8, top: 78.8 },
B04: { left: 30.2, top: 78.8 },

C01:  { left: 28.0, top: 82.4 },
C01A: { left: 31.7, top: 82.4 },
C01B: { left: 35.3, top: 82.4 },
C01C: { left: 38.6, top: 80.9 },
    B32: { left: 23.9, top: 26.8 },
B30: { left: 23.9, top: 31.3 },
B28: { left: 23.9, top: 35.8 },
B26: { left: 23.9, top: 40.4 },
B24: { left: 23.9, top: 44.9 },
    A24: { left: 17.0, top: 21.5 },
A29: { left: 19.3, top: 21.5 },
A31: { left: 21.6, top: 21.5 },
B34: { left: 23.9, top: 21.5 },

A22: { left: 18.2, top: 31.0 },
A20: { left: 18.2, top: 41.0 },
    A17: { left: 17.0, top: 48.0 },
    A14: { left: 19.3, top: 48.0 },
    B19: { left: 21.6, top: 48.0 },
    B21: { left: 23.9, top: 48.0 },
    A30: { left: 23.2, top: 9.5 },
    A28: { left: 18.8, top: 9.5 },
    A27: { left: 14.3, top: 9.5 },
    A25: { left: 8.5, top: 16.5 },
    A23: { left: 10.5, top: 16.5 },
    A21: { left: 9.5, top: 19.5 },
    A19: { left: 9.5, top: 25.0 },
    A18: { left: 9.5, top: 30.5 },
    A16: { left: 9.5, top: 36.0 },
    A15: { left: 9.5, top: 41.5 },
    A13: { left: 9.5, top: 47.0 },
    A02: { left: 9.5, top: 85.0 },
    A03: { left: 9.5, top: 76.5 },
    A07: { left: 9.5, top: 69.3 },
    A09: { left: 9.5, top: 63.8 },
    A10: { left: 9.5, top: 58.2 },
    A12: { left: 9.5, top: 52.5 },
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
B36:  { left: 27.6, top: 9.5 },
B37:  { left: 32.0, top: 9.5 },
C25:  { left: 36.6, top: 9.5 },
C23:  { left: 41.1, top: 9.5 },
C21:  { left: 47.6, top: 9.5 },
M21A: { left: 57.3, top: 9.5 },
M23:  { left: 65.8, top: 9.5 },
M25:  { left: 71.6, top: 9.5 },
N21:  { left: 77.2, top: 9.5 },
N24:  { left: 82.5, top: 9.5 },
P25:  { left: 87.8, top: 9.5 },
P24A: { left: 93.1, top: 9.5 },
A15: { left: 17.4, top: 56.6 },
B20: { left: 20.7, top: 56.6 },
B16: { left: 23.9, top: 56.6 },

A11: { left: 19.4, top: 63.3 },

B14: { left: 23.9, top: 60.5 },
B12: { left: 23.9, top: 64.3 },
B10: { left: 23.9, top: 68.1 },
B8:  { left: 23.9, top: 71.4 },

A9B: { left: 16.9, top: 68.8 },
A9A: { left: 16.9, top: 71.4 },
B5A: { left: 19.6, top: 70.1 },
B05: { left: 22.5, top: 70.1 },
C20: { left: 30.5, top: 20.5 },
C22: { left: 32.5, top: 20.5 },
C24: { left: 34.6, top: 20.5 },
C26: { left: 36.7, top: 20.5 },
B35: { left: 38.8, top: 20.5 },

B33: { left: 30.5, top: 25.5 },
B31: { left: 30.5, top: 29.4 },
B29: { left: 30.5, top: 33.3 },
B27: { left: 30.5, top: 37.3 },
B25: { left: 30.5, top: 41.2 },
B23: { left: 30.5, top: 45.1 },

C16: { left: 36.5, top: 33.3 },
C14: { left: 36.5, top: 38.6 },
C12: { left: 36.5, top: 44.0 },

C10: { left: 31.3, top: 48.8 },
C08: { left: 34.6, top: 48.8 },
C06: { left: 38.3, top: 48.8 },
B17: { left: 30.8, top: 56.7 },
C09: { left: 34.4, top: 56.7 },
C07: { left: 38.0, top: 56.7 },

B13: { left: 30.8, top: 60.9 },
B11: { left: 30.8, top: 65.1 },
B09: { left: 30.8, top: 69.2 },
B7:  { left: 30.8, top: 72.2 },

C04: { left: 35.9, top: 62.5 },
C02: { left: 35.9, top: 69.5 },
P23A:  { left: 92.8, top: 15.5 },
P23:   { left: 94.8, top: 15.5 },
};
    function findUnit() {
    const routeLayer = document.getElementById("routeLayer");
    const hideRouteBtn = document.getElementById("hideRouteBtn");

hideRouteBtn.style.display = "none";

hideRouteBtn.onclick = function () {
    routeLayer.innerHTML = "";
    hideRouteBtn.style.display = "none";
};
routeLayer.innerHTML = "";
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
        hideRouteBtn.style.display = "block";

unitMarker.style.left = location.left + "%";
unitMarker.style.top = location.top + "%";
        unitMarker.style.display = "block";
     
  {
   let routePoints;

const topRowUnits = [
    "A27", "A28", "A30", "B36", "B37", "C25",
    "C23", "C21", "M21A", "M23", "M25",
    "N21", "N24", "P25", "P24A"
];
const rightTopRowUnits = ["N21", "N24", "P25", "P24A"];
if (rightTopRowUnits.includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [60, 82],
        [76, 82],
        [76, 15],
        [location.left, 15],
        [location.left, location.top]
    ];
} else if (["M21A", "M23", "M25"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [60, 82],
        [60, 15],
        [location.left, 15],
        [location.left, location.top]
    ];
} else if (topRowUnits.includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
[44, 15],
        [location.left, 15],
        [location.left, location.top]
        ];
       } else if (["A24", "A29", "A31", "B34"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, 15],
        [location.left, 15],
        [location.left, location.top]
    ];
} else if (["B32", "B30", "B28", "B26", "B24"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, 52],
        [26, 52],
        [26, location.top],
        [location.left, location.top]
    ];
} else if (["A17", "A14", "B19", "B21"].includes(unitNumber)) {
    routePoints = [
    [51, 80],
    [44, 82],
    [44, 52],
    [location.left, 52],
    [location.left, location.top]
];
   
} else if (["A15", "B20", "B16"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, 52],
        [location.left, 52],
        [location.left, location.top]
    ];
} else if (["B14", "B12", "B10", "B8"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [51, 74],
        [26, 74],
        [26, location.top],
        [location.left, location.top]
    ];
} else if (["A9B", "A9A", "B5A", "B05"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [51, 74],
        [location.left, 74],
        [location.left, location.top]
    ];
    } else if (["C22", "C24", "C26", "B35"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, 15],
        [location.left, 15],
        [location.left, location.top]
    ];
} else if (["B33", "B31", "B29", "B27", "B25", "B23"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, 52],
        [28, 52],
        [28, location.top],
        [location.left, location.top]
    ];
} else if (["C16", "C14", "C12"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, location.top],
        [location.left, location.top]
    ];
} else if (["C10", "C08", "C06"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, 52],
        [location.left, 52],
        [location.left, location.top]
    ];
} else if (["B17", "C09", "C07"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, 52],
        [location.left, 52],
        [location.left, location.top]
    ];
} else if (["B13", "B11", "B09", "B7"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [51, 74],
        [28, 74],
        [28, location.top],
        [location.left, location.top]
    ];
} else if (["C04", "C02"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [44, 82],
        [44, location.top],
        [location.left, location.top]
    ];
} else if (unitNumber.startsWith("A")) {
    routePoints = [
        [51, 80],
 [51, 74],
[15, 74],
     [15, location.top],
        [location.left, location.top]
    ];
} else if (unitNumber.startsWith("N")) {
   routePoints = [
    [51, 80],
    [60, 82],
    [71, 82],
    [71, location.top],
    [location.left, location.top]
];
} else {
    const aisleX = unitNumber === "C18" ? 44 : 60;

    routePoints = [
    [51, 80],
    [aisleX, 82],
    [aisleX, location.top],
    [location.left, location.top]
];
}

if (["B01", "B02", "B03", "B04"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [51, 74],
        [location.left, 74],
        [location.left, location.top]
    ];
} else if (["C01", "C01A", "C01B", "C01C"].includes(unitNumber)) {
    routePoints = [
        [51, 80],
        [51, 88],
        [location.left, 88],
        [location.left, location.top]
    ];
} else if (unitNumber.startsWith("A")) {
    
}

   const mapContainer = document.getElementById("mapContainer");
const layerWidth = mapContainer.clientWidth;
const layerHeight = mapContainer.clientHeight;

    for (let i = 0; i < routePoints.length - 1; i++) {
        const [x1Percent, y1Percent] = routePoints[i];
        const [x2Percent, y2Percent] = routePoints[i + 1];

        const x1 = (x1Percent / 100) * layerWidth;
        const y1 = (y1Percent / 100) * layerHeight;
        const x2 = (x2Percent / 100) * layerWidth;
        const y2 = (y2Percent / 100) * layerHeight;

        const segment = document.createElement("div");
        segment.className = "routeSegment";
        segment.style.position = "absolute";
segment.style.height = "6px";
segment.style.background = "#0066ff";
segment.style.borderRadius = "6px";
segment.style.transformOrigin = "0 50%";
segment.style.zIndex = "10000";
        segment.style.left = x1 + "px";
        segment.style.top = y1 + "px";
        segment.style.width = Math.hypot(x2 - x1, y2 - y1) + "px";
        segment.style.transform =
            `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;

        routeLayer.appendChild(segment);
    }
} 

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