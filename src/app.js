const express = require('express');
const logger  = require('morgan');
const app = express()
const port = 7070


app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res, next) => {
     res.json({message: "HELLO WORLD DEMO WITH ICTAZ"});
});

//cbuictaz

app.post('/', (req, res, next) => {

    console.log(req.body);

    let USSD_MENUE = '';
    let SESSION_STATE = 'END_SESSION';

    let session = {};

    session[ req.body.SESSION_ID  ] = req.body;


    if(session[ req.body.SESSION_ID  ].SUBSCRIBER_SELECTION === 'exit'){
        USSD_MENUE = 'Good Bye!  \n';
        USSD_MENUE += 'From ICTAZ CBU Chapter';
    }else if(session[ req.body.SESSION_ID  ].SUBSCRIBER_SELECTION === 'monk'){
        USSD_MENUE = 'Monk WAWAAAAAAAAAA!!!!!!!!! \n'
        SESSION_STATE = 'CONTINUE_SESSION';
    } else if(session[ req.body.SESSION_ID  ].SUBSCRIBER_SELECTION === 'moma'){
        USSD_MENUE = 'MOMA WAWAAAAAAAAAA!!!!!!!!! \n'
        SESSION_STATE = 'CONTINUE_SESSION';
    }else if (session[ req.body.SESSION_ID  ].SUBSCRIBER_SELECTION === 'password'){
        USSD_MENUE = 'Viva Data Viva!!!!!!!!!! \n';

        USSD_MENUE += 'WA WA WA WA WAAAAAAAAAAA!!!!!!'

        SESSION_STATE = 'CONTINUE_SESSION';
    }
     else {
        USSD_MENUE = 'Welcome to ICTAZ Demo \n';

        USSD_MENUE += 'With Lee M. Lwando (Founder/CTO - MicroTech)';

        SESSION_STATE = 'CONTINUE_SESSION';

    }


    res.json({ USSD_MENUE: USSD_MENUE, SESSION_STATE: SESSION_STATE })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})