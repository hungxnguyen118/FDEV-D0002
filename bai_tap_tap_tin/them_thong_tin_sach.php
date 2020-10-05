<?php
include('./model/sach.php');

echo '<pre>',print_r($_POST),'</pre>';

echo '<pre>',print_r($_FILES),'</pre>';

if($_FILES['hinh']){
    $thong_tin_hinh = './images/' . $_FILES['hinh']['name'];
    move_uploaded_file($_FILES['hinh']['tmp_name'], $thong_tin_hinh);
}

if(isset($_POST['ma_sach']) && isset($_POST['ten_sach']) && isset($_POST['don_gia']) && isset($_POST['tac_gia']) && isset($_POST['nha_xuat_ban']) && $thong_tin_hinh){
    $sach_new = new sach($_POST['ma_sach'], $_POST['ten_sach'], $_POST['don_gia'], $_POST['tac_gia'], $_POST['nha_xuat_ban'], $thong_tin_hinh);

    //echo '<pre>',print_r($sach_new),'</pre>';

    $sach_new->luu_sach();
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
        
        <form action="" method="POST" class="form-horizontal" role="form" enctype="multipart/form-data">
                <div class="form-group">
                    <legend>Thêm thông tin sách</legend>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Mã sách:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="ma_sach" id="input" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Tên sách:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="ten_sach" id="input" class="form-control">
                    </div>
                </div>
                

                <div class="form-group">
                    <div class="col-sm-2">
                        Đơn giá:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="don_gia" id="input" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Tác giả:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="tac_gia" id="input" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Nhà xuất bản:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="nha_xuat_ban" id="input" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Hình
                    </div>
                    <div class="col-sm-10">
                        <input type="file" name="hinh" id="input" class="form-control">
                    </div>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
        </form>
        
    </div>
</body>
</html>