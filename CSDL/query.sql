/* bai tap 1.1 */
SELECT ten_nha_xuat_ban, dia_chi, dien_thoai
FROM bs_nha_xuat_ban;

/* bai tap 1.2 */
SELECT ho_ten, dia_chi, dien_thoai
FROM bs_nguoi_dung;


/* bai tap 1.3 */
SELECT ten_tac_gia, gioi_thieu
FROM bs_tac_gia;

/* bai tap 1.4 */
SELECT ho_ten, email, ngay_sinh, dia_chi, dien_thoai
FROM bs_nguoi_dung
ORDER BY ho_ten ASC;

/* bai tap 1.5 */
SELECT ten_sach, sku, gioi_thieu, kich_thuoc, trong_luong, don_gia, gia_bia
FROM bs_sach
ORDER BY don_gia DESC, gia_bia DESC;


/* bai tap 1.6 */
SELECT ten_sach, sku, gioi_thieu, kich_thuoc, trong_luong, don_gia, gia_bia
FROM bs_sach
WHERE ten_sach LIKE 'Series%';

/* bai tap 1.7 */
SELECT id, tieu_de_tin, noi_dung_tom_tat, noi_dung_chi_tiet, hinh_dai_dien, trang_thai
FROM bs_tin_tuc
WHERE hinh_dai_dien LIKE '%.jpg';

/* bai tap 1.8 */
SELECT *
FROM bs_sach
WHERE ten_sach LIKE '%Tái bản%';