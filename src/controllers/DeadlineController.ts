export class DeadlineController {
  constructor(private workDayBeginning: number, private workDayEnd: number) {}

  calculateDeadline(minutes: number) {
    const currentDate = new Date();

    let deadline = currentDate;
    if (
      deadline.getMinutes() > 15 &&
      deadline.getHours() < this.workDayEnd &&
      deadline.getHours() > this.workDayBeginning
    ) {
      deadline.setMinutes(30, 0, 0);
      minutes-=30
    } else deadline.setMinutes(0, 0, 0);

    while (deadline.getDay() == 6 || deadline.getDay() == 0) {
      deadline.setDate(deadline.getDate() + 1);
    }

    for (
      let counter = minutes + deadline.getMinutes();
      counter > 0;
      counter -= 30
    ) {
      if (deadline.getHours() < this.workDayBeginning) {
        deadline.setHours(this.workDayBeginning, 0, 0, 0);
      }

      if (deadline.getHours() >= this.workDayEnd) {
        deadline.setDate(deadline.getDate() + 1);
        deadline.setHours(this.workDayBeginning);
        deadline.setMinutes(deadline.getMinutes() + 30, 0, 0);

        while (deadline.getDay() == 6 || deadline.getDay() == 0) {
          deadline.setDate(deadline.getDate() + 1);
        }
        continue;
      }
      deadline.setMinutes(deadline.getMinutes() + 30);
    }

    return deadline;
  }
  toString(deadline: Date) {
    if (deadline.getMinutes() == 0) {
      return `${deadline.getFullYear()}/${
        deadline.getMonth() + 1
      }/${deadline.getDate()} ${deadline.getHours()}:${deadline.getMinutes()}0:00`;
    }
    return `${deadline.getFullYear()}/${
      deadline.getMonth() + 1
    }/${deadline.getDate()} ${deadline.getHours()}:${deadline.getMinutes()}:00`;
  }
}
