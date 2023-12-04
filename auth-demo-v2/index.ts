import { Client, Account } from "appwrite";

const client = new Client();
const account = new Account(client);

// Get username, email, and password from the form.
const username = document.getElementById('sign-up-username')?.textContent;
const email = document.getElementById('sign-up-email')?.textContent;
const password = document.getElementById('sign-up-password')?.textContent;

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    ;

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});