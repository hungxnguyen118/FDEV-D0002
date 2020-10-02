<?php
include('./model/sach.php');
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
        
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Mã sách</th>
                    <th>Tên sách</th>
                    <th>Đơn giá</th>
                    <th>Tác giả</th>
                    <th>Nhà xuất bản</th>
                    <th>Hình</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if(file_exists('./data_sach/ds_sach.txt')){
                    $f = fopen('./data_sach/ds_sach.txt', "r") or exit ("Không thể mở file!");

                    // doc file theo dong
                    while(!feof($f)){
                        $dong = fgets($f);

                        if($dong){
                            $thong_tin_sach = new sach();

                            $thong_tin_sach->chuyen_dong_thanh_thong_tin($dong);

                            //echo '<pre>',print_r($thong_tin_sach),'</pre>';
                            $thong_tin_sach->in_dong_sach();
                        }
                        
                    }
                }
                ?>
            </tbody>
        </table>
        
    </div>
</body>
</html>