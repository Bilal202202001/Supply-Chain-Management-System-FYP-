import { relations } from 'drizzle-orm'
import {uniqueIndex,timestamp, text, pgTable,serial, varchar, integer,json} from 'drizzle-orm/pg-core'

export const PricingTable = pgTable("pricings",{
    id : serial('id').primaryKey().notNull(),
    name : text('name').notNull(),
    price: integer('price').notNull(),
    description: json("description").notNull(),
    img:  text('img').notNull(),
    cate: integer("cate").references(()=>CategoryTable.id), 
    createdAt: timestamp('createdAt').defaultNow()
})
export const CategoryTable = pgTable("categories",{
    id : serial('id').primaryKey().notNull(),
    name : text('name').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
},(categories)=>{
    return {
        categoryNameIndex : uniqueIndex("categoryName_idx").on(categories.name)
    }
})
export const PricingCategoryRelations = relations(PricingTable, ({ one,many }) => ({
    category: one(CategoryTable, {
        fields: [PricingTable.cate],
        references: [CategoryTable.id]
    })
}));

//User Reviews
export const ReviewsTable = pgTable("reviews",{
    id : serial('id').primaryKey().notNull(),
    name : text('name').notNull(),
    designation: text('designation').notNull(),
    description: text("description").notNull(),
    img:  text('img').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})

export const MessageTable = pgTable("messeges",{
    id : serial('id').primaryKey().notNull(),
    name : text('name').notNull(),
    email: text('email').notNull(),
    subjects: text("subjects").notNull(),
    comments:  text('comments').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})

export const ServiceTable = pgTable("services",{
    id : serial('id').primaryKey().notNull(),
    icon : text('icon').notNull(),
    title: text('title').notNull(),
    description: text("description").notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})

export const OurTeamTable = pgTable("ourteam",{
    id : serial('id').primaryKey().notNull(),
    image : text('image').notNull(),
    title: text('title').notNull(),
    type: text("type").notNull(),
    fb: text("fb").notNull(),
    insta: text("insta").notNull(),
    linkedin: text("linkedin").notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})

export const SellersTable = pgTable("seller",{
    id : serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    type: text("type").notNull(),
    Email: text("Email").notNull(),
    phoneNo: text("phoneNo").notNull(),
    ibn: text("ibn").notNull(),
    productCat: text('productCat').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})
export const SuppliersTable = pgTable("supplier",{
    id : serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    type: text("type").notNull(),
    Email: text("Email").notNull(),
    phoneNo: text("phoneNo").notNull(),
    ibn: text("ibn").notNull(),
    productCat: text('productCat').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})

export const EmployeesTable = pgTable("employee",{
    id : serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    type: text("type").notNull(),
    Email: text("Email").notNull(),
    phoneNo: text("phoneNo").notNull(),
    ibn: text("ibn").notNull(),
    productCat: text('productCat').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})
export const OrderTable = pgTable("order",{
    id : serial('id').primaryKey().notNull(),
    productid : integer('productid').notNull(),
    name : text('name').notNull(),
    quantity: integer('quantity').notNull(),
    productname : text('productname').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})

export const ShipmentTable = pgTable("shipment", {
    id : serial('id').primaryKey().notNull(),
    productid : integer('productid').notNull(),
    name : text('name').notNull(),
    quantity: integer('quantity').notNull(),
    productname : text('productname').notNull(),
    status: text('status').default('orderBooked').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
});

export const PriceTable = pgTable("prices",{
    id : serial('id').primaryKey().notNull(),
    productid : integer('productid').notNull(),
    name : text('name').notNull(),
    price: integer('price').notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})

export const UsersTable = pgTable("users",{
    id : serial('id').primaryKey().notNull(),
    userName: varchar("userName").notNull(),
    type: varchar("type").notNull(),
    password: varchar("password").notNull(),
    email: varchar("email").notNull(),
    createdAt: timestamp('createdAt').defaultNow()
});