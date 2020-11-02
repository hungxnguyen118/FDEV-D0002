<?php
include_once('../model/xl_sach.php');

$xl_sach = new xl_sach();

$so_sach_tren_trang = 10;

$trang_hien_tai = (isset($_GET['trang']))?$_GET['trang']:0;

//lay danh sach theo trang

$ds_sach_hien_thi = $xl_sach->ds_sach_phan_trang($trang_hien_tai, $so_sach_tren_trang);

echo '<pre>',print_r($ds_sach_hien_thi),'</pre>';

// $so_luong_sach = count($ds_sach);
// $so_trang = ceil($so_luong_sach/$so_sach_tren_trang);
?>
    <div class="title_page">
        Danh Sách Sách
    </div>
    <?php
    echo $so_trang;
    ?>

    
    <!-- <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên sách</th>
                <th>Đơn giá</th>
                <th>Giá bìa</th>
                <th>Chọn</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach($ds_sach_hien_thi as $item_sach){
            ?>
            <tr>
                <td><?php echo $item_sach->id; ?></td>
                <td><?php echo $item_sach->ten_sach; ?></td>
                <td><?php echo $item_sach->don_gia; ?></td>
                <td><?php echo $item_sach->gia_bia; ?></td>
                <td>
                    <input type="checkbox" name="chon_sach[]" value="<?php echo $item_sach->id; ?>">
                </td>
            </tr>
            <?php
            }
            ?>
        </tbody>
    </table>

    <div class="phan_trang">

        <ul class="pagination">
            <?php
            for($i = 0; $i < $so_trang; $i++){
            ?>
            <li><a href="<?php echo $_SERVER['REQUEST_URI']; ?>&trang=<?php echo $i; ?>"><?php echo $i + 1; ?></a></li>
            <?php
            }
            ?>
        </ul>
        
    </div> -->

    <table id="table_sach" class="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên sách</th>
                <th>Đơn giá</th>
                <th>Giá bìa</th>
                <th>Chọn</th>
            </tr>
        </thead>
        <tbody id="data_show">
        </tbody>
    </table>

    <div id="pagination" class="pagination"></div>
    
    <script>
    // $(document).ready( function () {
    //     $('#table_sach').DataTable();
    // } );

    function function_build_html(data_list){
        var string_html = '';

        for(var i = 0; i < data_list.length; i++){
            string_html += `
            <tr>
                <td>${data_list[i].id}</td>
                <td>${data_list[i].ten_sach}</td>
                <td>${data_list[i].don_gia}</td>
                <td>${data_list[i].gia_bia}</td>
                <td>
                    <input type="checkbox" name="chon_sach[]" value="${data_list[i].gia_bia}">
                </td>
            </tr>
            `
        }

        console.log(string_html);

        $('#data_show').html(string_html);
    }

    $(function() {
        $('#pagination').pagination({
            items: <?php echo $so_luong_sach; ?>,
            itemsOnPage: 10,
            cssStyle: 'light-theme',
            onPageClick: function(pageNumber) {
                console.log(pageNumber - 1);
                // // We need to show and hide `tr`s appropriately.
                // var showFrom = perPage * (pageNumber - 1);
                // var showTo = showFrom + perPage;

                // // We'll first hide everything...
                // items.hide()
                //     // ... and then only show the appropriate rows.
                //     .slice(showFrom, showTo).show();

                $.get('http://localhost:8181/test_php/do_an_nho_nho/admin/api.php?trang=' + (pageNumber - 1))
                    .done((data) => {
                        console.log(JSON.parse(data));

                        function_build_html(JSON.parse(data));
                    })
                    .fail((err) => {
                        console.log(err);
                    })

            }
        });
    });
    </script>
</div>