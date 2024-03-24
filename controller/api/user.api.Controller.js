var md = require('../../models/user.model');
const bcrypt = require('bcrypt');
var objReturn = {
    status: 1,
    msg: 'OK'
}

exports.listUser = async (req, res, next) => {
    try {
        const list = await md.userModel.find();

        if (list.length > 0)
            objReturn.data = list;
        else {
            objReturn.status = 0;
            objReturn.msg = 'Không có dữ liệu phù hợp';
        }
        res.json(objReturn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 0, msg: error.message });
    }
} 
exports.getTopUsers = async (req, res, next) => {
    try {
        // Sử dụng phương thức sort và limit để lấy ra 10 người dùng có số điểm cao nhất
        const topUsers = await md.userModel.find().sort({ point: -1 }).limit(10);
        if (topUsers.length === 0) {
            return res.status(404).json({ message: 'Không có người dùng nào' });
        }
        res.json(topUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.oneUser = async (req, res, next) => {
    try {
        const user = await md.userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

exports.addUser = async (req, res, next) => {
    try {
        const { userName, userPass , userPms } = req.body;
       
        const newUser = new md.userModel({
            avata : "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
            userName,
            userPass: userPass,
            adressWallet :"",
            point :0,
            pointComplete :0,
            userPms
        });
        await newUser.save();
        objReturn.msg = 'Thêm thành công';
        res.json(objReturn);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.userLogin = async (req, res, next) => {
    try {
        const { userName, userPass } = req.body;
        const user = await md.userModel.findOne({ userName : userName , userPass :  userPass });
        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        objReturn.msg = 'Đăng nhập thành công';
        res.status(200).json(objReturn);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = await md.userModel.findByIdAndUpdate(req.params.idu, req.body, { new: true });
        objReturn.msg = 'Cập nhật thành công';
        res.json(objReturn);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        await md.userModel.findByIdAndDelete(req.params.idu);
        objReturn.msg = 'Xóa thành công';
        res.json(objReturn);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};
