import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const akari = await prisma.user.upsert({
    where: { mainkey: 1 },
    update: {},
    create: {
      name: "akari",
      id:"akari0904",
      gender: "female",
      password:"20020904",
    },
  });

  const ryusei = await prisma.user.upsert({
    where: { mainkey: 2 },
    update: {},
    create: {
        name: "ryusei",
        id:"ryusei0114",
        gender: "male",
        password:"20030114",
    },
  });
  console.log({ akari, ryusei });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });