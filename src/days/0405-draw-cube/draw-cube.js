var fill = function (character, length) {
    return Array.from({ length: length }, function () { return character; }).join("");
};
export function calculateCubePixels(n) {
    var result = [];
    var half = Math.floor(n / 2);
    // upper back border
    result.push("".concat(fill(" ", half + 1), "+").concat(fill("-", n * 2), "+"));
    for (var i = 0; i < half; i++) {
        result.push("".concat(fill(" ", half - i), "/").concat(fill(" ", n * 2), "/").concat(fill(" ", i), "|"));
    }
    // upper front border
    result.push("+".concat(fill("-", n * 2), "+").concat(fill(" ", half), "|"));
    // cube sides
    for (var i = 0; i < half - 1; i++) {
        result.push("|".concat(fill(" ", n * 2), "|").concat(fill(" ", half), "|"));
    }
    // cube sides with backright corner
    result.push("|".concat(fill(" ", n * 2), "|").concat(fill(" ", half), "+"));
    // left diagonal side
    for (var i = 0; i < half; i++) {
        result.push("|".concat(fill(" ", n * 2), "|").concat(fill(" ", half - i - 1), "/"));
    }
    // down front border
    result.push("+".concat(fill("-", n * 2), "+"));
    return result;
}
export function drawCube(n) {
    calculateCubePixels(n).forEach(function (x) { return console.log(x); });
}
