let A = [1, 3, 6, 4, 1, 2]

function solution(A) {
    const set = new Set(A);
    console.log(set)
    let i = 1;

    while (set.has(i)) {
        i++;
    }

    return i;
}


console.log(solution(A))
