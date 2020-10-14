<?php

if(isset($_GET['page'])){
    if($_GET['page'] == 'sach'){
        include_once('./pages/ds_sach.php');
    }
    else{
        include_once('./pages/404.php');
    }
}
else {
    include_once('./pages/dang_nhap.php');
}


?>