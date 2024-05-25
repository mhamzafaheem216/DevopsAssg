
// Get input element
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterProjects);

function filterProjects() {
    // Get value of input
    let filterValue = filterInput.value.toUpperCase();
    // Get projects
    let projects = document.querySelectorAll('.project');
    // Loop through projects
    projects.forEach(function(project) {
        // Get h2 element in project
        let h2 = project.querySelector('h2');
        // If h2 contains filter value
        if (h2.innerText.toUpperCase().indexOf(filterValue) > -1) {
            // Show project
            project.style.display = '';
        } else {
            // Hide project
            project.style.display = 'none';
        }
    });
}
