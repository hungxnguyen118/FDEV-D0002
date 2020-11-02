<?php
check_and_include_model_database();

class xl_tac_gia extends database{

    function xl_tac_gia(){
        parent::database();
    }

    function ds_tac_gia(){

        $string_sql = "SELECT *
                        FROM bs_tac_gia";
        $this->setSQL($string_sql);
        $this->execute();
        $result = $this->loadAllRow();
        return $result;
        
    }


}
?>