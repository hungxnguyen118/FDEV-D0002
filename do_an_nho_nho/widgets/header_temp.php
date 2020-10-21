<?php
foreach($ds_loai_sach_cha as $loai_sach){

    $ds_con = $xl_loai_sach->ds_loai_sach_theo_id_cha($loai_sach->id);

    //print_r($ds_con);
    if(count($ds_con) > 0){
        ?>
        <li class="dropdown-submenu">
            <a href="#"><?php echo $loai_sach->ten_loai_sach; ?></a>
            <ul class="dropdown-menu hidden-xs hidden-sm">
                <?php
                foreach($ds_con as $loai_sach_con){
                    ?>
                    <li>
                        <a href=""><?php echo $loai_sach_con->ten_loai_sach; ?></a>
                    </li>
                    <?php
                }
                ?>
            </ul>
        </li>
        <?php
    }
    else{
        ?>
        <li><a href="#"><?php echo $loai_sach->ten_loai_sach; ?></a></li>
        <?php
    }
}
?>