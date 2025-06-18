import http from "node:http"
import fs from "node:fs/promises"

const server = http.createServer(async (req, res) => {
	const myUrl = req.url
	console.log(myUrl)
	if (myUrl == "/") {
		const data = await fs.readFile("./index.html", "utf-8")
		res.writeHead(200, { "Content-Type": "text/html" })
		res.write(data)
	} else if (myUrl == "/about") {
		const data = await fs.readFile("./about.html", "utf-8")
		res.writeHead(200, { "Content-Type": "text/html" })
		res.write(data)
	} else if (myUrl == "/contact-me") {
		const data = await fs.readFile("./contact-me.html", "utf-8")
		res.writeHead(200, { "Content-Type": "text/html" })
		res.write(data)
	} else {
		const data = await fs.readFile("./404.html", "utf-8")
		res.writeHead(404, { "Content-Type": "text/html" })
		res.write(data)
	}
	res.end()
})

server.listen(8000)
