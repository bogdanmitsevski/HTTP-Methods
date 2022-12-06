import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
class TestController {
    async postMethod (req:any, res:any) {
        try {
            const {name, price} = req.body;
            const checkName = await prisma.test.findMany({
                where: {
                    name:name
                }
            });

            if(Object.keys(checkName).length >= 1) {
                res.status(400).json(`Data with NAME: ${name} was already created`);
            }
            else {
                await prisma.test.create({
                    data: {
                        name:name,
                        price:price
                    }
                });

                res.json({message: `New Item with ${name} was created`});
            }
        }
        catch(e) {
            console.log(e);
        }
    }

    async getMethod (req:any, res:any) {
        try {
            res.json(await prisma.test.findMany());
        }
        catch(e) {
            console.log(e);
        }
    }

    async updateMethod (req:any, res:any) {
        try {
            const {name, price} = req.body;
            const newData = await prisma.test.update({
                where: {
                    name: name
                },
                data: {
                    name: 'iphone3',
                    price: price
                }
            })
            res.json(newData);
        }
        catch(e) {
            console.log(e);
        }
    }

    async deleteMethod(req:any, res:any) {
        try {
            const{name} = req.body;
            const deleteData = await prisma.test.delete({
                where: {
                    name:name
                }
            });
            res.json({message:`Data with ${deleteData.id} was deleted`})
        }
        catch(e) {
            console.log(e);
        }
    }
};

export default new TestController;