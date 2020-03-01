// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix != undefined) {
        let towel = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                towel = towel.concat(matrix[i]);
            } else {
                towel = towel.concat(matrix[i].reverse());
            }
        }
        return towel;
    } else return [];
};
