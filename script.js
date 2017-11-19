function roll() {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var valueOfRandom = random(0, 100);


    switch (true) {

        case valueOfRandom < 5:
            alert("black");
            break;

        case valueOfRandom > 6 && valueOfRandom < 15:
            alert("yellow");
            break;

        case valueOfRandom > 16 && valueOfRandom < 35:
            alert("red");
            break;

        case valueOfRandom > 36 && valueOfRandom < 60:
            alert("blue");
            break;

        case valueOfRandom > 61:
            alert("green");
            break;
    };

}
