<?php
echo '<pre>',print_r($_FILES),'</pre>';

if($_FILES['hinh']){
    foreach($_FILES['hinh']['name'] as $key => $value){
        $thong_tin_hinh = './images/' . $_FILES['hinh']['name'][$key];
        move_uploaded_file($_FILES['hinh']['tmp_name'][$key], $thong_tin_hinh);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
    .list_img, .danh_sach_hinh_anh {
        display: flex;
    }
    .list_img img, .danh_sach_hinh_anh img {
        width: 160px;
    }
    </style>

    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>
    <div class="container">

        <div class="danh_sach_hinh_anh">
        <?php
            $dir = opendir('images');
            while(($file = readdir($dir)) !== false){
                //echo $file . '</br>';
                if($file != '.' && $file != '..'){
                    ?>
                    <img src="./images/<?php echo $file; ?>" alt="">
                    <?php
                }
            }
            closedir($dir);
        ?>
        </div>

        <form action="" method="POST" class="form-horizontal" role="form" enctype="multipart/form-data">
                <div class="form-group">
                    <legend>Upload nhiều file</legend>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Hình
                    </div>
                    <div class="col-sm-10">
                        <input type="file" name="hinh[]" id="hinh" class="form-control" multiple="true">
                        <div class="list_img"></div>
                    </div>
                </div>
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
        </form>
        <script>
        $(function(){
            $('#hinh').change(function(){
                var input = this;
                var url = $(this).val();

                console.log(input.files);

                for(var i = 0; i < input.files.length; i++){
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        console.log(e.target);
                        var img = document.createElement('img');
                        img.src = e.target.result;
                        $(".list_img").append(img);
                    }

                    reader.readAsDataURL(input.files[i]);
                }
            });

        });
        </script>
    </div>
</body>
</html>