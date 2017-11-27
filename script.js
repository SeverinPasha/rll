var box = document.querySelector(".box");

function roll() {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var valueOfRandom = random(0, 100);
        
    switch (true) {

        case valueOfRandom < 5:
            // alert("black");  
            box.className = "box1";

            break;

        case valueOfRandom > 6 && valueOfRandom < 15:
            // alert("yellow");
            box.className = "box2";
            break;

        case valueOfRandom > 16 && valueOfRandom < 35:
            // alert("red");
            box.className = "box3";
            break;

        case valueOfRandom > 36 && valueOfRandom < 60:
            // alert("blue");
            box.className = "box4";
            break;

        case valueOfRandom > 61:
            // alert("green");
            box.className = "box5";
            break;
                };

}