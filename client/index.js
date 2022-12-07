const baseURL = 'http://localhost:4000';

const GetBucketList = () => {
    axios.get(baseURL + "/bucketList")
        .then(res => {
            buildList(res.data);
    });
};

const addbucketList = () => {
       let body = {
       newItem:document.getElementById("maininput").value
       }
    axios.post(baseURL + "/addtobucketlist" , body)
    .then(res => {
        buildList(res.data)
    });
};

const updateBucketList = () => {
    let body = {
        newItem: document.getElementById("inputtwo").value,
        oldItem: document.getElementById("maininput").value
    }
    axios.put(baseURL + "/updateBucketList/", body)
    .then(res => {
        buildList(res.data);
    });
};

const deleteItem = () => {
    let itemToDelete = document.getElementById("maininput").value
    axios.delete(baseURL + "/deleteIteminBucketList/" + itemToDelete)
    .then(res => {
        buildList(res.data)
        document.getElementById("maininput").value = ''
    });
};

const buildList = (arr) => {
    let list = document.getElementById("myList")
    list.innerHTML = ''
    arr.forEach(element => {
        let listItem = document.createElement('li')
        listItem.addEventListener('click', itemClicked)
        listItem.className = 'fingerCursor'
        listItem.innerHTML = element
        list.appendChild(listItem)
    });
}

const itemClicked = (e) => {
    document.getElementById("maininput").value = e.target.innerHTML

}
