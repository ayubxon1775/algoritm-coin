import { validationResult, matchedData } from "express-validator";
import { Pupil } from "../../models/pupil.model.mjs";




export const getPupils = async (req, res)=> {
    try {
        const pupils =  await Pupil.find();
        if (!pupils) return res.sendStatus(404);
        return res.status(200).send(pupils);
    }catch (error){
        console.log(error);
        return res.sendStatus(404);
    }
};

export const createPupil = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(400).send(result.array());
    const data = matchedData(req);

    data.password = hashedPassword(data.password);
    const newPupil = new Pupil(data);

    try{
        const savedPupil = await newPupil.save();
        return res.status(201).send(savedPupil);
    }catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const updatePupil = async (req, res) => {
    const {params: {id} } = req;
    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(400).send(result.array());
    const data = matchedData(req);

    try{
        const updatePupil = await Pupil.findByIdAndUpdate(id, data, {new: true});
        if (!updatePupil) throw new Error('User Not Found');
    }catch (error) {
        return res.status(500);
    }
};

export const patchPupil = async ( req, res) => {
    const { params: {id} } = req;
    const result = validationResult(req);
    if(!result.isEmpty()) return res.status(400).send(result.array());
    const data = matchedData(req);
    try {
        const updatePupil = await Pupil.findByIdAndUpdate(id, data, {new: true});
        if(!updatePupil) return res.status(404).send('Pupil not found');
        return res.status(200).send(updatePupil);
    }catch (error) {
        return res.status(500);
    }
};
export const deletePupil = async (req, res) =>{
    const {params: {id} } = req;
    try {
        const deletePupil = await Pupil.findByIdAndDelete(id);
        if (!deletePupil) return res.status(404);
        return res.status(204).send('Pupil deleted');
    }catch ( error){
        return res.status(500);
    }
};


