import fs from "node:fs/promises"
import express from "express"

const app = express()
app.get("/", async (req, res) => {
	const data = await fs.readFile("./index.html", "utf-8")
	res.set({ "Content-Type": "text/html" })
	res.send(data)
})
app.get("/about", async (req, res) => {
	const data = await fs.readFile("./about.html", "utf-8")
	res.set({ "Content-Type": "text/html" })
	res.send(data)
})
app.get("/contact-me", async (req, res) => {
	const data = await fs.readFile("./contact-me.html", "utf-8")
	res.set({ "Content-Type": "text/html" })
	res.send(data)
})
app.use(async (req, res) => {
	const data = await fs.readFile("./404.html", "utf-8")
	res.set({ "Content-Type": "text/html" })
	res.send(data)
})

app.listen(8000)
