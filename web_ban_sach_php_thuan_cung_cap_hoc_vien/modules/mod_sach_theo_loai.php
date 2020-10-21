<?php
$so_luong_sach_theo_loai = $xl_sach->dem_so_sach_theo_loai($_GET["loai_sach"]);

include_once("libraries/xl_loai_sach.php");
$xl_loai_sach = new xl_loai_sach();
$thong_tin_loai_sach = $xl_loai_sach->thong_tin_loai_sach_theo_id($_GET["loai_sach"]);

if($so_luong_sach_theo_loai->so_sach >= 1)
{
	$so_luong_hien_thi = 8;
	$so_trang = ((int)($so_luong_sach_theo_loai->so_sach/$so_luong_hien_thi) + 1);
	if($_GET["page"])
	{
		$trang_hien_tai = $_GET["page"];
	}
	else
	{
		$trang_hien_tai = 1;
	}

	$danh_sach_sach_theo_loai = $xl_sach->danh_sach_sach_theo_loai($_GET["loai_sach"], ($trang_hien_tai - 1) * $so_luong_hien_thi, $so_luong_hien_thi);
?>
<section class="ds_sp_noi_bat">
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<div class="title_module">
			<?php echo $thong_tin_loai_sach->ten_loai_sach; ?>
		</div>
		<?php
		for($i = 0; $i < count($danh_sach_sach_theo_loai); $i++)
		{
		?>
		<div class="col-sm-6 col-md-3 col-lg-3">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 item_sp_noi_bat">
				<a href="chi_tiet_sach.php?id_sach=<?php echo $danh_sach_sach_theo_loai[$i]->id; ?>">
					<div class="hinh_sach">
						<img src="images/sach/<?php echo $danh_sach_sach_theo_loai[$i]->hinh; ?>" />
					</div>
					<div class="thong_tin_tom_tat_sach">
						<div class="ten_sach"><?php echo $danh_sach_sach_theo_loai[$i]->ten_sach; ?></div>
						<div class="tac_gia"><?php echo $danh_sach_sach_theo_loai[$i]->ten_tac_gia; ?></div>
						<div class="don_gia_ban"><?php echo number_format($danh_sach_sach_theo_loai[$i]->don_gia,0,",","."); ?> ₫</div>
						<div class="don_gia_bia"><?php if($ds_sach_moi[$i]->gia_bia) echo number_format($danh_sach_sach_theo_loai[$i]->gia_bia,0,",",".")." ₫";?> </div>
						<a href="them_vao_gio_hang.php?id_sach=<?php echo $danh_sach_sach_theo_loai[$i]->id; ?>"><div class="btn_mua_ngay">Mua Ngay</div></a>
						
					</div>
				</a>
			</div>
		</div>
		<?php
		}
		?>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<?php
			echo $phan_trang->pageList($trang_hien_tai,$so_trang);
			?>
		</div>
	</div>
</section>
<?php
}
?>