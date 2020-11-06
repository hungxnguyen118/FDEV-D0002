<?php
check_and_include_model_database();

class xl_sach extends database{

    function xl_sach(){
        parent::database();
    }

    function so_luong_sach(){
        $string_sql = "SELECT count(*) as so_sach FROM bs_sach";
        //echo $string_sql; exit;
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadRow();
        return $result;
    }

    function ds_sach_theo_dieu_kien($dieu_kien, $gia_tri, $phuong_thuc_so_sanh = '='){
        $string_sql = "SELECT s.*, ten_tac_gia 
        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
                WHERE $dieu_kien $phuong_thuc_so_sanh " . $gia_tri;
        //echo $string_sql; exit;
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
    }

    function ds_sach_phan_trang($trang_hien_tai, $so_sach_tren_trang){
        $string_sql = "SELECT s.*, ten_tac_gia 
        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
        LIMIT " . $trang_hien_tai * $so_sach_tren_trang . ",$so_sach_tren_trang";
        //echo $string_sql; exit;
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
    }

    function ds_sach_noi_bat(){
        $string_sql = "SELECT s.*, ten_tac_gia 
                        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
                        WHERE noi_bat = 1";
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
    }

    function ds_sach_moi(){
        $string_sql = "SELECT s.*, ten_tac_gia 
                        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
                        ORDER BY id DESC
                        LIMIT 8";
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
    }

    function ds_sach_ban_chay(){
        $string_sql = "SELECT s.*, ten_tac_gia , SUM(so_luong) as so_luong_tong
                        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
                        JOIN bs_chi_tiet_don_hang ctdh ON ctdh.id_sach = s.id
                        GROUP BY s.id
                        ORDER BY so_luong_tong DESC
                        LIMIT 8";
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
    }

    function lay_thong_tin_sach_theo_id($id_sach){
        $string_sql = "SELECT s.*, ten_tac_gia 
                        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id
                        WHERE s.id = " . $id_sach;
        //echo $string_sql;exit;
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadRow();
        return $result;
    }


    function them_sach($ten_sach, $id_tac_gia, $gioi_thieu, $doc_thu, $id_loai_sach, $id_nha_xuat_ban, $so_trang, $ngay_xuat_ban, $kich_thuoc, $sku, $trong_luong, $trang_thai, $hinh, $don_gia, $gia_bia, $noi_bat){
        $string_sql = "INSERT INTO bs_sach (ten_sach, id_tac_gia, gioi_thieu, doc_thu, id_loai_sach, id_nha_xuat_ban, so_trang, ngay_xuat_ban, kich_thuoc, sku, trong_luong, trang_thai, hinh, don_gia, gia_bia, noi_bat) 
        VALUES ('$ten_sach', '$id_tac_gia', '$gioi_thieu', '$doc_thu', '$id_loai_sach', '$id_nha_xuat_ban', '$so_trang', '$ngay_xuat_ban', '$kich_thuoc', '$sku', '$trong_luong', '$trang_thai', '$hinh', '$don_gia', '$gia_bia', '$noi_bat');";
        //echo $string_sql;exit;
        $this->setSQL($string_sql);
        $this->execute();
        $last_insert_id = $this->lasInsertId();
        return $last_insert_id;
        
    }


    function xoa_sach($id_xoa){
        $string_sql = "DELETE FROM bs_sach WHERE id = " . $id_xoa;
        //echo $string_sql;exit;
        $this->setSQL($string_sql);
        $result = $this->execute();
        //echo '<pre>',print_r($result),'</pre>';
        return $result;
    }


    function cap_nhat_sach($mang_thong_tin, $id_sach){
        $string_build_query = '';

        $bien_dem = 0;
        foreach($mang_thong_tin as $input_name => $item_input){
            if($input_name != 'btn_save_cap_nhat_sach'){
                if($bien_dem == 0){
                    $string_build_query .= $input_name . " = '" . $item_input . "' ";
                }
                else{
                    $string_build_query .= ',' . $input_name . " = '" . $item_input . "' ";
                }
                $bien_dem++;
            }
        }

        //echo $string_build_query;

        $string_sql = "UPDATE bs_sach
            SET " . $string_build_query . "
            WHERE id = $id_sach
            ";
        //echo $string_sql;exit;
        $this->setSQL($string_sql);
        $result = $this->execute();
        return $result;
        
    }

}
?>