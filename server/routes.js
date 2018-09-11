const {allMessages, makeMessage, makeComment} = require("./controller.js");

function router(app)
{
    // app.use(bp.json());
    app.get("/", allMessages);
    app.post("/makeMessage", makeMessage);
    app.post("/makeComment", makeComment);
}

module.exports = router;