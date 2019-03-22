let projectsProgress = new ProgressBar.Circle(projects, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: 'red',
    trailColor: '#EEE',
    trailWidth: 1,
    svgStyle: null
});

let clientsProgress = new ProgressBar.Circle(clients, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: 'green',
    trailColor: '#EEE',
    trailWidth: 1,
    svgStyle: null
});

let monthsProgress = new ProgressBar.Circle(months, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: 'black',
    trailColor: '#EEE',
    trailWidth: 1,
    svgStyle: null
});


projectsProgress.animate(0.5);
clientsProgress.animate(0.35);
monthsProgress.animate(0.80);

