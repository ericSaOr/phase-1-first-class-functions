const addItself = num1 => num1 + num1;

function receivesAFunction (addItself){
    return addItself(12);

}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){};
}