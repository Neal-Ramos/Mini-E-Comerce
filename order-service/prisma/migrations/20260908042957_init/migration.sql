-- CreateTable
CREATE TABLE "Order" (
    "Id" SERIAL NOT NULL,
    "OrderId" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "ProductId" TEXT NOT NULL,
    "DateCreated" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_Id_key" ON "Order"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_OrderId_key" ON "Order"("OrderId");
