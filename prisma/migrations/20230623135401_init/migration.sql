-- AlterTable
ALTER TABLE "Movie" ADD COLUMN "categoryString" TEXT GENERATED ALWAYS AS (
    CASE
        WHEN category = 'SHARK' THEN 'SHARK'
        WHEN category = 'ZOMBIE'THEN 'ZOMBIE'
        WHEN category = 'OTHER' THEN 'OTHER'
        ELSE ''
        END
    ) STORED;
