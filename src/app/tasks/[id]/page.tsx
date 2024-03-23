import EditForm from "@/app/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

async function EditTaskPage({ params }: { params: { id: string } }) {
  const task = await getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
}

export default EditTaskPage;
