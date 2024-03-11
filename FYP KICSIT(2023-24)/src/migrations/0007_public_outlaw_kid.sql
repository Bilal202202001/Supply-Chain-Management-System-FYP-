CREATE TABLE IF NOT EXISTS "order" (
	"id" serial PRIMARY KEY NOT NULL,
	"productid" integer NOT NULL,
	"name" text NOT NULL,
	"quantity" integer NOT NULL,
	"productname" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shipment" (
	"id" serial PRIMARY KEY NOT NULL,
	"productid" integer NOT NULL,
	"name" text NOT NULL,
	"quantity" integer NOT NULL,
	"productname" text NOT NULL,
	"status" text DEFAULT 'orderBooked' NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
