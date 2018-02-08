function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {

    var typedText = document.getElementById("input").value;

    var dest = document.getElementById("main");

    for (i = 0; i < words.length; i++) {
        word = words[i];
        if (alphabetize(typedText) == alphabetize(word)) {
            var newSpan = document.createElement("span");
            var text = document.createTextNode(word + " ");
            newSpan.appendChild(text);
            dest.appendChild(newSpan);
            
        }
    }


}