<?php
// $chuoi = 'hôm nay em đi học lạ lùng, siêu lạ lùng quá';
// // $chuoi_tim = 'hôm';

// // // echo 'vị trí: ' . strpos($chuoi, $chuoi_tim) . '<br/>';
// // // echo false;

// // $mang_chuoi = explode(' ',$chuoi);
// // echo "<pre>",print_r($mang_chuoi),"</pre>";

// // echo implode(',', $mang_chuoi);

// // //echo date("D");

// // //$ngay = date("D", time('1982-08-05'));
// // $ngay_sinh_nhat = mktime(0,0,0,8,4,1982);
// // $ngay_hom_nay = mktime(0,0,0,21,9,2020);

// // $ngay_sinh_nhat = new DateTime('2020-11-01T00:00:00.012345Z');
// // $ngay_hom_nay = new DateTime('2020-09-21T00:00:00.012345Z');


// // $ngay_gi = date("D d m Y", $ngay);

// // $so_ngay_cach_nhau = date_diff($ngay_sinh_nhat, $ngay_hom_nay);

// // print_r($so_ngay_cach_nhau);

// for($i = 0; $i < strlen($chuoi); $i++){
//     echo $chuoi[$i] . '<br/>';
// }

//$mang_tam = array(1,2,3,4,5,4,3);
$mang_tam = [1,2,3,4,5];
$mang_co_key = array(
    "a" => "Hùng",
    "b" => "Thư",
    "a" => "Test"
);
echo "<pre>",print_r($mang_tam),"</pre>";
echo "<pre>",print_r($mang_co_key),"</pre>";

// echo count($mang_co_key);

// for($i = 0; $i < count($mang_tam); $i++){
//     echo $mang_tam[$i] . '<br/>';
// }

foreach($mang_co_key as $key => $value){
    echo $key . ' => ' . $value . '<br/>';
}
?>