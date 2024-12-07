function bienvenue(){
	alert("veuillez remplir le formulaire suivant");
}
function verif(){
    let user = document.getElementById("User").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    let b1 = document.getElementById("chekb1").checked;
    let b2 = document.getElementById("chekb2").checked;
    if (user.length==0){
         alert("il faut remplir ton nom");return false; 
        
    }
    if (!mail.includes("@gmail.com")) {
        alert("Please enter a valid email address containing '@'.");return false;
    }
    if (pass.length < 8) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        return false;
    }
    if (pass!=cpass){
        alert("verifier votre mot de passe.");return false;
    }
    if (!b1 || !b2) {
        alert("Vous devez accepter les termes et conditions et sauvegarder votre compte.");
        return false;
    }

}