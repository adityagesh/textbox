fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;
</script>





var fruits = ["Banana", "Orange", "Apple", "Mango"];
var t1="Genee";
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.push(t1);
    document.getElementById("demo").innerHTML = fruits;
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice