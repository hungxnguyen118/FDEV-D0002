<?php
$thong_tin_sach = $xl_sach->thong_tin_sach_theo_id($_GET["id_sach"]);


?>
<section class="chi_tiet_sach">
	<div class="col-md-5 col-lg-5">
		<div class="thong_tin_hinh">
			<div class="chi_tiet_hinh">
				<img src="images/sach/<?php echo $thong_tin_sach->hinh; ?>" alt="" title="" />
			</div>
			<?php
			if($thong_tin_sach->doc_thu)
			{
			?>
				<div class="doc_thu_sach" data-toggle="modal" href='#modal-id'>Đọc thử</div>
			<?php
			}
			?>
		</div>
	</div>
	<div class="col-md-7 col-lg-7">
		
	</div>
</section>
<?php
if($thong_tin_sach->doc_thu)
{
	$noi_dung_doc_thu = file_get_contents($thong_tin_sach->doc_thu);
	$mang_duong_dan_doc_thu = explode("/", $thong_tin_sach->doc_thu);
	array_pop($mang_duong_dan_doc_thu);array_pop($mang_duong_dan_doc_thu);

	$duong_dan = implode("/", $mang_duong_dan_doc_thu);
	//echo $duong_dan;
	$noi_dung_doc_thu = str_replace("../", $duong_dan."/", $noi_dung_doc_thu);
	?>
	<div class="modal fade" id="modal-id">
		<div class="modal-dialog ">
			<div class="modal-content">
				<button type="button" class="close dong_doc_thu" data-dismiss="modal">×</button>
				<div class="modal-body sach_doc_thu">
					<?php echo $noi_dung_doc_thu; ?>
				</div>
			</div>
		</div>
	</div>
	<?php
}
?>