export interface IUser {
    id: string;  // UUID format
    email: string;
    name?: string | null;
    avatar?: string;  // URL to the avatar, if applicable
    isActive: boolean;
    isSuperuser: boolean;
    isStaff: boolean;
    dateJoined: string;  // ISO date format string
    lastLogin?: string | null;  // Nullable, ISO date format string
  
    // Method for retrieving avatar URL, mimicking the `avatar_url` method in Django
    avatarUrl: () => string;
}

export interface IUserLogin {
userName: string;
password: string;
tenantId: number;
}

export interface LoginResponse {
    
    succeeded: boolean;
    token: string;

}

export interface ErrorResponse {
    non_field_errors?: string[];
}

// export interface IUserLogin {
//     email: string;
//     password: string;
//     organization: number;
//     }

// src/domain/entities/AuthResponses.ts
// export interface LoginResponse {
    
//     data: {
//         access_token: string;
//         refresh_token: string;

//     };
// }