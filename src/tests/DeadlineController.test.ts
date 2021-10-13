import { DeadlineController } from "../controllers/DeadlineController";
import type { Config } from "@jest/types";

beforeEach(() => {
  jest.useFakeTimers("modern");
});

afterEach(() => {
  jest.useRealTimers();
});

test("Deadline calculating in weekend", () => {
  jest.setSystemTime(new Date(2021, 9, 2));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60)).toBe(
    new Date(2021, 9, 4, 11).toString()
  );
});
test("Deadline calculating  before work 1", () => {
  jest.setSystemTime(new Date(2021, 9, 4));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60)).toBe(
    new Date(2021, 9, 4, 11).toString()
  );
});

test("Deadline calculating  before work 2", () => {
    jest.setSystemTime(new Date(2021, 9, 4, 10));
    let controller = new DeadlineController(10, 19);
    expect(controller.calculateDeadline(60)).toBe(
      new Date(2021, 9, 4, 11).toString()
    );
  });

test("Deadline calculating after work 1", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 20));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60)).toBe(
    new Date(2021, 9, 5, 11).toString()
  );
});

test("Deadline calculating after work 2", () => {
  jest.setSystemTime(new Date(2021, 9, 4, 19));
  let controller = new DeadlineController(10, 19);
  expect(controller.calculateDeadline(60)).toBe(
    new Date(2021, 9, 5, 11).toString()
  );
});

test("Deadline calculating in work time", () => {
    jest.setSystemTime(new Date(2021, 9, 4, 12));
    let controller = new DeadlineController(10, 19);
    expect(controller.calculateDeadline(90)).toBe(
      new Date(2021, 9, 4, 13,30).toString()
    );
  });

  test("Deadline calculating in work time more than 1 day", () => {
    jest.setSystemTime(new Date(2021, 9, 4, 12));
    let controller = new DeadlineController(10, 19);
    expect(controller.calculateDeadline(600)).toBe(
      new Date(2021, 9, 5, 13).toString()
    );
  });

