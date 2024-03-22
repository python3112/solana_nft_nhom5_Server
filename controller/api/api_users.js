const md = require('../../models/user.model');
const bcrypt = require('bcrypt');

// Định nghĩa đối tượng trả về mặc định
const objReturn = {
    status: 1,
    msg: 'OK'
};

// Lấy danh sách người dùng
exports.listUser = async (req, res, next) => {
    try {
        let list = await md.userModel.find();
        if (list.length > 0)
            objReturn.data = list;
        else {
            objReturn.status = 0;
            objReturn.msg = 'Không có dữ liệu phù hợp';
        }
    } catch (error) {
        objReturn.status = 0;
        objReturn.msg = error.message;
    }
    res.json(objReturn);
}

// Lấy thông tin của một người dùng
exports.oneUser = async (req, res, next) => {
    try {
        const user = await md.userModel.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Thêm một người dùng mới
exports.addUser = async (req, res, next) => {
    try {
        const user = req.body;
        const newUser = new md.userModel(user);
        await newUser.save();
        objReturn.msg = 'Thêm thành công';
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    res.json(objReturn);
}

// Đăng nhập người dùng
exports.userLogin = async (req, res, next) => {
    try {
        const user = await md.userModel.findOne({ username: req.body.username });
        if (!user) {
            objReturn.msg = 'Không tìm thấy người dùng';
            return res.status(404).json(objReturn);
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            objReturn.msg = 'Mật khẩu sai';
            return res.status(401).json(objReturn);
        }
        objReturn.msg = 'Đăng nhập thành công';
        return res.status(200).json(objReturn);
    } catch (err) {
        return res.status(500).send();
    }
}

// Cập nhật thông tin người dùng
exports.updateUser = async (req, res, next) => {
    try {
        const user = await md.userModel.findByIdAndUpdate(req.params.idu, req.body, { new: true });
        objReturn.msg = 'Sửa thành công';
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    res.json(objReturn);
}

// Xóa người dùng
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await md.userModel.findByIdAndDelete(req.params.idu);
        objReturn.msg = 'Xóa thành công';
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    res.json(objReturn);
};
