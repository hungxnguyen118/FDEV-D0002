<?php
import_file('./config/config');

import_file('./model/xl_don_hang');

import_file('./libraries/class.phpmailer');

$config = new config();


$xl_don_hang = new xl_don_hang();


if(isset($_POST['ho_ten_nguoi_nhan']) && isset($_SESSION['gio_hang'])){
    //echo '<pre>',print_r($_POST),'</pre>';
    $tong_tien = tinh_tong_tien_gio_hang();

    $id_vua_them = $xl_don_hang->them_don_hang($_POST['ho_ten_nguoi_nhan'], $_POST['email_nguoi_nhan'], $_POST['so_dien_thoai_nguoi_nhan'],
    $_POST['dia_chi_nguoi_nhan'], $tong_tien, $_SESSION['gio_hang']);

    //echo $id_vua_them;

    if($id_vua_them){

        //echo 
        $ds_mat_hang = print_chuoi_html_gio_hang();

        //send mail cho user tai đây
        $phpmail =  new PHPMailer();

        //setting send mail
        $phpmail->IsSMTP();
        $phpmail->CharSet = 'UTF-8';
        $phpmail->SMTPAuth = true;
        $phpmail->SMTPSecure = 'ssl';
        $phpmail->Host = "smtp.gmail.com";
        $phpmail->Port = 465;
        $phpmail->IsHTML(true);
        $phpmail->Username = $config->mail_user;
        $phpmail->Password = $config->get_password_email();
        $phpmail->SetFrom("hungnguyenxuan118@gmail.com");
        $phpmail->From = "hungnguyenxuan118@gmail.com";
        $phpmail->Subject = "Cám ơn bạn đặt hàng tại Bán sách online của chúng tôi";

        $phpmail->Body = '<div>Bạn đã đặt mua các sản phẩm với danh sách sau:</div>' . $ds_mat_hang 
                            . '<div>Bạn có thể review đơn hàng <a href="' . create_url_review_don_hang($id_vua_them) . '">tại đây</a></div>';
        $phpmail->AddAddress($_POST['email_nguoi_nhan']);

        if(!$phpmail->Send())
        {
            echo "<script> alert('Trong lúc gửi mail xảy ra sự cố: " . $phpmail->ErrorInfo . "');</script>";
        }
        else
        {
            unset($_SESSION['gio_hang']);
            ?>
            <script>
                alert('đơn hàng đã đặt thành công!');
                window.location.href = '/test_php/do_an_nho_nho/';
            </script>
            <?php
        }
        
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