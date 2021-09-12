



// Created By: Alexander Koroh

var s = '';

for( var i = 10; i > 1; i--){
    for( var j = 1; j < i; j++){
        s+=j;
    }
    s +='\n'
}
// console.log(s);
var k ='';
var no = 10;
//-----------------------------------------------------------
for (var c = 1; c < 10 ; c++){
    no -=1;
    for(var d = 0 ; d <= c -1;  d++){
        k += `*`;
        
       

    }
    k=+ no
    k += '\n'
}

console.log(s + k);
