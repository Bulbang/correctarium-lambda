import { Response, Request } from "express";
import { Cost_n_TimeController } from "./controllers/Cost_n_TimeController";
import { DeadlineController } from "./controllers/DeadlineController";
import { iResponce } from "./interfaces/iResponce";

const { Router } = require("express");

const router = new Router();

router.post("/calculate", (req: Request, res: Response) => {
  let cost_n_timeController: Cost_n_TimeController;
  let mimetypeModifier = 1;
  console.log(req.body);

  const { language, count, mimetype } = req.body;

  if (!count || !language || !mimetype) {
    return res.status(400).json({
      message: "Some properties of request body is absent",
    });
  }

  if (mimetype == "other") {
    mimetypeModifier = 1.2;
  } else if (mimetype != 'none' && mimetype != 'doc' && mimetype != 'docx' && mimetype != 'rtf') {
    return res.status(400).json({
        message: "Invalid mimetype",
      });
  }

  if (language == "en") {
    cost_n_timeController = new Cost_n_TimeController(0.12, 120, 333);
  } else if (language == "ru" || language == "ua") {
    cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
  } else
    return res.status(400).json({
      message: "Unavailable language",
    });
  const deadlineController = new DeadlineController(10, 19);

  const calculatedPrice =
    cost_n_timeController.calculateCost(count) * mimetypeModifier;
  let calculatedTime =
    cost_n_timeController.calculateMinutes(count) * mimetypeModifier;

  if (calculatedTime % 30 > 10) {
    calculatedTime += 30 - (calculatedTime % 30);
  } else calculatedTime -= calculatedTime % 30;

  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  let responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  return res.json(responce);
});

module.exports = router;
