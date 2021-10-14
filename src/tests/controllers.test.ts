import { DeadlineController } from "../controllers/DeadlineController";
import { Cost_n_TimeController } from "../controllers/Cost_n_TimeController";
import { iResponce } from "../interfaces/iResponce";

beforeEach(() => {
  jest.useFakeTimers("modern");
});

afterEach(() => {
  jest.useRealTimers();
});

test("Responce calc for 500 symbols(speed:1333, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(500);
  const calculatedTime = cost_n_timeController.calculateMinutes(500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 500 symbols(speed:1333, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(500);
  const calculatedTime = cost_n_timeController.calculateMinutes(500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 500 symbols(speed:1333, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 5, 11),
    deadline_date: "2021/10/5 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(500);
  const calculatedTime = cost_n_timeController.calculateMinutes(500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1333 symbols(speed:1333, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 66.65,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1333);
  const calculatedTime = cost_n_timeController.calculateMinutes(1333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1333 symbols(speed:1333, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 66.65,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1333);
  const calculatedTime = cost_n_timeController.calculateMinutes(1333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1333 symbols(speed:1333, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 66.65,
    time: 1,
    deadline: +new Date(2021, 9, 5, 11),
    deadline_date: "2021/10/5 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1333);
  const calculatedTime = cost_n_timeController.calculateMinutes(1333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1500 symbols(speed:1333, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 75,
    time: 1.5,
    deadline: +new Date(2021, 9, 4, 11, 30),
    deadline_date: "2021/10/4 11:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1500);
  const calculatedTime = cost_n_timeController.calculateMinutes(1500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1500 symbols(speed:1333, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 75,
    time: 1.5,
    deadline: +new Date(2021, 9, 4, 11, 30),
    deadline_date: "2021/10/4 11:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1500);
  const calculatedTime = cost_n_timeController.calculateMinutes(1500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1500 symbols(speed:1333, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 75,
    time: 1.5,
    deadline: +new Date(2021, 9, 5, 11, 30),
    deadline_date: "2021/10/5 11:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1500);
  const calculatedTime = cost_n_timeController.calculateMinutes(1500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 2333 symbols(speed:1333, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 116.65,
    time: 2.5,
    deadline: +new Date(2021, 9, 4, 12, 30),
    deadline_date: "2021/10/4 12:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(2333);
  const calculatedTime = cost_n_timeController.calculateMinutes(2333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 2333 symbols(speed:1333, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 116.65,
    time: 2.5,
    deadline: +new Date(2021, 9, 4, 12, 30),
    deadline_date: "2021/10/4 12:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(2333);
  const calculatedTime = cost_n_timeController.calculateMinutes(2333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 2333 symbols(speed:1333, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);

  const awaitedResponce: iResponce = {
    price: 116.65,
    time: 2.5,
    deadline: +new Date(2021, 9, 5, 12, 30),
    deadline_date: "2021/10/5 12:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(2333);
  const calculatedTime = cost_n_timeController.calculateMinutes(2333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 500 symbols(speed:700, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(500);
  const calculatedTime = cost_n_timeController.calculateMinutes(500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 500 symbols(speed:700, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(500);
  const calculatedTime = cost_n_timeController.calculateMinutes(500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 500 symbols(speed:700, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 5, 11),
    deadline_date: "2021/10/5 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(500);
  const calculatedTime = cost_n_timeController.calculateMinutes(500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 700 symbols(speed:700, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(700);
  const calculatedTime = cost_n_timeController.calculateMinutes(700);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 700 symbols(speed:700, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 4, 11),
    deadline_date: "2021/10/4 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(700);
  const calculatedTime = cost_n_timeController.calculateMinutes(700);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 700 symbols(speed:700, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 50,
    time: 1,
    deadline: +new Date(2021, 9, 5, 11),
    deadline_date: "2021/10/5 11:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(700);
  const calculatedTime = cost_n_timeController.calculateMinutes(700);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1500 symbols(speed:700, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 75,
    time: 2.5,
    deadline: +new Date(2021, 9, 4, 12,30),
    deadline_date: "2021/10/4 12:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1500);
  const calculatedTime = cost_n_timeController.calculateMinutes(1500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1500 symbols(speed:700, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 75,
    time: 2.5,
    deadline: +new Date(2021, 9, 4, 12,30),
    deadline_date: "2021/10/4 12:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1500);
  const calculatedTime = cost_n_timeController.calculateMinutes(1500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 1500 symbols(speed:700, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 75,
    time: 2.5,
    deadline: +new Date(2021, 9, 5, 12,30),
    deadline_date: "2021/10/5 12:30:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(1500);
  const calculatedTime = cost_n_timeController.calculateMinutes(1500);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 2333 symbols(speed:700, Weekend)", () => {
  jest.setSystemTime(new Date(2021, 9, 2));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 116.65,
    time: 4,
    deadline: +new Date(2021, 9, 4, 14, 0),
    deadline_date: "2021/10/4 14:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(2333);
  const calculatedTime = cost_n_timeController.calculateMinutes(2333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 2333 symbols(speed:700, Before work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 116.65,
    time: 4,
    deadline: +new Date(2021, 9, 4, 14, 0),
    deadline_date: "2021/10/4 14:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(2333);
  const calculatedTime = cost_n_timeController.calculateMinutes(2333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});

test("Responce calc for 2333 symbols(speed:700, After work)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));

  let deadlineController = new DeadlineController(10, 19);
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 700);

  const awaitedResponce: iResponce = {
    price: 116.65,
    time: 4,
    deadline: +new Date(2021, 9, 5, 14, 0),
    deadline_date: "2021/10/5 14:00:00",
  };

  const calculatedPrice = cost_n_timeController.calculateCost(2333);
  const calculatedTime = cost_n_timeController.calculateMinutes(2333);
  const calculatedDeadline =
    deadlineController.calculateDeadline(calculatedTime);

  const responce: iResponce = {
    price: calculatedPrice,
    time: calculatedTime / 60,
    deadline: +calculatedDeadline,
    deadline_date: deadlineController.toString(calculatedDeadline),
  };

  expect(responce).toStrictEqual(awaitedResponce);
});
