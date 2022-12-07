let bucketList = require('./db.json')

module.exports = {
    GetBucketList:(req, res) =>{
     res.status(200).send(bucketList)
    }, 
     
    addToBucketList: (req, res) => {
         const {newItem} = req.body
         bucketList.push(newItem)
         res.status(200).send(bucketList)
    },
    
    updateBucketList: (req, res) => {
        const {newItem, oldItem} = req.body
        for(let i = 0; i < bucketList.length; i++){
            if(oldItem === bucketList[i]){
                bucketList.splice(i,1, newItem)
            }
         
        }
        res.status(200).send(bucketList)
    },
    
    deleteIteminBucketList: (req, res) => {
        const { oldItem } = req.params
        // bug here since splice modifies original array the loop length changes everytime it deletes something
        // for(let i = 0; i < bucketList.length; i++){
        //     if(oldItem === bucketList[i]){
        //         bucketList.splice(i,1)
        //     }
        // }
        bucketList = bucketList.filter(ele =>{ 
            return ele !== oldItem
        })
        res.status(200).send(bucketList)
    }
}