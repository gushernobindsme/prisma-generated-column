import { PrismaClient } from '@prisma/client'
import {Category} from ".prisma/client";

const prisma = new PrismaClient()

async function main() {
    const movie = await prisma.movie.create({
        data: {
            name: 'Indiana Jones',
            category: Category.OTHER,
        },
    })
    // const movie = await prisma.movie.findMany();
    console.log(movie)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })