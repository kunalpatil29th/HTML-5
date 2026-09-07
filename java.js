    for(let i = 1; i<=5; i++){
        console.log(i)
    }

    // print all odd number (1to15)
    for(let i = 1; i<=15; i=i+2){
        console.log(i);
    }

    // backward approach

    for(let i = 1; i>=15; i=i-2){
        console.log(i);
    }

    // print all even number
    for(let i = 2; i <=10; i=i+2){
        console.log(i);

    }

    // print the multplication table for 5
    for(let i = 5; i<=50; i=i+5){
        console.log(i);
    }

    // prompt method table print table form

let n = prompt = ("Write your  numbe:");
n = parseInt(n);

for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}


// nested for loop

for(let i = 1; i<=3; i++){
    for(let j = 1; j<=3; j++){
        console.log(j);
    }
}

let fruits = ["manago","banana", "apple", "lithci","orange"];
for(let i = 0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}

// loops with arrays

let heroers  = [["ironmen","spindermen", "wondermen"]]  
for (let i = 0; i<heroers.length; i++){
    console.log(`List #${i}`);
    for(let j=0; j<heroers[i].length; j++){
        console.log(heroers[i][j]);
    }
} 