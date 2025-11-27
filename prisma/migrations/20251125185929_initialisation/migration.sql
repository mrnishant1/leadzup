-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "PurposeOfUse" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT[],
    "credits" INTEGER NOT NULL,
    "competitors" TEXT[],
    "activePlan" TEXT NOT NULL,
    "isDemoProvided" BOOLEAN NOT NULL,
    "currentCredits" INTEGER NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneratedLeads" (
    "id" SERIAL NOT NULL,
    "post" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GeneratedLeads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "directMessages" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "directMessages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_gmail_key" ON "UserData"("gmail");

-- CreateIndex
CREATE UNIQUE INDEX "directMessages_id_key" ON "directMessages"("id");

-- AddForeignKey
ALTER TABLE "GeneratedLeads" ADD CONSTRAINT "GeneratedLeads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "directMessages" ADD CONSTRAINT "directMessages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
