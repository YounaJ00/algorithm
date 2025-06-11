
// 1. 입력 받기 arr1, arr2
// 2. ret 초기화
// 3. 덧셈 i,j
// return ret

function solution(arr1, arr2) {
    // 입력받기 
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;

    // ret 초기화
    const ret = [];
    for (i=0; i<r1; i++){
        ret.push(new Array(c2).fill(0));
    }
    
    // 덧셈
    for(i=0; i<r1; i++){
        for(j=0; j<c2; j++){
            ret[i][j] += arr1[i][j] + arr2[i][j];
     }
    }
    return ret;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));
        
        
        