import routeHandler from '@/utility/route.handler';
import testsRoute from './tests.route';

export default (router) => {
    return routeHandler(
        testsRoute,
        router
    );
};
