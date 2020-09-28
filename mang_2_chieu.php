<?php
$mang_2_chieu = array(array(3,4,array(5,6,7,8)), array(6,7,8));

$mang_2_chieu_type_2 = [[3,4,[5,6,7,8]], [6,7,8]];


// echo '<pre>',print_r($mang_2_chieu),'</pre>';
// echo '<pre>',print_r($mang_2_chieu_type_2),'</pre>';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>
    <div class="container">
    <?php
    echo $mang_2_chieu[0][2][0];
    ?>
    </div>
</body>
</html>