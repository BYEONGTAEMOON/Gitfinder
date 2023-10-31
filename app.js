
const github = new GitHub;

const ui = new UI;


const searchUser = document.querySelector("#searchUser");


searchUser.addEventListener("keyup", (e) => {

  const userText = searchUser.value;

  if(userText !== ""){

    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found") {

          ui.showAlert("Usuario no encontrado.", "alert alert-danger");
        } else {

          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {

    ui.clearProfile();
  }
});