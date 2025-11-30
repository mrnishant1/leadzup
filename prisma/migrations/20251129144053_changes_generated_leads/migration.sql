-- DropForeignKey
ALTER TABLE "GeneratedLeads" DROP CONSTRAINT "GeneratedLeads_userMail_fkey";

-- AddForeignKey
ALTER TABLE "GeneratedLeads" ADD CONSTRAINT "GeneratedLeads_userMail_fkey" FOREIGN KEY ("userMail") REFERENCES "UserData"("gmail") ON DELETE RESTRICT ON UPDATE CASCADE;
