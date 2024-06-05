const pupilService = require('../services/pupilService');

exports.createrPupil = async (req, res) => {
    const {firstname, lastname, phone, route} = req.body;
    try {
        const pupil = await pupilService.createrPupil(firstname, lastname, phone, route);
        res.status(200).json({ pupil });
    }catch (error){
        res.status(400).json({ error: error.message});
    }
};

exports.getPupil = async (req, res) => {
    const { id } = req.params; 
    try{
        const pupil = await pupilService.getPupil(id);
        if(!pupil) res.status(404).json({message: "Pupil not found"});
        res.status(200).json({ pupil });
    }catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.updatePupil = async (req, res) => {
    const {id} = req.params;
    const { firstname, lastname, phone, route} = req.body;
    try {
        const findPupil = await pupilService.getPupil(id);
        if (!findPupil) res.status(404).json ({message: 'pupil not found'});

        findPupil.firstname = firstname || findPupil.firstname;
        findPupil.lastname = lastname || findPupil.lastname;
        findPupil.phone = phone || findPupil.phone;
        findPupil.route = route || findPupil.route

        await findPupil.save();

        res.status(200).json ({ pupil: findPupil});
    }catch (error) {
        res.status(400).json ({ error: error.message });
    }
};

exports.deletePupil = async ( req, res) => {
    const {id} = req.params;
    try {
        await pupilService.deletePupil(id);
        res.status(200).json({message: "Pupil deleted successfully"});
    }catch (error) {
        res.status(404).json ({ error: error.message });
    }

};

