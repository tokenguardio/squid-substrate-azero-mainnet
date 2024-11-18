const { assertNotNull } = require("@subsquid/util-internal");

const dappId = assertNotNull(process.env.DAPP_ID);
const createdTimestamp = assertNotNull(process.env.CREATED_TIMESTAMP);

module.exports = class Data {
  name = `Data${createdTimestamp}`;

  async up(db) {
    await db.query(
      `CREATE TABLE "dapp_analytics_${dappId}" (
        "id" character varying NOT NULL, 
        "transaction_hash" text NOT NULL, 
        "block_number" integer NOT NULL, 
        "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, 
        "dapp_id" text NOT NULL, 
        "caller" text, 
        "contract" text NOT NULL, 
        "success" boolean, 
        "type" character varying(5) NOT NULL, 
        "name" text, 
        "value" numeric, 
        "decoded_args" jsonb, 
        CONSTRAINT "PK_${dappId}" PRIMARY KEY ("id")
      )`
    );

    await db.query(
      `CREATE INDEX "IDX_${dappId}_timestamp" ON "dapp_analytics_${dappId}" ("timestamp")`
    );
    await db.query(
      `CREATE INDEX "IDX_${dappId}_caller" ON "dapp_analytics_${dappId}" ("caller")`
    );
    await db.query(
      `CREATE INDEX "IDX_${dappId}_contract" ON "dapp_analytics_${dappId}" ("contract")`
    );
    await db.query(
      `CREATE INDEX "IDX_${dappId}_success" ON "dapp_analytics_${dappId}" ("success")`
    );
    await db.query(
      `CREATE INDEX "IDX_${dappId}_name" ON "dapp_analytics_${dappId}" ("name")`
    );
  }

  async down(db) {
    await db.query(`DROP INDEX IF EXISTS "IDX_${dappId}_timestamp"`);
    await db.query(`DROP INDEX IF EXISTS "IDX_${dappId}_caller"`);
    await db.query(`DROP INDEX IF EXISTS "IDX_${dappId}_contract"`);
    await db.query(`DROP INDEX IF EXISTS "IDX_${dappId}_success"`);
    await db.query(`DROP INDEX IF EXISTS "IDX_${dappId}_name"`);

    await db.query(`DROP TABLE "dapp_analytics_${dappId}"`);
  }
};
