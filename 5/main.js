window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cal").addEventListener("click", function (event) {
        event.preventDefault();
        const price = parseInt(document.getElementById("select1").value);
        const countProd = document.getElementById("count").value;
        const countTest = /^[1-9]\d*$/;   
        if (!countTest.test(countProd)) {           
            window.alert("Количество товара вводите числами");
            return;
        }    
        const countP = parseInt(countProd);
        const sum = price * countP;
        document.getElementById("result").innerText = sum + "₽"; 
    });
});

