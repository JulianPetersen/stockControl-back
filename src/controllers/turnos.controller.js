import Turno from "../models/Turnos";

export const createTurno = async (req, res) => {
  const { nombreCliente, apellidoCliente, fechaTurno,horarioTurno, realizadoPor, userId } = req.body;
  const newTurno = new Turno({ nombreCliente, apellidoCliente, fechaTurno,horarioTurno, realizadoPor, userId });
  const turnoSaved = await newTurno.save();
  res.status(201).json(turnoSaved);
};

export const getTurnos = async (req, res) => {
  const turnos = await Turno.find({userId:req.params.userId})
  res.json(turnos);
};

export const getTurnosByDate = async (req, res) => {
  const turnos = await Turno.find({userId:req.params.userId, fechaTurno:req.params.fecha})
  res.json(turnos);
};

export const updateTurno = async (req, res) => {
  const updatedTurno = await Turno.findByIdAndUpdate(
    req.params.turnoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedTurno);
};

export const deleteTurno = async (req, res) => {
    const deleteTurno = await Turno.findByIdAndDelete(req.params.turnoId);
    res.status(204).json({message:'success'});
  };


  