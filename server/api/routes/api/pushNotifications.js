const express = require('express');
const router = express.Router();
const push = require('../../services/pushNotifications');
let pushSubscription;

router.post('/subscription', async(req,res) => {
    pushSubscription = req.body
    res.status(200).json()
})

router.post('/newNotification', async(req,res) => {
    const {message} = req.body
    const payload = JSON.stringify({
        title: 'QuindiPlatanos',
        message: message
    })
    
    try{
        await push.sendNotification(pushSubscription,payload)
    }catch{
        console.log(error)
    }
})

module.exports = router;