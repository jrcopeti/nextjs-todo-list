import { updateTask } from "@/utils/actions";

interface EditFormProps {
  task: {
    id: string;
    content: string;
    completed: boolean;
    createdAt: Date;
  } | null;
}

function EditForm({ task }: EditFormProps) {

  if (!task) {
    return <div>Task not found.</div>;
  }
  const { id, content, completed } = task;
  console.log(task);
  return (
    <form
      action={updateTask}
      className="max-w-sm rounded-lg border border-base-300 bg-base-100 p-12"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />

      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer" />
        <span className="label-text">completed</span>
        <input
          type="checkbox"
          defaultChecked={completed}
          name="completed"
          id="completed"
          className="checkbox-primary checkbox checkbox-sm"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm btn-block">
        Update
      </button>
    </form>
  );
}

export default EditForm;
