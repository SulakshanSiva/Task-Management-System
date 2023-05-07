const {auth, db} = require("../Config/firebase")
const {doc, setDoc, updateDoc, arrayUnion, getDoc, arrayRemove} = require("firebase/firestore"); 

const userListController = {
    async addTodo(req, res){
        const list = req.body.list;
        const uid = req.body.uid;
        const item = req.body.item;

        // get doc
        const docRef = doc(db, list, uid);
        const docExists = await getDoc(docRef)

        if(docExists.exists()){

            const arr = docExists.data().todo

            // if todo already exists
            if(arr.includes(item)){
                // send error response
                res.status(409).json({ message: 'Todo already exists!'});
            } else {
                // if doc exists, update doc
                await updateDoc(doc(db, list, uid), {
                    todo: arrayUnion(item)
                })

                // get updated list
                const arrData = (await getDoc(docRef)).data().todo;

                res.status(200).json({
                    message: 'Created todo!',
                    data: arrData
                });

            }
        } else {
            // if doc does not exist, set doc
            await setDoc(doc(db, list, uid), {
                todo: arrayUnion(item)
            })

            // get updated list
            const arrData = (await getDoc(docRef)).data().todo;

            res.status(200).json({
                message: 'Created todo!',
                data: arrData
            });
        }
        
    },

    async deleteTodo(req,res){
        const list = req.body.list;
        const uid = req.body.uid;
        const todo = req.body.item

        const listRef = doc(db, list, uid);

        await updateDoc(listRef, {
            todo: arrayRemove(todo)
        });
        res.status(200).json({ message: 'Deleted' });
    },

    async loadList(req, res){
        const list = req.body.list;
        const uid = req.body.uid;

        // get doc
        const docRef = doc(db, list, uid);
        const docExists = await getDoc(docRef)

        if(docExists.exists()){
            const arr = docExists.data().todo
            res.status(200).json({ message: 'List retrieved!', list: arr });
        }

    }
}

module.exports = userListController;