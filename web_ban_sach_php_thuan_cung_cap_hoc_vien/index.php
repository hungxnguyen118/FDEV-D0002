<?php
session_start();
include_once('libraries/xl_sach.php');
//print_r($_SESSION["gio_hang"]);
$xl_sach = new xl_sach();

//echo "<pre>",print_r($ds_sach_ban_chay_nhat),"</pre>";
?>
<html>
<head>
	<?php include_once("widgets/head.php"); ?>
</head>
<body>
	<div class="container-fluid">
		<!-- slide banner -->
		<?php include_once('modules/mod_slide_banner.php'); ?>
		<!-- END slide banner -->

		<!-- menu bar -->
		<?php include_once('modules/mod_menu.php'); ?>
		<!-- END menu bar -->

		<!-- list sách bán chạy nhất -->
		<?php include_once('modules/mod_san_pham_ban_chay.php'); ?>
		<!-- END list sách bán chạy nhất -->

		<!-- list ds sản phẩm nổi bật -->
		<?php include_once('modules/mod_san_pham_noi_bat.php'); ?>
		<!-- END list ds sản phẩm nổi bật -->

		<!-- list sách mới -->
		<?php include_once('modules/mod_sach_moi.php'); ?>
		<!-- END list sách mới -->

	</div>
	
	<!-- footer -->
	<?php include_once("widgets/footer.php"); ?>
	<!-- END footer -->
</body>
</html>