<?php
function in_ds_sach_theo_data_truyen_vao($ds_sach_can_in){
    foreach($ds_sach_can_in as $key =>  $item_sach){
        ?>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 item_sach">
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
        </div>
        <?php
    }
}
?>