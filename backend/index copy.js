// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");
// const xml2js = require("xml2js");
// const matter = require("gray-matter");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// app.use(cors());

// const MEDIUM_RSS = "https://medium.com/feed/@mnsattributics";

// app.get("/api/blogs", async (req, res) => {
//     // const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//     // await sleep(2000); // sleeps 2 seconds

//   try {
//     const response = await axios.get(MEDIUM_RSS, {
//       timeout: 10000,
//       headers: {
//         "User-Agent": "Mozilla/5.0", // helps avoid some bot blocks
//       },
//     });

//     const parser = new xml2js.Parser({ explicitArray: false });
//     const result = await parser.parseStringPromise(response.data);

//     if (!result?.rss?.channel?.item) {
//       return res.status(404).json({
//         error: "RSS feed parsed but no blog items found",
//       });
//     }

//     const items = Array.isArray(result.rss.channel.item)
//       ? result.rss.channel.item
//       : [result.rss.channel.item];

//     const blogs = items.map((item) => ({
//       title: item.title,
//       link: item.link,
//       pubDate: item.pubDate,
//       description: item.description,
//       content: item["content:encoded"],
//       categories: item.category || [],
//     }));

//     res.json(blogs);

//   } catch (err) {
//     console.error("Medium Fetch Error:", err.message);

//     res.status(500).json({
//       error: "Failed to fetch Medium feed",
//       message: err.message,
//       status: err.response?.status || null,
//       data: err.response?.data || null,
//     });
//   }
// });

// const BLOG_DIR = path.join(process.cwd(), "content/blogs");

// app.get("/api/blogs/:slug", async (req, res) => {
//   const { slug } = req.params;

//   try {
//     const filePath = path.join(BLOG_DIR, `${slug}.md`);
//     const fileContent = fs.readFileSync(filePath, "utf-8");

//     const { data, content } = matter(fileContent);

//     res.json({
//       data,
//       content, // raw markdown
//       slug,
//     });
//   } catch (err) {
//     res.status(404).json({ error: "Blog not found" });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });
