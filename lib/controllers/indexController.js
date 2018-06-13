var path= require("path");
module.exports = {
    getIndex : function(req, res){
        //res.send('Hello');
        //res.sendFile("../../public/index/view/index.html");
        res.sendFile(path.join(__dirname,"../../public/index/view/index.html"));
    }
};