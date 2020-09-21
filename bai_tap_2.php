<?php
if(isset($_POST["chieu_dai"]) && isset($_POST["chieu_rong"])){
    print_r($_POST);
    $dien_tich = $_POST["chieu_dai"] * $_POST["chieu_rong"];
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
                    <legend>In nội dung</legend>
                </div>
        
                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Nội dung
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="text" name="noi_dung" id="input" class="form-control" value="<?php if(isset($_POST["noi_dung"])) echo $_POST["noi_dung"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>
                    
                    
                </div>

                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Màu nền 1
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="text" name="mau_nen_1" id="input" class="form-control" value="<?php if(isset($_POST["mau_nen_1"])) echo $_POST["mau_nen_1"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>
                    
                    
                </div>

                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Màu nền 2
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="text" name="mau_nen_2" id="input" class="form-control" value="<?php if(isset($_POST["mau_nen_2"])) echo $_POST["mau_nen_2"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>
                    
                    
                </div>


                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Màu chữ
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="text" name="mau_chu" id="input" class="form-control" value="<?php if(isset($_POST["mau_chu"])) echo $_POST["mau_chu"] ?>">
                        
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