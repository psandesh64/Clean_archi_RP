import Cookies from 'js-cookie';
import { CURRENT_BASE_URL } from "../../constants/constants";

export async function handleRefresh() {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return null;

    try {
        const response = await fetch(`${CURRENT_BASE_URL}/auth/token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: refreshToken }),
        });

        const data = await response.json();
        if (data.access) {
            setAccessToken(data.access);
            return data.access;
        } else {
            resetAuthCookies();
            return null;
        }
    } catch (error) {
        console.error('Failed to refresh token:', error);
        resetAuthCookies();
        return null;
    }
}

export function handleLogin(
    // userId: string, 
    accessToken: string, refreshToken: string) {
    // Cookies.set('session_userid', userId, { expires: 7, secure: true, sameSite: 'strict' });
    Cookies.set('session_access_token', accessToken, { expires: 1 / 24, secure: true, sameSite: 'strict' });
    Cookies.set('session_refresh_token', refreshToken, { expires: 7, secure: true, sameSite: 'strict' });
}

export function resetAuthCookies() {
    // Cookies.remove('session_userid');
    Cookies.remove('session_access_token');
    Cookies.remove('session_refresh_token');
}

export function getUserId() {
    // return Cookies.get('session_userid') || null;
    return Cookies.get('session_access_token') || null;
}

export async function getAccessToken() {
    let accessToken = Cookies.get('session_access_token');

    if (!accessToken) {
        accessToken = await handleRefresh();
    }

    return accessToken;
}

function setAccessToken(token: string) {
    Cookies.set('session_access_token', token, { expires: 1 / 24, secure: true, sameSite: 'strict' });
}

export function getRefreshToken() {
    return Cookies.get('session_refresh_token') || null;
}