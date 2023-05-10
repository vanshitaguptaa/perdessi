import Servicemodel from "../Models/ServiceModel.js";

export const CreateServicectrl = async (req, resp) => {
  try {
    const create = await Servicemodel.create(req.body);
    if (create) {
      return resp.status(200).send({
        success: true,
        message: "Services Created",
      });
    }
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Services Not Created Yet",
    });
  }
};

export const MyServicesctrl = async (req, resp) => {
  try {
    const already = await Servicemodel.find();
    if (already) {
      return resp.status(200).send({
        Succes: true,
        already,
      });
    }
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Data Not Fatched",
    });
  }
};

export const getServiceController = async (req, res) => {
  try {
    const savedServices = await Servicemodel.find();

    if (savedServices < 1) {
      return res.status(422).json({
        status: false,
        message: "there are no services in database to display",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched services",
      response: savedServices,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
