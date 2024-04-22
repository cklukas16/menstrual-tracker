-- POSTGRES version for production database: 

CREATE TABLE Daily (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    weight decimal(4,1),
    mood VARCHAR(10),
    bloating VARCHAR(10),
    cramps VARCHAR(10),
    headache VARCHAR(10),
    irritability VARCHAR(10),
    energy VARCHAR(10),
    anxiety VARCHAR(10),
    breast_tenderness VARCHAR(10),
    appetite VARCHAR(10),
    comments text
);

-- SQL version for H2 Database

-- CREATE TABLE IF NOT EXISTS Daily (
--     id SERIAL PRIMARY KEY,
--     `date` DATE NOT NULL,
--     `weight` decimal(4,1),
--     mood VARCHAR(10),
--     bloating VARCHAR(10),
--     cramps VARCHAR(10),
--     headache VARCHAR(10),
--     irritability VARCHAR(10),
--     energy VARCHAR(10),
--     anxiety VARCHAR(10),
--     breast_tenderness VARCHAR(10),
--     appetite VARCHAR(10),
--     comments text
-- );