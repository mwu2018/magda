CREATE TABLE IF NOT EXISTS Users (
    userId int PRIMARY KEY,
    userName varchar(100) NOT NULL
    -- TODO: add hashed password or something
);

-- Add a temporary user to own the updates, until we have real users
INSERT INTO Users (userId, userName) VALUES (0, 'System');

CREATE TABLE IF NOT EXISTS EventTypes (
    eventTypeId int PRIMARY KEY,
    name varchar(100)
);

INSERT INTO EventTypes (eventTypeId, name) VALUES (0, 'Create Record');
INSERT INTO EventTypes (eventTypeId, name) VALUES (1, 'Create Aspect Definition');
INSERT INTO EventTypes (eventTypeId, name) VALUES (2, 'Create Record Aspect');
INSERT INTO EventTypes (eventTypeId, name) VALUES (3, 'Patch Record');
INSERT INTO EventTypes (eventTypeId, name) VALUES (4, 'Patch Aspect Definition');
INSERT INTO EventTypes (eventTypeId, name) VALUES (5, 'Patch Record Aspect');
INSERT INTO EventTypes (eventTypeId, name) VALUES (6, 'Delete Record');
INSERT INTO EventTypes (eventTypeId, name) VALUES (7, 'Delete Aspect Definition');
INSERT INTO EventTypes (eventTypeId, name) VALUES (8, 'Delete Record Aspect');

CREATE TABLE IF NOT EXISTS Events (
    eventId bigserial PRIMARY KEY,
    eventTime timestamp with time zone DEFAULT (now() at time zone 'utc'),
    eventTypeId int REFERENCES EventTypes NOT NULL,
    userId int REFERENCES Users NOT NULL,
    data jsonb NOT NULL
);

CREATE INDEX ON Events((data->>'recordId'));
CREATE INDEX ON Events((data->>'aspectId'));

CREATE TABLE IF NOT EXISTS Records (
    recordId varchar(100) PRIMARY KEY,
    sequence bigserial UNIQUE NOT NULL,
    name varchar(1000) NOT NULL,
    lastUpdate bigint REFERENCES Events NOT NULL
);

CREATE TABLE IF NOT EXISTS Aspects (
    aspectId varchar(100) PRIMARY KEY,
    name varchar(100) NOT NULL,
    lastUpdate bigint REFERENCES Events NOT NULL,
    jsonSchema jsonb
);

CREATE TABLE IF NOT EXISTS RecordAspects (
    recordId varchar(100) REFERENCES Records NOT NULL,
    aspectId varchar(100) REFERENCES Aspects NOT NULL,
    lastUpdate bigint REFERENCES Events NOT NULL,
    data jsonb NOT NULL,
    PRIMARY KEY (recordId, aspectId)
);

CREATE INDEX ON RecordAspects(aspectId);
CREATE INDEX ON RecordAspects(recordId);
