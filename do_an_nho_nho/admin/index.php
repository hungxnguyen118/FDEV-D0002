<?php
session_start();

//$_SESSION['ten_dang_nhap'] = 'Hung';



//echo $ten_dang_nhap;


if(isset($_GET['page'])){

    $thong_tin_user_cookie = $_COOKIE['thong_tin_user_cookie'];

    if(isset($_SESSION['thong_tin_user']) || $thong_tin_user_cookie){

        $thong_tin_user = $_SESSION['thong_tin_user'];

        if($_GET['page'] == 'sach'){
            include_once('./pages/ds_sach.php');
        }
        else if($_GET['page'] == 'dashboard'){
            include_once('./pages/dashboard.php');
        }
        else{
            include_once('./pages/404.php');
        }
    }
    else{
        header('location: /test_php/do_an_nho_nho/admin/');
    }
}
else {
    include_once('./pages/dang_nhap.php');
}


?>