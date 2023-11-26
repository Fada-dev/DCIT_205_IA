var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

/*---For Courses Yearly Or Semester */
document.addEventListener('DOMContentLoaded', function() {
    const expandingDivs = document.querySelectorAll('.level');
  
    expandingDivs.forEach(function(div) {
      const expandingContent = div.querySelector('.expanding-content');
  
      div.addEventListener('click', function() {
        this.classList.toggle('expanded');
        expandingContent.style.display = 'block';
      });
    });
  });
