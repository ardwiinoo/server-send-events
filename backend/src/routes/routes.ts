import { Router } from 'express'
import EventController from '../controllers/event.controller'
import ProductController from '../controllers/product.controller'
import ProductService from '../services/product.service'
import EventService from '../services/event.service'

const router = Router()

const eventService = new EventService()
const productService = new ProductService(eventService)
const eventController = new EventController(eventService)
const productController = new ProductController(productService)

router.get('/events', (req, res) => eventController.connect(req, res))
router.post('/products', (req, res) => productController.addProduct(req, res))

export default router
