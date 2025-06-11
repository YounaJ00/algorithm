// 1. arr1, arr2 받기
// 2. ret = [] 초기화 (new Array().fill(0))
// 3. 행렬 곱셈 (i,j,k) 
// 4. return ret
// * r1 x c2 

function solution (arr1, arr2) {
    // 행렬 받기
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    
    // ret 초기화
    const ret = [];
    for(i=0; i<r1; i++){
        ret.push(new Array(c2).fill(0));
    }
    
    // 행렬 곱셈
    for(i=0; i<r1; i++) {
        for(j=0; j<c2; j++) {
            for(k=0; k<c1; k++){
                ret[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return ret;
}

console.log(solution([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]]));
