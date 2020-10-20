// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix != undefined) {
        return matrix.reduce((acc, el, ind) => {
            return acc.concat(ind % 2 !== 0 ? el.reverse() : el)
        }, [])
    } else return [];
};
