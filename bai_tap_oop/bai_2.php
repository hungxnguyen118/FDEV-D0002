<?php
class image{
    private $title, $src, $alt, $width, $height,$border,$align;
    function image($title, $src, $alt, $width, $height,$border,$align){
        $this->title=$title;
        $this->src=$src;
        $this->alt=$alt;
        $this->width=$width;
        $this->height=$height;
        $this->border=$border;
        $this->align=$align;
    }
    function title(){
        return $this->title;
    }
    function src(){
        return $this->src;
    }
    function alt(){
        return $this->alt;
    }
    function width(){
        return $this->width;
    }
    function height(){
        return $this->height;
    } function border(){
        return $this->border;
    }
    function align(){
        return $this->align;
    }

    function hien_thi_hinh_anh(){
        echo "<h2 style='text-align:center'>".$this->title."</h2>";
        echo "<img title='".$this->alt."' src='".$this->src."' alt='".$this->alt."'"." style='"."width:".$this->width. "px;height:".$this->height."px;border:".$this->border."px solid black;float:".$this->align."'>";    
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
    <form action="" method="post" class="form-horizontal" role="form">
            <div class="form-group">
                <legend>HIỂN THỊ HÌNH ẢNH</legend>
            </div>
            <div class="form-group">
                    <div class="col-sm-2">
                        Tiêu đề:
                    </div>
                    <div class="col-sm-10 col-sm-offset-2">
                        
                        <input type="text" name="title" id="input" class="form-control" value="<?php if(isset($_POST['title'])) echo $_POST['title']?>" required="required">
                        
                    </div>
            </div>
            <div class="form-group">
                    <div class="col-sm-2">
                        Đường dẫn hình:
                    </div>
                    <div class="col-sm-10 col-sm-offset-2">
                        
                        <input type="text" name="src" id="input" class="form-control" value="<?php if(isset($_POST['src'])) echo $_POST['src']?>" required="required">
                        
                    </div>
            </div>
            <div class="form-group">
                    <div class="col-sm-2">
                        Dòng ghi chú:
                    </div>
                    <div class="col-sm-10 col-sm-offset-2">
                        
                        <input type="text" name="alt" id="input" class="form-control" value="<?php if(isset($_POST['alt'])) echo $_POST['alt']?>" required="required">
                        
                    </div>
            </div>
            <div class="form-group">
                    <div class="col-sm-2">
                       Chiều rộng
                    </div>
                    <div class="col-sm-4 ">
                        
                        <input type="number" min="0" name="width" id="input" class="form-control" value="<?php if(isset($_POST['width'])) echo $_POST['width']?>" required="required">
                        
                    </div>
                    <div class="col-sm-2">
                       Chiều cao
                    </div>
                    <div class="col-sm-4 ">
                        
                        <input type="number" min="0" name="height" id="input" class="form-control" value="<?php if(isset($_POST['height'])) echo $_POST['height']?>" required="required">
                        
                    </div>
            </div>
            <div class="form-group">
                    <div class="col-sm-2">
                       Đường viền
                    </div>
                    <div class="col-sm-4 ">
                        
                        <input type="number" min="0" name="border" id="input" class="form-control" value="<?php if(isset($_POST['border'])) echo $_POST['border']?>" required="required">
                        
                    </div>
                    <div class="col-sm-2">
                       Canh lề
                    </div>
                    <div class="col-sm-4 ">
                    <label for="align"></label>
                    <select id="align" name="align">
                        <option value="left">Canh trái</option>
                        <option value="right">Canh phải</option>
                    </select>
                                            
                    </div>
            </div>
            
    
            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Hiển thị</button>
                </div>
            </div>
    </form>
    <div  >
    
    <?php
        if(isset($_POST['title'])&&isset($_POST['src'])&&isset($_POST['alt'])&&isset($_POST['width'])&&isset($_POST['height'])&&isset($_POST['border'])&&isset($_POST['align'])){
            $hinh=new image($_POST['title'],$_POST['src'],$_POST['alt'],$_POST['width'],$_POST['height'],$_POST['border'],$_POST['align']);
            $hinh->hien_thi_hinh_anh();
        }
    ?>
    
    </div>
    </div>
    
    
</body>
</html>