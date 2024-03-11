CREATE TABLE IF NOT EXISTS "employee" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"Email" text NOT NULL,
	"phoneNo" text NOT NULL,
	"ibn" text NOT NULL,
	"productCat" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
