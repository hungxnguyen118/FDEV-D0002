<?php
session_start();
include_once('libraries/xl_sach.php');

$xl_sach = new xl_sach();

if($_GET["id_sach"])
{
	if($_SESSION["gio_hang"])
	{
		$mang_gio_hang = $_SESSION["gio_hang"];
	}
	else
	{
		$mang_gio_hang = array();
	}


	$id_sach = $_GET["id_sach"];

	//kiểm tra sách có tồn tại trong CSDL hay không?
	$thong_tin_sach_add_gio_hang = $xl_sach->thong_tin_sach_theo_id($id_sach);
	//print_r($thong_tin_sach_add_gio_hang);
	if($thong_tin_sach_add_gio_hang)
	{

		foreach($mang_gio_hang as $mat_hang)
		{
			if($mat_hang->id == $thong_tin_sach_add_gio_hang->id)
			{
				$kiem_tra = 1;
				$mat_hang->so_luong += 1;
			}
		}

		if(!$kiem_tra)
		{
			$thong_tin_sach_add_gio_hang->so_luong = 1;
			$mang_gio_hang[] = $thong_tin_sach_add_gio_hang;
		}

		$_SESSION["gio_hang"] = $mang_gio_hang;

		header("location: ". $_SERVER["HTTP_REFERER"]);
	}
	else
	{
		header("location: index.php");
	}
}
else
{
	header("location: index.php");
}
?>