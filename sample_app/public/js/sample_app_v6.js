
function setAttributeWithRetry(attributeName, newValue, maxAttempts, delay) {
    let attempts = 0;

    function trySettingAttribute() {
        if (attempts < maxAttempts) {
            try {
                const elementsWithClass = document.getElementsByClassName('navbar-home');
                const linkElement = elementsWithClass[0];
                linkElement.setAttribute(attributeName, newValue);
                console.log('Attribute set successfully');
            } catch (error) {
                console.error(`Attempt ${attempts + 1} failed: ${error}`);
                attempts++;
                setTimeout(trySettingAttribute, delay);
            }
        } else {
            console.error('Max attempts reached. Attribute not set.');
        }
    }

    trySettingAttribute();
}

document.addEventListener('DOMContentLoaded', function () {


    const maxAttempts = 50;  // Maximum number of retry attempts
    const delay = 1000;     // Delay in milliseconds between attempts

    setAttributeWithRetry('href', '/sample_app', maxAttempts, delay);
});