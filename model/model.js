db.T_AUTHORITY.insert({"_id" : "ROLE_ADMIN"});
db.T_AUTHORITY.insert({"_id" : "ROLE_USER"});
db.T_USER.ensureIndex({"login" : 1});
db.T_USER.ensureIndex({"email" : 1});

db.T_USER.insert(
    {
        "_id" : "user-0",
        "login" : "system",
        "password" : "$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG",
        "first_name": "",
        "last_name": "System",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": [{"_id": "ROLE_ADMIN"}, {"_id": "ROLE_USER"}]
    });
db.T_USER.insert(
    {
        "_id" : "user-1",
        "login" : "anonymousUser",
        "password" : "$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO",
        "first_name": "Anonymous",
        "last_name": "User",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": []
    });
db.T_USER.insert(
    {
        "_id" : "user-2",
        "login" : "admin",
        "password" : "$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC",
        "first_name": "",
        "last_name": "Administrator",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": [{"_id": "ROLE_ADMIN"}, {"_id": "ROLE_USER"}]
    });
db.T_USER.insert(
    {
        "_id" : "user-3",
        "login" : "user",
        "password" : "$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K",
        "first_name": "",
        "last_name": "User",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": [{"_id": "ROLE_USER"}]
    });

db.compound.insert({
    structure: "O=C(c1ccc(nc1)n1[nH]cc(c1=O)n1nncc1)OC(C)(C)C",
    university: "University Of Oxford",
    price: 10,
    unit: "mg",
    user_id: 1
});
db.compound.insert({
    structure: "CCOC(=O)N1C/C(=C\c2ccccc2)/C(=O)/C(=C/c2ccccc2)/C1",
    university: "University Of Bristol",
    price: 120,
    unit: "mg",
    user_id: 1
});
db.compound.insert({
    structure: "OC(=O)c1ccc(c2c1nccn2)O",
    university: "University Of Reading",
    price: 30,
    unit: "mg",
    user_id: 1
});
db.compound.insert({
    structure: "CN1CCN(CC1)c1nc(Cl)c(c(=N)[nH]1)Br",
    university: "University Of Oxford",
    price: 5,
    unit: "mg",
    user_id: 1
});
