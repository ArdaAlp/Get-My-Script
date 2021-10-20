<?php

$input = $_POST["scriptname"];

if($input != "font awesome" && $input != "bootstrap" && $input != "jquery") {
header("Location: index.php");

}

?>

<!DOCTYPE html>
<html lang="tr">
<head>

<!-- META TAGS -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">
<meta name="author" content="Arda Alp ">

<!-- STYLE SOURCE -->
<link rel="stylesheet" href="style.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<!-- FONT AWESOME -->
<script src="https://kit.fontawesome.com/b1d04c92bf.js" crossorigin="anonymous"></script>

<!-- SCRIPT SOURCE (JQUERY) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<title>Get My Script</title>
</head>

<body>

<header>
<h1>
Here Your Script 
<br><?php echo "<div id='input' class='text-primary'>".$input."</div>"; ?>
</h1>
</header>

<div class="row">
</div>
<br>
<div class="row">
<input type="text" name="scriptname" class="form-control" list="datalistOptions" id="exampleDataList" readonly>
<button id="button" class="btn btn-primary" onclick="copyScript()"><i class="fas fa-clipboard" id="copyButton"> Copy</i></button>
<div id="bootstrapCssLabel" style="display:none;"><label>CSS:</label><br></div>
<input type="text" name="scriptname" class="form-control" list="datalistOptions" id="bootstrapCss" style="display:none;" readonly>
</div>

<header>
<a href="index.php"><p>Back to new search...</p></a>
</header>


<footer>
<p>Created By Arda Alp Copyright© Since 2021-2022</p>
</footer>

<!-- BOOTSTRAP 5.1 JS-->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<script src="main.js"></script>

</body>
</html>
