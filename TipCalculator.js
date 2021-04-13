function update(){
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    
    
    let tipValue = bill * (tipPercent/100);
    let tipEach = tipValue/split;
    let newBillEach = (bill + tipValue)/split;
    
    
    document.getElementById('tipPercent').innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = tipValue;
    document.getElementById("billWithTip").innerHTML = bill + tipValue;
    document.getElementById("splitValue").innerHTML = split + " person(s)";
    document.getElementById("billEach").innerHTML = newBillEach;
    document.getElementById("tipEach").innerHTML = tipEach;
   
       }
    let container = document.getElementById("container");
    container.addEventListener('input', update);