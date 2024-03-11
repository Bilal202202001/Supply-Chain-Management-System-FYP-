CREATE TABLE IF NOT EXISTS "prices" (
	"id" serial PRIMARY KEY NOT NULL,
	"productid" integer NOT NULL,
	"name" text NOT NULL,
	"price" integer NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userName" varchar NOT NULL,
	"type" varchar NOT NULL,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "shipment" DROP COLUMN IF EXISTS "quantity";