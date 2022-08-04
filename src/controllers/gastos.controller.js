import Gastos from "../models/Gastos";

export const createGasto = async (req, res) => {
  const { concepto, monto, metodoPago, fecha } = req.body;
  const newGastos = new Gastos({ concepto, monto, metodoPago, fecha });
  const gastoSaved = await newGastos.save();
  res.status(201).json(gastoSaved);
};

export const getGastos = async (req, res) => {
  const gastos = await Gastos.find()
  res.json(gastos);
};

export const getGastoById = async (req, res) => {
  const gasto = await Gastos.findById(req.params.gastoId);
  res.status(200).json(gasto);
};

export const updateGasto = async (req, res) => {
  const updatedGasto = await Gastos.findByIdAndUpdate(
    req.params.gastoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedGasto);
};

export const deleteGasto = async (req, res) => {
  const deletedGasto = await Gastos.findByIdAndDelete(req.params.gastoId);
  res.status(204).json({message:'success'});
};

export const getByDate = async (req,res) => {
  const gastosByDate = await Gastos.find({fecha:req.params.fecha})
  
  res.status(200).json(gastosByDate)
}
