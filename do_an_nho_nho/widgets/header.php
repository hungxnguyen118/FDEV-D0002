<?php
include_once('./model/xl_loai_sach.php');

$xl_loai_sach = new xl_loai_sach();
$ds_loai_sach_cha = $xl_loai_sach->ds_loai_sach_theo_id_cha();
?>

<nav class="navbar navbar-default navbar-inverse" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Title</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link</a></li>
            <li class="dropdown">
                <div class="dropdown_button">Dropdown <b class="caret"></b></div>
                <ul class="dropdown-menu">
                    
                    <?php
                    foreach($ds_loai_sach_cha as $loai_sach){

                        $ds_con = $xl_loai_sach->ds_loai_sach_theo_id_cha($loai_sach->id);

                        //print_r($ds_con);
                        if(count($ds_con) > 0){
                            ?>
                            <li class="dropdown-submenu">
                                <a href="#"><?php echo $loai_sach->ten_loai_sach; ?></a>
                                <ul class="dropdown-menu hidden-xs hidden-sm">
                                    <?php
                                    foreach($ds_con as $loai_sach_con){
                                        ?>
                                        <li>
                                            <a href=""><?php echo $loai_sach_con->ten_loai_sach; ?></a>
                                        </li>
                                        <?php
                                    }
                                    ?>
                                </ul>
                            </li>
                            <?php
                        }
                        else{
                            ?>
                            <li><a href="#"><?php echo $loai_sach->ten_loai_sach; ?></a></li>
                            <?php
                        }
                    }
                    ?>
                    
                </ul>
            </li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            
        </ul>
    </div><!-- /.navbar-collapse -->
</nav>
<script>
    $(function(){
        $('.dropdown_button').click(function(){
            //console.log('click');
            console.log($(this).find('~.dropdown-menu'));

            if($(this).find('~.dropdown-menu').hasClass('active')){
                $(this).removeClass('active');
                $(this).find('~.dropdown-menu').removeClass('active');
            }
            else{
                $(this).addClass('active');
                $(this).find('~.dropdown-menu').addClass('active');
            }
        })
    })
</script>