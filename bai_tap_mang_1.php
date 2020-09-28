<?php
$tong = 0;

if(isset($_POST['chuoi_day_so'])){
    $mang_so = explode(', ', $_POST['chuoi_day_so']);
    //echo '<pre>',print_r($mang_so),'</pre>';
    
    // for($i = 0; $i < count($mang_so); $i++){
    //     if(is_numeric($mang_so[$i])){
    //         $tong += $mang_so[$i];
    //     }
    // }

    $tong = array_sum($mang_so);
}
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
        <form action="" method="POST" class="form-horizontal" role="form">
            <div class="form-group">
                <legend>Form title</legend>
            </div>

            <div class="form-group">

                
                <div class="col-xs-2">
                    Nhập dãy số
                </div>
                

                <div class="col-sm-10">
                    
                    <input type="text" name="chuoi_day_so" id="input" class="form-control" value="" required="required" title="">
                    
                </div>

            </div>

            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>

            <div class="form-group">

                
                <div class="col-xs-2">
                    Kết quả
                </div>
                

                <div class="col-sm-10">
                    
                    <input type="text" name="tong_day_so" id="input" class="form-control" value="<?php echo $tong; ?>" title="">
                    
                </div>
                
            </div>
        </form>
    </div>
    
</body>
</html>