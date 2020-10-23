<?php
$thong_tin_user = $_SESSION['thong_tin_user'];
$thong_tin_user_cookie = $_COOKIE['thong_tin_user_cookie'];

if($thong_tin_user || $thong_tin_user_cookie){
    header('location: /test_php/do_an_nho_nho/admin/?page=dashboard');
    die();
}


if(isset($_POST['tai_khoan']) && isset($_POST['mat_khau'])){
    //xử lý đăng nhập
    $tai_khoan = $_POST['tai_khoan'];
    $mat_khau = $_POST['mat_khau'];

    include_once('../model/xl_nguoi_dung.php');
    $xl_nguoi_dung = new xl_nguoi_dung();
    $nguoi_dung = $xl_nguoi_dung->thong_tin_nguoi_dung_theo_tai_khoan($tai_khoan);

    if($nguoi_dung){
        //echo '<pre>',print_r($nguoi_dung),'</pre>';
        if($nguoi_dung->mat_khau == md5($mat_khau)){//đúng mật khẩu
            echo 'Đăng nhập thành công!';

            if($nguoi_dung->id_loai_user > 4){

                if($_POST['remember']){
                    setcookie("thong_tin_user_cookie", $nguoi_dung->tai_khoan, time()+3600);
                }
                else{
                    $_SESSION['thong_tin_user'] = $nguoi_dung;
                }
                

                header('location: /test_php/do_an_nho_nho/admin/?page=dashboard');
            }
            else{
                echo 'User cùi mà đăng nhập vào admin => Ảo tưởng';
            }
        }
        else{
            echo 'Có cái mật khẩu cũng quên!';
        }
    }
    else {
        echo 'Làm ơn check dùm tui, có tài khoản đâu mà đăng nhập!';
    }

}
else {

}
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    body {font-family: Arial, Helvetica, sans-serif;}
    form {border: 3px solid #f1f1f1;}

    input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    }

    button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    }

    button:hover {
    opacity: 0.8;
    }

    .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
    }

    .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    }

    img.avatar {
    width: 40%;
    border-radius: 50%;
    }

    .container {
    padding: 16px;
    }

    span.psw {
    float: right;
    padding-top: 16px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }
    .cancelbtn {
        width: 100%;
    }
    }
    </style>

    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>

<h2>Login Form</h2>

<div class="container">
    
    
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
        <form action="" method="post">
            <div class="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" class="avatar">
            </div>

            <div class="container-form">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="tai_khoan" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="mat_khau" required>
                    
                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container-form" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>
    

</div>

</body>
</html>
