module.exports = function(req,resp,next)
{
    resp.header("Acess-Control-Allow-Origin","*");
    resp.header("Acess-Control-Allow-Methods","GET , POST , OPTIONS , PUT , PATCH , DELETE");
    resp.header("Acess-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
}