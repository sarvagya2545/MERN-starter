const express = require('express');
const app = express();
const mongoose = require('mongoose');
// INSTALL PASSPORT FIRST
// const passport = require('passport');
// require('./config/passport');
const cors = require('cors');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Mongoose connect
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true 
    })
    .then(() => console.log(`MongoDB connection established`))
    .catch(err => console.log(err));


// Routes
// app.use('/api/users', require('./routes/api/users'))

// Serve static assets under production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// Server set to listen on port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))