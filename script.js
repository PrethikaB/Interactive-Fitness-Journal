function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    fetch('/verify-google-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: response.credential })
    })
    .then(res => res.json())
    .then(data => {
        console.log("User data:", data);
    })
    .catch(err => console.error(err));
}
