function updateDOMFromFormData(data) {
    const header = data.get('name') + ' || ' + data.get('mascot');

    const fieldMappings = {
        caption1: 'caption2',
        personalBackground1: 'personalBackground2',
        professionalBackground1: 'professionalBackground2',
        academicBackground1: 'academicBackground2',
        subjectBackground1: 'subjectBackground2',
        compPlatform1: 'compPlatform2',
        funnyOrInteresting1: 'funnyOrInteresting2',
        share1: 'share2'
    };
    
    for (const [fieldName, elementId] of Object.entries(fieldMappings)) {
        const fieldValue = data.get(fieldName);
        document.getElementById(elementId).innerText = fieldValue;
    }

    const courseList = document.getElementById('courses');
    const courseNames = data.getAll('coursename');
    const courseDescriptions = data.getAll('coursedescription');
    courseList.innerHTML = '';

    for (let i = 0; i < courseNames.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = `<b>${courseNames[i]}:</b> ${courseDescriptions[i]}`;
        courseList.appendChild(item);
    }

    const picture = document.getElementById('image').files[0];
    if (picture) {
        const url = URL.createObjectURL(picture);
        document.getElementById('byoImage').src = url;
    }

    const classNamesToUpdate = ['byoHeader2', 'byoHeader3', 'byoForm', 'intro'];
    classNamesToUpdate.forEach(className => {
        document.getElementById(className).className = className.endsWith('New') ? className : '';
    });
}

function submit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    updateDOMFromFormData(data);
    event.target.style.display = 'none';

    const introSection = document.getElementById('intro');
    introSection.style.display = 'block';

    event.target.reset();
}


function back() {
    const form = document.getElementById('byoForm');
    const introSection = document.getElementById('intro');
    
    form.style.display = 'block';
    introSection.style.display = 'none';

    const courseList = document.getElementById('courses');
    courseList.innerHTML = '';
}

function deleteCourse(event) {
    event.preventDefault();

    const courseElements = document.getElementsByClassName('course');
    if (courseElements.length > 0) {
        const lastCourseElement = courseElements[courseElements.length - 1];
        lastCourseElement.parentNode.removeChild(lastCourseElement);
    }
}

function addCourse(event) {
    event.preventDefault();
    const count = document.getElementsByClassName('course').length / 2 + 1;

    ['coursename', 'coursedescription'].forEach(inputName => {
        const label = document.createElement('label');
        label.for = inputName;
        label.innerText = `Course ${count} ${inputName === 'coursename' ? 'Name' : 'Description'}`;

        const input = document.createElement('input');
        input.type = 'text';
        input.name = inputName;
        input.id = inputName;

        const div = document.createElement('div');
        div.appendChild(label);
        div.appendChild(input);
        div.className = 'course';

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete Course';
        deleteButton.addEventListener('click', deleteCourse);
        div.appendChild(deleteButton);

        document.getElementById('inputContainer').appendChild(div);
    });
}


document.getElementById('byoForm').addEventListener('submit', submit);
document.getElementById('back').addEventListener('click', back);
document.getElementById('addCourse').addEventListener('click', addCourse);