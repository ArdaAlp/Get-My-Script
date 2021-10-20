var textarea = document.getElementById("exampleDataList");
var input = document.getElementById("input").innerHTML;
var bootstrapCssArea = document.getElementById("bootstrapCss");

// Script's codes

var vue = '<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.20/vue.cjs.js" integrity="sha512-2e2aXOh4/FgkCAUyurkjk0Uw4m1gPcExFwb1Ai4Ajjg97se/FEWfrLG1na4mq8cgOzouc8qLIqsh0EGksPGdqQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
var react = '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js" integrity="sha512-QFmdiakBaOZmazAO6QcGz7EzSb15rDqYgNJPsajQSVtI8jKjCyei1GsBP7pY0VJjbxri3R8/kRMm8XlSgKO2oQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
var angular = '<script src="https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.11/core.umd.min.js" integrity="sha512-FWJhn+NBtgX5596bVYDqRE6O0nFA/I0YKqbu8gp4S9Zp5C+IVn4+WBMFlYDuvYf3fJWZ2g55DjrRQawMsJhflg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
var bootstrapJS = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>';
var bootstrapCSS = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">';
var jquery = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
var fontAwesome = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
var typescript = '<script src="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.4.4/typescript.min.js" integrity="sha512-v+nqpsqV4CqtMyv/VkhE3OHwuHdM0q28wM4rnwUkqgCKD5ma7aI6PQDs97MBUS8a2Iaph6knAQ+rCWgJAB4L4g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
var kotlin = '<script src="https://cdnjs.cloudflare.com/ajax/libs/kotlin/1.5.31/kotlin.js" integrity="sha512-bFQ4OEdMghwqhjtkjQj5GOwNUx06hiBebskfIYxqUtuWa+uocqwC+XOjLpswtZ4O4zicwLoiexh3+5aUWJs6+A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';

// Result.php textarea put script codes

if(input == "vue") {
textarea.value = vue;
}

if(input == "react") {
textarea.value = react;
}

if(input == "angular") {
textarea.value = angular;
}

if(input == "typescript") {
textarea.value = typescript;
}

if(input == "kotlin") {
textarea.value = kotlin;
}

if(input == "font awesome") {
textarea.value = fontAwesome;
}

if(input == "bootstrap") {
textarea.value = bootstrapJS;
bootstrapCssLabel.style.display = "block";
bootstrapCssArea.style.display = "block";
bootstrapCssArea.value = bootstrapCSS;
}

if(input == "jquery") {
textarea.value = jquery;
}

// Copy button codes

function copyScript() {
var buttonText = document.getElementById("copyButton");
var button = document.getElementById("button");
var text = textarea;
text.select();
document.execCommand("copy");
buttonText.innerHTML = "Copied"; 
button.style.background = "#19cc54";
}

// index.html textarea put script names

function vue() {
textarea.value = "vue";
}

function react() {
textarea.value = "react";
}

function angular() {
textarea.value = "angular";
}

function tScript() {
textarea.value = "typescript";
}

function kotlin() {
textarea.value = "kotlin";
}

function fontAwesome() {
textarea.value = "font awesome";
}

function bootstrap() {
textarea.value = "bootstrap";
}

function jquery() {
textarea.value = "jquery";
}
