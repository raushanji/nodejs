var x = function(a,b,op){
    if (op == 'multiply'){
        return a*b;
    }
    else if (op == 'division'){
        return a/b;
    }
}

module.exports = x;