<?php
include_once('./model/database.php');

class xl_slide_banner extends database{

    function xl_slide_banner(){
        parent::database();
    }

    function ds_slide_banner(){
        $string_sql = "SELECT * FROM bs_slide_banner";
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
    }

}
?>