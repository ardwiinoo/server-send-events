import { Request, Response } from 'express'
import EventService from '../services/event.service'

class EventController {
    constructor(private eventService: EventService) {}

    connect(req: Request, res: Response) {
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')

        this.eventService.addClient(res)

        req.on('close', () => {
            this.eventService.removeClient(res)
        })
    }
}

export default EventController
