/*
  Warnings:

  - You are about to drop the column `userId` on the `GeneratedLeads` table. All the data in the column will be lost.
  - Added the required column `userMail` to the `GeneratedLeads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GeneratedLeads" DROP CONSTRAINT "GeneratedLeads_userId_fkey";

-- AlterTable
ALTER TABLE "GeneratedLeads" DROP COLUMN "userId",
ADD COLUMN     "userMail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GeneratedLeads" ADD CONSTRAINT "GeneratedLeads_userMail_fkey" FOREIGN KEY ("userMail") REFERENCES "UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
