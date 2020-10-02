<?php
//mở file nếu file hợp lệ, ngược lại thì thông báo lỗi
//$f = fopen("hoa.txt", "a+") or exit ("Không thể mở file!");

//doc file theo dong
// while(!feof($f)){
//     echo fgets($f) . '<br/>';
// }

//ghi file
// $noi_dung = 'thử ghi file lại xem sao';
// fwrite($f, $noi_dung);
// fclose($f);

// $chuoi_file = readfile("hoa.txt");

// echo PHP_EOL;
// echo str_replace(' ', '<br/>', $chuoi_file);

// $chuoi = 'asdasdasd228dsdsds336dsfdsfdf121212dfsgdfgdfgfd';

// preg_match_all('/([0-9]+)/i', $chuoi, $matches);

// echo '<pre>',print_r($matches),'</pre>';


if(isset($_POST['ten_file']) && isset($_POST['noi_dung'])){
    $f = fopen($_POST['ten_file'], "w+") or exit ("Không thể mở file!");

    $noi_dung = $_POST['noi_dung'];

    fwrite($f, $noi_dung);
    fclose($f);
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
                    <legend>Xử lý file</legend>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-2">
                        Tên file
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="ten_file" id="">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Nội dung file
                    </div>
                    <div class="col-sm-10">
                        <textarea name="noi_dung" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
        </form>
        
        <div class="in_noi_dung">
            <?php
            if(file_exists('test.txt')){
                $f = fopen('test.txt', "r") or exit ("Không thể mở file!");

                while(!feof($f)){
                    echo fgets($f) . '<br/>';
                }

                fclose($f);

                // unlink('hoa.txt');
            }
            ?>
        </div>

    </div>
</body>
</html>