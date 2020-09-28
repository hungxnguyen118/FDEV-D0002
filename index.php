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
    // for($a = 1; $a < 10; $a++){
    //     echo $a . "\n";
    // }

    // echo $a;
    //echo $a;

    $a = [4,5,3,2,8,9,10,15,21,6,7];
    foreach($a as $item){
        //echo $item . "<br/>";
    }

    echo '<pre>',print_r($a),'</pre>';

    // function hoan_vi(&$a, &$b){
    //     $temp = $a;
    //     $a = $b;
    //     $b = $temp;
    // }

    //hoan_vi($a[0], $a[1]);

    //echo '<pre>',print_r($a),'</pre>';

    // for($i = 0; $i < count($a); $i++){
    //     for($j = $i + 1; $j < count($a); $j++){
    //         if($a[$i] > $a[$j]){
    //             hoan_vi($a[$i], $a[$j]);
    //         }
    //     }
    // }

    
    // sort($a);

    // echo '<pre>',print_r($a),'</pre>';

    function cmp($a, $b)
    {
        if ($a == $b) {
            return 0;
        }
        return ($a < $b) ? -1 : 1;
    }

    //$a = array(3, 2, 5, 6, 1);

    usort($a, "cmp");
    echo '<pre>',print_r($a),'</pre>';

    // foreach ($a as $key => $value) {
    //     echo "$key: $value\n";
    // }


    ?>
    </div>
</body>
</html>