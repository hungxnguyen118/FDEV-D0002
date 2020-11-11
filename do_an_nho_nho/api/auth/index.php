<?php
header('Content-Type: application/json');

include_once('../../libraries/function_support.php');

include_once('../../model/xl_nguoi_dung.php');

include_once('../../model/xl_token.php');


if($_SERVER['REQUEST_METHOD'] == "POST"){

    $xl_nguoi_dung = new xl_nguoi_dung();
    $xl_token = new xl_token();

    $string_data = file_get_contents("php://input");
    //echo $string_data;
    $info_dang_nhap = json_decode($string_data);

    $tai_khoan = $info_dang_nhap->tai_khoan;
    $mat_khau = $info_dang_nhap->mat_khau;

    //echo $tai_khoan . ' ' .$mat_khau;

    $nguoi_dung = $xl_nguoi_dung->thong_tin_nguoi_dung_theo_tai_khoan($tai_khoan);

    if($nguoi_dung){
        //echo '<pre>',print_r($nguoi_dung),'</pre>';
        if($nguoi_dung->mat_khau == md5($mat_khau)){//đúng mật khẩu
            $id_token = $xl_token->them_token($nguoi_dung->id, 'login_token');
            $thong_tin_token = $xl_token->thong_tin_token($id_token);

            echo json_encode(array("error" => false, "message" => "login successfully", "data" => $thong_tin_token));
        }
        else{
            echo json_encode(array("error" => true, "message" => "login failed! Please check your username and password!", "data" => array()));
        }
    }
    else {
        echo json_encode(array("error" => true, "message" => "login failed! Your Account doesn't exist", "data" => array()));
    }

}
?>