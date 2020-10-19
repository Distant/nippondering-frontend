import React from 'react'

export type LoginModel = {
  email: string,
  password: string,
  persist: boolean,
}

export function attemptLogin(loginModel: LoginModel, onSuccess: (name: string) => void, onError: (e: any) => void) {
  fetch(new Request(
    'https://localhost:44370/api/account/login',
    {
      method: "POST",
      body: JSON.stringify(loginModel),
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      mode: "cors",
    
    }
  )).then(res => { return res.json() })
    .then((session: { username: string }) => { onSuccess(session.username) })
    .catch(e => { onError(e); })
}

export function logout() {
  return fetch(new Request(
    'https://localhost:44370/api/account/logout',
    {
      method: "POST",
      credentials: 'include',
      mode: "cors",
    }
  ))
}

export function getSession(onSuccess: (s: string) => void, onError: (e: any) => void) {
  fetch(new Request(
    'https://localhost:44370/api/account/session',
    {
      method: "GET",
      credentials: 'include',
      mode: "cors",
    }
  ))
    .then(res => res.json())
    .then(d => onSuccess(d.username))
    .catch(e => { onError(e) })
}

export function sendResetRequest(email: string, onSuccess: () => void, onError: (e: any) => void) {
  fetch(new Request(
    'https://localhost:44370/api/Account/ForgotPassword',
    {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      mode: "cors",
    }
  ))
    .then(() => onSuccess())
    .catch(e => { onError(e) })
}

type resetModel = {
  userId: string,
  code: string,
  password: string
}

export function resetPassword(data: resetModel, onSuccess: () => void, onError: (e: any) => void) {
  fetch(new Request(
    'https://localhost:44370/api/Account/ResetPassword',
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      mode: "cors",
    }
  )).then(() => onSuccess())
    .catch(e => onError(e))
}