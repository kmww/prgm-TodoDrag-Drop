export default function TaskQueue() {
  const tasks = [];

  this.addTask = (task) => {
    tasks.push(task);
  };

  this.run = async () => {
    if (tasks.length > 0) {
      const task = tasks.shift();
      await task();
      this.run();
    }
  };

  this.hasTask = () => tasks.length > 0;
}
