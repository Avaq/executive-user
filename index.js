/**
 * Passes executive rights from the current user to the configured user.
 *
 * @return {void}
 */
module.exports = function(uid, gid){

  //Attempt to pass on executive rights.
  try{
    process.setgid(gid);
    process.setuid(uid);
  }

  //In case of failure, provide a clear error message.
  catch(e){
    throw new Error(
      'Could not set executive user to "'+uid+':'+gid+'": '+e.message
    );
  }

};
