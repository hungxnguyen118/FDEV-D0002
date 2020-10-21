<?php
include_once('libraries/xl_loai_sach.php');
$xl_loai_sach = new xl_loai_sach();
$ds_loai_cha = $xl_loai_sach->danh_sach_loai_sach_cha();
//echo "<pre>",print_r($ds_loai_cha),"</pre>";

//xử lý lấy số lượng giỏ hàng
$mang_gio_hang = $_SESSION["gio_hang"];
if($mang_gio_hang)
{
  foreach($mang_gio_hang as $mat_hang)
  {
    $tong_so_luong += $mat_hang->so_luong;
  }
}

?>
<nav class="navbar navbar-inverse" style="border-radius: 0px;">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="index.php" style="padding: 0px 15px 0 15px; margin: 0;">
      	<div><img src="images/logo.png" style="height: 50px;" alt="" /> Bookstore</div>
      </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.php">Trang chủ</a></li>
        <li class="dropdown">
        	<a href="#" data-toggle="dropdown" class="dropdown-toggle">Danh mục sách</a>
        	<ul class="dropdown-menu" id="menu1">
        		<?php
        		foreach($ds_loai_cha as $loai_cha)
        		{
        		?>
        		<li <?php if($loai_cha->ds_con) echo 'class="dropdown-submenu"'; ?>>
        			<a href="sach_theo_loai.php?loai_sach=<?php echo $loai_cha->id; ?>"><?php echo $loai_cha->ten_loai_sach; ?></a>
        			<?php
        			if($loai_cha->ds_con)
        			{
      				?>
      				<ul class="dropdown-menu hidden-xs hidden-sm">
      					<?php
      					foreach($loai_cha->ds_con as $loai_con)
      					{
      					?>
    						<li><a href="sach_theo_loai.php?loai_sach=<?php echo $loai_con->id; ?>"><?php echo $loai_con->ten_loai_sach; ?></a></li>
    						<?php
    						}
    						?>
    					</ul>
      				<?php
        			}
        			?>
        		</li>
        		<?php
        		}
        		?>
        	</ul>
        </li>
        <li><a href="tin_tuc_blog.php">Tin tức</a></li> 
        <li><a href="lien_he.php">Liên hệ</a></li> 
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="trang_gio_hang.php">
            <span class="glyphicon glyphicon-shopping-cart"></span>
            <?php
            if($tong_so_luong)
            {
            ?>
            <div class="so_luong_gio_hang"><?php echo $tong_so_luong;?></div>
            <?php
            }
            ?>
          </a>
        </li>
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Đăng nhập</a></li>
      </ul>
    </div>
  </div>
</nav>