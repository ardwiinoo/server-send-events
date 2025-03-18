import { Response } from 'express'

class EventService {
    private clients: Response[] = []

    addClient(res: Response) {
        this.clients.push(res)
        console.info(`Client connected: ${this.clients.length}`)
    }

    removeClient(res: Response) {
        this.clients = this.clients.filter((client) => client !== res)
        console.info(`Client disconnected: ${this.clients.length}`)
    }

    broadcast(message: string) {
        this.clients.forEach((client) =>
            client.write(`data: ${JSON.stringify({ message })}\n\n`)
        )
    }
}

export default EventService
