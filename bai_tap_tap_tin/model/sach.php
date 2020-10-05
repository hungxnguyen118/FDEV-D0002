<?php
class sach {
    public $ma_sach, $ten_sach, $don_gia, $tac_gia, $nha_xuat_ban, $hinh;

    function sach($ma_sach = '', $ten_sach = '', $don_gia = '', $tac_gia = '', $nha_xuat_ban = '', $hinh = ''){
        $this->ma_sach = $ma_sach;
        $this->ten_sach = $ten_sach;
        $this->don_gia = $don_gia;
        $this->tac_gia = $tac_gia;
        $this->nha_xuat_ban = $nha_xuat_ban;
        $this->hinh = $hinh;
    }

    function luu_sach(){
        $f = fopen('./data_sach/ds_sach.txt', "a+") or exit ("Không thể mở file!");

        $noi_dung = $this->ma_sach . '||' . $this->ten_sach . '||' . $this->don_gia . '||' 
                    . $this->tac_gia . '||' . $this->nha_xuat_ban . '||' . $this->hinh . PHP_EOL;

        fwrite($f, $noi_dung);
        fclose($f);
    }

    function chuyen_dong_thanh_thong_tin($chuoi){
        $mang_thong_tin = explode('||', $chuoi);

        $this->ma_sach = $mang_thong_tin[0];
        $this->ten_sach = $mang_thong_tin[1];
        $this->don_gia = $mang_thong_tin[2];
        $this->tac_gia = $mang_thong_tin[3];
        $this->nha_xuat_ban = $mang_thong_tin[4];
        $this->hinh = $mang_thong_tin[5];
    }

    function in_dong_sach(){
        ?>
        <tr>
            <td>
                <?php echo $this->ma_sach; ?>
            </td>
            <td>
                <?php echo $this->ten_sach; ?>
            </td>
            <td>
                <?php echo $this->don_gia; ?>
            </td>
            <td>
                <?php echo $this->tac_gia; ?>
            </td>
            <td>
                <?php echo $this->nha_xuat_ban; ?>
            </td>
            <td>
                <?php echo $this->hinh; ?>
            </td>
        </tr>
        <?php
    }

    function in_menu_sach(){
        ?>
        <div class="item_menu_sach">
            <a href="?ma_sach=<?php echo $this->ma_sach ?>">
            <?php
                echo $this->ten_sach;
            ?>
            </a>
        </div>
        <?php
    }

    function in_thong_tin_chi_tiet_sach(){
        ?>
        <div class="item_thong_tin_sach">
            <div class="ten_sach">
                <?php echo $this->ten_sach; ?>
            </div>
            <div class="hinh_sach">
                <img src="<?php echo $this->hinh; ?>" alt="">
            </div>
            <div class="tac_gia">
                <?php echo $this->tac_gia; ?>
            </div>
            <div class="don_gia">
                <?php echo $this->don_gia; ?>
            </div>
            <div class="nha_xuat_ban">
                <?php echo $this->nha_xuat_ban; ?>
            </div>
        </div>
        <?php
    }


}
?>