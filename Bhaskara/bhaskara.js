function calcDelta(a,b,c){

    var delta = Math.pow(b,2) - (4*a*c)
    
    return delta
}

function calcX(a,b,delta){

    if(delta < 0 ){
        print('Não calculamos valores de delta negativo')
    }else{
        if(delta > 0){

            var x1 = (-b + Math.sqrt(delta)) / 2*a
            var x2 = (-b - Math.sqrt(delta)) / 2*a

            return x1,x2
        }
    }
}



export {calcDelta, calcX}


