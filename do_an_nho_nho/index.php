<?php
session_start();

include_once('./libraries/function_support.php');

include_once('./model/xl_slide_banner.php');
include_once('./model/xl_sach.php');

$xl_slide_banner = new xl_slide_banner();
$ds_slide_banner = $xl_slide_banner->ds_slide_banner();

include_once('./widgets/head.php');

include_once('./widgets/header.php');

include_once('./widgets/slide_banner.php');

if(isset($_GET['page'])){
    if($_GET['page'] == 'sach'){
        include_once('./pages/ds_sach.php');
    }
    else if($_GET['page'] == 'loai-sach'){
        include_once('./pages/trang_sach_theo_loai.php');
    }
    else if($_GET['page'] == 'chi-tiet-sach'){
        include_once('./pages/trang_chi_tiet_sach.php');
    }
    else if($_GET['page'] == 'gio-hang'){
        include_once('./pages/trang_gio_hang.php');
    }
    else if($_GET['page'] == 'thanh-toan'){
        include_once('./pages/trang_thanh_toan.php');
    }
    else if($_GET['page'] == 'don-hang'){
        include_once('./pages/trang_don_hang.php');
    }
    else{
        include_once('./pages/trang_chu.php');
    }
}
else {
    include_once('./pages/trang_chu.php');
}


?>