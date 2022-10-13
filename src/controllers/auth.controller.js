import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'

export const signUp = async (req,res) => {
    
    const {username,nombre,apellido, email, password, roles,isModerator,idAdmin} = req.body

    const newUser = new User({
        username,
        nombre,
        apellido,
        email,
        password: await User.encryptPassword(password),
    })

    if(roles){
       const foundRoles = await Role.find({name: {$in: roles}})
       newUser.roles = foundRoles.map(role => role._id)
    }else {
        const role = await Role.findOne({name:'admin'})
        newUser.roles = [role._id]
    }

    const savedUser = await newUser.save();
    const token = jwt.sign({id: savedUser._id}, config.SECRET,)
    

    res.status(200).json({token})
}

export const signUpSubUser = async (req,res) => {
    
  const {username, nombre,apellido,email, password, roles, isModerator, idAdmin, nombreSalon} = req.body

  const newUser = new User({
      username,
      nombre,
      apellido,
      email,
      password: await User.encryptPassword(password),
      isModerator,
      idAdmin,
      nombreSalon
  })

  if(roles){
     const foundRoles = await Role.find({name: {$in: roles}})
     newUser.roles = foundRoles.map(role => role._id)
  }else {
      const role = await Role.findOne({name:'admin'})
      newUser.roles = [role._id]
  }

  const savedUser = await newUser.save();
  res.status(200).json({savedUser})
}

export const signin = async (req,res) => {

    const userFound = await User.findOne({email: req.body.email}).populate('roles')

    if (userFound.userActive == true){
      if(!userFound) return res.status(400).json({message:'user not found'})

      const matchPassword = await User.comparePassword(req.body.password, userFound.password)
  
      if(!matchPassword) return res.status(401).json({token: null, message: 'invalid Password'})
  
      const token =  jwt.sign({id: userFound._id}, config.SECRET, )
      console.log(userFound)
  
      res.json({token,userId:userFound._id,firstTime:userFound.firstTime,isModerator:userFound.isModerator,idAdmin:userFound.idAdmin,nombreSalon:userFound.nombreSalon})
    }else{
      res.status(400).json({message:'el usuario se encuentra inactivo, ponte en contacto con el administrador.'})
    }

     
    
}

export const updateuser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(  
      req.params.userId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  };

  export const getUserById = async (req,res) => {
    const getUser = await User.findById(req.params.userId)
    res.status(200).json(getUser)
  }