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

//db.compound.insert({
//    structure: "O=C(c1ccc(nc1)n1[nH]cc(c1=O)n1nncc1)OC(C)(C)C",
//    university: "University Of Oxford",
//    price: 10,
//    unit: "mg",
//    user_id: "user"
//});
//db.compound.insert({
//    structure: "CCOC(=O)N1C/C(=C\c2ccccc2)/C(=O)/C(=C/c2ccccc2)/C1",
//    university: "University Of Bristol",
//    price: 120,
//    unit: "mg",
//    user_id: "user"
//});
//db.compound.insert({
//    structure: "OC(=O)c1ccc(c2c1nccn2)O",
//    university: "University Of Reading",
//    price: 30,
//    unit: "mg",
//    user_id: "user"
//});
//db.compound.insert({
//    structure: "CN1CCN(CC1)c1nc(Cl)c(c(=N)[nH]1)Br",
//    university: "University Of Oxford",
//    price: 5,
//    unit: "mg",
//    user_id: "user"
//});

db.compound.insert({
    name:"2-(3,5-difluoro-4-methoxyphenyl)-4,4,5,5-tetramethyl-1,3,2-dioxaborolane",
    structure: "InChI=1S/C13H17BF2O3/c1-12(2)13(3,4)19-14(18-12)8-6-9(15)11(17-5)10(16)7-8/h6-7H,1-5H3",
    university: "University of Oxford",
    price: 5,
    unit: "mg",
    smile:"CC(C(C)(C)O1)(C)OB1C2=CC(F)=C(OC)C(F)=C2",
    tags:["Boronic ester", "Aromatic", "Aryl halide", "Fluorine"],
    enzyme_inhibitor:"",
    biological_activity:"",
    user_id: "user",
    image: "Chem_1.png"
});

db.compound.insert({
    name:"3-azido-5-bromo-N-phenylbenzamide",
    structure: "InChI=1S/C13H9BrN4O/c14-10-6-9(7-12(8-10)17-18-15)13(19)16-11-4-2-1-3-5-11/h1-8H,(H,16,19)",
    university: "Imperial College London",
    price: 15,
    unit: "mg",
    smile:"CC(C(C)(C)O1)(C)OB1C2=CC(F)=C(OC)C(F)=C2",
    tags:["Aromatic", "Aryl halide", "Azide"],
    enzyme_inhibitor:"",
    biological_activity:"Cytotoxic",
    user_id: "user",
    image: "Chem_2.png"
});

db.compound.insert({
    name:"3-azido-5-bromo-N-isopropylbenzamide",
    structure: "InChI=1S/C10H11BrN4O/c1-6(2)13-10(16)7-3-8(11)5-9(4-7)14-15-12/h3-6H,1-2H3,(H,13,16)",
    university: "Imperial College London",
    price: 25,
    unit: "mg",
    smile:"O=C(NC(C)C)C1=CC(N=[N+]=[N-])=CC(Br)=C1",
    tags:["Aromatic", "Aryl halide", "Azide"],
    enzyme_inhibitor:"Bromodomain",
    biological_activity:"",
    user_id: "user",
    image: "Chem_3.png"
});

db.compound.insert({
    name:"Penicillin N",
    structure: "InChI=1S/C14H21N3O6S/c1-14(2)9(13(22)23)17-10(19)8(11(17)24-14)16-7(18)5-3-4-6(15)12(20)21/h6,8-9,11H,3-5,15H2,1-2H3,(H,16,18)(H,20,21)(H,22,23)/t6?,8-,9?,11-/m1/s1",
    university: "University of Cambridge",
    price: 35,
    unit: "mg",
    smile:"O=C1[C@@H](NC(CCC[C@@H](N)C(O)=O)=O)[C@]2([H])N1[C@@H](C(O)=O)C(C)(C)S2",
    tags:["Amino acid", "Carboxylic acid", "Amine", "Lactam"],
    enzyme_inhibitor:"",
    biological_activity:"Antibiotic",
    user_id: "user",
    image: "Chem_4.png"
});

db.compound.insert({
    name:"3-((carboxymethyl)carbamoyl)-2-hydroxyquinoline-6-carboxylic acid",
    structure: "InChI=1S/C13H10N2O6/c16-10(17)5-14-11(18)8-4-7-3-6(13(20)21)1-2-9(7)15-12(8)19/h1-4H,5H2,(H,14,18)(H,15,19)(H,16,17)(H,20,21)",
    university: "University of Bristol",
    price: 45,
    unit: "mg",
    smile:"OC(C1=CC=C(N=C(O)C(C(NCC(O)=O)=O)=C2)C2=C1)=O",
    tags:["Amino acid", "Carboxylic acid","Quinoline"],
    enzyme_inhibitor:"2OG-oxygenases",
    biological_activity:"Anticancer",
    user_id: "user",
    image: "Chem_5.png"
});
