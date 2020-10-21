<?php
include_once('./model/xl_sach.php');
include_once('./model/xl_loai_sach.php');

$xl_sach = new xl_sach();
$xl_loai_sach = new xl_loai_sach();

$ds_loai_con = $xl_loai_sach->ds_loai_sach_theo_id_cha($_GET['id_loai_sach']);

if(count($ds_loai_con)){
    $array_temp_id_loai_sach = [];
    foreach($ds_loai_con as $loai_con){
        $array_temp_id_loai_sach[] = $loai_con->id;
    }

    $ds_sach_theo_loai = $xl_sach->ds_sach_theo_dieu_kien('id_loai_sach', "(" . implode(',', $array_temp_id_loai_sach) . ")", ' IN ');
}
else{
    $ds_sach_theo_loai = $xl_sach->ds_sach_theo_dieu_kien('id_loai_sach', $_GET['id_loai_sach']);
}
?>
<body class="main_content">
    <div class="container-fluid">
    <?php
    //echo '<pre>',print_r($ds_sach_theo_loai),'<pre>';
    in_ds_sach_theo_data_truyen_vao($ds_sach_theo_loai);
    ?>
    </div>
</body>
</html>