import express, {Router, Request, Response} from 'express';
const TestRouter: Router = express.Router();
import TestController from '../controllers/test.controller';


TestRouter.get('/test-data', async (req: Request, res: Response)=>{
    const response = await TestController.getTest();
    return res.status(200).send(response);
});

TestRouter.post('/create-test', async (req: Request, res: Response)=>{
    const response = await TestController.createTest(req.body);
    return res.status(200).send(response);
});

TestRouter.post('/get-test-by-id/:id', async (req: Request, res: Response)=>{
    const response = await TestController.getDataByID(parseInt(req.params.id));
    return res.status(200).send(response);
});

TestRouter.post('/get-test-by-id-availability/:id', async (req: Request, res: Response)=>{
    const response = await TestController.getTestByIdAvailability(parseInt(req.params.id));
    return res.status(200).send(response);
});

TestRouter.post('/get-test-and-op/:id', async (req: Request, res: Response)=>{
    const response = await TestController.getTestAndOp(parseInt(req.params.id));
    return res.status(200).send(response);
});

TestRouter.post('/get-test-like-op/:name', async (req: Request, res: Response)=>{
    const response = await TestController.getTestLikeOp(req.params.name);
    return res.status(200).send(response);
});



TestRouter.delete('/delete-test/:id', async (req: Request, res: Response)=>{
    const response = await TestController.deleteTest(parseInt(req.params.id));
    return res.status(200).send(response);
});



//Activity 10 Options:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

TestRouter.post('/get-test-starts-with/:name', async (req: Request, res: Response)=>{
    const response = await TestController.getTestStartsWith(req.params.name);
    return res.status(200).send(response);
});

TestRouter.post('/get-test-ends-with/:name', async (req: Request, res: Response)=>{
    const response = await TestController.getTestEndsWith(req.params.name);
    return res.status(200).send(response);
});

TestRouter.post('/get-test-by-id-between/:id/:id2', async (req: Request, res: Response)=>{
    console.log("\n\n\n\n\n QUERIES",req.query,"\n\n\n\n\n");
    const response = await TestController.getTestBetweenOp(parseInt(req.params.id), parseInt(req.params.id2));
    return res.status(200).send(response);
});

TestRouter.post('/get-test-by-id-not-between/:id/:id2', async (req: Request, res: Response)=>{
    const response = await TestController.getTestNotBetweenOp(parseInt(req.params.id), parseInt(req.params.id2));
    return res.status(200).send(response);
});


TestRouter.post('/get-test-not-ilike/:name', async (req: Request, res: Response)=>{
    const response = await TestController.getTestNotiLike(req.params.name);
    return res.status(200).send(response);
});

TestRouter.post('/get-test-by-id-in/:id/:id2', async (req: Request, res: Response)=>{
    const response = await TestController.getTestInOp(parseInt(req.params.id), parseInt(req.params.id2));
    return res.status(200).send(response);
});

TestRouter.post('/get-test-by-id-lessthan/:id', async (req: Request, res: Response)=>{
    const response = await TestController.getTestLtOp(parseInt(req.params.id));
    return res.status(200).send(response);
});

TestRouter.post('/get-test-ends-with/:name', async (req: Request, res: Response)=>{
    const response = await TestController.getTestLikeOp(req.params.name);
    return res.status(200).send(response);
});


TestRouter.post('/get-test-name-ilike-any/:name/:name2', async (req: Request, res: Response)=>{
    const response = await TestController.getTestILikeOpAny(req.params.name, req.params.name2);
    return res.status(200).send(response);
});


TestRouter.post('/get-test-by-id-eq/:id', async (req: Request, res: Response)=>{
    const response = await TestController.getTestEq(parseInt(req.params.id));
    return res.status(200).send(response);
});


TestRouter.post('/get-test-by-id-lte/:id', async (req: Request, res: Response)=>{
    const response = await TestController.getTestLte(parseInt(req.params.id));
    return res.status(200).send(response);
});







export default TestRouter;