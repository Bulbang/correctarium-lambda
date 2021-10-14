import { Cost_n_TimeController } from "../controllers/Cost_n_TimeController";

test("Calculating cost for 500 symbols (cost: 0.05, minimal: 50)", () => {
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
  expect(cost_n_timeController.calculateCost(500)).toBe(50)
});

test("Calculating cost for 1333 symbols (cost: 0.05, minimal: 50)", () => {
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
  expect(cost_n_timeController.calculateCost(1333)).toBe(66.65)
});

test("Calculating cost for 1500 symbols (cost: 0.05, minimal: 50)", () => {
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
  expect(cost_n_timeController.calculateCost(1500)).toBe(75)
});

test("Calculating cost for 2000 symbols (cost: 0.05, minimal: 50)", () => {
  const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
  expect(cost_n_timeController.calculateCost(2000)).toBe(100)
});

test("Calculating time for 500 symbols (speed: 1333)", () => {
    const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
    expect(cost_n_timeController.calculateMinutes(500)).toBe(60)
  });
  
  test("Calculating time for 1333 symbols (speed: 1333)", () => {
    const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
    expect(cost_n_timeController.calculateMinutes(1333)).toBe(60)
  });
  
  test("Calculating time for 1500 symbols (speed: 1333)", () => {
    const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
    expect(cost_n_timeController.calculateMinutes(1500)).toBe(90)
  });
  
  test("Calculating time for 2000 symbols (speed: 1333)", () => {
    const cost_n_timeController = new Cost_n_TimeController(0.05, 50, 1333);
    expect(cost_n_timeController.calculateMinutes(2000)).toBe(120)
  });
