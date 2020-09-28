<?php
$nam_can_chi = '';

$mang_can = ['Canh','Tân','Nhâm','Quý','Giáp','Ất','Bính','Đinh','Mậu','Kỷ'];
$mang_chi = ['Thân','Dậu','Tuất','Hợi','Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi'];

$mang_hinh = ['-330.6px, -206px'];

//print_r($mang_can);
//print_r($mang_chi);

if(isset($_POST['nam_sinh'])){
    $index_can = $_POST['nam_sinh'] % 10;
    $index_chi = $_POST['nam_sinh'] % 12;
    //165.3, 206

    $nam_can_chi = $mang_can[$index_can] . ' ' . $mang_chi[$index_chi];
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
    
    <style>
    .div_hien_thi_con_giap {
        width: 165.3px;
        height: 206px;
        overflow: hidden;
    }

    .div_hien_thi_con_giap img {
        transform: translate();
    }
    </style>

</head>
<body>
    
    <div class="container">
        <form action="" method="POST" class="form-horizontal" role="form">
            <div class="form-group">
                <legend>Form title</legend>
            </div>

            <div class="form-group">
                
                <div class="col-xs-5">
                    <div>
                        Nhập năm sinh
                    </div>

                    <div>
                        <input type="text" name="nam_sinh" id="input" class="form-control" value="" required="required" title="">
                    </div>
                </div>

                <div class="col-sm-1">
                    <button type="submit" class="btn btn-primary">=></button>
                </div>

                <div class="col-sm-6">
                    <input type="text" name="nam_can_chi" id="input" class="form-control" value="<?php echo $nam_can_chi; ?>" title="">
                </div>
            </div>

            <div class="div_hien_thi_con_giap">
                <img src="./images/12_con_giap.jpg" alt="">
            </div>
        </form>
    </div>
    
</body>
</html>