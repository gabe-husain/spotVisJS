callbackURI = "gabe-husain.github.io/callback.html";
scope = "user-read-email user-top-read playlist-read-private playlist-modify-private playlist-modify-public";
CLIENT_ID = "97c5540177094023a67cccb578e90612"
window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${ CLIENT_ID }&redirect_uri=${ encodeURIComponent(callbackURI) }&scope=${{encodeURIComponent(scope)}}`;