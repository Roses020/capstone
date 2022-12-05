//Require packages
const express = require('express')
const cors = require('cors')

//App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
app.use(express.static(`${__dirname}/../client`))

const { GetBucketList, addToBucketList, updateBucketList, deleteIteminBucketList} = require('./controller')

app.get('/bucketList',  GetBucketList)
app.post('/addtoBucketlist', addToBucketList)
app.put('/updateBucketList', updateBucketList)
app.delete('/deleteIteminBucketList/:oldItem', deleteIteminBucketList)

app.listen(4000, () => console.log('listening on port 4000'))
