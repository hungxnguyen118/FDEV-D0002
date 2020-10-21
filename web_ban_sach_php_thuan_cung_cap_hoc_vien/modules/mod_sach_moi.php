<?php
$ds_sach_moi = $xl_sach->danh_sach_sach_moi();
?>
<section class="ds_sp_noi_bat">
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<div class="title_module">
			Sách mới
		</div>
		<?php
		for($i = 0; $i < count($ds_sach_moi); $i++)
		{
		?>
		<div class="col-sm-6 col-md-3 col-lg-3">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 item_sp_noi_bat">
				<a href="chi_tiet_sach.php?id_sach=<?php echo $ds_sach_moi[$i]->id; ?>">
					<div class="hinh_sach">
						<img src="images/sach/<?php echo $ds_sach_moi[$i]->hinh; ?>" />
					</div>
					<div class="thong_tin_tom_tat_sach">
						<div class="ten_sach"><?php echo $ds_sach_moi[$i]->ten_sach; ?></div>
						<div class="tac_gia"><?php echo $ds_sach_moi[$i]->ten_tac_gia; ?></div>
						<div class="don_gia_ban"><?php echo number_format($ds_sach_moi[$i]->don_gia,0,",","."); ?> ₫</div>
						<div class="don_gia_bia"><?php if($ds_sach_moi[$i]->gia_bia) echo number_format($ds_sach_moi[$i]->gia_bia,0,",",".")." ₫";?> </div>
						<a href="them_vao_gio_hang.php?id_sach=<?php echo $ds_sach_moi[$i]->id; ?>"><div class="btn_mua_ngay">Mua Ngay</div></a>
					</div>
				</a>
			</div>
		</div>
		<?php
		}
		?>
	</div>
</section>