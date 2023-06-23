# prisma-generated-column

以下の URL で紹介されている WorkAround を試すためのリポジトリ  
https://github.com/nikolasburk/generated-columns

## Setup

1. run `npm install` command
2. edit `.env` file
3. run `docker-compose up` command
4. run `npx prisma migrate dev` command

## Test

1. run `npx ts-node insert.ts` command
2. run `npx ts-node select.ts` command
3. switch `add-generated-column` branch
4. run `npx prisma migrate dev` command
5. run `npx ts-node insert.ts` command
6. run `npx ts-node select.ts` command

以下の SQL を実行し、 `categoryString` カラムに値が入っていることが確認できれば OK です。

```sql
SELECT * FROM "Movie"
```
