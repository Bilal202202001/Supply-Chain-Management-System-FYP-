CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messeges" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"subjects" text NOT NULL,
	"comments" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ourteam" (
	"id" serial PRIMARY KEY NOT NULL,
	"image" text NOT NULL,
	"title" text NOT NULL,
	"type" text NOT NULL,
	"fb" text NOT NULL,
	"insta" text NOT NULL,
	"linkedin" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pricings" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" integer NOT NULL,
	"description" json NOT NULL,
	"img" text NOT NULL,
	"cate" integer,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"designation" text NOT NULL,
	"description" text NOT NULL,
	"img" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"icon" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "categoryName_idx" ON "categories" ("name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pricings" ADD CONSTRAINT "pricings_cate_categories_id_fk" FOREIGN KEY ("cate") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
