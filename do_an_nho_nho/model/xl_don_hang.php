<?php
include_once('./model/database.php');

class xl_don_hang extends database{

    function xl_don_hang(){
        parent::database();
    }

    function ds_loai_sach_theo_id_cha($id_loai_cha = 0){

        $string_sql = "SELECT ls.*
                        FROM bs_loai_sach ls
                        WHERE id_loai_cha = " . $id_loai_cha;
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
        
    }

    function them_don_hang($ho_ten_nguoi_nhan, $email_nguoi_nhan, $so_dien_thoai_nguoi_nhan, $dia_chi_nguoi_nhan, $tong_tien, $mang_gio_hang){

        $string_sql = "INSERT INTO `bs_don_hang` ( `tong_tien`, `ngay_dat`, `id_nguoi_dung`, `ho_ten_nguoi_nhan`, `email_nguoi_nhan`, `so_dien_thoai_nguoi_nhan`, `trang_thai`, `dia_chi_nguoi_nhan`) 
            VALUES ('$tong_tien', CONCAT(CURRENT_DATE, ' ', CURRENT_TIME), NULL, '$ho_ten_nguoi_nhan', '$email_nguoi_nhan', '$so_dien_thoai_nguoi_nhan', '1', '$dia_chi_nguoi_nhan');";
        $this->setSQL($string_sql);
        $this->execute();
        $last_insert_id = $this->lasInsertId();

        //if($last_insert_id){
            $string_sql_builder = [];
            foreach($mang_gio_hang as $item_gio_hang){
                $string_sql_builder[] = "('$last_insert_id', '$item_gio_hang->id', '$item_gio_hang->so_luong', '$item_gio_hang->don_gia', '" .$item_gio_hang->so_luong * $item_gio_hang->don_gia. "')";
            }

            $string_sql_ctdh = "INSERT INTO `bs_chi_tiet_don_hang` (`id_don_hang`, `id_sach`, `so_luong`, `don_gia`, `thanh_tien`) 
            VALUES " . implode(',', $string_sql_builder);
            $this->setSQL($string_sql_ctdh);
            $this->execute();

            //echo $string_sql_ctdh;
        // }
        // else{
        //     echo 'bi loi roi';
        // }

        return $last_insert_id;

    }

}
?>