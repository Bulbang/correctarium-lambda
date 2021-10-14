import { DeadlineController } from "../controllers/DeadlineController";


beforeEach(() => {
  jest.useFakeTimers("modern");
});

afterEach(() => {
  jest.useRealTimers();
});

test("Deadline calculating in weekend", () => {
  jest.setSystemTime(new Date(2021, 9, 2));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60).toString()).toBe(
    new Date(2021, 9, 4, 11).toString()
  );
});

test("Deadline calculating in weekend", () => {
  jest.setSystemTime(new Date(2021, 9, 2));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(45).toString()).toBe(
    new Date(2021, 9, 4, 11).toString()
  );
});

test("Deadline calculating  before work (time req 00:00)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60).toString()).toBe(
    new Date(2021, 9, 4, 11).toString()
  );
});

test("Deadline calculating  before work (time req 10:00)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 10));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60).toString()).toBe(
    new Date(2021, 9, 4, 11).toString()
  );
});

test("Deadline calculating  before work (minutes % 30 > 0)", () => {
  jest.setSystemTime(new Date(2021, 9, 4));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(45).toString()).toBe(
    new Date(2021, 9, 4, 11).toString()
  );
});

test("Deadline calculating after work (time req: 20:00)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60).toString()).toBe(
    new Date(2021, 9, 5, 11).toString()
  );
});

test("Deadline calculating after work (time req: 19:00)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 19));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60).toString()).toBe(
    new Date(2021, 9, 5, 11).toString()
  );
});

test("Deadline calculating after work (minutes % 30 > 0)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 19));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(45).toString()).toBe(
    new Date(2021, 9, 5, 11).toString()
  );
});

test("Deadline calculating in work time (minutes % 60 > 0)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 12));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(90).toString()).toBe(
    new Date(2021, 9, 4, 13, 30).toString()
  );
});

test("Deadline calculating in work time (minutes % 60 > 0)", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 12));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(90).toString()).toBe(
    new Date(2021, 9, 4, 13, 30).toString()
  );
});

test("Deadline calculating in work time more than 1 day", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 12));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(600).toString()).toBe(
    new Date(2021, 9, 5, 13).toString()
  );
});
