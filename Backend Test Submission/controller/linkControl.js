import Link from "../models/linkSchema.js"
import logging from "../util/logging.js"

const linkpost = async(req,res)=>{

    const {url, validity, shortcode} = req.body;
    if(!shortcode) shortcode  =  Math.random().toString(36).substring(3,8);
    const exp = validity | new Date().toISOString().slice(0,10) + "-" +new Date().toLocaleTimeString().slice(0,3) + new Date().toLocaleTimeString().slice(0,8);
    const shortlink = "http://localhost:3000/" + shortcode;
    
    const newShortCode = new Link({url : url, expiry : exp, shortcode : shortcode, shortlink : shortlink});
    await newShortCode.save();
    const resp = await logging({stack : "backend", level : "controller", package : "handler" , "message" : "created"})
    return res.status(201).json({shortLink : shortlink, expiry : exp});

}

const linkget = async(req,res)=>{
    var {url} = req.params;
    const existingurl = await Link.findOne({shortcode: url });
    if(!existingurl)  {
        const resp = await logging({stack : "backend", level : "controller", package : "handler" , "message" : "not found"});

    }
    
    return res.status(200).json({url : existingurl.url, expiry : existingurl.expiry, createdAt : existingurl.createdAt});

}

export {linkget, linkpost} 
