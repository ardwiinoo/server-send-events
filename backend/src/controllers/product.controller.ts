import { Request, Response } from 'express'
import ProductService from '../services/product.service'

class ProductController {
    constructor(private productService: ProductService) {}

    async addProduct(req: Request, res: Response) {
        try {
            const { name } = req.body
            const message = await this.productService.addProduct(name)
            res.status(201).json({ status: 'success', message })
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }
}

export default ProductController
