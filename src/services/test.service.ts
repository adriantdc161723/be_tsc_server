import Test from '../models/tables/test';
import ResponseUtil from '../utils/response.util';
import { AddTestDTO } from '../models/dto/TestDTO';
import { Op } from 'sequelize';

class TestService extends ResponseUtil {

    async createTest (dto: AddTestDTO["requestObject"]) {
        try {
            const create = await Test.create(dto);

            console.log("\n\n\nDTO LOG::::::", dto, typeof dto, "\n\n\n");
            
            if(create){
                return this.RESPONSE(200, create, 0, "OK");
            }else{
                return this.RESPONSE(400    , create, 0, "BAD REQUEST");
            }

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTest () {
        try {
            
            const find = await Test.findAll();

            if(find.length){
                return this.RESPONSE(200, find, 0, "OK");
            } else {
                return this.RESPONSE(404, {}, 0, "NO RECORD FOUND");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestByID (testID: number) {
        try {
            
            const find = await Test.findOne({ where: { id: testID } });

            if(find){
                return this.RESPONSE(200, find, 0, "OK");
            } else {
                return this.RESPONSE(404, {}, 0, "NO RECORD FOUND");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestByIdAvailability (id: number) {
        try {
            
            const exist = await Test.findOne({
                where: {
                    id: {
                        [Op.or]: [1, 2, id]
                    }
                }
            });

            if(exist){
                return this.RESPONSE(200, exist, 0, "SUCCESS");
            } else {
                return this.RESPONSE(404, {}, 0, "CANNOT FIND RECORD");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }


    
    async getTestAndOp (id: number) {
        try {
            
            const exist = await Test.findOne({
                where: {
                    id: {
                        [Op.and]: [
                            { id: id },
                            { name: null }
                        ]
                    }
                }
            });

            if(exist){
                return this.RESPONSE(200, exist, 0, "SUCCESS");
            } else {
                return this.RESPONSE(404, {}, 0, "CANNOT FIND RECORD");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestLikeOp (name: string) {

        try {
            
            const query = {
                where: { 
                    name: {
                        [Op.like]: `%${name}` 
                    }
                }
            }

            const exist = await Test.findAll(query);
            const count = await Test.count(query);

            if(exist){
                return this.RESPONSE(200, exist, count, "SUCCESS");
            } else {
                return this.RESPONSE(404, {}, count, "CANNOT FIND RECORD");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }
        
    async getTestAndOpFindAll () {
        try {
            
            const query = {
                where: {
                    id: {
                        [Op.and]: [
                            { id: {
                                [Op.gt]: 3
                            } },
                            { test_data: null }
                        ]
                    }
                }
            }

            const exist = await Test.findOne(query);
            const count = await Test.count(query);

            if(exist){
                return this.RESPONSE(200, exist, count, "SUCCESS");
            } else {
                return this.RESPONSE(404, {}, count, "CANNOT FIND RECORD");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async deleteTest (testID: number) {
        try {
            
            const deleteTest = await Test.destroy({where: { id: testID } });

            if(deleteTest){
                return this.RESPONSE(200, deleteTest, 0, "SUCCESSFULY DELETED");
            } else {
                return this.RESPONSE(404, {}, 0, "CANNOT DELETE DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }





    //Activity 10 Options:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    async getTestStartsWith (name: string) {
        try {
            
            const query: object = { where: { name: { [Op.startsWith]: `${name}`  } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }


    async getTestBetweenOp (id: number, id2: number) {
        try {
            
            const query: object = { where: { id: { [Op.between]: [id, id2] } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestNotBetweenOp (id: number, id2: number) {
        try {
            
            const query: object = { where: { id: { [Op.notBetween]: [id, id2] } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestNotiLike(name: string) {
        try {
            
            const query: object = { where: { name: { [Op.notILike]: `%${name}%` } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestInOp (id: number, id2: number) {
        try {
            
            const query: object = { where: { id: { [Op.in]: [id, id2] } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }


    async getTestLtOp (id: number) {
        try {
            
            const query: object = { where: { id: { [Op.lt]: id } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }
    
    async getTestEndsWith (name: string) {
        try {
            
            const query: object = { where: { name: { [Op.endsWith]: `${name}%` } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestILikeOpAny (name: string, name2: string) {
        try {
            
            const query: object = { where: { name: { [Op.iLike]: { [Op.any]: [`%${name}%`, `%${name2}%`] } } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestEqOp (id: number) {
        try {
            
            const query: object = { where: { id: { [Op.eq]:  id } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }

    async getTestLte (id: number) {
        try {
            
            const query: object = { where: { id: { [Op.lte]:  id } } };
            const find = await Test.findAll(query);
            const count = await Test.count(query);

            if(find){
                return this.RESPONSE(200, find, count, "OK");
            } else {
                return this.RESPONSE(404, [], count, "CANNOT FIND DATA");
            }
            

        } catch (error: any) {
            return this.RESPONSE(500, error.message, 0, "INTERNAL SERVER ERROR");
        }
    }


}

export default new TestService();