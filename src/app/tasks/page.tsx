import Link from "next/link";
import TaskForm from "@/app/components/TaskForm";
import TaskList from "@/app/components/TaskList";

function TasksPage() {
  return (
    <div className='max-w-lg'>
      <TaskForm />
      <TaskList />

      <Link href="/">homepage</Link>
    </div>
  );
}

export default TasksPage;
