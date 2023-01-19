let num = 1;

function show(){
    console.log('Hi',num);
    num++;
    if (num <= 10)
        show();
}

show();