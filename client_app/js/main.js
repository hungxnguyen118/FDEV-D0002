//console.log(window.location.hash);

// if(window.location.hash == '#ds-sach'){
    
// }
// else{
//     console.log('page not found');
// }

function create_item_sach(thong_tin_sach){
    string_html = `
    <div class="item_sach col-xs-4">
        <div class="ten_sach" style="height: 60px;">${thong_tin_sach.ten_sach}</div>
        <div class="image_sach">
            <img src="images/sach/${thong_tin_sach.hinh}" alt="" style="height: 250px;">
        </div>
    </div>
    `;
    return string_html;
}

var current_page = 0;
var item_on_page = 9;
var mang_sach = [];

$(() => {
    console.log('đã load trang');
    
    $.get('http://localhost:8181/test_php/do_an_nho_nho/api/sach/index.php')
    .done((result) => {
        //console.log(data);
        mang_sach = result.data;

        html_for_list_item = '';
        for(var i = 0; i < item_on_page; i++){
            html_for_list_item += create_item_sach(mang_sach[i]);
        }
        $(".ds_sach").append(html_for_list_item);
    })
    .fail((err) => {
        //console.log(err);
    })

    $(window).scroll((event) => {
        //console.log(window.scrollY, window.innerHeight, $(".end_of_page").offset().top);
        if(window.scrollY + window.innerHeight > $(".end_of_page").offset().top){
            current_page++;

            html_for_list_item = '';
            for(var i = item_on_page * current_page; i < item_on_page * (current_page + 1); i++){
                html_for_list_item += create_item_sach(mang_sach[i]);
            }
            $(".ds_sach").append(html_for_list_item);
        }
    })
})