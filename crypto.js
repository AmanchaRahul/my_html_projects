function hoverEffect(isHovered) {
    var containers = document.querySelectorAll('.highlight');
    var background = document.querySelector('.background-image');

    containers.forEach(function (container) {
        if (isHovered) {
            container.style.borderColor = '#000'; // Change border color to original color on hover
            container.style.opacity = '1';
        } else {
            container.style.borderColor = 'transparent'; // Change border color to transparent when not hovered
            container.style.opacity = '0.5';
        }
    });

    if (isHovered) {
        background.style.filter = 'grayscale(100%)'; // Apply grayscale to the background on hover
    } else {
        background.style.filter = 'grayscale(0%)'; // Remove grayscale from the background when not hovered
    }
}

