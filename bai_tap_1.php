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
                    <legend>Tính diện tích hình chữ nhật</legend>
                </div>
        
                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Chiều dài
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="number" name="chieu_dai" id="input" class="form-control" value="<?php echo $_POST["chieu_dai"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>
                    
                    
                </div>

                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Chiều rộng
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="number" name="chieu_rong" id="input" class="form-control" value="<?php echo $_POST["chieu_rong"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>
                    
                    
                </div>


                <div class="form-group">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        diện tích
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="number" name="" id="input" class="form-control" value="<?php echo $dien_tich ?>">
                        
                    </div>
                    
                    
                </div>
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
        </form>
    </div>
    
    
</body>
</html>