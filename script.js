function logout() {
  alert("You have been logged out.");
  // Redirect or hide content here
}
 
/*    */
document.getElementById("more").addEventListener("click", function() {
    var dropdown = this.querySelector(".dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});



/* tabs_JS */ 

function logout() {
  alert("Logging out...");
  // redirect or hide content
}

function showTab(evt, tabName) {
  const tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  const buttons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

/* menu_JS*/

function switchTab(evt, tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.style.display = 'none');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

function selectMenu(option) {
  document.getElementById("output").innerText = `You Have Selected ${option} Menu Option.`;
  document.getElementById("submenu").style.display = "none";
}

function showSubMenu() {
  document.getElementById("submenu").style.display = "flex";
  document.getElementById("output").innerText = "";
}



/* Dropdon_js */

function toggleDropdown(i) {
  const dropdown = document.getElementById(i);
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Optional: Close the dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {
    const dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};