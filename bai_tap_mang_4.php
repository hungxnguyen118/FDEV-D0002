<?php
$tong = 0;
$so_nho_nhat = '';
$so_lon_nhat = '';
$mang_phan_tu = '';

$mang_phat_sinh = array();

if(isset($_POST['so_phan_tu'])){

    if($_POST['so_phan_tu'] > 0){
        for($i = 0; $i < $_POST['so_phan_tu']; $i++){
            $phat_sinh = rand(1, 100);
            $mang_phat_sinh[] = $phat_sinh;

            if($so_lon_nhat < $phat_sinh){
                $so_lon_nhat = $phat_sinh;
            }

            if($so_nho_nhat > $phat_sinh){
                $so_nho_nhat = $phat_sinh;
            }

            if($i == 0){
                $so_nho_nhat = $phat_sinh;
            }

            $tong += $phat_sinh;
        }
    }

    //echo '<pre>',print_r($mang_phat_sinh),'</pre>';
    $mang_phan_tu = implode(' ', $mang_phat_sinh);
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
                    Nhập số phần tử cần phát sinh
                </div>
                

                <div class="col-sm-10">
                    
                    <input type="text" name="so_phan_tu" id="input" class="form-control" value="" required="required" title="">
                    
                </div>

            </div>

            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Gửi</button>
                </div>
            </div>

            <div class="form-group">
                <div class="col-xs-2">
                    Mảng phần tử
                </div>

                <div class="col-sm-10">
                    
                    <input type="text" name="mang_phan_tu" id="input" class="form-control" value="<?php echo $mang_phan_tu; ?>" title="">
                    
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-2">
                    Tính tổng
                </div>

                <div class="col-sm-10">
                    
                    <input type="text" name="tong" id="input" class="form-control" value="<?php echo $tong; ?>" title="">
                    
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-2">
                    Số nhỏ nhất
                </div>

                <div class="col-sm-10">
                    
                    <input type="text" name="so_nho_nhat" id="input" class="form-control" value="<?php echo $so_nho_nhat; ?>" title="">
                    
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-2">
                    Số lớn nhất
                </div>

                <div class="col-sm-10">
                    
                    <input type="text" name="so_lon_nhat" id="input" class="form-control" value="<?php echo $so_lon_nhat; ?>" title="">
                    
                </div>
            </div>
        </form>
    </div>
    
</body>
</html>