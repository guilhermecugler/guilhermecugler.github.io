document.addEventListener('DOMContentLoaded', function() {
    const apks = [
        ".apk",
        "XCIPTV Azul URL.apk",
        "P2CINE Principal.apk",
        "TV xc31.apk",
        "P2CineTV Leve.apk",
        "Evolution.apk",
    ];

    const apkList = document.getElementById('apk-list');
    const redirectButton = document.getElementById('redirect-button');

    apks.forEach(apk => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `apps/${apk}`;
        link.textContent = apk;
        link.classList.add('apk-link');
        listItem.appendChild(link);
        apkList.appendChild(listItem);
    });

    redirectButton.addEventListener('click', function() {
        window.location.href = 'apps/';
    });
});
