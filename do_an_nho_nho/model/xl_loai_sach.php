<?php
include_once('./model/database.php');

class xl_loai_sach extends database{

    function xl_loai_sach(){
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

}
?>