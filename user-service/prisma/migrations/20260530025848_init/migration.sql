-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "UserId" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "MiddleName" TEXT,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "ContactNumber" TEXT NOT NULL,
    "BirthDay" TIMESTAMP(3) NOT NULL,
    "DateCreated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "Id" SERIAL NOT NULL,
    "Token" TEXT NOT NULL,
    "ExpiryDate" TIMESTAMP(3) NOT NULL,
    "DateCreated" TIMESTAMP(3) NOT NULL,
    "UserId" TEXT,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_UserId_key" ON "User"("UserId");

-- CreateIndex
CREATE INDEX "User_UserId_Email_Password_FirstName_LastName_idx" ON "User"("UserId", "Email", "Password", "FirstName", "LastName");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_Token_key" ON "RefreshToken"("Token");

-- CreateIndex
CREATE INDEX "RefreshToken_Token_UserId_idx" ON "RefreshToken"("Token", "UserId");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE NO ACTION;
