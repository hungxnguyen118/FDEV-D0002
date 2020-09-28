<?php
$ho = '';
$chu_lot = '';
$ten = '';

if(isset($_POST['ho_ten'])){
    $mang_ten = explode(' ', $_POST['ho_ten']);
    //echo '<pre>',print_r($mang_ten),'</pre>';
    $ho = $mang_ten[0];
    $ten = $mang_ten[count($mang_ten) - 1];
    array_pop($mang_ten);
    //$mang_ten[0] = '';
    unset($mang_ten[0]);
    $chu_lot = implode(' ', $mang_ten);
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
                    Nhập họ tên
                </div>
                

                <div class="col-sm-10">
                    
                    <input type="text" name="ho_ten" id="input" class="form-control" value="" required="required" title="">
                    
                </div>

            </div>

            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Gửi</button>
                </div>
            </div>

            <div class="form-group">
                <div class="col-xs-2">
                    Họ
                </div>

                <div class="col-sm-10">
                    
                    <input type="text" name="ho" id="input" class="form-control" value="<?php echo $ho; ?>" title="">
                    
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-2">
                    Chữ lót
                </div>

                <div class="col-sm-10">
                    
                    <input type="text" name="chu_lot" id="input" class="form-control" value="<?php echo $chu_lot; ?>" title="">
                    
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-2">
                    Tên
                </div>

                <div class="col-sm-10">
                    
                    <input type="text" name="ten" id="input" class="form-control" value="<?php echo $ten; ?>" title="">
                    
                </div>
            </div>
        </form>
    </div>
    
</body>
</html>