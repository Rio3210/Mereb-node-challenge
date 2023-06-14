/*
   Functions act as a middleware and help to handle errors 
*/

// function to handle non-existing endpoints
const handleNonExistingEndpoint = (req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
};

//helper function to handle internal server error
function handleServerError(req,res){
    res.status(500).json({error:'Internal server error'});
}

//get export to be used in the index.js
module.exports={
    handleNonExistingEndpoint,
    handleServerError
}
