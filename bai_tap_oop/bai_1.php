<?php
class phep_tinh{
    private $so_thu_nhat, $so_thu_hai;
    function phep_tinh($value1,$value2){
        $this->so_thu_nhat=$value1;
        $this->so_thu_hai=$value2;
    }
    function set_num1($value){
        $this->so_thu_nhat=$value;
    }
    function set_num2($value){
        $this->so_thu_hai=$value;
    }
    function num1(){
        return $this->so_thu_nhat;
    }
    function num2(){
        return $this->so_thu_hai;
    }
    function ket_qua(){
        return $ket_qua;
    }
    function tinh_tong(){
        return $this->so_thu_nhat+$this->so_thu_hai;
    }
    function tinh_hieu(){
        return $this->so_thu_nhat-$this->so_thu_hai;
    }
    function tinh_tich(){
        return $this->so_thu_nhat*$this->so_thu_hai;
    }
    function tinh_thuong(){
        return $this->so_thu_nhat/$this->so_thu_hai;
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
    
    <form action="" method="POST" class="form-horizontal" role="form">
            <div class="form-group">
                <legend>PHÉP TÍNH</legend>
            </div>
            <div class="form-group">
                    <div class="col-sm-2">
                        Số thứ nhất:
                    </div>
                    <div class="col-sm-10 col-sm-offset-2">
                        
                        <input type="number" name="num1" id="input" class="form-control" value="<?php if(isset($_POST['num1'])) echo $_POST['num1']?>" required="required">
                        
                    </div>
            </div>
            <div class="form-group">
                    <div class="col-sm-2">
                        Số thứ hai:
                    </div>
                    <div class="col-sm-10 col-sm-offset-2">
                        
                        <input type="number" name="num2" id="input" class="form-control" value="<?php if(isset($_POST['num2'])) echo $_POST['num2']?>" required="required">
                        
                    </div>
            </div>
            
            <div class="radio">
                <label>
                    <input type="radio" name="phep_tinh" id="cong" value="cong" <?php if($_POST['phep_tinh'] == 'cong') echo 'checked'; ?> >
                    Cộng
                </label>
                <label>
                    <input type="radio" name="phep_tinh" id="tru" value="tru" <?php if($_POST['phep_tinh'] == 'tru') echo 'checked'; ?> >
                    Trừ
                </label>
                <label>
                    <input type="radio" name="phep_tinh" id="nhan" value="nhan" <?php if($_POST['phep_tinh'] == 'nhan') echo 'checked'; ?> >
                    Nhân 
                </label>
                <label>
                    <input type="radio" name="phep_tinh" id="chia" value="chia" <?php if($_POST['phep_tinh'] == 'chia') echo 'checked'; ?>>
                    Chia
                </label>
            </div>
            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Tính</button>
                </div>
            </div>
    </form>         
            <legend>KẾT QUẢ</legend>
            <?php
            if(isset($_POST['num1'])&&isset($_POST['num2'])){
                $tinh =new phep_tinh($_POST['num1'],$_POST['num2']);
               
                $string=$tinh->num1().$_POST['phep_tinh'].$tinh->num2()." = ";
                
                switch ($_POST['phep_tinh']){
                    case "cong": 
                        echo $string.$tinh->tinh_tong();
                    break;
                    case "tru":
                        echo $string.$tinh->tinh_hieu();
                    break;
                    case "nhan":
                         echo $string.$tinh->tinh_tich();
                    break;
                    case "chia":
                        if($_POST['num2']!=0){
                            echo $string.$tinh->tinh_thuong();
                        }
                        else {
                            echo "Không tính được thương, số thứ hai PHẢI KHÁC 0";
                        }
                    break;
                                
                }
                
            }
            
            ?>
    
    </div>
</body>
</html>