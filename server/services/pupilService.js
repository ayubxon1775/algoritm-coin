const Pupil = require('../models/Pupil')


exports.createrPupil = async (firstname, lastname, phone, route) => {
    const pupil = await Pupil.create({firstname, lastname, phone, route});
    return pupil;
}
exports.getPupil = async (id) => {
    const pupil = await Pupil.findByPk(id);
    return pupil;
}

exports.deletePupil = async (id) => {
    await Pupil.destroy({ where : {id}});
}

