import Servicemodel from "../Models/ServiceModel.js";

export const CreateServicectrl = async(req,resp)=>{
    try {
        const create = await Servicemodel.create(req.body);
        if (create) {
            return resp.status(200).send( {
                success: true,
                message: 'Services Created',
            })
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Services Not Created Yet',
        })
    }
}

export const MyServicesctrl = async(req, resp) => {
    try {
        const already = await Servicemodel.find();
        if (already) {
            return resp.status(200).send(
                {
                    Succes: true,
                    already
                }
            );
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Data Not Fatched',
        })
    }
}