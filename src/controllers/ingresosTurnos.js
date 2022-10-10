import IngresoTurno from "../models/IngresosTurnos";

export const createIngresosTurno = async (req, res) => {
  const { nombreCliente, apellidoCliente, fechaTurno,horarioTurno, realizadoPor, userId, monto, observaciones, month, year } = req.body;
  const newIngresoTurno = new IngresoTurno({ nombreCliente, apellidoCliente, fechaTurno,horarioTurno, realizadoPor, userId, monto, observaciones,month, year });
  const IngresoSaved = await newIngresoTurno.save();
  res.status(201).json(IngresoSaved);
};

export const getIngreoTurno = async (req, res) => {
  const ingresoTurnos = await IngresoTurno.find({userId:req.params.userId})
  res.json(ingresoTurnos);
};

export const getIngresoTurnoByDate = async (req, res) => {
  const ingresoTurnoByDate = await IngresoTurno.find({userId:req.params.userId, fechaTurno:req.params.fecha})
  res.json(ingresoTurnoByDate);
};

export const updateIgresoTurno = async (req, res) => {
  const updatedIngresoTurno = await IngresoTurno.findByIdAndUpdate(
    req.params.turnoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedIngresoTurno);
};

export const deleteIngresoTurno = async (req, res) => {
    const deleteIngresoTurno = await IngresoTurno.findByIdAndDelete(req.params.turnoId);
    res.status(204).json({message:'success'});
};