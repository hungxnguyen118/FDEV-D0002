<?php
import_file('./model/xl_sach');
$xl_sach = new xl_sach();


if(isset($_SESSION['gio_hang'])){
    $mang_gio_hang = $_SESSION['gio_hang'];
}
else{
    $mang_gio_hang = [];
}

if(isset($_POST['btn_cap_nhat'])){
    //echo '<pre>',print_r($_POST),'</pre>';

    foreach($mang_gio_hang as $item_gio_hang){
        $item_gio_hang->so_luong = $_POST['so_luong_cap_nhat'][$item_gio_hang->id];
    }

    $_SESSION['gio_hang'] = $mang_gio_hang;

}


if(isset($_GET['id_xoa'])){
    //echo $_GET['id_xoa'];

    foreach($mang_gio_hang as $key => $item_gio_hang){
        if($item_gio_hang->id == $_GET['id_xoa']){
            unset($mang_gio_hang[$key]);
        }
    }

    $_SESSION['gio_hang'] = $mang_gio_hang;
    ?>
    <script>
        window.location.href = '/test_php/do_an_nho_nho/?page=gio-hang';
    </script>
    <?php
}



if(isset($_POST['so_luong']) && isset($_POST['id_sach'])){
    //echo '<pre>',print_r($_POST),'</pre>';
    //echo $_GET['id_sach'];
    $thong_tin_sach = $xl_sach->lay_thong_tin_sach_theo_id($_POST['id_sach']);
    $thong_tin_sach->gioi_thieu = '';
    $thong_tin_sach->so_luong = $_POST['so_luong'];

    if(count($mang_gio_hang) > 0){//có giỏ hàng rồi
        
        $kiem_tra_item_gio_hang = false;
        foreach($mang_gio_hang as $item_gio_hang){
            if($item_gio_hang->id == $_POST['id_sach']){
                $item_gio_hang->so_luong += $_POST['so_luong'];
                $kiem_tra_item_gio_hang = true;
            }
        }
        if($kiem_tra_item_gio_hang === false){
            $mang_gio_hang[] = $thong_tin_sach;
        }

    }
    else{//chưa có giỏ hàng
        $mang_gio_hang[] = $thong_tin_sach;
    }

    $_SESSION['gio_hang'] = $mang_gio_hang;

}

//echo '<pre>',print_r($_SESSION['gio_hang']),'</pre>';
?>


<form action="" method="POST">
    <table class="table table-striped table-hover table_gio_hang">
        <thead>
            <tr>
                <th>id</th>
                <th>Tên sách</th>
                <th>hình</th>
                <th>số lượng</th>
                <th>đơn giá</th>
                <th>thành tiền</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach($mang_gio_hang as $item_gio_hang){
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
                    <td>
                        <a href="/test_php/do_an_nho_nho/?page=gio-hang&id_xoa=<?php echo $item_gio_hang->id; ?>">
                            
                            <button type="button" class="btn btn-danger">
                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                Xóa
                            </button>
                            
                        </a>
                    </td>
                </tr>
                <?php
            }
            ?>
        </tbody>
        
    </table>

    <div class="inlcude_button">
        <input type="submit" name="btn_cap_nhat" class="btn btn-primary" value="Cập nhật giỏ hàng" />
        <button type="button" class="btn btn-danger">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>Xóa giỏ hàng
        </button>
    </div>
</form>
