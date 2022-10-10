import TestService from "../services/test.service";

class TestController{
    async getTest () {
        const response = await TestService.getTest();
        return response;
    }

    async createTest (dto: any) {
        const response = await TestService.createTest(dto);
        return response;
    }

    async deleteTest (testID: number){
        const response = await TestService.deleteTest(testID);
        return response;
    }

    async getTestByIdAvailability (id: number) {
        const response = await TestService.getTestByIdAvailability(id);
        return response;
    }

    async getTestAndOp (id: number) {
        const response = await TestService.getTestAndOp(id);
        return response;
    }

    async getTestLikeOp (name: string) {
        const response = await TestService.getTestLikeOp(name);
        return response;
    }

    async getDataByID ( testID: number){
        const response = await TestService.getTestByID(testID);
        return response;
    }



    //Activity 10 Options:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    async getTestStartsWith ( name: string){
        const response = await TestService.getTestStartsWith(name);
        return response;
    }

    async getTestBetweenOp ( id: number, id2: number){
        const response = await TestService.getTestBetweenOp(id, id2);
        return response;
    }

    async getTestNotBetweenOp ( id: number, id2: number){
        const response = await TestService.getTestNotBetweenOp(id, id2);
        return response;
    }

    async getTestNotiLike ( name: string){
        const response = await TestService.getTestNotiLike(name);
        return response;
    }

    async getTestInOp ( id: number, id2: number){
        const response = await TestService.getTestInOp(id, id2);
        return response;
    }

    async getTestLtOp ( id: number){
        const response = await TestService.getTestLtOp(id);
        return response;
    }

    async getTestEndsWith ( name: string){
        const response = await TestService.getTestEndsWith(name);
        return response;
    }


    async getTestILikeOpAny( name: string, name2: string){
        const response = await TestService.getTestILikeOpAny(name, name2);
        return response;
    }

    async getTestEq ( id: number){
        const response = await TestService.getTestEqOp(id);
        return response;
    }

    async getTestLte ( id: number){
        const response = await TestService.getTestLte(id);
        return response;
    }
}

export default new TestController;