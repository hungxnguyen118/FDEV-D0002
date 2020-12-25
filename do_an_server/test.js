var mang_user = [
    'Đăng Phạm',
    'Thư Huỳnh',
    'Luân Trần',
    'Phú Nguyễn',
    'Lộc Phùng',
    'Sơn Nguyễn',
    'Luân Nguyễn',
    'Xuân Nguyễn',
    'Đạt Ngụy',
    'Tài Mạch',
    'Vy Lê',
    'Khoa Trần'
];

var so_lan_chay = mang_user.length - 1;
var so_lan_da_chay = 0;


//console.log(element);

var mang_nhom = [];

function process_random(vi_tri){
    var element = document.getElementById('result' + vi_tri);

    var random_step = Math.round(Math.random() * 50);

    // for(var i = 0; i < mang_user.length; i++){

    // }

    console.log(random_step);
    var i = 0;
    // while(i < random_step){
    //     console.log(mang_user[i % mang_user.length]);
    //     element.innerHTML = mang_user[i % mang_user.length];
    //     i++;
    // }

    var run_effect = setInterval(() => {
        //console.log(mang_user[i % mang_user.length]);
        element.innerHTML = mang_user[i % mang_user.length];

        if(i >= random_step){
            clearInterval(run_effect);
            
        }
        
        i++;
    }, 80);

    setTimeout(() => {
        console.log('hốt vô mảng ' + mang_user[(i - 1) % mang_user.length]);

        element.innerHTML = mang_user[(i - 1) % mang_user.length];

        mang_nhom.push(mang_user[(i - 1) % mang_user.length]);

        mang_user.splice((i - 1) % mang_user.length, 1);

        console.log(mang_user, mang_nhom);
    }, 100 * random_step);
}


//for(var j = 0; j < so_lan_chay; j++){
    // process_random();
//}

function chay_random(){
    
    process_random(so_lan_da_chay);

    so_lan_da_chay++;
}

// var new_mang = mang_user.sort((a,b) => {
//     return Math.random() - 0.5;
// });