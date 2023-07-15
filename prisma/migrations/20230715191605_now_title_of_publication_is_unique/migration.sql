/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `publications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "publications_title_key" ON "publications"("title");
