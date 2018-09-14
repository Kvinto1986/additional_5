module.exports = function check(str, bracketsConfig) {
    var brackets = [];
    var str = str.split('');
    var bool;
    for (var i = 0; i < bracketsConfig.length; i++) {
        var count_arr = [];
        count_arr = bracketsConfig[i];
        for (var j = 0; j < count_arr.length; j++) {
            brackets.push(count_arr[j]);
        }
    }

    var arr_ch = [];
    var arr_noch = [];
    for (var i = 0; i < brackets.length; i++) {
        if (i % 2 == 0)
            arr_ch.push(brackets[i]);
        else arr_noch.push(brackets[i]);
    }
     var open=0;
    var close=0;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < arr_ch.length; j++) {
            if (str[i] == arr_ch[j])
                open +=1;
        }
            for (var k = 0; k < arr_noch.length; k++) {
                if (str[i] == arr_noch[k])
                    close +=1;
            }

        }
if(open==close)
    bool=true;
else bool = false;
return bool;
}
