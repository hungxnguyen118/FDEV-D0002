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


function print_chuoi_html_gio_hang(){

    if(isset($_SESSION['gio_hang'])){
        $mang_gio_hang = $_SESSION['gio_hang'];
    }
    else{
        $mang_gio_hang = [];
    }

    $chuoi_mail_html = '<table  cellspacing="0" cellpadding="10px" border="1">
        <tr>
            <td>Tên sách</td>
            <td>đơn giá</td>
            <td>Số lượng</td>
            <td>Thành tiền</td>
        </tr>
    ';
    foreach($mang_gio_hang as $item_gio_hang){
        $chuoi_mail_html .= '<tr>
            <td>' . $item_gio_hang->ten_sach . '</td>
            <td>' . $item_gio_hang->don_gia . '</td>
            <td>' . $item_gio_hang->so_luong . '</td>
            <td>' . $item_gio_hang->so_luong * $item_gio_hang->don_gia . '</td>
        </tr>';
    }
    $chuoi_mail_html .= '</table>';

    return $chuoi_mail_html;
}


function create_url_review_don_hang($id_don_hang){
    return 'http://localhost:8181/test_php/do_an_nho_nho/?page=don-hang&id_don_hang=' . $id_don_hang;
}


function print_chi_tiet_don_hang($ds_chi_tiet_don_hang){

    if(count($ds_chi_tiet_don_hang)){
        ?>
        <table class="table table-striped table-hover table_gio_hang">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Tên sách</th>
                    <th>hình</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach($ds_chi_tiet_don_hang as $item_gio_hang){
                    ?>
                    <tr>
                        <td><?php echo $item_gio_hang->id; ?></td>
                        <td><?php echo $item_gio_hang->ten_sach; ?></td>
                        <td>
                            <img src="/test_php/do_an_nho_nho/public/images/sach/<?php echo $item_gio_hang->hinh; ?>" alt="">
                        </td>
                        <td>
                            <input type="number" name="so_luong_cap_nhat[<?php echo $item_gio_hang->id; ?>]" 
                                value="<?php echo $item_gio_hang->so_luong; ?>" 
                                id="so_luong_<?php echo $item_gio_hang->id; ?>" class="form-control" 
                                min="1" step="1" title="">
                        </td>
                        <td><?php echo $item_gio_hang->don_gia; ?></td>
                        <td><?php echo $item_gio_hang->so_luong * $item_gio_hang->don_gia; ?></td>
                    </tr>
                    <?php
                }
                ?>
            </tbody>
            
        </table>
        <?php
    }
}

function check_and_include_model_database(){
    if(file_exists('./model/database.php')){
        include_once('./model/database.php');
    }
    if(file_exists('../model/database.php')){
        include_once('../model/database.php');
    }
    else{
        include_once('../../model/database.php');
    }
}
?>