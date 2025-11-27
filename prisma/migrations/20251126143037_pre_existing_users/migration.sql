-- CreateTable
CREATE TABLE "preExistingUsers" (
    "id" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,

    CONSTRAINT "preExistingUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "preExistingUsers_gmail_key" ON "preExistingUsers"("gmail");
