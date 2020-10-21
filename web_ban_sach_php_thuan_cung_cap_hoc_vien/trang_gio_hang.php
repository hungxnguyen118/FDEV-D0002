<?php
session_start();
include_once('libraries/xl_sach.php');
//print_r($_SESSION["gio_hang"]);
$xl_sach = new xl_sach();

//echo "<pre>",print_r($ds_sach_ban_chay_nhat),"</pre>";

//danh sach gio hang
if($_SESSION["gio_hang"])
{
	$mang_gio_hang = $_SESSION["gio_hang"];
}
else
{
	echo "<script>alert('Hiện giỏ hàng của bạn đang rỗng!')</script>";
	echo "<script>window.location = '".$_SERVER["HTTP_REFERER"]."'</script>";
}

if($_POST)
{
	print_r($_POST);

	for($i = 0; $i < count($mang_gio_hang); $i++)
	{
		$mang_gio_hang[$i]->so_luong = $_POST["so_luong"][$i];
	}

	$_SESSION["gio_hang"] = $mang_gio_hang;
}
else if($_GET["task"] == "huy_gio_hang")
{
	unset($_SESSION["gio_hang"]);
	header("location: index.php");
}

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
		<div class="table-responsive">
			<form action="" method="post" name="form_gio_hang">
				<table class="table table-hover gio_hang">
					<thead>
						<tr>
							<th>Mã sách</th>
							<th>Tên sách</th>
							<th>Đơn giá</th>
							<th>Số lượng</th>
							<th>Thành tiền</th>
						</tr>
					</thead>
					<tbody>
						<?php
						foreach($mang_gio_hang as $mat_hang)
						{
							$tong_tien += $mat_hang->so_luong * $mat_hang->don_gia;
						?>
						<tr>
							<td><?php echo $mat_hang->sku; ?></td>
							<td style="min-width: 100px;"><a href="chi_tiet_sach.php?id_sach=<?php echo $mat_hang->id; ?>"><?php echo $mat_hang->ten_sach; ?></a></td>
							<td><?php echo number_format($mat_hang->don_gia,0,",","."); ?></td>
							<td><input type="number" name="so_luong[]" value="<?php echo $mat_hang->so_luong; ?>" /></td>
							<td style="text-align: right;"><?php echo number_format($mat_hang->so_luong * $mat_hang->don_gia,0,",","."); ?> ₫</td>
						</tr>
						<?php
						}
						?>
						<tr class="tong_tien">
							<td colspan="4" style="text-align: right;">Tổng cộng: </td>
							<td style="text-align: right;"><?php echo number_format($tong_tien,0,",","."); ?> ₫</td>
						</tr>
						<tr>
							<td colspan="5">
								<div class="ds_nut_dieu_khien">
									<button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-edit"></span> Cập nhật</button>
									<a href="trang_gio_hang.php?task=huy_gio_hang"><div class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span> Hủy giỏ hàng</div></a>
									<a href="trang_thanh_toan.php"><div class="btn btn-primary"><span class="glyphicon glyphicon-credit-card"></span> Thanh toán</div></a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
		
	</div>
	
	<!-- footer -->
	<?php include_once("widgets/footer.php"); ?>
	<!-- END footer -->
</body>
</html>