import { body, validationResult } from "express-validator";
import { getMusicLibrary, addNewAlbum, searchLibrary, sortByGenre, deleteAlbum } from "../db/queries.js";


export async function getMusicData(req, res) {
    if (req.query.search) {
      let searchTerm = req.query.search
      console.log('searching:', searchTerm)
      const searchResults = await searchLibrary(searchTerm);
      res.render("index", {library: searchResults} )
    } else if(req.query.genre) {
      let whichGenre = req.query.genre
      console.log("sorting by genre: ", whichGenre)
      const genreView = await sortByGenre(whichGenre)
      res.render("index", {library: genreView})
    } else { 
      const library = await getMusicLibrary();
      res.render("index", {library: library});
    }
  }

  export async function getNewAlbumForm(req, res) {
    res.render("newAlbumForm")
  }

  export async function addNewAlbumToLibrary(req, res) {
    const { artist, album, genre } = req.body;
    await addNewAlbum(artist, album, genre);
    res.redirect("/");
  }

  export async function deleteFromLibrary(req, res) {
    console.log("readying to delete:", req.body)
    const toDelete = req.body.delete
    await deleteAlbum(toDelete)
    res.redirect("/")
  }