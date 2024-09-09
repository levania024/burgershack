import { burgershacksService } from "../services/BurgershacksService.js";
import BaseController from "../utils/BaseController.js";

export class BurgershacksController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router
            .get('', this.getAllBurgers)
            .post('', this.createBurger)
            .delete('/:burgerId', this.deleteBurger)
    }

    async deleteBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const message = await burgershacksService.deleteBurger(burgerId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }

    async getAllBurgers(request, response, next) {
        try {
            const burgers = await burgershacksService.getAllBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgershacksService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
}