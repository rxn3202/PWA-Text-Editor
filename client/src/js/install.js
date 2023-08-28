const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the beforeisntallpromp event
window.addEventListener('beforeinstallprompt', (event) => {});

    // Store the triggered event
    window.deferredPrompt = event;

    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);


// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!prompEvent){
        return;
    }

    // Show prompt
    prompEvent.prompt();

    // Reset the deferred prompt variable. It can only be used once.
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // Clear prompt
    window.deferredPrompt = null;
});
