import { dbContext } from "../db/DbContext.js"

class BurgershacksService {
    async deleteBurger(burgerId) {
        const burgerToDelete = await dbContext.Burgers.findById(burgerId)
        if (!burgerToDelete) {
            return 'burger not found'
        }
        await dbContext.Burgers.deleteOne({ _id: burgerId })
        return 'burger deleted'
    }

    async createBurger(burgerData) {
        const burger = await dbContext.Burgers.create(burgerData)
        return burger
    }

    async getAllBurgers() {
        const burgers = await dbContext.Burgers.find()
        return burgers
    }
}

export const burgershacksService = new BurgershacksService()