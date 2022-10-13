import Users from "../models/User";

export const createUser = (req, res) => {
    res.json('creating user')
}

export const getSubUsers = async (req,res) => {
    const users = await Users.find({idAdmin:req.params.id})
    .populate('roles')
    res.json(users);
}
