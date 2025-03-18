import EventService from './event.service'

class ProductService {
    constructor(private eventService: EventService) {}

    async addProduct(name: string) {
        if (!name) {
            throw new Error('Name is required')
        }

        const message = `Produk ${name} added with success!`
        this.eventService.broadcast(message)
        return message
    }
}

export default ProductService
