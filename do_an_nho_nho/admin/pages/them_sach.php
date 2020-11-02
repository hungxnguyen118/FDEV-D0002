<?php
include_once('../model/xl_sach.php');
include_once('../model/xl_loai_sach.php');
include_once('../model/xl_tac_gia.php');
include_once('../model/xl_nha_xuat_ban.php');

$xl_sach = new xl_sach();

$xl_loai_sach = new xl_loai_sach();
$ds_loai_sach = $xl_loai_sach->ds_tat_ca_loai_sach_theo_cha();

$xl_tac_gia = new xl_tac_gia();
$ds_tac_gia = $xl_tac_gia->ds_tac_gia();

$xl_nha_xuat_ban = new xl_nha_xuat_ban();
$ds_nha_xuat_ban = $xl_nha_xuat_ban->ds_nha_xuat_ban();

if(isset($_POST['btn_save_them_sach'])){
    $hop_le = true;

    foreach($_POST as $key => $item_input){
        if($item_input === ''){
            
            $hop_le = false;
            ?>
            <script>
                alert('Chưa nhập đủ thông tin <?php echo $key;?>');
            </script>
            <?php
            break;
        }
    }

    if($hop_le == true){// se xu lý save
        $id_sach_moi = $xl_sach->them_sach($_POST['ten_sach'], $_POST['id_tac_gia'], $_POST['gioi_thieu'], $_POST['doc_thu'], $_POST['id_loai_sach'],
        $_POST['id_nha_xuat_ban'], $_POST['so_trang'], $_POST['ngay_xuat_ban'], $_POST['kich_thuoc'], $_POST['sku'], 
        $_POST['trong_luong'], $_POST['trang_thai'], $_POST['hinh'], $_POST['don_gia'], $_POST['gia_bia'], $_POST['noi_bat']);

        if($id_sach_moi){
            ?>
            <script>
                alert('Thêm sách mới thành công');
                window.location.href = '/test_php/do_an_nho_nho/admin/?page=sach';
            </script>
            <?php
        }
        else{
            ?>
            <script>
                alert('Có lỗi xảy ra trong quá trình thêm!');
            </script>
            <?php
        }
    }
}
?>

<div class="title_page">
    Thêm Sách
</div>

<div class="include_form_process">
    
    <form action="" method="POST" class="form-horizontal" role="form">
    
        <div class="form-group">
            <div class="col-sm-2 title_input">
                Tên sách:
            </div>
            <div class="col-sm-10">
                <input type="text" name="ten_sach" id="input" class="form-control" value="<?php if(isset($_POST['ten_sach'])) echo $_POST['ten_sach']; ?>" title="">
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                SKU:
            </div>
            <div class="col-sm-10">
                <input type="text" name="sku" id="input" class="form-control" value="<?php if(isset($_POST['ten_sach'])) echo $_POST['sku']; ?>"  title="">
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Loại Sách:
            </div>
            <div class="col-sm-10">
                
                <select name="id_loai_sach" id="input" class="form-control" required="required">
                    <?php
                    foreach($ds_loai_sach as $item_loai_sach){
                        ?>
                        <option value="<?php echo $item_loai_sach->id; ?>">
                            <?php echo $item_loai_sach->ten_loai_sach; ?>
                        </option>
                        <?php
                        if(count($item_loai_sach->ds_con)){
                            foreach($item_loai_sach->ds_con as $item_loai_con){
                                ?>
                                <option value="<?php echo $item_loai_con->id; ?>">
                                    <?php echo '||== ' . $item_loai_con->ten_loai_sach; ?>
                                </option>
                                <?php
                            }
                        }
                    }
                    ?>
                    
                </select>
                
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Giới thiệu:
            </div>
            <div class="col-sm-10">
                
                <textarea name="gioi_thieu" id="input" class="form-control" rows="3"><?php if(isset($_POST['gioi_thieu'])) echo $_POST['gioi_thieu']; ?></textarea>
                
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Đọc thử:
            </div>
            <div class="col-sm-10">
                <input type="text" name="doc_thu" id="input" class="form-control" value="<?php if(isset($_POST['doc_thu'])) echo $_POST['doc_thu']; ?>"  title="">
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Tác giả:
            </div>
            <div class="col-sm-10">
                <select name="id_tac_gia" id="input" class="form-control" required="required">
                    <?php
                    foreach($ds_tac_gia as $tac_gia){
                        ?>
                        <option value="<?php echo $tac_gia->id; ?>">
                            <?php echo $tac_gia->ten_tac_gia; ?>
                        </option>
                        <?php
                    }
                    ?>
                    
                </select>
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Nhà xuất bản:
            </div>
            <div class="col-sm-10">
                <select name="id_nha_xuat_ban" id="input" class="form-control" required="required">
                    <?php
                    foreach($ds_nha_xuat_ban as $nha_xuat_ban){
                        ?>
                        <option value="<?php echo $nha_xuat_ban->id; ?>">
                            <?php echo $nha_xuat_ban->ten_nha_xuat_ban; ?>
                        </option>
                        <?php
                    }
                    ?>
                    
                </select>
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Số trang:
            </div>
            <div class="col-sm-10">
                <input type="text" name="so_trang" id="input" class="form-control" value="<?php if(isset($_POST['so_trang'])) echo $_POST['so_trang']; ?>"  title="">
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Ngày xuất bản:
            </div>
            <div class="col-sm-10">
                <input type="text" name="ngay_xuat_ban" id="input" class="form-control" value="<?php if(isset($_POST['ngay_xuat_ban'])) echo $_POST['ngay_xuat_ban']; ?>"  title="">
            </div>
        </div> 


        <div class="form-group">
            <div class="col-sm-2 title_input">
                Kích thước:
            </div>
            <div class="col-sm-10">
                <input type="text" name="kich_thuoc" id="input" class="form-control" value="<?php if(isset($_POST['kich_thuoc'])) echo $_POST['kich_thuoc']; ?>"  title="">
            </div>
        </div> 

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Trọng lượng:
            </div>
            <div class="col-sm-10">
                <input type="text" name="trong_luong" id="input" class="form-control" value="<?php if(isset($_POST['trong_luong'])) echo $_POST['trong_luong']; ?>"  title="">
            </div>
        </div> 


        <div class="form-group">
            <div class="col-sm-2 title_input">
                Trạng thái:
            </div>
            <div class="col-sm-10">
                
                <div class="radio">
                    <label>
                        <input type="radio" name="trang_thai" id="input" value="1" checked="checked">
                        Hiện
                    </label>

                    <label>
                        <input type="radio" name="trang_thai" id="input" value="0">
                        Ẩn
                    </label>
                </div>
                
            </div>
        </div> 

        <!-- <div class="form-group">
            <div class="col-sm-2 title_input">
                Hình:
            </div>
            <div class="col-sm-10">
                <input type="file" name="hinh" id="input" class="form-control" value=""  title="">
            </div>
        </div>  -->

        <div class="form-group">
            <div class="col-sm-2 title_input">
                Đơn giá:
            </div>
            <div class="col-sm-10">
                <input type="number" name="don_gia" id="input" class="form-control" value="<?php if(isset($_POST['don_gia'])) echo $_POST['don_gia']; ?>"  title="">
            </div>
        </div>
        
        <div class="form-group">
            <div class="col-sm-2 title_input">
                Giá bìa:
            </div>
            <div class="col-sm-10">
                <input type="text" name="gia_bia" id="input" class="form-control" value="<?php if(isset($_POST['gia_bia'])) echo $_POST['gia_bia']; ?>"  title="">
            </div>
        </div>  


        <div class="form-group">
            <div class="col-sm-2 title_input">
                Nổi bật:
            </div>
            <div class="col-sm-10">
            <div class="radio">
                    <label>
                        <input type="radio" name="noi_bat" id="input" value="1">
                        Có
                    </label>

                    <label>
                        <input type="radio" name="noi_bat" id="input" value="0"  checked="checked">
                        Không
                    </label>
                </div>
            </div>
        </div> 
    
        <div class="form-group">
            <div class="col-sm-10 col-sm-offset-2">
                <input type="submit" name="btn_save_them_sach" class="btn btn-primary" value="Thêm Sách"/>
            </div>
        </div>
    </form>
    
</div>