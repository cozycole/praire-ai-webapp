import path from "path"
import fs from "fs"
import Express from "express"
import multer from "multer"

const PORT = process.env.PORT || 3001;

const app = Express();

const uploadDir = "./upload"

const upload = multer({
    dest: uploadDir
  });

app.get("/api", (req, res)=>{
    res.json({"You've got mail": "hi"})
})

app.post("/api",
    upload.single("image"),
    (req, res) => {
        let distress = Math.round(Math.random() * 100) / 100
        console.log("Evaluating house",distress)
        res
            .json({"distressScore": distress})
            .status(200)
        // const ext = path.extname(req.file.originalname)
        // let name = "img1" + ext
        // let newPath = path.join(uploadDir, name)
        // fs.rename(req.file.path, newPath, (err) => {
        //     if (err) {
        //         console.log("error renaming file")
        //         res.send(500)
        //     }
            // let distress = Math.round(Math.random() * 100) / 100
            // res
            //     .json({"distressScore": distress})
            //     .status(200)
        // })        
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});

