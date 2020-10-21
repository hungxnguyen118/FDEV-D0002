<?php
include_once 'database.php';
class xl_slide_banner extends Database
{
    function danh_sach_slide()
    {
        $lenh_sql = "SELECT * FROM bs_slide_banner WHERE trang_thai = 1";
        $this->setQuery($lenh_sql);
        $result = $this->loadAllRow();
        return $result;
    }
}
?>