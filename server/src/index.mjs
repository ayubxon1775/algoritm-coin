import express from 'express';

const app = express();
app.use(express.json());



app.get('/api', (req, res) => {
    return res.send(pupils)
})

app.get('/api/pupils/:id', (req, res) => {
    const { params: {id} } = req;
    const pupilId = pupils.find(pupil => pupil.id === id);
    if(!isNaN(pupilId)) return res.status(400).send({msg: "Invalid Id"});

    return res.status(200).send(pupils[pupilId])

})







const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));