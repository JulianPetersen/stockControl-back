import TurnoCompleto from "../models/TurnoCompleto";

export const createTurnoCompleto = async (req, res) => {
  const { nombreCliente, apellidoCliente, fechaTurno,horarioTurno, realizadoPor, userId, monto, observaciones } = req.body;
  const newTurno = new TurnoCompleto({ nombreCliente, apellidoCliente, fechaTurno,horarioTurno, realizadoPor, userId, monto, observaciones });
  const turnoSaved = await newTurno.save();
  res.status(201).json(turnoSaved);
};

export const getTurnosCompleto = async (req, res) => {
  const turnosCompleto = await TurnoCompleto.find({userId:req.params.userId})
  res.json(turnosCompleto);
};

export const getTurnosCompletoByDate = async (req, res) => {
  const turnosCompleto = await TurnoCompleto.find({userId:req.params.userId, fechaTurno:req.params.fecha})
  res.json(turnosCompleto);
};

export const updateTurnoCompleto = async (req, res) => {
  const updatedTurnoCompleto = await TurnoCompleto.findByIdAndUpdate(
    req.params.turnoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedTurnoCompleto);
};

export const deleteTurnoCompleto = async (req, res) => {
    const deleteTurnoCompleto = await TurnoCompleto.findByIdAndDelete(req.params.turnoId);
    res.status(204).json({message:'success'});
  };


  