const express=require('express');
const app=express();
const axios=require('axios');
const port=2000;
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const {initializeApp,cert}=require("firebase-admin/app");
const {getFirestore}=require("firebase-admin/firestore");
var serviceAccount=require("./key.json");
initializeApp({
credential:cert(serviceAccount),
});
const db=getFirestore();
app.set('view engine','ejs');
app.set('views', './views');
app.get('/',(req,res)=>{
    res.render("openpage");
    });
    app.get('/page',(req,res)=>{
      res.render("page");
      });
    app.get('/signin',(req,res)=>{
      res.render("signin");
      });
      app.get('/signup',(req,res)=>{
         res.render("signup");
         });
         app.get('/op',(req,res)=>{
            res.render("op");
            });
            app.get('/op0',(req,res)=>{
              res.render("op0");
              });
app.listen(port,()=>{
console.log('Example app listening on port 2000');
});
app.get("/CricketSubmit",(req,res)=>{
    const doj=req.query.doj;
    const pt=req.query.pt;
    const dim=req.query.dim;
 db.collection('Cricket_Players').add({
    doj:doj,
    dim:dim,
    pt:pt,
 })
  .then(()=>{    
    
    res.render("Cricket");
    });
    });

    app.get("/FootballSubmit",(req,res)=>{
        const doj=req.query.doj;
        const pt=req.query.pt;
        const dim=req.query.dim;
     db.collection('Football_Players').add({
        doj:doj,
        dim:dim,
        pt:pt,
     })
      .then(()=>{    
        res.render("Football");
        });
        });
        app.get("/VolleyballSubmit",(req,res)=>{
            const doj=req.query.doj;
            const pt=req.query.pt;
            const dim=req.query.dim;
         db.collection('Volleyball_Players').add({
            doj:doj,
            dim:dim,
            pt:pt,
         })
          .then(()=>{    
          
            res.render("Volleyball");
            });
            });
       
           /* app.get('/signinsubmit1', (req, res) => {
               const email1 = req.query.email1;
               const password1 = req.query.password1;
             
               db.collection('admin')
                 .where('email1', '=', email1)
                 .where('password1', '=', password1)
                 .get()
                 .then((docs) => {
                   if (docs.size > 0) {
                     var adminsdata = [];
                     db.collection('admin').get().then((docs) => {
                       docs.forEach((doc) => {
                         adminsdata.push(doc.data());
                       });
                     })
                     .then(() => {
                       console.log(adminsdata);
                       res.render('op', { email1: email1 });
                     });
                   } else {
                     res.redirect('/signin');
                   }
                 });
             });
       
  
   app.get('/signupsubmit1',(req,res)=>{
   const fullname1=req.query.fullname1;
   const lastname1=req.query.lastname1;
   const email1=req.query.email1;
   const password1=req.query.password1;
   db.collection("admin").add({
   name1:fullname1+lastname1,
   email1:email1,
   password1:password1,
   })
   .then(()=>{
   res.render("signedup");
   });
   });
 

   app.get('/signinsubmit2', (req, res) => {
    const email2 = req.query.email2;
    const password2 = req.query.password2;
  
    db.collection('users')
      .where('email2', '=', email2)
      .where('password2', '=', password2)
      .get()
      .then((docs) => {
        if (docs.size > 0) {
          var usersdata = [];
          db.collection('users').get().then((docs) => {
            docs.forEach((doc) => {
              usersdata.push(doc.data());
            });
          })
          .then(() => {
            console.log(usersdata);
            res.render('op', { email2: email2 });
          });
        } else {
          res.redirect('/signin');
        }
      });
  });
app.get('/signupsubmit2',(req,res)=>{
const fullname2=req.query.fullname2;
const lastname2=req.query.lastname2;
const email2=req.query.email2;
const password=req.query.password;
db.collection("users").add({
name:fullname2+lastname2,
email2:email2,
password2:password2,
})
.then(()=>{
res.render("signedup");
});
});
*/

app.get('/signupsubmit1', async (req, res) => {
  const { firstname1, lastname1, email1, password1 } = req.query;
  try {
      await db.collection('admin').add({
          fullname: firstname1 + " " + lastname1,
          email: email1,
          password: password1,
      });
      res.render('signedup');
  } catch (error) {
      res.status(500).send('Error signing up admin: ' + error.message);
  }
});

// Route for admin signin
app.get('/signinsubmit1', async (req, res) => {
  const { email1, password1 } = req.query;
  console.log(`Received email1: ${email1}, password1: ${password1}`);

  if (!email1 || !password1) {
      return res.status(400).send('Email and password are required');
  }

  try {
      const snapshot = await db.collection('admin')
          .where('email', '==', email1)
          .where('password', '==', password1)
          .get();
      
      if (snapshot.size > 0) {
          const adminsdata = [];
          snapshot.forEach(doc => adminsdata.push(doc.data()));
          console.log(adminsdata);
          res.render('op0', { email: email1 });
      } else {
          res.redirect('/signin');
      }
  } catch (error) {
      res.status(500).send('Error signing in admin: ' + error.message);
  }
});

// Route for user signup
app.get('/signupsubmit2', async (req, res) => {
  const { firstname2, lastname2, email2, password2 } = req.query;
  try {
      await db.collection('users').add({
          fullname: firstname2 + " " + lastname2,
          email: email2,
          password: password2,
      });
      res.render('signedup');
  } catch (error) {
      res.status(500).send('Error signing up user: ' + error.message);
  }
});

// Route for user signin
app.get('/signinsubmit2', async (req, res) => {
  const { email2, password2 } = req.query;
  console.log(`Received email2: ${email2}, password2: ${password2}`);

  if (!email2 || !password2) {
      return res.status(400).send('Email and password are required');
  }

  try {
      const snapshot = await db.collection('users')
          .where('email', '==', email2)
          .where('password', '==', password2)
          .get();
      
      if (snapshot.size > 0) {
          const usersdata = [];
          snapshot.forEach(doc => usersdata.push(doc.data()));
          console.log(usersdata);
          res.render('op', { email: email2 });
      } else {
          res.redirect('/signin');
      }
  } catch (error) {
      res.status(500).send('Error signing in user: ' + error.message);
  }
});
