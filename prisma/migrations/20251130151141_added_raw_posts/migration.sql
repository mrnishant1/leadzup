-- CreateTable
CREATE TABLE "rawPostsMatched" (
    "id" SERIAL NOT NULL,
    "gmail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rawPostsMatched_pkey" PRIMARY KEY ("id")
);
