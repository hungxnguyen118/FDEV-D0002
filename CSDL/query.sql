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

http://192.168.5.147:8181/web_ban_sach_php_thuan/


/* bai tap 1.11 */
SELECT *
FROM bs_sach
WHERE trong_luong > 500
OR gia_bia > 150000;


/* bai tap 1.12 */
SELECT *
FROM bs_sach
WHERE don_gia >= 500000
AND don_gia <= 2500000;


/* bai tap 1.12 */
SELECT *
FROM bs_sach
WHERE (id_loai_sach = 56 OR id_loai_sach = 90 OR id_loai_sach = 92)
AND trong_luong >= 300;

/* bai tap 1.14 */
SELECT *
FROM bs_sach
WHERE gioi_thieu LIKE '%huyền bí%' OR gioi_thieu LIKE '%du lịch%';

/* bai tap 1.15 */
SELECT *
FROM bs_sach
WHERE trong_luong IN (280, 350, 380);


/* bai tap 1.15 */
SELECT *
FROM bs_sach
ORDER BY don_gia DESC
LIMIT 10;

SELECT MIN(don_gia)
FROM (
    SELECT *
    FROM bs_sach
    ORDER BY don_gia DESC
	LIMIT 10
) temp_table

/* bai tap 1.19 */
SELECT *
FROM bs_nha_xuat_ban
WHERE ten_nha_xuat_ban IS NOT NULL
AND dia_chi IS NOT NULL
AND dien_thoai IS NOT NULL
AND email IS NOT NULL;


/* bai tap 2.1 */
SELECT nxb.*, count(s.id) as so_sach
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s
ON s.id_nha_xuat_ban = nxb.id
GROUP BY nxb.id


/* bai tap 2.3 */
SELECT ten_nha_xuat_ban, dien_thoai, AVG(don_gia) as don_gia_trung_binh
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s
ON s.id_nha_xuat_ban = nxb.id
GROUP BY nxb.ten_nha_xuat_ban;


/* bai tap 2.5 */
SELECT s.*, ngay_dat, SUM(so_luong) as so_luong_ban
FROM bs_chi_tiet_don_hang ctdh
JOIN bs_sach s
ON s.id = ctdh.id_sach
JOIN bs_don_hang dh
ON dh.id = ctdh.id_don_hang
WHERE YEAR(ngay_dat) = 2016
GROUP BY s.id
ORDER BY so_luong_ban DESC
LIMIT 10;


/* bai tap 2.5 */
SELECT s.*, SUM(thanh_tien) as doanh_thu
FROM bs_chi_tiet_don_hang ctdh
JOIN bs_sach s
ON s.id = ctdh.id_sach
JOIN bs_don_hang dh
ON dh.id = ctdh.id_don_hang
GROUP BY s.id
ORDER BY doanh_thu DESC
LIMIT 10;


/* bai tap 2.13 */
SELECT *, count(s.id) as so_luong_sach
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s
ON s.id_nha_xuat_ban = nxb.id
WHERE dia_chi LIKE '%Hà Nội%'
GROUP BY nxb.id
HAVING so_luong_sach > 5


/* bai tap 3.1 */
SELECT *
FROM bs_nha_xuat_ban
WHERE id NOT IN (
    SELECT DISTINCT nxb.id
    FROM bs_nha_xuat_ban nxb
    JOIN bs_sach s
    ON s.id_nha_xuat_ban = nxb.id
    WHERE s.trong_luong IN (280, 350, 300)
)


/* bai tap 3.2 */
SELECT *
FROM bs_nguoi_dung
WHERE id NOT IN (
    SELECT DISTINCT nd.id
    FROM bs_nguoi_dung nd
    JOIN bs_don_hang dh
    ON dh.id_nguoi_dung = nd.id
)


SELECT DISTINCT *
FROM bs_nguoi_dung nd
LEFT JOIN bs_don_hang dh
ON nd.id = dh.id_nguoi_dung
WHERE dh.id IS NULL

/* bai tap 3.3 */
SELECT nd.*, SUM(tong_tien) as tong_tien_theo_nd
FROM bs_nguoi_dung nd
JOIN bs_don_hang dh
ON dh.id_nguoi_dung = nd.id
GROUP BY nd.id
HAVING tong_tien_theo_nd = (
    SELECT SUM(tong_tien) as tong_tien_theo_nd
    FROM bs_nguoi_dung nd
    JOIN bs_don_hang dh
    ON dh.id_nguoi_dung = nd.id
    GROUP BY nd.id
    ORDER BY tong_tien_theo_nd DESC
    LIMIT 1
)


/* bai tap 3.4 */
SELECT ls.*, COUNT(s.id)
FROM bs_sach s
JOIN bs_loai_sach ls
ON ls.id = s.id_loai_sach
WHERE id_loai_cha = (
    SELECT id
    FROM bs_loai_sach
    WHERE ten_loai_sach = 'Sách Văn Học - Tiểu Thuyết'
)
GROUP BY ls.id



/* bai tap 3.7 */
SELECT *
FROM bs_sach
WHERE id_loai_sach = (
    SELECT id
    FROM (
        SELECT ls.id, count(s.id) as so_luong_sach
        FROM bs_loai_sach ls
        JOIN bs_sach s
        ON s.id_loai_sach  = ls.id
        GROUP BY ls.id
        ORDER BY so_luong_sach DESC
        LIMIT 1
    ) temp_table
);


/* bai tap 3.8 */
SELECT *
FROM bs_sach
WHERE id_tac_gia = (
    SELECT id
    FROM (
        SELECT tg.id, count(nxb.id) as so_luong_quan_tam
        FROM bs_nha_xuat_ban nxb
        JOIn bs_sach s
        ON s.id_Nha_xuat_ban = nxb.id
        JOIN bs_tac_gia tg
        ON tg.id = s.id_tac_gia
        GROUP BY tg.id
        ORDER BY so_luong_quan_tam DESC
        LIMIT 1
    ) temp_table 
)

/* bai tap 3.9 */
SELECT *
FROM bs_sach
WHERE id_nha_xuat_ban IN (
    SELECT id
    FROM (
        SELECT nxb.id, count(tg.id) as so_luong_tac_gia_duoc_moi
        FROM bs_nha_xuat_ban nxb
        JOIn bs_sach s
        ON s.id_Nha_xuat_ban = nxb.id
        JOIN bs_tac_gia tg
        ON tg.id = s.id_tac_gia
        GROUP BY nxb.id
        ORDER BY so_luong_tac_gia_duoc_moi DESC
        LIMIT 3
    ) temp_table 
)