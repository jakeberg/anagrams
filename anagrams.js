document.getElementById("findButton").onclick = function () {

    var typedText = document.getElementById("input").value;


    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }

    alphabetize(typedText)

    

}
