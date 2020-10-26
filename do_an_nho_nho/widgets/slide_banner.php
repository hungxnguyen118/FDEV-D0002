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