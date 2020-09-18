
onload = function() {
    const Range = document.querySelectorAll("input[type='range']");
    const blocoColor = document.querySelector(".Cor");
    const value = document.querySelectorAll(".value");

    for(i=0; i < Range.length ; i++){

        Range[i].addEventListener('change', ()=>{

            let Red = Range[0].value;
            let Green = Range[1].value;    
            let Blue = Range[2].value;
            let color = Red + ","+ Green +","+Blue;
            blocoColor.style.backgroundColor = "rgb("+color+")";
            value[0].value = Red;
            value[1].value = Green;
            value[2].value = Blue;


        })

    }
    

    
    
};