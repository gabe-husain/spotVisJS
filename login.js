callbackURI = "gabe-husain.github.io/callback.html";
scope = "user-read-email user-top-read playlist-read-private playlist-modify-private playlist-modify-public";

window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${secret.CLIENT_ID}&redirect_uri=${encodeURIComponent(callbackURI)}&scope=${encodeURIComponent(scope)}`;