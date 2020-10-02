<?php
//mở file nếu file hợp lệ, ngược lại thì thông báo lỗi
$f = fopen("hoa.txt", "a+") or exit ("Không thể mở file!");

//doc file theo dong
// while(!feof($f)){
//     echo fgets($f) . '<br/>';
// }

//ghi file
$noi_dung = 'thử ghi file lại xem sao';
fwrite($f, $noi_dung);
fclose($f);

// $chuoi_file = readfile("hoa.txt");

// echo PHP_EOL;
// echo str_replace(' ', '<br/>', $chuoi_file);
?>