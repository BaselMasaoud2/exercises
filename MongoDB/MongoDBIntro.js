
// Ex 1 

db.linkedon.aggregate([
    { $match: { salary: { $gt: 25000 } } },
    { $count: "count" }
]);

// Ex 2 

db.linkedon.find({}, { firstName: 1, salary: 1, _id: 0 })
    .sort({ salary: -1 })
    .limit(3)


// EX 3 

db.linkedon.count({"currentCompany.name": "Walmart", salary: {$gte: 7000}})
// EX OR 
db.linkedon.aggregate([
    {
        $match: {
            "currentCompany.name": "Walmart",
            salary: { $gte: 7000 }
        }
    },
    {
        $count: "totalPeople"
    }
]);

// EX 4 
db.linkedon.find(
    {"currentCompany.industry": {$in: ["Sales", "Retail"]}},
    {firstName: 1, lastName: 1, salary: 1, "currentCompany.name": 1, _id: 0}
).sort({salary: -1}).limit(1)

// EX 5 

db.linkedon.count({$or: [{"currentCompany.name": "Apple"}, {previousCompanies: {$elemMatch: {name: "Apple"}}}]})

