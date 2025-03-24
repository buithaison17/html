const jobInputElement = document.querySelector('#job-input');
const btnAddJobElement = document.querySelector("#btn-add-job");
const listJobElement = document.querySelector('#list-job');
const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

renderListJob();

btnAddJobElement.addEventListener('click', function(event){
    event.preventDefault();

    if(jobInputElement.value === ''){
        alert('Vui lòng nhập công việc');
        return;
    }

    jobs.push(jobInputElement.value);

    localStorage.setItem('jobs', JSON.stringify(jobs));
    
    renderListJob();
})

function renderListJob(){
    const listJobHtmls = jobs.map((item, index) => {
        return `<div class="job">
                <div class="title-job">${item}</div>
                <div class="btn-remove-job" onclick = "removeJob(${index})">x</div>
            </div>
            <hr>`
    })

    listJobElement.innerHTML = listJobHtmls.join("");
}

function removeJob(index){
    jobs.splice(index, 1);
    
    renderListJob();

    localStorage.setItem('jobs', JSON.stringify(jobs));
}