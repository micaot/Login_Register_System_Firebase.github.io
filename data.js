



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAhxI_Ul1IdkGD6mO-Hxavjx8ImxK8XGCQ",
    authDomain: "login-and-registration-s-694ef.firebaseapp.com",
    databaseURL: "https://login-and-registration-s-694ef.firebaseio.com",
    projectId: "login-and-registration-s-694ef",
    storageBucket: "login-and-registration-s-694ef.appspot.com",
    messagingSenderId: "592974396281",
    appId: "1:592974396281:web:e224615fb2434793ae8da8",
    measurementId: "G-EQYFENDZX6"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


  //saving data into database from register page
  function addData(){
  let rform = document.querySelector('.register-form');

  rform.addEventListener('submit',(e)=>{
    db.collection('users').add({
      name: rform.name.value,
      email: rform.email.value,
      username: rform.username.value,
      password: rform.password.value
    }).then(()=>{
      alert('data uploaded');
    })
   
  });
  
  }
  // login check from database does data matches or not
  function getData(){
  let lform = document.querySelector('.login-form');
 
  lform.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('users').where('username','==',lform.username.value).where('password','==',lform.password.value).get().then((snapshot)=>{
      
      
      if(snapshot.size){
        alert('Data Matched login Success');
        window.location.href = "/success.html";
        
      }
      else{
        alert('Login Failed');
      
      }
  });
 
  });
}