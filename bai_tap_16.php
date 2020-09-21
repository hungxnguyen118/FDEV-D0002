<?php
$tong_day_so = 0;
$tich_day_so = 1;
$tong_chan = 0;
$tong_le = 0;

if(isset($_POST["so_bat_dau"]) && isset($_POST["so_ket_thuc"])){
    //print_r($_POST);
    //$dien_tich = $_POST["chieu_dai"] * $_POST["chieu_rong"];

    for($i = $_POST['so_bat_dau']; $i < $_POST['so_ket_thuc']; $i++){
        $tong_day_so += $i;
        $tich_day_so *= $i;
        
        if($i % 2 == 0){
            $tong_chan += $i;
        }
        else{
            $tong_le += $i;
        }
        
    }

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập 1</title>

    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>
    
    
    <div class="container">
        <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group">
                    <legend>Tính dãy số</legend>
                </div>
        
                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Số bắt đầu
                    </div>

                    
                    <div class="col-xs-4">
                        
                        <input type="text" name="so_bat_dau" id="input" class="form-control" value="<?php if(isset($_POST["noi_dung"])) echo $_POST["noi_dung"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Số kết thúc
                    </div>

                    
                    <div class="col-xs-4">
                        
                        <input type="text" name="so_ket_thuc" id="input" class="form-control" value="<?php if(isset($_POST["mau_nen_1"])) echo $_POST["mau_nen_1"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>
                    
                    
                </div>

                <div class="form-group">
                    
                    
                    
                    
                </div>

                <div class="form-group">
                    
                    
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="col-xs-12">
                            Tổng dãy số
                        </div>

                        
                        <div class="col-xs-12">
                            
                            <input type="text" name="tong_day_so" id="input" class="form-control" value="<?php echo $tong_day_so; ?>" min="" max="" step="" required="required" title="">
                            
                        </div>
                    </div>
                    

                    
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="col-xs-12">
                            Tích dãy số
                        </div>

                        
                        <div class="col-xs-12">
                            
                            <input type="text" name="tich_day_so" id="input" class="form-control" value="<?php echo $tich_day_so; ?>">
                            
                        </div>
                    </div>
                    

                    
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="col-xs-12">
                            Tổng các số chẵn
                        </div>

                        
                        <div class="col-xs-12">
                            
                            <input type="text" name="tong_chan" id="input" class="form-control" value="<?php echo $tong_chan; ?>">
                            
                        </div>
                    </div>
                    

                    
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="col-xs-12">
                            Tổng các số lẻ
                        </div>

                        
                        <div class="col-xs-12">
                            
                            <input type="text" name="tong_le" id="input" class="form-control" value="<?php echo $tong_le; ?>">
                            
                        </div>
                    </div>
                    
                    
                    
                </div>
                
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>

                <div style="height: 500px; display: flex; text-align: center; background: linear-gradient(180deg, #<?php echo $_POST['mau_nen_1']; ?>, #<?php echo $_POST['mau_nen_2']; ?>); color: #<?php echo $_POST['mau_chu']; ?>">
                    <div style="margin: auto;">
                    <?php
                    echo $_POST['noi_dung'];
                    ?>
                    </div>
                </div>
        </form>
    </div>
    
    
</body>
</html>