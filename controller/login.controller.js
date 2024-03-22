exports.Login = async (req, res, next) => {
    // let msg = '';
    // if (req.method == 'POST') {
    //     try {
    //         let objU = await Model.userModel.findOne({ userName: req.body.userName });

    //         console.log(objU);
    //         if (objU != null) {
    //             // tồn tại username ==> kiểm tra passwd
    //             if (objU.userPass == req.body.userPass) {
    //                 // đúng thông tin tài khoản ==> lưu vào session
    //                 if (objU.userPms.toString() === 'admin') {
    //                     req.session.userLogin = objU;
    //                     return res.redirect("/");
    //                     // chuyển trang về trang quản trị
    //                 } else {
    //                     msg = 'không phải admin'
    //                 }

    //             } else {
    //                 msg = 'Sai password';
    //             }


    //         } else {
    //             msg = 'Không tồn tại tài khoản: ' + req.body.userName;

    //         }
    //         console.log(msg)


    //     } catch (error) {
    //         msg = error.message;
    //     }
    // }


    res.render('home/home')
}