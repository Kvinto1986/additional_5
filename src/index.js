module.exports = function check(str, bracketsConfig) {

    const STR = str.split('');
    let tmp_arr = [];
    let bool = true;


    top:  for (let i = 0; i < STR.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (STR[i] === bracketsConfig[j][0]) {
                tmp_arr.unshift(bracketsConfig[j][1])
            }
            if (STR[i] === bracketsConfig[j][1] && STR[i] !== tmp_arr[0]) {
                bool = false;
                break top;
            }
            else if (STR[i] === bracketsConfig[j][1] && STR[i] === tmp_arr[0]) {
                tmp_arr.splice(0, 1)

            }
        }
    }
    if (tmp_arr.length > 0)
        bool = false

    return bool;
}
