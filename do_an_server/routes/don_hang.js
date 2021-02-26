var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'shop_ban_hang'
});


var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'hungbookstoreonline@gmail.com',
      pass: '1qazXSw2'
    }
}));


router.post('/', function(req, res, next) {

    console.log(req.body);

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!

        var tong_tien = 0;

        req.body.chi_tiet_don_hang.forEach(item_gio_hang => {
            tong_tien += item_gio_hang.thanh_tien
        });
       
        // Use the connection
        connection.query(`INSERT INTO hoa_don (ma, ho_ten, gioi_tinh, ngay_sinh, email, dia_chi, dien_thoai, ngay_tao, trang_thai, ghi_chu, tong_tien, ho_ten_nguoi_nhan, dia_chi_nguoi_nhan, dien_thoai_nguoi_nhan)
            VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
            , [
                req.body.ho_ten,
                '1',
                '2020-01-01',
                req.body.email,
                req.body.dia_chi_nguoi_nhan,
                req.body.dien_thoai_nguoi_nhan,
                '2020-02-26 00:00:00',
                1,
                '',
                tong_tien,
                req.body.ho_ten,
                req.body.dia_chi_nguoi_nhan,
                req.body.dien_thoai_nguoi_nhan,
            ]
            , function (error, results, fields) {
            // When done with the connection, release it.

                
            
                // Handle error after the release.
                if (error) throw error;
            
                if(results.insertId){

                    var html_string = '';
                    
                    req.body.chi_tiet_don_hang.forEach((item_gio_hang, index) => {

                        html_string += `
                            <div>
                                ${item_gio_hang.ma_san_pham},
                                ${item_gio_hang.ten_san_pham},
                                ${item_gio_hang.so_luong},
                                ${item_gio_hang.don_gia},
                                ${item_gio_hang.thanh_tien}
                            </div>
                        `

                        connection.query(
                            `INSERT INTO chi_tiet_hoa_don (ma, ma_hoa_don, ma_san_pham, ten_san_pham, so_luong, don_gia, thanh_tien) 
                            VALUES (NULL, ?, ?, ?, ?, ?, ?);`,
                            [
                                results.insertId,
                                item_gio_hang.ma_san_pham,
                                item_gio_hang.ten_san_pham,
                                item_gio_hang.so_luong,
                                item_gio_hang.don_gia,
                                item_gio_hang.thanh_tien
                            ],
                            function (err_child, results_child, fields) {
                                if (err_child){
                                    res.json({
                                        error: true,
                                        error_message: "Thêm Đơn Hàng Thất Bại"
                                    });

                                    throw err_child;
                                }

                                if(index == req.body.chi_tiet_don_hang.length - 1){

                                    var mailOptions = {
                                        from: 'hungbookstoreonline@gmail.com',
                                        to: req.body.email,
                                        subject: 'Cám ơn bạn đã đặt hàng tại Shop Online',
                                        //text: html_string
                                        html: html_string
                                    };

                                    transporter.sendMail(mailOptions, function(error, info){
                                        if (error) {
                                          console.log(error);
                                        } else {
                                          console.log('Email sent: ' + info.response);
                                        }
                                    });  

                                    connection.release();

                                    res.json(results);

                                }
                            }
                        )
                        
                    });

                }
                //res.json(results);
            }
        );
    });

    //res.json([]);
    
});


module.exports = router;
