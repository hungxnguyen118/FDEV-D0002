<?php
$nam_nhuan = 0;
$so_ngay_trong_thang = 0;
$ngay_trong_tuan = '';

$mang_ngay_trong_tuan = array('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');

if(isset($_POST['thang']) && isset($_POST['nam'])){
    

    if($_POST['nam'] % 400 == 0 || ($_POST['nam'] % 4 == 0 && $_POST['nam'] % 100 != 0)){
        $nam_nhuan = 1;
    }

    $so_ngay_trong_thang = cal_days_in_month(CAL_GREGORIAN, $_POST['thang'], $_POST['nam']);
    $date = date_create( $_POST['nam'] . '-' . $_POST['thang'] . '-01');
    $ngay_trong_tuan = date_format($date, 'D');
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
        <?php
        echo $so_ngay_trong_thang .'<br/>';
        echo $ngay_trong_tuan;
        ?>
        
        <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group">
                    <legend>Form title</legend>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-2">
                        Tháng
                    </div>
                    <div class="col-sm-10 col-sm-offset-2">
                        
                        <input type="text" name="thang" id="input" class="form-control" value="" required="required">
                        
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Năm
                    </div>
                    <div class="col-sm-10 col-sm-offset-2">
                        
                        <input type="text" name="nam" id="input" class="form-control" value="" required="required">
                        
                    </div>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
        </form>
        
        <div class="lich">

            
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <?php
                        foreach($mang_ngay_trong_tuan as $item_day){
                            ?>
                            <th>
                                <?php echo $item_day; ?>
                            </th>
                            <?php
                        }
                        ?>
                    </tr>
                </thead>
                <tbody>
                    
                        <?php
                        $flag = 0;
                        $so_ngay_in = 1;
                        for($i = 0; $i < 42; $i++){

                            if($i % 7 == 0){
                                ?>
                                <tr>
                                <?php
                            }

                            if($mang_ngay_trong_tuan[$i % 7] == $ngay_trong_tuan){
                                $flag = 1;
                            }

                            if($flag == 1 && $so_ngay_in <= $so_ngay_trong_thang){
                                ?>
                                <td><?php echo $so_ngay_in; ?></td>
                                <?php
                                $so_ngay_in++;
                            }
                            else{
                                ?>
                                <td>|</td>
                                <?php
                            }
                            
                            if($i % 7 == 6){
                                ?>
                                </tr>
                                <?php
                            }

                        }
                        ?>
                    
                </tbody>
            </table>
            
        </div>

    </div>
</body>
</html>