import { HttpResource, RequestMethod } from '../resource';
export const resources = {
    getAllApps: new HttpResource('api/v1/apps', RequestMethod.Get),
    getAllApps_v4: new HttpResource('api/v4/apps', RequestMethod.Get),
};

export default resources;
