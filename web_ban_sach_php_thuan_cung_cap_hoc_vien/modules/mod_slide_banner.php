<?php
include_once('libraries/xl_slide_banner.php');
$xl_slide_banner = new xl_slide_banner();
$ds_slide = $xl_slide_banner->danh_sach_slide();

?>
<div id="carousel-id" class="carousel slide" data-ride="carousel" style="margin-bottom: 0;">
	<ol class="carousel-indicators">
		<?php
		for($i = 0; $i < count($ds_slide); $i++)
		{
		?>
			<li data-target="#carousel-id" data-slide-to="<?php echo $i; ?>" class="<?php if($i == 0) echo "active"; ?>"></li>
		<?php
		}
		?>
	</ol>
	<div class="carousel-inner">
		<?php
		for($i = 0; $i < count($ds_slide); $i++)
		{
		?>
		<div class="item <?php if($i == 0) echo "active"; ?>">
			<img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src="images/slide_banner/<?php echo $ds_slide[$i]->hinh; ?>">
			<!--div class="container">
				<div class="carousel-caption">
					<h1>Example headline.</h1>
					<p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
					<p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
				</div>
			</div-->
		</div>
		<?php
		}
		?>
	</div>
	<a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
	<a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
</div>