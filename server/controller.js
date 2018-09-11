module.exports = 
{
    allMessages: AllMessages,
    makeMessage: MakeMessage,
    makeComment: MakeComment
}

const Mongooses = require("./models.js");

function AllMessages (req,res)
{
    console.log("hit root route");
    Mongooses.find({}, function(errs, data)
    {
        console.log(data);
        if(errs)
        {
            console.log(errs)
        }
        res.render("index", {data:data.reverse()});
    });
}

function MakeMessage(req,res)
{
    console.log("make message");
    console.log(req.body);
    Mongooses.create(req.body, (errs, results)=>
    {
        if(errs)
        {
            console.log("opps i did it again");
            console.log(errs);
            for (var key in errs.errors)
            {
                console.log(errs.errors[key].message);
                req.flash("message", errs.errors[key].message);
            }
            res.redirect('/');
        }else{
            console.log(results);
            res.redirect("/");
        }
    });
}
function MakeComment(req,res)
{
    console.log("make comment");
    console.log(req.body);
    Mongooses.create(req.body, (errs, results)=>
    {
        if(errs)
        {
            console.log("opps i did it again");
            console.log(errs);
            for (var key in errs.errors)
            {
                console.log(errs.errors[key].message);
                req.flash("comment", errs.errors[key].message);
            }
            res.redirect('/');
        }else{
            console.log(results);
            res.redirect("/");
        }
    });
}
