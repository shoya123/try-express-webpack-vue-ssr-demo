const path = require('path');
const fs = require('fs');
const express = require('express');
const VueServerRenderer = require('vue-server-renderer');

const app = express();

app.use('/dist', express.static('dist'));
app.use(express.static(__dirname));

const template = fs.readFileSync('./index.template.html', 'utf-8');
const renderer = VueServerRenderer.createBundleRenderer(path.join(__dirname, 'dist/vue-ssr-server-bundle.json'), { template });


app.get('*', (req, res) => {
	const ctx = { url: req.url };
	renderer.renderToString(ctx, (err, html) => {
		res.end(html);
	});
});

app.listen(8080, () => {
	console.log(`Server listening on http://localhost:8080, Ctrl+C to stop`);
});