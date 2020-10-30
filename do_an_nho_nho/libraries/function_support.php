<?php
function in_ds_sach_theo_data_truyen_vao($ds_sach_can_in){
    foreach($ds_sach_can_in as $key =>  $item_sach){
        ?>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 item_sach">
            <a href="/test_php/do_an_nho_nho/?page=chi-tiet-sach&id_sach=<?php echo $item_sach->id; ?>">
                <div class="">
                    <div class="hinh_sach">
                        <img src="./public/images/sach/<?php echo $item_sach->hinh; ?>" alt="">
                    </div>
                    <div class="ten_sach">
                    <?php echo $item_sach->ten_sach; ?>
                    </div>
                    <div class="tac_gia">
                    <?php echo $item_sach->ten_tac_gia; ?>
                    </div>
                    <div class="don_gia">
                    <?php echo $item_sach->don_gia; ?>
                    </div>
                    <div class="button_mua_ngay">
                        <a href="<?php echo $item_sach->id;?>">
                            <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                            Mua ngay
                        </a>
                    </div>
                </div>
            </a>
        </div>
        <?php
    }
}

function import_file($url_file){
    if(file_exists($url_file . '.php')){
        include_once($url_file . '.php');
    }
    else{
        echo 'Check lại file này dùm ' . $url_file . '.php vì nó không tồn tại';
    }
}


function tinh_tong_tien_gio_hang(){
    if(isset($_SESSION['gio_hang'])){
        $mang_gio_hang = $_SESSION['gio_hang'];
    }
    else{
        $mang_gio_hang = [];
    }


    $tong_tien = 0;
    foreach($mang_gio_hang as $item_gio_hang){
        $tong_tien += $item_gio_hang->so_luong * $item_gio_hang->don_gia;
    }

    return $tong_tien;
}


function encrypt_custom($string){
    $number_time = 10;
    $new_string = $string;

    for($i = 0; $i < $number_time; $i++){
        $new_string = base64_encode($new_string);
    }

    return $new_string;
}


function decrypt_custom($string){
    $number_time = 10;
    $new_string = $string;

    for($i = 0; $i < $number_time; $i++){
        $new_string = base64_decode($new_string);
    }

    return $new_string;
}
?>