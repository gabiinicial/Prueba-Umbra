function calculatingMatrix() {
    const matriz = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ];

    const secondMatriz = matriz.slice().reverse();
    let diagonalLeft = [];
    let diagonalRight = [];
    const reducer = (accumulator, curr) => accumulator + curr;
    matriz.forEach((e, posc) => {
        diagonalLeft.push((e[posc]));
    });
    const totalSumLeft = diagonalLeft.reduce(reducer); //suma de la matriz de izquierda a derecha 

    secondMatriz.forEach((el, posci) => {
        diagonalRight.push((el[posci]));
    });
    const totalSumRight = diagonalRight.reduce(reducer);//suma de la matriz de  derecha a izquierda

    return totalSumRight - totalSumLeft;
}

calculatingMatrix();