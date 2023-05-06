// import firebase resources
const {auth, db} = require("../Config/firebase")
const {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } = require("firebase/auth");
const {doc, setDoc} = require("firebase/firestore"); 

const userAuthController = {
    async Register(req, res){
        const email = req.body.email;
        const password = req.body.password;

        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            await updateProfile(auth.currentUser, {
                displayName: email,
                email: email,
                uid: user.uid
            })

            //save account to firestore
            await setDoc(doc(db, "users", email), {
                email,
                uid: user.uid
            });

            res.json({ message: 'Created account!'});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.json({ message: 'Error. Unable to create account.'});
        });
    },

    async Login(req, res){
            const email = req.body.email;
            const password = req.body.password;

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                res.json({ message: 'User has logged in!', uid: user.uid, email: user.email});
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                res.json({ message: 'Error! Unable to log in.'});
            });
    },

    async Logout(req, res){
        signOut(auth).then(() => {
            // Sign-out successful.
            res.json({ message: 'Signed Out!'});
        }).catch((error) => {
            // An error happened.
            res.json({ message: 'Error. Unable to sign out.'});
        });
    }
}

module.exports = userAuthController;