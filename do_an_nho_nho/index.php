<?php
include_once('./libraries/function_support.php');

include_once('./widgets/head.php');

include_once('./widgets/header.php');

if(isset($_GET['page'])){
    if($_GET['page'] == 'sach'){
        include_once('./pages/ds_sach.php');
    }
    else{
        include_once('./pages/trang_chu.php');
    }
}
else {
    include_once('./pages/trang_chu.php');
}


?>