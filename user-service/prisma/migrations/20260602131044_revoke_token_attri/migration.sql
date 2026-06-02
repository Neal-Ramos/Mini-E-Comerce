-- AlterTable
ALTER TABLE "RefreshToken" ADD COLUMN     "IsRevoked" BOOLEAN NOT NULL DEFAULT false;
