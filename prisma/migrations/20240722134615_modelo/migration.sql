-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);
