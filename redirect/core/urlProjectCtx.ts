import * as firebase from 'firebase-admin';
import * as serviceAcc from './firebase_creds.json'

const creds = {
  type: serviceAcc.type,
  projectId: serviceAcc.project_id,
  privateKeyId: serviceAcc.private_key_id,
  privateKey: serviceAcc.private_key,
  clientEmail: serviceAcc.client_email,
  clientId: serviceAcc.client_id,
  authUri: serviceAcc.auth_uri,
  tokenUri: serviceAcc.token_uri,
  authProviderX509CertUrl: serviceAcc.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAcc.client_x509_cert_url
}

firebase.initializeApp({
  credential: firebase.credential.cert(creds)
});

let db = firebase.firestore();

export const UrlParserCtx = {
  firebase,
  db
}
