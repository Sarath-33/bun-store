import type {Request, Response} from "express"

export const getAllUsers = (req: Request,res: Response)=>{
    
    res.json({message: "Get all the users"})
}
export const getUser = (req: Request,res: Response)=>{
    res.send("get a single user")
}
export const createUser = (req: Request,res: Response)=>{
    res.send("Create User")
}
export const updateUser = (req: Request,res: Response)=>{
    res.send("Update the User")
}
export const deleteUser = (req: Request,res: Response)=>{
    res.send("Delete the User")
}