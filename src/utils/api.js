const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/tasks.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'cozy_credentials.json');

export async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
}

export async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}

export async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredentials(client);
    }
    return client;
}

export async function checkAuthorization() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
      return client;
    }
    return null;
}

export async function getTasks(auth) {
  var taskListIds = []
  const service = google.tasks({version: 'v1', auth});
  const res = await service.tasklists.list({});
  const taskLists = res.data.items;
  if (taskLists && taskLists.length) {
    taskLists.forEach((taskList) => {
      taskListIds.push(taskList.id);
    });
  } else {
    console.log('No task lists found.');
    return;
  }

  var taskList = []

  for (let id of taskListIds)
  {
    const res2 = await service.tasks.list({ tasklist: id });
    const tasks = res2.data.items;
    for (let task of tasks)
    {
      taskList.push(task);
    }
  }

  return taskList
}