import {neon, neonConfig} from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http'
import { desc, eq, sql as sqld } from "drizzle-orm";
import * as schema from './schema'
import { getSessionUser } from "./session";
import { hashPassword } from "./passwordUtils";
neonConfig.fetchConnectionCache = true;
const sql = neon('postgres://Bilal202202001:4nCGWpjZQv7R@ep-quiet-cloud-00879226.us-east-1.aws.neon.tech/fypMarketPlace')
const db = drizzle(sql, { schema })

// console.log(sql`SELECT NOW()`);

export async function helloWorld() {
    const start = new Date()
    const [dbResponse] = await sql`SELECT NOW();`
    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : ""
    const end = new Date()
    return { dbNow: dbNow, Latency: Math.abs(end - start) }
}




async function configureDB() {
    await sql`CREATE TABLE IF NOT EXISTS "pricings" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" text NOT NULL,
        "price" integer NOT NULL,
        "description" json NOT NULL,
        "img" text NOT NULL,
        "cate" integer,
        "createdAt" timestamp DEFAULT now()
    );`

    await sql`CREATE TABLE IF NOT EXISTS "categories" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`

    await sql `CREATE TABLE IF NOT EXISTS "reviews" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" text NOT NULL,
        "designation" text NOT NULL,
        "description" text NOT NULL,
        "img" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`

    await sql `CREATE UNIQUE INDEX IF NOT EXISTS "categoryName_idx" ON "categories" ("name");`
    await sql `DO $$ BEGIN
    ALTER TABLE "pricings" ADD CONSTRAINT "pricings_cate_categories_id_fk" FOREIGN KEY ("cate") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
   EXCEPTION
    WHEN duplicate_object THEN null;
   END $$;`
  
   await sql `CREATE TABLE IF NOT EXISTS "messeges" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"subjects" text NOT NULL,
	"comments" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
    );`

    await sql`CREATE TABLE IF NOT EXISTS "services" (
        "id" serial PRIMARY KEY NOT NULL,
        "icon" text NOT NULL,
        "title" text NOT NULL,
        "description" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );
    `
    await sql`CREATE TABLE IF NOT EXISTS "ourteam" (
        "id" serial PRIMARY KEY NOT NULL,
        "image" text NOT NULL,
        "title" text NOT NULL,
        "type" text NOT NULL,
        "fb" text NOT NULL,
        "insta" text NOT NULL,
        "linkedin" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`
    
    await sql`CREATE TABLE IF NOT EXISTS "seller" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" text NOT NULL,
        "type" text NOT NULL,
        "Email" text NOT NULL,
        "phoneNo" text NOT NULL,
        "ibn" text NOT NULL,
        "productCat" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`
    await sql`CREATE TABLE IF NOT EXISTS "supplier" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" text NOT NULL,
        "type" text NOT NULL,
        "Email" text NOT NULL,
        "phoneNo" text NOT NULL,
        "ibn" text NOT NULL,
        "productCat" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );
    `
    await sql`CREATE TABLE IF NOT EXISTS "employee" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" text NOT NULL,
        "type" text NOT NULL,
        "Email" text NOT NULL,
        "phoneNo" text NOT NULL,
        "ibn" text NOT NULL,
        "productCat" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );
    `
    await sql`CREATE TABLE IF NOT EXISTS "order" (
        "id" serial PRIMARY KEY NOT NULL,
        "productid" integer NOT NULL,
        "name" text NOT NULL,
        "quantity" integer NOT NULL,
        "productname" text NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );
    `
    await sql `CREATE TABLE IF NOT EXISTS "shipment" (
        "id" serial PRIMARY KEY NOT NULL,
        "productid" integer NOT NULL,
        "name" text NOT NULL,
        "quantity" integer NOT NULL,
        "productname" text NOT NULL,
        "status" text DEFAULT 'orderBooked' NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`

    await sql `CREATE TABLE IF NOT EXISTS "users" (
        "id" serial PRIMARY KEY NOT NULL,
        "userName" varchar NOT NULL,
        "type" varchar NOT NULL,
        "password" varchar NOT NULL,
        "email" varchar NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`

    await sql `CREATE TABLE IF NOT EXISTS "prices" (
        "id" serial PRIMARY KEY NOT NULL,
        "productid" integer NOT NULL,
        "name" text NOT NULL,
        "price" integer NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`
}

configureDB().catch(err => console.log("Error while config : ", err))

// Users Portion

export async function registerUser(newUserData) {
    const {userName,type,password,email} = newUserData
    console.log("In DB : ",password);
    const toInsertData = {
        userName: userName,
        type:  type,
        password: hashPassword(password)
    }
    if(email){
        toInsertData["email"] = email
    }
    console.log("To Insert : ",toInsertData);
    
    let response = [{message: "Failed to register. Please try Again"}]
    let responseStatus = 400
    try {
        response = await db.insert(schema.UsersTable).values(toInsertData).returning()
        responseStatus = 201

    } catch ({ name, message }) {
        if (`${message}`.includes("User Name is Taken, Please Try Some Other...!")) {
            response = [{ message: `Username has already been Added, Please Try Again...!` }]
        } else {

            response = [{ message: `Please Try Some Other...!` }]
        }
    }
    return { responseData: response, responseStatus: responseStatus }
}

export async function getUserByUsername(username) {
    return await db.select().from(schema.UsersTable).where(eq(schema.UsersTable.userName,username));;
}

export async function getUserByUserID(userID) {
    return await db.select({
        userName : schema.UsersTable.userName
    }).from(schema.UsersTable).where(eq(schema.UsersTable.id,userID))
}


export async function getProducts(limit, offset,category) {
        const lookuoLimit = limit ? limit : 10
        const loopupOffset = offset ? offset : 0
        const categoryGiven = category ? category : null
        console.log("CategoryGiven : " , categoryGiven);
        

        if(categoryGiven === 'ALL'){
            return await db.select().from(schema.PricingTable).limit(lookuoLimit).offset(loopupOffset)
        }

        else if(categoryGiven != 'ALL')
        {
            return await db.select().from(schema.PricingTable).limit(lookuoLimit).offset(loopupOffset).where(eq(schema.PricingTable.cate,categoryGiven))
           
        }
    }
export async function addProducts(product) {
    
        // console.log("DB Recieved", product);
        
    
        const newProduct = { name: product.name, price: product.price, img: product.img, cate: product.cate,
        description : product.description}
    
        // console.log("New Message : ",newProduct)
    
        let response = await db.insert(schema.PricingTable).values(newProduct).returning()
        let responseStatus = 201
        return { responseData: response, responseStatus: responseStatus }
    }

export async function deleteProduct(productId) {
        try {
            const deletedProduct = await db.delete(schema.PricingTable).where(eq(schema.PricingTable.id,productId)).returning(); 
    
            if (!deletedProduct) {
                return {
                    responseData: { message: "Product not found" },
                    responseStatus: 404
                };
            }
            return {
                responseData: { message: "Product deleted successfully" },
                responseStatus: 200
            };
        } catch (error) {
            console.error("Error deleting product:", error);
            return {
                responseData: { message: "Error deleting product" },
                responseStatus: 500
            };
        }
    }  

//Categories of Products    
export async function getCategory(limit, offset) {
        const lookuoLimit = limit ? limit : 10
        const loopupOffset = offset ? offset : 0
        return await db.select().from(schema.CategoryTable).limit(lookuoLimit).offset(loopupOffset)
    }

export async function addCategories(category) {
    
        // console.log("DB Recieved", category);
        const newcategory = { name: category.name}
    
        // console.log("New Message : ",newcategory)
    
        let response = await db.insert(schema.CategoryTable).values(newcategory).returning()
        let responseStatus = 201
        return { responseData: response, responseStatus: responseStatus }
    }
export async function deleteCategory(categoryID) {
        try {
            const deleteCategory = await db.delete(schema.CategoryTable).where(eq(schema.CategoryTable.id,categoryID)).returning(); 
    
            if (!deleteCategory) {
                return {
                    responseData: { message: "Category not found" },
                    responseStatus: 404
                };
            }
            return {
                responseData: { message: "Category deleted successfully" },
                responseStatus: 200
            };
        } catch (error) {
            console.error("Error deleting Category:", error);
            return {
                responseData: { message: "Error deleting Category" },
                responseStatus: 500
            };
        }
    }  


    
    
    // Customers Reviews     
    export async function getReviews(limit, offset) {
        const lookuoLimit = limit ? limit : 10
        const loopupOffset = offset ? offset : 0
        return await db.select().from(schema.ReviewsTable).limit(lookuoLimit).offset(loopupOffset)
    }
    export async function deleteReview(reviewID) {
        try {
            const deleteReview = await db.delete(schema.ReviewsTable).where(eq(schema.ReviewsTable.id,reviewID)).returning(); 
    
            if (!deleteReview) {
                return {
                    responseData: { message: "Review not found" },
                    responseStatus: 404
                };
            }
            return {
                responseData: { message: "Review deleted successfully" },
                responseStatus: 200
            };
        } catch (error) {
            console.error("Error deleting Review:", error);
            return {
                responseData: { message: "Error deleting Review" },
                responseStatus: 500
            };
        }
    }          
    
    
    // Our Services    
    
export async function addServices(service) {
        
            // console.log("DB Recieved", category);
            const newService = { title: service.title,icon: service.icon,description: service.description}
        
            // console.log("New Message : ",newservice)
        
            let response = await db.insert(schema.ServiceTable).values(newService).returning()
            let responseStatus = 201
            return { responseData: response, responseStatus: responseStatus }
        }
        
export async function getServices(limit, offset) {
        const lookuoLimit = limit ? limit : 10
        const loopupOffset = offset ? offset : 0
        return await db.select().from(schema.ServiceTable).limit(lookuoLimit).offset(loopupOffset)
    }
export async function deleteService(serviceID) {
        try {
            const deleteService = await db.delete(schema.ServiceTable).where(eq(schema.ServiceTable.id,serviceID)).returning(); 
    
            if (!deleteService) {
                return {
                    responseData: { message: "Service not found" },
                    responseStatus: 404
                };
            }
            return {
                responseData: { message: "Service deleted successfully" },
                responseStatus: 200
            };
        } catch (error) {
            console.error("Error deleting Service:", error);
            return {
                responseData: { message: "Error deleting Service" },
                responseStatus: 500
            };
        }
    }  





// Our Teams    
export async function getOurTeam(limit, offset) {
        const lookuoLimit = limit ? limit : 10
        const loopupOffset = offset ? offset : 0
        return await db.select().from(schema.OurTeamTable).limit(lookuoLimit).offset(loopupOffset)
    }
export async function addOurTeam(team) {
    
        // console.log("DB Recieved", category);
        const newTeam = { title: team.title,image: team.image,type: team.type,fb: team.fb,insta: team.insta,linkedin: team.linkedin}
    
        // console.log("New Message : ",newteam)
    
        let response = await db.insert(schema.OurTeamTable).values(newTeam).returning()
        let responseStatus = 201
        return { responseData: response, responseStatus: responseStatus }
    }
export async function deleteOurTeam(ourTeamId) {
        try {
            const deleteOurTeam = await db.delete(schema.OurTeamTable).where(eq(schema.OurTeamTable.id,ourTeamId)).returning(); 
    
            if (!deleteOurTeam) {
                return {
                    responseData: { message: "TeamID not found" },
                    responseStatus: 404
                };
            }
            return {
                responseData: { message: "TeamID deleted successfully" },
                responseStatus: 200
            };
        } catch (error) {
            console.error("Error deleting TeamID:", error);
            return {
                responseData: { message: "Error deleting TeamID" },
                responseStatus: 500
            };
        }
    }  
    
    

// Add messges

export async function addMesseges(message) {
    
    // console.log("DB Recieved", message);
    

    const newMessage = { name: message.name, email: message.email, subjects: message.subject, comments: message.comments}

    // console.log("New Message : ",newMessage)

    let response = await db.insert(schema.MessageTable).values(newMessage).returning()
    let responseStatus = 201
    return { responseData: response, responseStatus: responseStatus }
}
export async function getMesseges(limit, offset) {

    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.MessageTable).limit(lookuoLimit).offset(loopupOffset)
}

export async function deleteMessage(messageID) {
    try {
        const deleteMessage = await db.delete(schema.MessageTable).where(eq(schema.MessageTable.id,messageID)).returning(); 

        if (!deleteMessage) {
            return {
                responseData: { message: "Message not found" },
                responseStatus: 404
            };
        }
        return {
            responseData: { message: "Message deleted successfully" },
            responseStatus: 200
        };
    } catch (error) {
        console.error("Error deleting Message:", error);
        return {
            responseData: { message: "Error deleting Message" },
            responseStatus: 500
        };
    }
}  

//Sellers
export async function getSellers(limit, offset) {
    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.SellersTable).limit(lookuoLimit).offset(loopupOffset)
}

export async function addSeller(seller) {

    // console.log("DB Recieved", seller);
    const newSeller = { name: seller.name, type: seller.type, Email: seller.Email,phoneNo: seller.phoneNo,ibn: seller.ibn, productCat: seller.productCat}

    // console.log("New Message : ",newseller)

    let response = await db.insert(schema.SellersTable).values(newSeller).returning()
    let responseStatus = 201
    return { responseData: response, responseStatus: responseStatus }
}
export async function deleteSeller(sellerID) {
    try {
        const deleteSeller = await db.delete(schema.SellersTable).where(eq(schema.SellersTable.id,sellerID)).returning(); 

        if (!deleteCategory) {
            return {
                responseData: { message: "Seller not found" },
                responseStatus: 404
            };
        }
        return {
            responseData: { message: "Seller deleted successfully" },
            responseStatus: 200
        };
    } catch (error) {
        console.error("Error deleting Seller:", error);
        return {
            responseData: { message: "Error deleting Seller" },
            responseStatus: 500
        };
    }
}

//Supplier
export async function getSupplier(limit, offset) {
    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.SuppliersTable).limit(lookuoLimit).offset(loopupOffset)
}

export async function addSupplier(seller) {

    // console.log("DB Recieved", seller);
    const newSupplier = { name: seller.name, type: seller.type, Email: seller.Email,phoneNo: seller.phoneNo,ibn: seller.ibn, productCat: seller.productCat}

    // console.log("New Message : ",newseller)

    let response = await db.insert(schema.SuppliersTable).values(newSupplier).returning()
    let responseStatus = 201
    return { responseData: response, responseStatus: responseStatus }
}
export async function deleteSupplier(priceID) {
    try {
        const deletePrice = await db.delete(schema.SuppliersTable).where(eq(schema.SuppliersTable.id,priceID)).returning(); 

        if (!deletePrice) {
            return {
                responseData: { message: "Price not found" },
                responseStatus: 404
            };
        }
        return {
            responseData: { message: "Price deleted successfully" },
            responseStatus: 200
        };
    } catch (error) {
        console.error("Error deleting Price:", error);
        return {
            responseData: { message: "Error deleting Price" },
            responseStatus: 500
        };
    }
}

//Employee
export async function getEmployee(limit, offset) {
    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.EmployeesTable).limit(lookuoLimit).offset(loopupOffset)
}

export async function addEmployee(employee) {

    // console.log("DB Recieved", employee);
    const newEmployee = { name: employee.name, type: employee.type, Email: employee.Email,phoneNo: employee.phoneNo,ibn: employee.ibn, productCat: employee.productCat}

    // console.log("New Message : ",newseller)

    let response = await db.insert(schema.EmployeesTable).values(newEmployee).returning()
    let responseStatus = 201
    return { responseData: response, responseStatus: responseStatus }
}
export async function deleteEmployee(supplierID) {
    try {
        const deleteEmployee = await db.delete(schema.EmployeesTable).where(eq(schema.EmployeesTable.id,supplierID)).returning(); 

        if (!deleteEmployee) {
            return {
                responseData: { message: "Employee not found" },
                responseStatus: 404
            };
        }
        return {
            responseData: { message: "Employee deleted successfully" },
            responseStatus: 200
        };
    } catch (error) {
        console.error("Error deleting Employee:", error);
        return {
            responseData: { message: "Error deleting Employee" },
            responseStatus: 500
        };
    }
}

//Prices
export async function getPrice(limit, offset) {
    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.PriceTable).limit(lookuoLimit).offset(loopupOffset)
}

export async function addPrices(price) {

    // console.log("DB Recieved", price);
    const newPrice = { productid: price.productid, name: price.name, price: price.price}

    // console.log("New Message : ",newseller)

    let response = await db.insert(schema.PriceTable).values(newPrice).returning()
    let responseStatus = 201
    return { responseData: response, responseStatus: responseStatus }
}
export async function deletePrices(supplierID) {
    try {
        const deleteEmployee = await db.delete(schema.PriceTable).where(eq(schema.PriceTable.id,priceID)).returning(); 

        if (!deleteEmployee) {
            return {
                responseData: { message: "Employee not found" },
                responseStatus: 404
            };
        }
        return {
            responseData: { message: "Employee deleted successfully" },
            responseStatus: 200
        };
    } catch (error) {
        console.error("Error deleting Employee:", error);
        return {
            responseData: { message: "Error deleting Employee" },
            responseStatus: 500
        };
    }
}



//order and shipment

export async function addOrderShipments(orderShipment) {
    
    const newData = {  name: orderShipment.name,
    productid: orderShipment.productid,
    productname: orderShipment.productname,
    quantity: orderShipment.quantity}
    console.log(newData);
    let response = await db.insert(schema.ShipmentTable).values(newData).returning()
    await db.insert(schema.OrderTable).values(newData);
    let responseStatus = 201
    return { responseData: response, responseStatus: responseStatus }
}

export async function getOrders(limit, offset) {
    const lookuoLimit = limit ? limit : 100
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.OrderTable).limit(lookuoLimit).offset(loopupOffset)
}

export async function deleteOrder(orderID) {
    try {
        const deleteMessage = await db.delete(schema.OrderTable).where(eq(schema.OrderTable.id,orderID)).returning(); 

        if (!deleteMessage) {
            return {
                responseData: { message: "Message not found" },
                responseStatus: 404
            };
        }
        return {
            responseData: { message: "Message deleted successfully" },
            responseStatus: 200
        };
    } catch (error) {
        console.error("Error deleting Message:", error);
        return {
            responseData: { message: "Error deleting Message" },
            responseStatus: 500
        };
    }
}  

export async function getShipments(limit, offset) {
    const lookuoLimit = limit ? limit : 100
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.ShipmentTable).limit(lookuoLimit).offset(loopupOffset)
}

export async function getShipmentRecord(limit, offset,idValue) {
    const lookuoLimit = limit ? limit : 100
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.ShipmentTable).limit(lookuoLimit).offset(loopupOffset).where(eq(schema.ShipmentTable.id,idValue))    
}

export async function deleteShipment(shipmentID) {
    try {
        const deleteMessage = await db.delete(schema.ShipmentTable).where(eq(schema.ShipmentTable.id,shipmentID)).returning(); 

        if (!deleteMessage) {
            return {
                responseData: { message: "Message not found" },
                responseStatus: 404
            };
        }
        return {
            responseData: { message: "Message deleted successfully" },
            responseStatus: 200
        };
    } catch (error) {
        console.error("Error deleting Message:", error);
        return {
            responseData: { message: "Error deleting Message" },
            responseStatus: 500
        };
    }
}  

export async function editShipment(idValue, updatedData) {
    console.log("Update Data : ", updatedData);
    const { status } = updatedData;

    try {
        const editResponse = await db.update(schema.ShipmentTable).set(updatedData).where(eq(schema.ShipmentTable.id, idValue));

        if (editResponse > 0) {
            const updatedRecord = await db.select().from(schema.ShipmentTable).where(eq(schema.ShipmentTable.id, idValue)).first();
            return { responseData: updatedRecord, responseStatus: 200 };
        } else {
            return { responseData: { error: "Record not found or no changes made" }, responseStatus: 404 };
        }
    } catch (error) {
        console.error("Error editing shipment:", error);
        return { responseData: { error: "Internal Server Error" }, responseStatus: 500 };
    }
}
