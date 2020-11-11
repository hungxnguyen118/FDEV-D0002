<?php
check_and_include_model_database();


class xl_nguoi_dung extends database{

    function xl_nguoi_dung(){
        parent::database();
    }

    function thong_tin_nguoi_dung_theo_tai_khoan($tai_khoan){
        $string_sql = "SELECT * FROM bs_nguoi_dung WHERE tai_khoan = '$tai_khoan'";
        //echo $string_sql; exit;
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadRow();
        return $result;
    }

}
?>