import { pool } from './pool.js'

export async function getMusicLibrary() {
    console.log('getting data...')
    const { rows } = await pool.query("SELECT * FROM music_library");
    return rows
}

export async function addNewAlbum(artist, album, genre) {
    await pool.query("INSERT INTO music_library (artist, album, genre) VALUES ($1, $2, $3)", [artist, album, genre])
}

export async function searchLibrary(searchTerm) {
    console.log('searchLibrary receiving:', searchTerm)
    let search = "'%" + `${searchTerm}` + "%'"
    const { rows } = await pool.query("SELECT * FROM music_library WHERE artist ILIKE " + search + " OR album ILIKE " + search);
    console.log(rows)
    return rows;
}

export async function sortByGenre(genre) {
    console.log('Getting albums from:', genre)
    let sortedGenre = "'" + genre + "'"
    const { rows } = await pool.query(`SELECT * FROM music_library WHERE genre = ` + sortedGenre);
    console.log(rows)
    return rows;
}

export async function deleteAlbum(album) {
    let toDelete = "'" + album + "'"
    await pool.query(`DELETE FROM music_library WHERE album = ` + toDelete);
}