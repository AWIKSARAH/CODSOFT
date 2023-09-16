import express from "express";
import {
  createBlog,
  getBlogById,
  getAllBlog,
  countBlogsByCategory,
} from "../controllers/blogController.js";
const router = express.Router();

router.post("/", createBlog);
router.get("/", getAllBlog);
router.get("/count", countBlogsByCategory);
router.get("/:id", getBlogById);
export default router;


/**
 *
 * Sarah awik 9 - 16 -2023
 */
