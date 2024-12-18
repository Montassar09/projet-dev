function bienvenue(){
	alert("veuillez remplir le formulaire suivant");
}
function verif(){
    let user = document.getElementById("User").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let num = document.getElementById("numcard").value;
    let cpass = document.getElementById("cpass").value;
    let b1 = document.getElementById("chekb1").checked;
    let b2 = document.getElementById("chekb2").checked;
    if (user.length==0){
        document.getElementById("u").innerText = "Vous devez Ecrire votre nom";return false;
        
    }else{
        document.getElementById("u").innerText = "";

    }
    if (!mail.includes("@gmail.com")) {
        document.getElementById("m").innerText = "Vous devez Verivier votre mail.";return false;
    }else{
        document.getElementById("m").innerText = "";

    }
    if (pass.length < 3) {
        document.getElementById("p").innerText = "Vous devez Verivier votre mot de passe.";return false;

    }else{
        document.getElementById("p").innerText = "";
    }
    if (pass!=cpass){
        document.getElementById("pa").innerText = "Vous devez Verivier votre mot de passe.";return false;

    }else{
        document.getElementById("pa").innerText = "";
    }
    if(num.length!=3){
        document.getElementById("nu").innerText = "Vous devez Verivier votre numero de card.";return false;

    }else{
        document.getElementById("nu").innerText = "";
    }

    if (!b1 || !b2) {
        document.getElementById("bt").innerText = "Vous devez accepter les termes et conditions et sauvegarder votre compte.";return false;
    }else{
        document.getElementById("bt").innerText = "";
    }
    if(user.length!=0 && pass.length > 3 &&  pass==cpass && num.length==3 && b1 || b2 && mail.includes("@gmail.com")){
        alert("Votre inscrir est affectue avec succses ");
    }
    
}


function resetForm() {
  document.getElementById("form").reset();
  document.getElementById("u").innerText = "";
  document.getElementById("m").innerText = "";
  document.getElementById("p").innerText = "";
  document.getElementById("pa").innerText = "";
  document.getElementById("nu").innerText = "";
  document.getElementById("bt").innerText = "";
}
