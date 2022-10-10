import EgresoTurno from "../models/EgresosTurno";

export const createEgresoTurno = async (req, res) => {
  const {fechaEgreso, userId, monto,concepto,  month, year, metodoPago} = req.body;
  const newEgresoTurno = new EgresoTurno({ fechaEgreso, userId, monto,concepto, month, year, metodoPago});
  const EgresoSaved = await newEgresoTurno.save();
  res.status(201).json(EgresoSaved);
};

export const getEgresoTurno = async (req, res) => {
  const egresoTurno = await EgresoTurno.find({userId:req.params.userId})
  res.json(egresoTurno); 
};

export const getEgresoTurnoByDate = async (req, res) => {
  const egresoTurnoByDate = await EgresoTurno.find({userId:req.params.userId, fechaEgreso:req.params.fecha})
  res.json(egresoTurnoByDate);
};  



export const updateEgresoTurno = async (req, res) => {
  const updatedEgresoTurno = await EgresoTurno.findByIdAndUpdate(
    req.params.egresoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedEgresoTurno);
};

export const deleteEgresoTurno = async (req, res) => {
    const deleteEgresoTurno = await EgresoTurno.findByIdAndDelete(req.params.egresoId);
    res.status(204).json({message:'success'});
};