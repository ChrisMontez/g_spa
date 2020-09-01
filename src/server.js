const path = require('path')
const express = require('express');

const app = express();



app.use(express.static(path.join(__dirname, '../HTML')));




app.get('/', (req, res) => {
	res.sendFile('index.html', {root:path.join(__dirname, '../HTML')});
});






app.listen(process.env.PORT || 3000, ()=> {
	console.log(`app is running on port ${process.env.PORT}`);
})
