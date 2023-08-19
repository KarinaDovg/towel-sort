
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // let arr = [];
    // for (let i=0; i<matrix.length; i++) {
    //     for (let j=0; j<matrix[i].length; j++){
    //         let columnIndex = i % 2 ===0
    //         ? j
    //         : (matrix[i].length - j - 1);

    //     }
    // }

    // return [matrix[i][columnIndex]];
    return matrix ? matrix.map((item, index) => {
        return index % 2 === 0 ? item : item.reverse();
    }).flat() : [];
}
