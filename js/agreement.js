// Create the HTML for the message
var msg = '<div><h2>Hold up&#33;</h2>';
msg += '<h3>In order to view this page&#44 you must read and agree to the following&#58;</h3>';
msg += '<p>';
msg += 'I will at a later point compose a detailed and thorough Non-Disclosure Agreement(NDA) for this space, but right now I\'ll just provide a quick agreement.'; 
msg += '</p>';



msg += '<p>';
msg += 'By clicking \"I Agree\" below, you agree that you will not take any ideas listed on this domain and/or pass them off as your own, or attempt to make a lawsuit against the owner of this website for \'copyright\' infringement unless such copyright is proven to have existed before these ideas were conceieved by the party known as \"Ice Climb Games\".';
msg += '</p>';
msg += '<ul><li><a id=\'agree\' href=\"#\">I Agree</a></li><li><a href=\"../index.html\">I Do Not Agree</a></li></ul></div>';

console.log(msg);


//create a new element
var elNote = document.createElement('div');
//Add an ID of note
elNote.setAttribute('id','note');
//Add the message
elNote.innerHTML = msg;
//Add note to the page
document.body.appendChild(elNote);

//Get the agree button
var elAgree = document.getElementById('agree');
//click agree -> clear the note
elAgree.addEventListener('click', dismissNote , false);

//Declare function
function dismissNote ()
{
 console.log('click')
 document.body.removeChild(elNote);
}