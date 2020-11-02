<?php
include_once('./model/xl_don_hang.php');

$xl_don_hang = new xl_don_hang();

$thong_tin_don_hang = $xl_don_hang->thong_tin_don_hang($_GET['id_don_hang']);
//echo '<pre>',print_r($thong_tin_don_hang),'</pre>';
?>

<div class="container">

    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="thong_tin_user">
            <div class="ho_ten_nguoi_nhan">
                <?php echo $thong_tin_don_hang->ho_ten_nguoi_nhan; ?>
            </div>
            <div class="dia_chi_nguoi_nhan">
                <?php echo $thong_tin_don_hang->dia_chi_nguoi_nhan; ?>
            </div>
            <div class="email_nguoi_nhan">
                <?php echo $thong_tin_don_hang->email_nguoi_nhan; ?>
            </div>
            <div class="so_dien_thoai_nguoi_nhan">
                <?php echo $thong_tin_don_hang->so_dien_thoai_nguoi_nhan; ?>
            </div>
        </div>
    </div>


    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <?php
        print_chi_tiet_don_hang($thong_tin_don_hang->ds_chi_tiet_don_hang);
        ?>
    </div>

</div>