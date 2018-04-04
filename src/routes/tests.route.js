import TestController from '@/app/controllers/Test.controller';

const routes = [
    ['get', '/tests', TestController.all]
];

export default routes;
