import pg from "pg";

const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD

const SQL = `CREATE TABLE IF NOT EXISTS music_library(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
artist VARCHAR (100),
album VARCHAR (100),
genre VARCHAR (100));

INSERT INTO music_library (artist, album, genre) 
VALUES
  ('Charli XCX', 'BRAT', 'Pop'),
  ('Tyler Childers', 'Purgatory', 'Country'),
  ('Porter Robinson', 'Nurture', 'Electronic'),
  ('Tame Impala', 'InnerSpeaker', 'Alternative'),
  ('Lizzy McAlpine', 'Five Seconds Flat', 'Singer/Songwriter'),
  ('Conan Gray', 'Found Heaven', 'Alternative'),
  ('Sabrina Carpenter', 'Short n Sweet', 'Pop'),
  ('Willow Avalon', 'Stranger', 'Country'),
  ('Knuckle Puck', '20/20', 'Rock'),
  ('Adam Melchor', 'Here Goes Nothing!', 'Singer/Songwriter');`

  async function main() {
    console.log("seeding...");
    
    const client = new pg.Client({
      connectionString: 
      `postgresql://${USERNAME}:${PASSWORD}@localhost:5432/music_library`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();