<?php
check_and_include_model_database();


class xl_token extends database{

    function xl_token(){
        parent::database();
    }

    function thong_tin_token($id){
        $string_sql = "SELECT * FROM bs_token WHERE id = '$id'";
        //echo $string_sql; exit;
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadRow();
        return $result;
    }

    function them_token($id_user, $type_token){

        $token = uniqid();
        $expire_date = date( 'Y-m-d H:i:s', mktime(0, 0, 0, date("m"), date("d")+1, date("Y")));

        //echo $token . ' ' . $expire_date;

        $string_sql = "INSERT INTO bs_token (token, expire_date, type_token, id_user) 
        VALUES ('$token','$expire_date','$type_token','$id_user');";
        //echo $string_sql;exit;
        $this->setSQL($string_sql);
        $this->execute();
        $last_insert_id = $this->lasInsertId();
        return $last_insert_id;
    }

}
?>