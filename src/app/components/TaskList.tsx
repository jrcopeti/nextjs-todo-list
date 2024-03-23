import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actions";

async function TaskList() {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="my-8 text-lg font-medium">No tasks to show...</h2>;
  }

  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="mb-4 flex items-center justify-between rounded-lg border border-base-300 px-6 py-6 shadow-lg"
          >
            <h2
              className={`text-lg capitalize ${task.completed ? "line-through" : null}`}
            >
              {task.content}
            </h2>
            <div className="flex items-center gap-6">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-accent btn-xs"
              >
                Edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
