import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: 'Todo 1',
    isCompleted: false,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const todoItem of todoData) {
    const todo = await prisma.todo.create({
      data: todoItem,
    });
    console.log(`Created todo with id: ${todo.id} at ${todo.createdAt}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
