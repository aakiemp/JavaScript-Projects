var isValid = function (s) {

    const obj = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    const stack = [];

    for (const paran of s) {
        if (obj.hasOwnProperty(paran)) {
            stack.push(paran)

        } else {
            const closeParan = stack.pop();
            console.log(closeParan)
            if (paran !== obj[closeParan]) {
                return false;
            }
        }
    }

    return true;
};