import Link from "next/link";
import TaskFormCustom from "@/app/components/TaskFormCustom";
import TaskList from "@/app/components/TaskList";

function TasksPage() {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom />
      <TaskList />

      <Link href="/">homepage</Link>
    </div>
  );
}

export default TasksPage;
