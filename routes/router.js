import express from 'express'
import { getMusicData, getNewAlbumForm, addNewAlbumToLibrary, deleteFromLibrary } from '../controllers/controller.js'

export const router = express.Router()

router.get("/", getMusicData)
router.get("/new", getNewAlbumForm )
router.post("/new", addNewAlbumToLibrary)
router.post("/delete", deleteFromLibrary)