import Link from "next/link";
import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

async function PrismaExample() {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text-7xl">Prisma Example</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}

      <Link href="/">homepage</Link>
    </div>
  );
}

export default PrismaExample;
