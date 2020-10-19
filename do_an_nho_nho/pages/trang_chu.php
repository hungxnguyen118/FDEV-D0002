<?php
include_once('./model/xl_slide_banner.php');
include_once('./model/xl_sach.php');

$xl_slide_banner = new xl_slide_banner();
$ds_slide_banner = $xl_slide_banner->ds_slide_banner();

$xl_sach = new xl_sach();
$ds_sach_noi_bat = $xl_sach->ds_sach_noi_bat();

$ds_sach_moi = $xl_sach->ds_sach_moi();

//echo '<pre>',print_r($ds_slide_banner),'</pre>';
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

    <link rel="stylesheet" href="./public/css/main.css">
    
</head>
<body class="main_content">
    <div class="container-fluid">

        
        <div id="carousel-id" class="carousel slide slide_banner" data-ride="carousel">
            <ol class="carousel-indicators">
                <?php
                foreach($ds_slide_banner as $key => $slide_banner){
                    $active = ($key == 0)?'active':'';
                    ?>
                    <li data-target="#carousel-id" data-slide-to="0" class="<?php echo $active; ?>"></li>
                    <?php
                }
                ?>
            </ol>
            <div class="carousel-inner">
            <?php
            foreach($ds_slide_banner as $key => $slide_banner){
                $active = ($key == 0)?'active':'';
                ?>
                <div class="item <?php echo $active; ?>">
                    <img alt="First slide" src="./public/images/slide_banner/<?php echo $slide_banner->hinh ?>">
                </div>
                <?php
            }
            ?>
            </div>
            <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
            <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
        </div>


        <div class="sach_noi_bat">
            
            
            <div class="container-fluid module_sach_noi_bat">
                    <div class="title_module">
                        Sách nổi bật
                    </div>
                    
                    <div class="ds_sach">

                    <?php
                    in_ds_sach_theo_data_truyen_vao($ds_sach_noi_bat);
                    ?>

                    </div>
            </div>

            <div class="container-fluid module_sach_moi">
                    <div class="title_module">
                        Sách mới
                    </div>
                    
                    <div class="ds_sach">

                    <?php
                    in_ds_sach_theo_data_truyen_vao($ds_sach_moi);
                    ?>

                    </div>
            </div>
            

        </div>
        

    </div>
</body>
</html>