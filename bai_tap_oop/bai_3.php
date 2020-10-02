<?php
class bang {
    public $dong, $cot;

    function bang($dong, $cot){
        $this->dong = $dong;
        $this->cot = $cot;
    }

    function print_table(){
        ?>
        <table class="table">
            <?php
            for($i = 0; $i < $this->dong; $i++){
                //in dong
                ?>
                <tr>
                    <?php
                    for($j = 0; $j < $this->cot; $j++){
                        ?>
                        <td>
                            <?php echo $i . ' - ' . $j; ?>
                        </td>
                        <?php
                    }
                    ?>
                </tr>
                <?php
            }
            ?>
        </table>
        <?php
    }
}

if(isset($_POST['dong']) && isset($_POST['cot'])){
    $dt_bang = new bang($_POST['dong'], $_POST['cot']);

    print_r($dt_bang);
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
                    <legend>Form title</legend>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-2">
                        Dòng
                    </div>
                    <div class="col-sm-10">
                        
                        <input type="number" min="1" name="dong" id="input" class="form-control" value="" required="required">
                        
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Cột
                    </div>
                    <div class="col-sm-10">
                        
                        <input type="number" min="1" name="cot" id="input" class="form-control" value="" required="required">
                        
                    </div>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
        </form>

        <div class="include_table">
            <?php
            if(isset($dt_bang)){
                $dt_bang->print_table();
            }
            ?>
        </div>
        
    </div>
</body>
</html>