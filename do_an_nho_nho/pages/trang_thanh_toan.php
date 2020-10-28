<?php
import_file('./model/xl_don_hang');
$xl_don_hang = new xl_don_hang();


if(isset($_POST['ho_ten_nguoi_nhan']) && isset($_SESSION['gio_hang'])){
    //echo '<pre>',print_r($_POST),'</pre>';\
    $tong_tien = tinh_tong_tien_gio_hang();

    $id_vua_them = $xl_don_hang->them_don_hang($_POST['ho_ten_nguoi_nhan'], $_POST['email_nguoi_nhan'], $_POST['so_dien_thoai_nguoi_nhan'],
    $_POST['dia_chi_nguoi_nhan'], $tong_tien, $_SESSION['gio_hang']);

    //echo $id_vua_them;

    if($id_vua_them){
        unset($_SESSION['gio_hang']);
        ?>
        <script>
            alert('đơn hàng đã đặt thành công!');
            window.location.href = '/test_php/do_an_nho_nho/';
        </script>
        <?php
    }

}
?>

<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    
    <form action="" method="POST" class="form-horizontal" role="form">
            <div class="form-group">
                <legend>Thông tin giao hàng</legend>
            </div>

            <div class="form-group">
                <div class="col-sm-2">
                    Họ tên:
                </div>
                <div class="col-sm-10">
                    <input type="text" name="ho_ten_nguoi_nhan" id="input" class="form-control" value="" required="required" title="">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-2">
                    Email:
                </div>
                <div class="col-sm-10">
                    <input type="text" name="email_nguoi_nhan" id="input" class="form-control" value="" required="required" title="">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-2">
                    Số điện thoại:
                </div>
                <div class="col-sm-10">
                    <input type="text" name="so_dien_thoai_nguoi_nhan" id="input" class="form-control" value="" required="required" title="">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-2">
                    Địa chỉ:
                </div>
                <div class="col-sm-10">
                    <input type="text" name="dia_chi_nguoi_nhan" id="input" class="form-control" value="" required="required" title="">
                </div>
            </div>
    
            
    
            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
    </form>
    
</div>


<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
    <?php
    include_once('./modules/mod_gio_hang.php');
    ?>
</div>