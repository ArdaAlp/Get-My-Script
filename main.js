var textarea = document.getElementById("exampleDataList");
var input = document.getElementById("input").innerHTML;
var bootstrapCssArea = document.getElementById("bootstrapCss");

var jquery = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
var bootstrapJS = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>';
var bootstrapCSS = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">';
var fontAwesome = '<script src="https://kit.fontawesome.com/b1d04c92bf.js" crossorigin="anonymous"></script>';

if(input == "jquery") {
textarea.value = jquery;
}
 
if(input == "bootstrap") {
textarea.value = bootstrapJS;
bootstrapCssLabel.style.display = "block";
bootstrapCssArea.style.display = "block";
bootstrapCssArea.value = bootstrapCSS;
}
 
if(input == "font awesome") {
textarea.value = fontAwesome;
}

function copyScript() {
var buttonText = document.getElementById("copyButton");
var button = document.getElementById("button");
var text = textarea;
text.select();
document.execCommand("copy");
buttonText.innerHTML = "Copied"; 
button.style.background = "#19cc54";
}