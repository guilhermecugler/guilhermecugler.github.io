document.addEventListener('DOMContentLoaded', function() {
    const apks = [
        "P2CINE Principal.apk",
        "TurboBlack.apk",
        "Evolution.apk",
        "P2CineTV2 Amarelo.apk",
        "P2CineTV Leve.apk",
        "XCIPTV Azul URL.apk"
    ];

    const apkList = document.getElementById('apk-list');
    const redirectButton = document.getElementById('redirect-button');

    apks.forEach(apk => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `tv/apps/${apk}`;
        link.textContent = apk;
        link.classList.add('apk-link');
        listItem.appendChild(link);
        apkList.appendChild(listItem);
    });

    redirectButton.addEventListener('click', function() {
        window.location.href = 'tv/apps/';
    });
});
