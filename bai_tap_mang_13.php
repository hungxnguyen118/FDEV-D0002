<?php
$mang_dong_vat = array(
    array(
        "ten_dong_vat" => "Hổ",
        "mo_ta" => "The tiger is the largest extant cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar."
    ),
    array(
        "ten_dong_vat" => "Chó",
        "mo_ta" => "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore"
    ),
    array(
        "ten_dong_vat" => "Khỉ",
        "mo_ta" => "Monkey is a common name that may refer to groups or species of mammals, in part, the simians of infraorder Simiiformes. The term is applied descriptively to groups of primates, such as families of New World monkeys and Old World monkeys."
    ),
);

$id_dong_vat = 0;
if(isset($_GET['id_dong_vat'])){
    $id_dong_vat = $_GET['id_dong_vat'];
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
        //echo $_GET['id_dong_vat'];
        ?>
        
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div class="title_block">
                Danh Sách Động Vật
            </div>
            <div class="danh_sach_chon_dong_vat">
                <?php
                foreach($mang_dong_vat as $key => $dong_vat){
                    ?>
                    <div class="ten_dong_vat">
                        <a href="?id_dong_vat=<?php echo $key; ?>">
                            <?php
                            echo $dong_vat['ten_dong_vat'];
                            ?>
                        </a>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>

        
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <div class="title_block">
                Thông Tin Động Vật
            </div>
            <div class="mieu_ta">
                <?php
                echo $mang_dong_vat[$id_dong_vat]['mo_ta'];
                ?>
            </div>
        </div>
        
        
    </div>
</body>
</html>