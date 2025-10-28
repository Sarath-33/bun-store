import type {Request, Response} from "express"

export const getAllProduct = (req: Request,res: Response)=>{
    res.json({message: "Get all the products"})
}
export const getProduct = (req: Request,res: Response)=>{
    res.send("get a single product")
}
export const createProduct = (req: Request,res: Response)=>{
    res.send("Create Product")
}
export const updateProduct = (req: Request,res: Response)=>{
    res.send("Update the product")
}
export const deleteProduct = (req: Request,res: Response)=>{
    res.send("Delete the product")
}